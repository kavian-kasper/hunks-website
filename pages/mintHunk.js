import HeadInfo from "../components/Head";
import { MintBtn } from "../components/minting/MintBtn";
import { useState, useEffect } from "react";
import axios from "axios";
import MintCount from "../components/minting/MintCount";
import Link from "next/link";
import Pgateway from "../components/Pgateway";

const MintHunk = ({ results }) => {
  const price = 35;
  const initialStock = 10000;
  const freeNFTs = results.free;
  const reservationTime = 20;

  useEffect(() => {
    try {
      fetch("/api/mintVisit");
    } catch (error) {
      console.log(error);
    }
  }, []);

  function openPaymentWindow() {
    const paymentUrl =
      "https://payment.nft-maker.io/?p=c7750f08650f4b02bd0838c93e6984fc&c=1";

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
  function openPaymentWindowThree() {
    const paymentUrl =
      "https://payment.nft-maker.io/?p=c7750f08650f4b02bd0838c93e6984fc&c=3";

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
        title="Mint Hunks"
        twitterTitle="Say hello to Hunks, the new punks."
        twitterDescription="It began as a joke, but escalated into our most serious art project."
      />
      {/* Potentially freeNFTs >= 9000, if we drop 1000 at a time */}
      {/* 10 is so that i can code w/o being sold out */}
      {freeNFTs === 10 ? (
        // {freeNFTs === 0 ? (
        <div className="min-h-screen text-center text-3xl font-nunito mt-20">
          This Hunks drop is sold out! Follow
          {/* WORK ON THIS URL  */}
          <Link href="https://twitter.com/hunksArt">
            <a className="text-indigo-500" target="_blank">
              {" "}
              @hunksArt{" "}
            </a>
          </Link>
          to get news on upcoming drops.
        </div>
      ) : (
        <div>
          <main className="flex flex-col justify-center items-center mt-14 max-w-4xl mx-auto px-2">
            <MintCount nftCount={freeNFTs} initialStock={initialStock} />
            {/* PRICE 1  */}
            <h3 className="ml-4 text-2xl font-nunito  text-gray-900 ">
              x1 Hunk / {price} ADA
            </h3>
            {/* PRICE 3 */}
            <h3 className="ml-4 text-2xl font-nunito  text-gray-900 ">
              x3 Hunk / {price * 3} ADA
            </h3>
            {/* PAYMENT GATEWAY */}
            <div className="flex flex-col md:flex-row justify-evenly  w-full mt-6">
              <div className="flex flex-col ">
                <div className="flex flex-col">
                  <div className="text-center">
                    x1
                    <span className="text-sm text-center text-gray-600">
                      (recommended)
                    </span>
                  </div>
                  <Pgateway paymentFunction={openPaymentWindow} />
                </div>
                {/* PAYMENT GATEWAY  3*/}
                <div className="flex flex-col mt-4">
                  <div className="text-center">
                    x3
                    <span className="text-sm text-center text-gray-600">
                      (recommended)
                    </span>
                    <Pgateway paymentFunction={openPaymentWindowThree} />
                  </div>
                </div>
              </div>
              {/* SEND ADDRESS */}
              <div className="text-center">
                x1
                <MintBtn price={price} />
              </div>
            </div>
            <div>
              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dd className="mt-1 ml-16 text-base text-gray-500"></dd>
                </div>

                <div className="relative">
                  <dd className="mt-1 ml-0 md:ml-16 text-base text-gray-500">
                    If you use{" "}
                    <span className="font-bold text-black">Send Address</span>,
                    send
                    <span className="text-red-700 font-bold">
                      {" "}
                      exactly {price} ADA. You can only mint 1 at a time.
                    </span>{" "}
                    Do not send money from an exchange (Coinbase, Binance,
                    KuCoin etc.). Your Ada will be lost. Instead, use wallets
                    such as Nami, Eternl, Flint.
                  </dd>
                </div>
              </dl>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};
export default MintHunk;

export async function getServerSideProps() {
  try {
    const URL =
      "https://api.nft-maker.io/GetCounts/" +
      process.env.APIKEY +
      process.env.PROJECTID;
    const { data } = await axios.get(URL);
    console.log(data);
    return {
      props: {
        results: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
