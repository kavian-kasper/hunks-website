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
        <div className="nft-banner w-full"></div>
        <h1 className="absolute nft-header p-1 bg-primary shadow-lg text-2xl md:text-4xl text-[#ffd1ab] font-bold ">
          Ethereum got punks
          <span className="text-[#ffd1ab] block"> Cardano got Hunks.</span>
        </h1>
      </header>

      <main className="max-w-screen-xl w-full flex flex-col px-1.5">
        <section className="index-section  mt-10 md:mt-16 lg:mt-26">
          <div className="index-text-container">
            <p className=" break-words index-paragraph mb-8">
              Hunks are fully on-chain NFTs on the Cardano blockchain. A Hunk
              NFT is a meta data file containing all the trait info and two
              base64 encoded PNG images of the Hunk. There is a 312x312px and a
              598x598px version.
              <span className="mt-3 block">
                The Hunk NFT is stored on-chain without IPFS or web browser
                dependencies. More than 10.000 Hunks will never exist, but we
                might burn Hunks if we see fit.
              </span>
            </p>

            <Link href="/mint">
              <a className="mt-2 text-center mb-10 inline-block w-40 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                Mint
              </a>
            </Link>
            <h2 className="text-3xl primary font-bold mb-1">Policy ID</h2>
            <p className="break-words mb-10">[PolicyID]</p>
          </div>
        </section>
        <section className="index-section">
          <div className="index-text-container">
            <h2 className=" text-3xl font-bold mb-1 primary">FAQ</h2>

            <h2 className="index-header-sub border-b border-black mb-1">
              Which blockchain?
            </h2>
            <p className="index-paragraph mb-8">
              Hunks are dropping on Cardano and can only be purchased with its
              native currency ADA.
            </p>
            <h2 className="index-header-sub border-b border-black mb-1">
              How much will a Hunk NFT cost?
            </h2>
            <p className="index-paragraph mb-8">
              The price of a Hunk is disclosed upon request only. Read more
              link.
            </p>
            <h2 className="index-header-sub border-b border-black mb-1">
              Will the Policy be locked??
            </h2>
            <p className="index-paragraph mb-8">
              The policy will lock on ... ensuring that the NFT collection can
              never be changed.
            </p>
            <h2 className="index-header-sub mt-4 mb-1 border-b border-black">
              Where can I see the entire Hunks collection?
            </h2>
            <p className="index-paragraph mb-8">
              It will not be possible to see the entire collection before all
              Hunks have been minted.
            </p>
            <h2 className="index-header-sub mt-4 mb-1 border-b border-black">
              What is &quot;on-chain&quot;?
            </h2>
            <p className="index-paragraph">
              &quot;On-chain NFTs&quot; are NFTs where the entire NFT, including
              the artwork, is stored on the blockchain itself. On-chain NFTs, if
              done right, are considered extremely safe. Off-chain NFTs have
              their artwork stored externally and have several points of
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
              However, we do value the commitment of our NFT collectors, who
              also wish to own a print. Contact us at hunks.contact@gmail.com if
              you own a Hunk NFT and wish to order a print, and we will check
              availability.
            </p>
            <button type="button" className="">
              <Link href="/terms">
                <a className="mt-2 mb-10 mx-auto inline-block w-40 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center">
                  Terms & Conditions
                </a>
              </Link>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default NFT;
