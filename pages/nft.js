import React from "react";
import HeadInfo from "../components/Head";
import Link from "next/link";

const data = require("../data/all_hunks.json");

let hunks = [];

for (let hunk in data) {
  const newHunk = data[hunk];
  newHunk["id"] = hunk;
  hunks.push(newHunk);
}

const NFT = () => {
  return (
    <>
      <HeadInfo title="Home" />
      <header className="w-full relative">
        <div className="nft-banner w-full opacity-40"></div>
        <h1 className="absolute nft-header text-2xl md:text-4xl bg-primary p-4 text-white font-bold opacity-90">
          Ethereum got punks
          <span className="text-black block"> Cardano got hunks.</span>
        </h1>
      </header>

      <main className="max-w-screen-xl w-full flex flex-col px-1.5">
        <section className="index-section  mt-10 md:mt-16 lg:mt-26">
          <div className="index-text-container">
            <p className=" break-words index-paragraph mb-8">
              Hunks are 10.000 fully on-chain NFTs on the Cardano blockchain. A
              Hunk NFT contains two base64 encoded PNG images. A 320x320px PNG
              and a 520x520 PNG. Both are stored on-chain, without IPFS or web
              browser dependencies.{" "}
              <span className="mt-2 block">
                We have taken great care to find an on-chain solution that
                harnesses the permanence of the blockchain while also displaying
                properly in Cardano web3 services, such as Nami, Eternl and
                Flint.
              </span>
            </p>

            <h2 className="text-3xl font-bold mb-1">Minting</h2>
            <p className=" break-words index-paragraph">
              Hunks will be available for public mints in the future. Get
              updates about drop dates and pricing on our official Twitter
              account:
            </p>
            <button
              type="button"
              className="mt-2 mb-10 inline-block w-40 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              <Link href="/">
                <a>@hunksArt</a>
              </Link>
            </button>
            <h2 className="text-3xl font-bold mb-1">Policy ID</h2>
            <p className="break-words">
              68697173b8a7bd630d5a08ee56e44aeb2a1e002c1de2013caa6c71aa
            </p>
            <button
              type="button"
              className="mt-2 mb-10 inline-block w-40 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              <Link href="/">
                <a>CARDANOSCAN</a>
              </Link>
            </button>
          </div>
        </section>
        <section className="index-section">
          <div className="index-text-container">
            <h2 className=" text-3xl font-bold mb-1 text-black">FAQ</h2>

            <h2 className="index-header-sub border-b border-black mb-1">
              Which blockchain?
            </h2>
            <p className="index-paragraph mb-8">
              Hunks are dropping on Cardano and can only be purchased with its
              native currency, ADA.
            </p>
            <h2 className="index-header-sub border-b border-black mb-1">
              How much will a Hunk NFT cost?
            </h2>
            <p className="index-paragraph mb-8">
              The cost of a Hunk will be disclosed as we get closer to launch.
              See
              <Link href="/">
                <a className="text-blue-700"> @hunksArt </a>
              </Link>
              for updates.
            </p>
            <h2 className="index-header-sub border-b border-black mb-1">
              Will the Policy be locked??
            </h2>
            <p className="index-paragraph mb-8">
              The policy will lock on ... ensuring that the NFT collection can
              never be changed
            </p>
            <h2 className="index-header-sub mt-4 mb-1 border-b border-black">
              Where can I see the entire 10.000 Hunks collection?
            </h2>
            <p className="index-paragraph mb-8">
              The 10.000 Hunks will not be revealed until they all have been
              minted.
            </p>
            <h2 className="index-header-sub mt-4 mb-1 border-b border-black">
              What is &quot;on-chain&quot;?
            </h2>
            <p className="index-paragraph">
              NFT artworks can either be stored on-chain or off-chain. On-chain
              NFTs are NFTs where the entire NFT including the artwork, is
              stored on the blockchain itself. Such NFTs have no external
              dependencies and are incredibly safe and permanent. Off-chain NFTs
              have their artwork stored externally and have several points of
              failure.
            </p>
            <h2 className="index-header-sub mt-4 mb-1 border-b border-black">
              Can owners of a Hunks NFT purchase a print?
            </h2>
            <p className="index-paragraph mb-8">
              <span className="block mb-2">
                The prints and NFTs are sold separately. Holding the NFT does
                not warrant the NFT owner the rights to buy a print.
              </span>
              However, we do value the commitment of our NFT collectors who also
              wish to own a print. Contact us at prints.hunks@gmail.com if you
              own a Hunk NFT and wish to order a print, and we will check
              availability.
            </p>
            <button
              type="button"
              className="mt-2 mb-10 mx-auto inline-block w-40 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              <Link href="/">
                <a>Terms & Conditions</a>
              </Link>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default NFT;
