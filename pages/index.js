import HeadInfo from "../components/Head";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slideshow from "../components/Slider";

export default function Home() {
  // useEffect(() => {
  //   try {
  //     fetch ('/api/indexVisit')
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }

  //   },[] );

  return (
    <div>
      <HeadInfo title="Home" />

      <header className="max-w-screen-xl w-full flex flex-col px-1.5">
        <div className="flex flex-col lg:flex-row  items-center justify-around w-full">
          <h2 className="text-center lg:text-left ml-0 lg:ml-10 mt-8 md:mt-20 index-header text-3xl lg:text-4xl order-1 lg:order-1 w-full lg:w-1/3  primary">
            <span className="block"> Say hello to Hunks,</span> the new punks.
          </h2>

          <img
            src="anim-test.gif"
            className="w-full order-1 lg:-ml-10 -mt-5 lg:order-2 max-h-screen max-w-2xl object-contain pixelated"
            alt="Animation of hunks"
          />

          <div className="w-1/3 order-3"></div>
        </div>
      </header>
      {/* MAIN */}

      <main className="max-w-screen-xl mb-20 w-full flex flex-col px-2">
        <section className="index-section lg:mt-5">
          <div className="index-text-container">
            <h2 className="index-header text-2xl md:text-4xl mt-6">
              {" "}
              From a joke to our most serious art project.
            </h2>
            <p className="index-paragraph">
              <span className="mb-2">
                We have to admit, Hunks began as an offhand gimmick between two
                designers.
              </span>{" "}
              Until the creative potential of combining drawing with computer
              aggregation dawned on us.
            </p>

            <p className="index-paragraph mt-4">
              Hunks escalated into to four-month creative outburst that merged
              figurative fine art with automatically generated art into 10.000
              unique hunks.
            </p>
            <p className="index-paragraph mt-4">
              We had unlimited time, we made no compromises, and we got to
              experiment with a new creative process. We&apos;re proud to
              release signed art prints and NFTs of Hunks.
            </p>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center justify-around w-full relative mt-10 mb-10 lg:mt-36">
          <div className=" absolute flex flex-col items-center w-full text-black pr-2">
            <h1 className="index-header bg-white">
              Available during{" "}
              <span className="text-black"> live vernissages</span> & as
              on-chain <span className="text-black"> NFTs.</span>
            </h1>
            <p className="index-paragraph bg-white pr-4 py-2">
              {" "}
              Hunks are digital and physical creatures. They exist as 10.000
              unique physical
              <Link href="/print">
                <a className="text-blue-600 underline"> art prints,</a>
              </Link>{" "}
              and 10.000 fully on-chain
              <Link href="/nft">
                <a className="text-blue-600 underline"> Cardano NFTs.</a>
              </Link>{" "}
            </p>
          </div>
          <div className="flex flex-col w-full items-center">
            <img
              src="collage.png"
              className="w-full h-96 lg:w-1/2 max-w-2xl pixelated object-cover max-h-80"
              alt="A collage of Hunks"
            />
            <img
              src="collage-1-1-ed.jpg"
              className="w-full h-96 lg:w-1/2 pixelated object-cover max-h-80"
              alt="A collage of Hunks"
            />
          </div>
        </section>

        <section className="index-section mt-10 mb-10 lg:mt-36">
          <div className="index-text-container">
            <h2 className=" index-header">
              Suggestive creatures came out of the machine.
            </h2>
            <p className="index-paragraph mb-3">
              <span className="block my-3">Who are the 10.000 Hunks?</span>{" "}
              Hunks emerge through ping-pong between the artists and a computer
              program. Through generating and inspecting sample hunks for
              several months, we gradually identified suggestive personalities
              that became our guidelines. Here&apos;s a taste:
            </p>
            <div>
              <Slideshow />
            </div>
          </div>
        </section>
        <section className="index-section mt-10 mb-10 lg:mt-36">
          <div className="index-text-container">
            <h2 className=" index-header">Make PFP great again.</h2>
            <p className="index-paragraph mb-3">
              Trained in classical European draftsmanship, we sought to combine
              the tradition&apos;s virtuoso qualities (i.e form, lighting, warm
              & cool colors) with the typical trait-by-trait assembling logic of
              a PFP generator, to produce image files small enough to put on a
              blockchain. We had our doubts, but it worked.
            </p>
            <img
              src="/classical.png"
              alt="comparison between classically rendered hunks, and automaticcaly generated hunks."
            />
            <p className="index-paragraph my-3">
              Chipping away every uneccessary pixel whilst careful not to break
              the logic of the classical qualities, we arrived at 26 by 26 pixel
              base and canvas. On the scripting end, we tweaked a generic PFP
              art generator into a little machine, The Hunk Generator, that
              consistently output quality hunks, not random and unopinionated
              hunks.
            </p>
          </div>
          <p className="text-center px-4 mt-12 text-lg md:text-2xl font-light">
            <span className="inline lg:block">
              “..when i started making music, what interested me really, [...]
              was making musical machines of some kind […]
            </span>{" "}
            where for quite a small input, there would be alot of music coming
            out.”
          </p>
          <p className="text-center mt-6 text-2xl font-bold">
            - Brian Eno
            <Link href="https://www.youtube.com/watch?v=RWhvpIOruqo&ab_channel=TheInstituteofArtandIdeas">
              <a target="_blank" className="text-sm font-thin text-blue-500">
                {" "}
                (source)
              </a>
            </Link>
          </p>
        </section>
        <section className="index-section mt-10 mb-10 lg:mt-36">
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
          </div>
        </section>
        <section className="index-section mt-10 mb-10 lg:mt-36">
          <div className="index-text-container">
            <h3 className="index-header">Get yourself a Hunk.</h3>
            <p className="index-paragraph">
              <span className="block mb-2">
                We&apos;re releasing signed art prints of Hunks during live
                vernissages (currently held in Norway), and we&apos;re dropping
                NFTs on the Cardano blockchain. The art print and NFT are sold
                separately.
              </span>
            </p>
            <div className="flex justify-between">
              <div className="mt-10  text-center">
                <Link href="/nft">
                  <a className="inline-block  border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-40 py-2">
                    NFT
                  </a>
                </Link>
              </div>
              <div className="mt-10  text-center">
                <Link href="/print" className>
                  <a className="inline-block border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-40 py-2">
                    PRINT
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION SIMPLE SERIOUS */}
        <section className="flex flex-col justify-center items-center mt-20 lg:mt-36">
          <div className="index-text-container">
            <h2 className="index-header w-full">The Hunk pipeline.</h2>

            {/* <p className="index-paragraph">
              The 10.000 Hunks are designed from 26x26 of the simplest digital
              visual unit: the pixel. Pixel art is typically the only visual
              style practically small enough to encode and store directly on the
              blockchain.{" "}
              <span className="index-paragraph font-bold">
                How much personality, variety, form and depth can be expressed
                in 26x26 pixels?
              </span>
            </p> */}
            <div className="index-text-container">
              <img
                className="mx-auto h-6 w-full my-4 object-cover"
                src="/hunkCreation.gif"
                alt="Hunks being generated in the terminal"
              />

              <p className="index-paragraph mb-2">
                Hunks emerge through an iterative partnership between human
                intention and computer aggregation. Hand-drawn traits are
                combined into hunks and visualised by a program. After repeating
                this process for over hundred traits, personality types, variety
                range, optimal color combinations and shapes are understood and
                honed in on. Hunks represent a finely combed selection.
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
          <Link href="/collection">
            <a className="border-b border-blue-600 text-blue-600 mx-auto py-1 text-center w-42 mt-6">
              Collection at a glance
            </a>
          </Link>
        </section>

        <section className="index-section mt-20 mb-20">
          {/* container */}
          <div className="flex justify-evenly flex-wrap items-start">
            {/* sub container */}
            <div className="max-w-md mt-4">
              <h4 className="index-header-sub border-b border-black">
                Trait design.
              </h4>
              <p className="index-paragraph">
                Traits are hand-drawn and then aggregated by the computer
                program. Does the trait add variety while remaining coherent
                with the whole? Does it suggest personality without pandering?
                Traits are like brainstorming with post-it notes. Most of them
                get eliminated, but they all contributed along the way.
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
                people. But due to the processing power of computers, custom
                analytic tools, and having visually inspected the 10.000
                outputs, we can conclude that every single Hunk meets our
                standards.
              </p>
            </div>
          </div>
          {/* container */}
          <div className="flex justify-evenly flex-wrap items-start">
            {/* sub container */}
            <div className="max-w-md mt-4 ">
              <h4 className="index-header-sub border-b border-black">
                Analytics.
              </h4>
              <p className="index-paragraph">
                Analytics is essential in order to tweak the output of the
                entire collection. Some traits are more compatible than others,
                and knowing when to boost and reduce a trait&apos;s probability
                is necessary for striking a balance between variety and unity.
                At a collection-level, analytics are our eyes.
              </p>
            </div>
            {/* sub container */}
            <div className="max-w-md mt-4">
              <h4 className="index-header-sub border-b border-black">
                Testing.
              </h4>
              <p className="index-paragraph">
                You only have one shot at getting it right for on-chain NFTs.
                Right, in terms of not having duplicate data, and acertaining
                that the NFT displays properly on third-party services. Our code
                is thoroughly tested, and the artworks display properly on
                Cardano web3 services.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
