import HeadInfo from "../components/Head";
import { useEffect, useState } from "react";
import Link from "next/link";
import Slideshow from "../components/Slider";

export default function Home() {
  useEffect(() => {
    try {
      fetch("/api/indexVisit");
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <HeadInfo
        title="Home"
        twitterTitle="Say hello to Hunks, the new punks."
        twitterDescription="It began as a joke, but escalated into our most serious art project."
      />

      <header className="max-w-screen-xl w-full h-auto flex flex-col px-1.5">
        <div className="flex flex-col lg:flex-row  items-center justify-around w-full">
          <h2 className="text-center lg:text-left ml-0 lg:ml-10 mt-4 md:mt-10 index-header text-4xl order-1 lg:order-1 w-full lg:w-1/3  primary">
            <span className="block"> Say hello to Hunks,</span> the new punks.
          </h2>

          <img
            src="logo-animation-hunks.gif"
            className="w-full order-1 lg:-ml-10 -mt-5 lg:order-2 max-h-screen max-w-2xl object-contain pixelated"
            alt="Animation of hunks"
          />

          <div className="w-1/3 order-3"></div>
        </div>
      </header>
      {/* MAIN */}

      <main className="max-w-screen-xl mb-20 w-full flex flex-col ">
        <section className="index-section px-2">
          <div className="index-text-container">
            <h2 className="index-header mb-3 md:text-4xl mt-2">
              {" "}
              From a joke to our most serious art project.
            </h2>
            <p className="index-paragraph">
              Hunks began as an offhanded joke between two friends, but when we
              started to mix hand-drawing with computer aggregation, it became a
              full-time obsession.
            </p>
            <p className="index-paragraph mt-4">
              The project escalated into a four month creative outburst where we
              combined classical art with programmatically generated art. The
              result is 10.000 unique and iconic Hunks.
            </p>
            <button type="button" className="mx-auto w-full mt-4">
              <Link href="/mint">
                <a className="animate-bounce mt-10 mb-10 mx-auto inline-block w-60 py-4 bg-indigo-500 text-white font-medium text-sm leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-80 cursor-pointer focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center">
                  Limited NFT pre-sale
                </a>
              </Link>
            </button>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center justify-around w-full relative mt-10 mb-10">
          <div className=" absolute flex flex-col items-center w-11/12 text-black ">
            <h1 className="text-2xl mt-8 py-2 font-light md:text-3xl bg-gray-100 px-2">
              Available as 10.000 on-chain{" "}
              {/* <div className="whitespace-nowrap md:whitespace-normal w-full"> */}
              <Link href="/nft">
                <a className="text-gray-700 border-b-4  border-purple-600 cursor-pointer hover:text-indigo-600 font-bold">
                  Cardano NFTs
                </a>
              </Link>{" "}
              {/* </div> */}& 10.000 signed{" "}
              <Link href="/print">
                <a className="text-gray-700 border-b-4 border-purple-600 cursor-pointer hover:text-indigo-600 font-bold">
                  art prints.
                </a>
              </Link>
            </h1>
          </div>
          <div className="flex flex-col w-full items-center">
            <img
              src="hunk-twtr-banner.png"
              className="w-full lg:w-5/6 max-w-3xl pixelated object-cover object-bottom  h-72 md:h-96"
              alt="A collage of Hunks"
            />
            <img
              src="collage-1-1-ed.jpg"
              className="w-full lg:w-5/6 max-w-3xl pixelated object-cover h-72 md:h-96"
              alt="A collage of Hunks"
            />
          </div>
        </section>
        <button type="button" className="mx-auto w-full">
          <Link href="/collection">
            <a className="mt-10 mb-10 mx-auto inline-block w-60  py-4 bg-indigo-500 text-white font-medium text-sm leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-80 cursor-pointer focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center">
              View traits in collection
            </a>
          </Link>
        </button>
        <section className="index-section mt-10 mb-10 px-2">
          <div className="index-text-container">
            <h2 className="index-header">
              Suggestive creatures came out of the machine.
            </h2>
            <p className="index-paragraph mb-3">
              <span className="block my-3">Who are the 10.000 Hunks?</span>
              Hunks emerge through ping-pong between the artist and a computer
              program. Through generating and inspecting sample Hunks for
              several months we gradually identified suggestive personalities
              that helped us define who the Hunks are. Here is a taste:
            </p>
            <div>
              <Slideshow />
            </div>
          </div>
        </section>
        <section className="index-section mt-10 mb-10">
          <div className="index-text-container">
            <h2 className=" index-header px-2">Making a fine art machine.</h2>
            <p className="index-paragraph mb-3 px-2">
              Trained in classical art, we sought to adapt the virtuoso
              qualities of the tradition, such as form, lightning, and warm and
              cool colors, to the trait-by-trait assembling logic of a
              &quot;profile-picture&quot; (PFP) generator to produce image files
              small enough to store on a blockchain.
            </p>
            <img
              className="my-4"
              src="/classical.png"
              alt="comparison between classically rendered hunks, and automaticcaly generated hunks."
            />
            <p className="index-paragraph px-2">
              Chipping away every unnecessary pixel while careful not to break
              the logic of the classical qualities, we arrived at a 26 by 26
              pixel base and canvas.{" "}
              <span className="mt-3 block">
                {" "}
                On the programming side we built our own little machine, The
                Hunk Generator, which consistently output opinionated quality
                Hunks.
              </span>
            </p>
          </div>
          <p className="text-center index-paragraph text-gray-600 px-4 mt-12 text-lg md:text-2xl font-light">
            <span className="inline lg:block">
              “..when I started making music, what interested me really, [...]
              was making musical machines of some kind […]
            </span>{" "}
            where for quite a small input, there would be alot of music coming
            out.”
          </p>
          <p className="text-center mt-6 text-gray-600 text-2xl">
            - Brian Eno
            <Link href="https://www.youtube.com/watch?v=RWhvpIOruqo&ab_channel=TheInstituteofArtandIdeas">
              <a target="_blank" className="text-sm font-light text-blue-500">
                {" "}
                (source)
              </a>
            </Link>
          </p>
        </section>
        <section className="index-section mt-10 mb-10 lg:mt-20 px-2">
          <div className="index-text-container">
            <h2 className="index-header">The creators.</h2>
            <p className="index-paragraph mb-3">
              The genesis moment of Hunks occurred on the 24th of November 2021,
              when one friend said to another:
              <span className="block mt-3 italic">
                {" "}
                &quot;Say hello to hunks, the new punks.&quot;
              </span>
            </p>
            <p className="index-paragraph mb-3">
              A satiric remark that lead to a serious creative partnership;
              pretty much full-time for four months, during odd hours of the
              day, executed over a dinner table on two Macs and an iPad.
            </p>
            <p className="index-paragraph mt-4">
              We had unlimited time, made no compromises and got to experiment
              with a new creative process. We are proud to release signed art
              prints and NFTs of Hunks.
            </p>
          </div>
        </section>
        <section className="index-section mt-10 mb-10 px-2">
          <div className="index-text-container">
            <h3 className="index-header">Get yourself a Hunk.</h3>
            <p className="index-paragraph">
              <span className="block mb-2">
                We will be releasing signed art prints of Hunks during live
                vernissages in Norway, and dropping NFTs on the Cardano
                blockchain. The art print and NFT are sold separately.
              </span>
            </p>
            <div className="flex justify-between">
              <div className="mt-10  text-center">
                <Link href="/mint">
                  <a className="inline-block  border-2 border-blue-600 text-white bg-indigo-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-80 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-40 py-2">
                    buy Hunk NFT
                  </a>
                </Link>
              </div>
              <div className="mt-10  text-center">
                <Link href="/print" className>
                  <a className="inline-block  border-2 border-blue-600 text-white bg-indigo-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-80 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-40 py-2">
                    Hunk PRINT
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION SIMPLE SERIOUS */}
        <section className="flex flex-col justify-center items-center mt-20 px-2">
          <div className="index-text-container">
            <h2 className="index-header w-full">The Hunk pipeline.</h2>

            <div className="index-text-container">
              <img
                className="mx-auto h-6 w-full my-4 object-cover"
                src="/hunkCreation.gif"
                alt="Hunks being generated in the terminal"
              />

              <p className="index-paragraph mb-2">
                Hunks emerge through an iterative partnership between human
                intention and computer aggregation. Hand-drawn traits are
                combined into Hunks and visualised by a program. After repeating
                this process for over hundred traits, personality types, variety
                range, optimal color combinations and shapes are understood and
                honed in on. Hunks represent a finely tuned selection.
              </p>
            </div>
            <div className="mt-6 flex w-full justify-center items-center flex-col md:flex-row">
              <div className="flex flex-wrap justify-center w-64">
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Buzz Cut (black).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Buzz Cut (chestnut).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Buzz Cut (golden).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Buzz Cut (peach).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Buzz Cut (silver fox).png"
                  alt="Detail of a hunk haircut"
                />

                {/* dreads */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Dreads (black).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Dreads (chestnut).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Dreads (golden).png"
                  alt="Detail of a hunk haircut"
                />

                {/* elvish */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Elvish (black).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Elvish (chestnut).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Elvish (golden).png"
                  alt="Detail of a hunk haircut"
                />

                {/* fringe */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Fringe (golden).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Fringe (peach).png"
                  alt="Detail of a hunk haircut"
                />

                {/* man bun */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Man Bun (black).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Man Bun (golden).png"
                  alt="Detail of a hunk haircut"
                />

                {/* mohawk */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Mohawk (black).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Mohawk (chestnut).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Mohawk (golden).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Mohawk (peach).png"
                  alt="Detail of a hunk haircut"
                />

                {/* pig tails */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Pig Tails (golden).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Pig Tails (peach).png"
                  alt="Detail of a hunk haircut"
                />

                {/* pony tail */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Pony Tail (black).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Pony Tail (golden).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Pony Tail (silver fox).png"
                  alt="Detail of a hunk haircut"
                />

                {/* pulled back */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Pulled Back (black).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Pulled Back (golden).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Pulled Back (silver fox).png"
                  alt="Detail of a hunk haircut"
                />

                {/* pulled forward */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Pulled Forward (black).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Pulled Forward (chestnut).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Pulled Forward (golden).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Pulled Forward (peach).png"
                  alt="Detail of a hunk haircut"
                />

                {/* rat tail */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Rat Tail (black).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Rat Tail (chestnut).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Rat Tail (golden).png"
                  alt="Detail of a hunk haircut"
                />

                {/* Side Parting */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Side Parting (black).png"
                  alt="Detail of a hunk haircut"
                />

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Side Parting (chestnut).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Side Parting (golden).png"
                  alt="Detail of a hunk haircut"
                />

                {/* slick back */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Slick Back (black).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Slick Back (chestnut).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Slick Back (golden).png"
                  alt="Detail of a hunk haircut"
                />

                {/* strand  */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Strand (black).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Strand (chestnut).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Strand (golden).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Strand (peach).png"
                  alt="Detail of a hunk haircut"
                />

                {/* Swirl */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Swirl (black).png"
                  alt="Detail of a hunk haircut"
                />

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Swirl (golden).png"
                  alt="Detail of a hunk haircut"
                />
                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Swirl (peach).png"
                  alt="Detail of a hunk haircut"
                />

                {/* Top Knot */}

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Top Knot (chestnut).png"
                  alt="Detail of a hunk haircut"
                />

                <img
                  className="pixelated p-1 object-contain"
                  src="/traits_hair/Top Knot (golden).png"
                  alt="Detail of a hunk haircut"
                />
              </div>
              <img
                src="hunk-traits-all.gif"
                alt="Animation of hunks"
                className="w-60 object-contain"
                height={27}
                width={27}
              />
            </div>
          </div>
        </section>

        <section className="index-section mt-20 mb-20 px-2">
          {/* container */}
          <div className="flex justify-evenly flex-wrap items-start">
            {/* sub container */}
            <div className="max-w-md mt-4">
              <h4 className="index-header-sub border-b border-black">
                Trait Design.
              </h4>
              <p className="index-paragraph">
                Traits are hand-drawn and then aggregated by the computer
                program. Does the trait add variety while remaining coherent
                with the whole? Does it suggest personality without pandering?
                Many traits are tried and tested. Most of them get eliminated,
                but they all contributed along the way.
              </p>
            </div>
            {/* sub container */}
            <div className="max-w-md mt-4">
              <h4 className="index-header-sub border-b border-black">
                Collection Design.
              </h4>
              <p className="index-paragraph">
                Making a few good Hunks is simple, but having a consistent floor
                of exceptional Hunks would be an overwhelming challenge for two
                people. However, due to the processing power of computers,
                custom analytics tools, and having visually inspected the 10.000
                Hunks, we can conclude that every single Hunk meets our
                standards.
              </p>
            </div>
          </div>
          {/* containr */}
          <div className="flex justify-evenly flex-wrap items-start">
            {/* sub container */}
            <div className="max-w-md mt-4 ">
              <h4 className="index-header-sub border-b border-black mt-9">
                Analytics.
              </h4>
              <p className="index-paragraph">
                Analytics is essential in order to tweak the output of the
                entire collection. Some traits are more compatible than others,
                and knowing when to boost or reduce the probability of a trait
                occurring in the collection is necessary for striking a balance
                between variety and unity. At a collection-level, analytics are
                our eyes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
