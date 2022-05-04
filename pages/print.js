import React from "react";
import Link from "next/link";

function print() {
  return (
    <div>
      <header className="index-text-container px-1.5">
        <div className="mb-10 mt-10 md:mt-20">
          <img
            className="w-1/2 object-contain object-top pr-1 inline"
            src="print-detail.jpg"
            alt="Detail of a hunk print"
          />
          <img
            className="w-1/2 object-contain object-top pl-1 inline"
            src="print-fullsize.jpg"
            alt="Detail of a hunk print"
          />
        </div>
        {/* <h1 className=" index-header">
          Hunks are 10.000 figurative artist-computer generated artworks.
        </h1> */}
      </header>
      <main className="max-w-screen-xl w-full  px-1.5">
        <section className="index-section mt-10 md:mt-20">
          <div className="index-text-container">
            <h2 className=" index-header">Three sizes, one print.</h2>
            <p className="index-paragraph mb-2">
              Each of the 10.000 Hunks are available as a 1/1 print. Collectors
              may choose between three sizes, but only one print will ever
              exist. If a collector chooses the Regular size, the Large and XL
              size will never be printed, vice versa. All prints are printed on
              Canson ... paper.
            </p>
          </div>
          {/* container */}
          <div className="index-text-container">
            <div className="flex justify-between flex-wrap items-start">
              {/* sub container */}
              <div className="mt-4 mr-2">
                <h4 className="index-header-sub border-b border-black">
                  Regular size
                </h4>
                <table className="w-full mb-6">
                  <tbody>
                    <tr className="border-t">
                      <td className="py-3">Paper size</td>
                      <td className="text-right">10x10cm</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-3">Paper size</td>
                      <td className="text-right">10x10cm</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-3">Paper size</td>
                      <td className="text-right">10x10cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* sub container */}
              <div className=" mt-4 ml-2">
                <h4 className="index-header-sub border-b border-black">
                  Large size
                </h4>
                <table className="w-full mb-6">
                  <tbody>
                    <tr className="border-t">
                      <td className="py-3">Paper size</td>
                      <td className="text-right">10x10cm</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-3">Paper size</td>
                      <td className="text-right">10x10cm</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-3">Paper size</td>
                      <td className="text-right">10x10cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* sub container */}
              <div className=" mt-4 ml-2">
                <h4 className="index-header-sub border-b border-black">
                  XL size
                </h4>
                <table className="w-full mb-6">
                  <tbody>
                    <tr className="border-t">
                      <td className="py-3">Paper size</td>
                      <td className="text-right">10x10cm</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-3">Paper size</td>
                      <td className="text-right">10x10cm</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-3">Paper size</td>
                      <td className="text-right">10x10cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="index-section mt-10">
          <div className="index-text-container">
            <h2 className=" index-header mb-4">FAQ</h2>

            <h2 className="index-header-sub border-b border-black mb-1">
              Can I order a print?
            </h2>
            <p className="index-paragraph mb-8">
              Prints are currently only sold during live events (currently in
              Norway), and, in most cases, cannot be ordered online. See below
              for more information.
            </p>
            <h2 className="index-header-sub mt-4 mb-1 border-b border-black">
              Can owners of a Hunks NFT order a print?
            </h2>
            <p className="index-paragraph mb-8">
              <span className="block mb-2">
                The prints and NFTs are sold separately. Holding the NFT does
                not warrant the NFT owner the rights to buy a print.
              </span>
              However, we do value the commitment of our NFT collectors who also
              wish to own a print. Contact us at prints.hunks@gmail.com if you
              own a Hunk NFT and wish to inquire about a print, and we will
              check availability.
            </p>

            <Link href="/terms">
              <a className="inline-block w-40 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center">
                Terms & Conditions
              </a>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default print;
