import HeadInfo from "../components/Head";
import Pgateway from "../components/Pgateway";
import Link from "next/link";
import { useState } from "react";

const Mint = ({ nftCode, gatewayCode }) => {
  // ************* Check Hunk rarity ranking ***************
  const [hunkNumber, setHunkNumber] = useState("");
  const [showRarityBtn, setShowRarityBtn] = useState(false);
  const [rarityResponse, setRarityResponse] = useState("");

  async function checkHunkRarity(hunkNumber) {
    const response = await fetch(`/api/ranking?hunk=${hunkNumber}`);
    const data = await response.json();
    console.log(data);
    data.errorMessage
      ? setRarityResponse(data.errorMessage)
      : setRarityResponse(data.successMessage);
  }

  const RarityBtnFalse = () => {
    return (
      <button>
        <a className=" opacity-20 basis-1/2 bg-blue-600 text-center inline-block w-40 py-2 border-2 text-white font-medium text-xs leading-tight uppercase rounded-full">
          Check rarity
        </a>
      </button>
    );
  };
  const RarityBtn = () => {
    return (
      <button onClick={() => checkHunkRarity(hunkNumber)}>
        <a className="basis-1/2 bg-blue-600 text-center inline-block w-40 py-2 border-2 text-white font-medium text-xs leading-tight uppercase rounded-full">
          Check rarity
        </a>
      </button>
    );
  };

  const getPasswordValue = () => {
    const userValue = event.target.value;
    //const input = userValue;
    if (userValue.length == 4) {
      setShowRarityBtn(true);
      setHunkNumber(userValue);
    } else {
      setShowRarityBtn(false);
    }
  };

  // ***********************************

  const mintButton1 = <Pgateway paymentFunction={payment1} />;

  function payment1() {
    const paymentUrl =
      "https://pay.nmkr.io/?p=1a9492df41c64cee857da48dbbc5986c&c=1";

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
      <HeadInfo
        title="Hunks │ Mint"
        twitterTitle="Hunks │ Mint"
        twitterDescription="Get yourself a Hunk"
      />
      <div>
        <main className="flex flex-col justify-center items-center mt-14 max-w-4xl mx-auto px-2">
          <div className="flex flex-col md:flex-row justify-evenly  w-full mt-6">
            <div className="flex flex-col ">
              <p className="text-center mb-2">
                Price per Hunk: 9.49 ADA + transaction fees.
              </p>
              <p className="text-center mb-6">
                Whitelisted OG wallets: 40% discount + transaction fees.
                <span className="text-xs text-gray-500 block">
                  Discount won't show until you click Place order.
                </span>
              </p>

              {/* PRICE 1  */}
              <div className=" flex flex-col justify-center items-center mb-6 border p-6 border-gray-300 rounded-md">
                <h3 className="ml-4 text-2xl font-nunito  text-gray-900 ">
                  Mint 1 Hunk.
                </h3>
                {mintButton1}
              </div>

              <div className="flex flex-col md:flex-row justify-evenly mb-4 w-full mt-6">
                <div className="flex flex-col ">
                  <div className="flex flex-col">
                    <div className="mb-3 xl:w-96">
                      <p className="w-full mb-2 text-gray-400">
                        Enter your hunk&apos;s number to check it&apos;s rarity.
                      </p>
                      <div className="flex justify-between items-baseline">
                        <input
                          onChange={getPasswordValue}
                          type="text"
                          className="form-contro max-h-10 basis-1/2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="clientInput"
                          placeholder="0123"
                        />
                        {showRarityBtn ? <RarityBtn /> : <RarityBtnFalse />}
                      </div>
                      <p className="text-center mt-3">{rarityResponse}</p>
                    </div>
                    <Link href="/nft#rarity" passHref>
                      <p className="link-text text-center font-sans font-bold cursor-pointer">
                        How is rarity calculated?
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="https://opencnft.io/hunks/asset" passHref>
                <a className="text-center font-sans" target="_blank">
                  View currently minted Hunks at{" "}
                  <span className="link-text font-sans font-bold">
                    OpenCNFT
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
      {/* )} */}
    </div>
  );
};
export default Mint;

export async function getServerSideProps() {
  const NFTMAKER = process.env.NFTMAKERCODE;
  return {
    props: {
      nftCode: NFTMAKER,
    },
  };
}
