import React from "react";
import Link from "next/link";
import HeadInfo from "../components/Head";

function Mint() {
  return (
    <div>
      <HeadInfo title="Mint" />
      <main className="max-w-screen-xl w-full flex flex-col px-1.5">
        <section className="index-section  mt-10 md:mt-16 lg:mt-26">
          <div className="index-text-container">
            <h1 className="index-header">Limited sale to early collectors.</h1>
            <div className="my-4">
              <p>
                <span className="block">1. PRICING</span> Disclosed upon
                request.
                <Link href="/">
                  <a className="text-blue-600"> DM us on Twitter.</a>
                </Link>
              </p>
            </div>
            <div className="mb-4">
              <p className="">
                <span className="block">2. GET A HUNK </span>
                We will DM you back with a mint address.
              </p>
            </div>
            <div>
              <p className="">
                <span className="block">REQUIRED </span>Cardano wallet (i.e
                Eternl, Nami, Flint). No exchange wallet.{" "}
              </p>
            </div>
            <button type="button" className="mt-4">
              <Link href="/terms">
                <a className="mt-2 mb-10 mx-auto inline-block w-40 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center">
                  Terms & Conditions
                </a>
              </Link>
            </button>
          </div>
        </section>
        <section className="mt-8">
          <div className="index-text-container">
            <h2 className="index-header">Public drop?</h2>
            <p>
              Yes, but first we want to soft launch. Right now, we focus on
              distributing Hunks into passionate hands to ensure the longevity
              of the project.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Mint;
