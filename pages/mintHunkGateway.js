import HeadInfo from "../components/Head";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Pgateway from "../components/minting/Pgateway";

const MintGateway = ({ nftCode, gatewayCode }) => {
  const price = 130;
  let input = "";
  const mintButton = <Pgateway paymentFunction={openPaymentWindow} />;
  const [showGateway, setShowGateway] = useState("");

  const getPasswordValue = () => {
    const userValue = event.target.value;
    input = userValue;
    console.log(input);
    if (input == gatewayCode) {
      setShowGateway(mintButton);
    }
  };

  // function validatePassword() {
  //   console.log("Password input:", input);
  //   if (input == gatewayCode) {
  //     setShowGateway(mintButton);
  //     setShowSubmit("nop");
  //   }
  // }

  // const submitButton = (
  //   <button
  //     className="mintButton btn-primary-lg mx-auto"
  //     onClick={validatePassword}
  //   >
  //     Submit
  //   </button>
  // );

  useEffect(() => {
    try {
      fetch("/api/mintVisit");
    } catch (error) {
      console.log(error);
    }
  }, []);

  function openPaymentWindow() {
    const paymentUrl = "https://payment.nft-maker.io/?p=" + nftCode;
    console.log("paymentURL", paymentUrl);

    // Specify the popup width and height
    const popupWidth = 500;
    const popupHeight = 700;

    // Calculate the center of the screen
    const left =
      window.top.outerWidth / 2 + window.top.screenX - popupWidth / 2;
    const top =
      window.top.outerHeight / 2 + window.top.screenY - popupHeight / 2;

    const popup = window.open(
      paymentUrl,
      "NFT-MAKER PRO Payment Gateway",
      `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`
    );

    // Show dim background
    document.body.style = "background: rgba(0, 0, 0, 0.5)";

    // Continuously check whether the popup has been closed
    const backgroundCheck = setInterval(function () {
      if (popup.closed) {
        clearInterval(backgroundCheck);

        console.log("Popup closed");

        // Remove dim background
        document.body.style = "";
      }
    }, 1000);
  }
  return (
    <div className="mb-4">
      <HeadInfo title="Mint Hunks" />
      <div>
        <main className="flex flex-col justify-center items-center mt-14 max-w-4xl mx-auto px-2">
          {/* PRICE 1  */}
          <h3 className="ml-4 text-2xl font-nunito  text-gray-900 ">
            Mint 1 Hunk.
          </h3>

          <div className="flex flex-col md:flex-row justify-evenly  w-full mt-6">
            <div className="flex flex-col ">
              <div className="flex flex-col">
                <div className="mb-3 xl:w-96">
                  <input
                    onChange={getPasswordValue}
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="clientInput"
                    placeholder="Enter password"
                  />
                </div>

                {showGateway}

                {/* <Pgateway paymentFunction={openPaymentWindow} /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* )} */}
    </div>
  );
};
export default MintGateway;

export async function getServerSideProps() {
  const NFTMAKER = process.env.NFTMAKERCODE;
  const gatewayKey = process.env.GATEWAYCODE;
  console.log("fetch");
  return {
    props: {
      nftCode: NFTMAKER,
      gatewayCode: gatewayKey,
    },
  };
}
