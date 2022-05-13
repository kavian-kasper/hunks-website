import React from "react";
import Link from "next/link";
import HeadInfo from "../components/Head";

function terms() {
  const contactAddress = "https://twitter.com/HunksArt";
  return (
    <div>
      <HeadInfo
        title="Terms & Conditions"
        twitterTitle="Say hello to Hunks, the new punks."
        twitterDescription="It began as a joke, but escalated into our most serious art project."
      />
      <header className="index-text-container px-1.5">
        <h1 className="index-header text-black">Terms and Conditions</h1>
        <p className="index-paragraph">
          Below stipulates Hunks terms & conditions for NFTs and Art Prints
          separately.
        </p>
      </header>
      <main className="max-w-screen-xl w-full  px-1.5">
        <section className="index-section mt-10 md:mt-20">
          <div className="index-text-container">
            <h2 className=" index-header mb-2 text-black">Hunks NFT</h2>
            <p className="index-paragraph mb-4">
              By purchasing a Hunks NFT either directly from Hunks.art or on the
              secondary market, you are the owner of that applicable NFT (the
              &quot;User Owned NFT&quot;).
            </p>
            <p className="index-paragraph mb-4">
              {" "}
              Subject to compliance with all other relevant terms and
              conditions, for as long as you own the User Owned NFT, Hunks
              grants you a limited, personal, non-exclusive, non-sublicensable,
              worldwide license under any copyright owned by Hunks to: (1) copy
              and modify the User Owned NFT (“Derivative NFT”) for
              non-commercial, personal use; and (2) display and perform the User
              Owned NFT and/or Derivative NFT for non- commercial, personal use.
              <span className="mt-3 block">
                The User Owned NFT is created according to the CIP 25 - NFT
                Metadata Standard as of May 12. 2022 and is sold as-is.
                Hunks.art does not have any control over how The User Owned NFT
                is displayed on any third-party website or service.
              </span>
            </p>

            <p className="index-paragraph mb-4">
              <span className="block font-bold">DISPLAYING THE WORK</span>
              The collector has the right to display the work both privately and
              publicly. For example, collectors can display the work on their
              own websites, social media accounts, in their homes, etc. This is
              digital work that can be exhibited in digital spaces.
            </p>
            <p className="index-paragraph mb-4">
              <span className="block font-bold">CREDITING</span>
              The artist must always be credited. Anytime the work is displayed
              or shared, the artist must be properly attributed.
            </p>
            <p className="index-paragraph mb-4">
              <span className="block font-bold">ROYALTIES</span>
              The artist earns 2% of all secondary sales. If a collector buys
              the work and then sells it, the artist is entitled to 2% of the
              purchase price.
            </p>
            <ol>
              <li>
                <p className="index-paragraph mt-4">
                  <span className="font-bold block">
                    {" "}
                    RESERVATION OF RIGHTS
                  </span>
                  Hunks reserves the right to modify these Terms at any time.
                  Hunks may freely transfer, assign, or delegate these Terms in
                  whole or in part, without your prior written consent. The
                  failure of Hunks to exercise or enforce any right or provision
                  of these Terms will not operate as a waiver of such right or
                  provision. Except as otherwise provided herein, these Terms
                  are intended solely for the benefit of the parties and are not
                  intended to confer third-party beneficiary rights upon any
                  other person or entity.
                </p>
              </li>
              <li>
                <p className="index-paragraph mt-4">
                  Nothing in these Terms shall prohibit Hunks from granting any
                  licenses on any Hunks owned intellectual property, including
                  but not limited to any User Owned NFT, to any third-parties
                  under separate terms and conditions.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className="index-section mt-10 md:mt-20">
          <div className="index-text-container">
            <h2 className=" index-header text-black">Hunks Art Print </h2>
            <p className="index-paragraph mb-4">
              When sold online, Hunks Art prints are only sold by contacting
              Hunks directly at {contactAddress}.
            </p>

            <p className="index-paragraph mb-4 index-paragraph">
              When ordering items directly through {contactAddress}, you accept
              the terms described below.
            </p>

            <p className="mb-4 index-paragraph">
              The seller is Hunks.art and is hereinafter referred to as the
              seller. The buyer is the consumer who makes the order, and is
              hereinafter referred to as the buyer / you.
            </p>
            <p className="mb-4 index-paragraph">
              <span className="font-bold block"> RIGHT OF WITHDRAWAL</span> You
              have a 14-day right of withdrawal on all your purchases. The right
              of withdrawal applies from the time you receive the product you
              have ordered. In the event of a return, you must contact Hunks in
              advance of returning the product, pay for the shipment yourself
              and the product must be delivered in the same condition as you
              received it, with original packaging.
            </p>
            <p className="mb-4 index-paragraph">
              Contact {contactAddress} for information and address for returns
              of products.
            </p>
            <p className="mb-4 index-paragraph">
              <span className="font-bold block"> PRICES AND SHIPPING</span>
              Prices are disclosed to potential collectors upon contacting{" "}
              {contactAddress}. Prices include shipping, as the products are
              sent free of charge worldwide. Local import fees not included.
              Internationally shipped packages may be subject to customs and
              import fees. The exact amount of such fees are determined by your
              local customs laws. The product will be shipped between 5 and 20
              days after you have ordered. All prints are wrapped in protective
              tissue paper and rolled up for shipping in solid cardboard tubes.
              Uncollected parcels are sent back to us after approximately 14
              days.
            </p>
            <p className="mb-4 index-paragraph">
              <span className="block font-bold"> PAYMENT</span>Online purchases
              are made in ADA, the native currency of the Cardano blockchain.
              After completing the purchase, you will receive an order
              confirmation by way of email. You will also receive an email with
              a tracking number when the package is dispatched.
            </p>
            <p className="mb-4 index-paragraph">
              <span className="font-bold block"> COMPLAINTS AND WARANTY</span>{" "}
              Hunks hope you enjoy your print(s). Should you discover an error,
              you must inform of the error within a week of receiving the print.
              It must be present when you receive the product and must be
              documented at the same time, for example with a photo. If the
              product has faults or defects, you can demand correction, get a
              new similar product or cancel the purchase. If this is the case
              you must return the defect product, shipping charges are covered
              by Hunks.
            </p>
            <ol>
              <li>
                <p className="index-paragraph mt-4">
                  <span className="font-bold block">
                    {" "}
                    RESERVATION OF RIGHTS
                  </span>
                  Hunks reserves the right to modify these Terms at any time.
                  Hunks may freely transfer, assign, or delegate these Terms in
                  whole or in part, without your prior written consent. The
                  failure of Hunks to exercise or enforce any right or provision
                  of these Terms will not operate as a waiver of such right or
                  provision. Except as otherwise provided herein, these Terms
                  are intended solely for the benefit of the parties and are not
                  intended to confer third-party beneficiary rights upon any
                  other person or entity.
                </p>
              </li>
              <li>
                <p className="index-paragraph mt-4">
                  Nothing in these Terms shall prohibit Hunks from granting any
                  licenses on any Hunks owned intellectual property, including
                  but not limited to any User Owned NFT, to any third-parties
                  under separate terms and conditions.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
}

export default terms;
