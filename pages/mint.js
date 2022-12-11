import HeadInfo from "../components/Head";
import Pgateway from "../components/Pgateway";
import Link from "next/link";
import { useState } from "react";

const Mint = () => {
  // ***********************************

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
                Hunks are sold out! Feel free to check out if any are available
                on{" "}
                <Link href="https://www.jpg.store/collection/684ffa75d83ccd4dfe179bd37fe679e74d33cce181a6f473337df098">
                  <a target="_blank" className="text-indigo-500 font-bold">
                    secondary.
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
      {/* )} */}
    </div>
  );
};
export default Mint;
