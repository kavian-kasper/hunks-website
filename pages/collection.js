import React from "react";
import PieChart from "../components/PieChart";
import { useState } from "react";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Trait from "../components/statistics/Trait";
import Hairs from "../components/statistics/Hairs";
import { hairsData } from "../data/hairsData";
import TraitNavActive from "../components/UIcomponents/TraitNavActive";
import TraitNavInactive from "../components/UIcomponents/TraitNavInactive";

const Statistics = () => {
  // MODAL STATE
  const [open, setOpen] = useState(false);
  const [traitImg, setTraitImg] = useState("");
  const cancelButtonRef = useRef(null);

  // COLORS
  const armyGreen = "#464400";
  const armyGreenDark = "#3b3f2f";
  const black = "#352605";
  const brown = "#5c3f3b";
  const blue = "#315ea2";
  const tanColor = "#b26525";
  const gray = "#5b5b54";
  const lightGray = "#b4b4a6";
  const none = "#69a2ba";
  const peach = "#ffd1ab";
  const pink = "#e28178";
  const rust = "#a63b1f";
  const violet = "#463085";
  const white = "#f4e4b8";
  const yellow = "#d78b23";

  // TRAIT DATA
  //Base
  const nude = 60;
  const tan = 30;
  const daft = 10;

  // Top
  const shirt = 3;
  const tankTop = 6;
  const turtleneckArmy = 3;
  const turtleneckBlack = 6;
  const turtleneckBlue = 3;
  const turtleneckGray = 6;
  const turtleneckPink = 3;
  const turtleneckRust = 6;
  const turtleneckViolet = 3;
  const turtleneckWhite = 6;
  const turtleneckYellow = 3;
  const noneTop = 6;

  // Top Secondary
  const chain = 3;
  const leatherJacket = 3;
  const looseTie = 3;
  const suspenders = 3;
  const noneTopSecondary = 3;

  // Eyes
  const staringTan = 3;
  const staringNude = 6;
  const shadesDark = 3;
  const shadesLargeDark = 6;
  const shadesYellow = 3;
  const raised = 6;

  // Mouth
  const lips = 3;
  const moustacheBlack = 3;
  const moustacheChestnut = 3;
  const moustacheSilverFox = 3;
  const poutNude = 3;
  const poutTan = 3;
  const teeth = 3;

  // Facial Hair
  const fullBeardBlack = 3;
  const fullBeardChestnut = 3;
  const goateeBlack = 3;
  const goateeChestnut = 3;
  const noneFacialHair = 3;

  // Headwear
  const beanieArmy = 3;
  const beanieYellow = 3;
  const beretArmy = 3;
  const beretRust = 3;
  const snapBackBlack = 3;
  const snapBackPink = 3;
  const noneHeadwear = 3;

  // Cigarette
  const regular = 3;
  const noneCigarette = 3;

  // Earring
  const golden = 3;
  const noneEarring = 3;

  // DATASETS
  // DATASET SKIN
  const [skin, setSkin] = useState({
    datasets: [
      {
        data: [nude, tan, daft],
        backgroundColor: [peach, tanColor, black],
        borderWidth: 0,
      },
    ],
  });

  // DATASET TOP
  const [top, setTop] = useState({
    datasets: [
      {
        data: [
          shirt,
          tankTop,
          turtleneckArmy,
          turtleneckBlack,
          turtleneckBlue,
          turtleneckGray,
          turtleneckPink,
          turtleneckRust,
          turtleneckViolet,
          turtleneckWhite,
          turtleneckYellow,
          noneTop,
        ],
        backgroundColor: [
          lightGray,
          brown,
          armyGreen,
          black,
          blue,
          gray,
          pink,
          rust,
          violet,
          white,
          yellow,
          none,
        ],
        borderWidth: 0,
      },
    ],
  });

  // DATASET TOP SECONDARY
  const [topSecondary, setTopSecondary] = useState({
    datasets: [
      {
        data: [chain, leatherJacket, looseTie, suspenders, noneTopSecondary],
        backgroundColor: [yellow, brown, tanColor, black, none],
        borderWidth: 0,
      },
    ],
  });

  // DATASET EYES
  const [eyes, setEyes] = useState({
    datasets: [
      {
        data: [
          shadesDark,
          shadesLargeDark,
          shadesYellow,
          staringNude,
          staringTan,
          raised,
        ],
        backgroundColor: [brown, black, yellow, peach, tanColor, violet],
        borderWidth: 0,
      },
    ],
  });

  // DATASET MOUTH
  const [mouth, setMouth] = useState({
    datasets: [
      {
        data: [
          lips,
          moustacheBlack,
          moustacheChestnut,
          moustacheSilverFox,
          poutNude,
          poutTan,
          teeth,
        ],
        backgroundColor: [
          rust,
          black,
          brown,
          lightGray,
          peach,
          tanColor,
          white,
        ],
        borderWidth: 0,
      },
    ],
  });

  // DATASET FACIAL HAIR
  const [facialHair, setFacialHair] = useState({
    datasets: [
      {
        data: [
          fullBeardBlack,
          fullBeardChestnut,
          goateeBlack,
          goateeChestnut,
          noneFacialHair,
        ],
        backgroundColor: [black, brown, rust, blue, none],
        borderWidth: 0,
      },
    ],
  });

  // DATASET HEADWEAR
  const [headwear, setHeadwear] = useState({
    datasets: [
      {
        data: [
          beanieArmy,
          beanieYellow,
          beretArmy,
          beretRust,
          snapBackBlack,
          snapBackPink,
          noneHeadwear,
        ],
        backgroundColor: [
          armyGreen,
          yellow,
          armyGreenDark,
          rust,
          black,
          pink,
          none,
        ],
        borderWidth: 0,
      },
    ],
  });

  // DATASET HAIR
  function calcHair(hairsArray) {
    hairsArray.forEach((hair) => {
      if (hair.distribution < 1) {
        hair.color = "#d9534f";
      }
      if (hair.distribution >= 1 && hair.distribution < 3) {
        hair.color = "#f0ad4e";
      }
      if (hair.distribution >= 3) {
        hair.color = "#5cb85c";
      }
    });
    return hairsArray;
  }
  const updatedHair = calcHair(hairsData);

  // Calculate percentages
  function addSum(array, sum) {
    let percentOfTotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let percentOfTotal = (array[i] / sum) * 100;
      percentOfTotal = percentOfTotal.toFixed(1);
      percentOfTotalArray.push(percentOfTotal);
    }
    return percentOfTotalArray;
  }
  // Calculate percentages of single
  function addSumOfSingle(hair, amount) {
    let percentOfTotal = (hair / amount) * 100;
    percentOfTotal = percentOfTotal.toFixed(3);
    return percentOfTotal;
  }
  // Percentages
  const skinPercentage = addSum(skin.datasets[0].data, 100);
  const topPercentage = addSum(top.datasets[0].data, 200);
  const topSecondaryPercentage = addSum(topSecondary.datasets[0].data, 24);
  const eyesPercentage = addSum(eyes.datasets[0].data, 18);
  const mouthPercentage = addSum(mouth.datasets[0].data, 100);
  const facialHairPercentage = addSum(facialHair.datasets[0].data, 100);
  const headwearPercentage = addSum(headwear.datasets[0].data, 100);

  // Toggle modal Image
  const handleClick = (modalImage) => {
    setOpen(true);
    setTraitImg(modalImage);
  };

  return (
    <>
      <main className="flex flex-col items-center ">
        <section className="bg-primary flex w-full">
          <img
            className="pixelated mx-auto object-contain"
            src="/hunk-with-traits-dotted.png"
            alt="Hunk trait description"
          />
        </section>
        {/* trait nav */}
        {/* Spacer div */}
        <div className="px-2">
          <section
            className="bg-white w-full pl-4 max-w-6xl pb-6 mb-12 md:mb-24 shadow-md rounded-md"
            id="base"
          >
            <div className="pt-4 flex flex-wrap lg:flex-nowrap items-center">
              <ul className="flex flex-wrap lg:flex-nowrap items-baseline order-2 lg:order-1 text-gray-400">
                <TraitNavActive title={"Base"} dot={"·"} />
                <TraitNavInactive
                  title={"Top"}
                  href={"/collection#Top"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top Secondary"}
                  href={"/collection#TopSecondary"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Eyes"}
                  href={"/collection#eyes"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Hair"}
                  href={"/collection#hair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Mouth"}
                  href={"/collection#mouth"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"FacialHair"}
                  href={"/collection#facialHair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Headwear"}
                  href={"/collection#Headwear"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Cigarette"}
                  href={"/collection#Cigarette"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Earring"}
                  href={"/collection#Earring"}
                />
              </ul>

              <div className="w-full order-1 lg:order-2 border-t border-gray-200 mr-4 mb-2 lg:mb-0"></div>
            </div>

            {/* base */}
            <p className="text-gray-700 py-4 text-xs md:text-sm">
              <span className="font-bold">Base</span> is mother of all traits.
              Compatible with every trait. Present in every Hunk. Genderless.
              Iconic. The source of unity in variety.
            </p>
            <div className="flex flex-col lg:flex-row flex-wrap w-full justify-between lg:items-center">
              <div className="flex justify-start flex-wrap lg:w-2/3">
                <Trait
                  traitName={"Nude"}
                  traitPath={"skin"}
                  handleClick={handleClick}
                  tickerColor={peach}
                  percent={skinPercentage[0]}
                  amount={skin.datasets[0].data[0]}
                />
                <Trait
                  traitName={"Tan"}
                  traitPath={"skin"}
                  handleClick={handleClick}
                  tickerColor={tanColor}
                  percent={skinPercentage[1]}
                  amount={skin.datasets[0].data[1]}
                />
                <Trait
                  traitName={"Daft"}
                  traitPath={"skin"}
                  handleClick={handleClick}
                  tickerColor={black}
                  percent={skinPercentage[2]}
                  amount={skin.datasets[0].data[2]}
                />
              </div>

              <div className="max-w-xs md:w-1/3 my-auto text-right mx-auto pr-4">
                <div className="text-gray-500 text-xs underline">
                  Distribution of 3 <span className="font-black"> Base </span>
                  traits.
                </div>
                <PieChart chartData={skin} />
              </div>
            </div>
          </section>
          {/* base end */}
          {/* trait nav */}
          <section
            className="bg-white w-full pl-4 max-w-6xl pb-6 mb-12 md:mb-24 shadow-md rounded-md"
            id="Top"
          >
            <div className="pt-4 flex flex-wrap lg:flex-nowrap items-center">
              <ul className="flex flex-wrap lg:flex-nowrap items-baseline order-2 lg:order-1 text-gray-400">
                <TraitNavInactive
                  title={"Base"}
                  href={"/collection#base"}
                  dot={"·"}
                />
                <TraitNavActive title={"Top"} dot={"·"} />
                <TraitNavInactive
                  title={"Top Secondary"}
                  href={"/collection#TopSecondary"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Eyes"}
                  href={"/collection#eyes"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Hair"}
                  href={"/collection#hair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Mouth"}
                  href={"/collection#mouth"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"FacialHair"}
                  href={"/collection#facialHair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Headwear"}
                  href={"/collection#Headwear"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Cigarette"}
                  href={"/collection#Cigarette"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Earring"}
                  href={"/collection#Earring"}
                />
              </ul>
              <div className="w-full order-1 lg:order-2 border-t border-gray-200 mr-4 mb-2 lg:mb-0"></div>
            </div>
            {/* top */}
            <p className="text-gray-700 py-4 text-sm">
              <span className="font-bold text-black text-md">Base</span>{" "}
              description. Lorem ipsum dolor est si amet.
            </p>
            <div className="flex flex-col  flex-wrap w-full justify-between lg:items-center">
              <div className="flex justify-start flex-wrap lg:w-3/3">
                <Trait
                  traitName={"Shirt"}
                  traitPath={"top"}
                  handleClick={handleClick}
                  tickerColor={lightGray}
                  percent={topPercentage[0]}
                  amount={top.datasets[0].data[0]}
                />
                <Trait
                  traitName={"Tank Top"}
                  traitPath={"top"}
                  handleClick={handleClick}
                  tickerColor={brown}
                  percent={topPercentage[1]}
                  amount={top.datasets[0].data[1]}
                />
                <Trait
                  traitName={"Turtleneck (army)"}
                  traitPath={"top"}
                  handleClick={handleClick}
                  tickerColor={armyGreen}
                  percent={topPercentage[2]}
                  amount={top.datasets[0].data[2]}
                />
                <Trait
                  traitName={"Turtleneck (black)"}
                  traitPath={"top"}
                  handleClick={handleClick}
                  tickerColor={black}
                  percent={topPercentage[3]}
                  amount={top.datasets[0].data[3]}
                />
                <Trait
                  traitName={"Turtleneck (blue)"}
                  traitPath={"top"}
                  handleClick={handleClick}
                  tickerColor={blue}
                  percent={topPercentage[4]}
                  amount={top.datasets[0].data[4]}
                />
                <Trait
                  traitName={"Turtleneck (gray)"}
                  traitPath={"top"}
                  handleClick={handleClick}
                  tickerColor={gray}
                  percent={topPercentage[5]}
                  amount={top.datasets[0].data[5]}
                />
                <Trait
                  traitName={"Turtleneck (pink)"}
                  traitPath={"top"}
                  handleClick={handleClick}
                  tickerColor={pink}
                  percent={topPercentage[6]}
                  amount={top.datasets[0].data[6]}
                />
                <Trait
                  traitName={"Turtleneck (rust)"}
                  traitPath={"top"}
                  handleClick={handleClick}
                  tickerColor={rust}
                  percent={topPercentage[7]}
                  amount={top.datasets[0].data[7]}
                />
                <Trait
                  traitName={"Turtleneck (violet)"}
                  traitPath={"top"}
                  handleClick={handleClick}
                  tickerColor={violet}
                  percent={topPercentage[8]}
                  amount={top.datasets[0].data[8]}
                />
                <Trait
                  traitName={"Turtleneck (white)"}
                  traitPath={"top"}
                  handleClick={handleClick}
                  tickerColor={white}
                  percent={topPercentage[9]}
                  amount={top.datasets[0].data[9]}
                />
                <Trait
                  traitName={"Turtleneck (yellow)"}
                  traitPath={"top"}
                  handleClick={handleClick}
                  tickerColor={yellow}
                  percent={topPercentage[10]}
                  amount={top.datasets[0].data[10]}
                />
                <Trait
                  traitName={"None (Top)"}
                  traitPath={"top"}
                  handleClick={handleClick}
                  tickerColor={none}
                  percent={topPercentage[11]}
                  amount={top.datasets[0].data[11]}
                />
              </div>
              <div className="max-w-xs md:w-1/3 my-auto text-right mx-auto pr-4 mt-8">
                <div className="text-gray-500 text-xs underline">
                  Distribution of 12 <span className="font-black"> Top </span>
                  traits.
                </div>
                <PieChart chartData={top} />
              </div>
            </div>
          </section>

          {/* top inner end */}
          {/* trait nav */}
          <section
            className="bg-white w-full pl-4 max-w-6xl pb-6 mb-12 md:mb-24 shadow-md rounded-md"
            id="TopSecondary"
          >
            <div className="pt-4 flex flex-wrap lg:flex-nowrap items-center">
              <ul className="flex flex-wrap lg:flex-nowrap items-baseline order-2 lg:order-1 text-gray-400">
                <TraitNavInactive
                  title={"Base"}
                  href={"/collection#base"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top"}
                  href={"/collection#Top"}
                  dot={"·"}
                />
                <TraitNavActive title={"Top Secondary"} dot={"·"} />
                <TraitNavInactive
                  title={"Eyes"}
                  href={"/collection#eyes"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Hair"}
                  href={"/collection#hair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Mouth"}
                  href={"/collection#mouth"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"FacialHair"}
                  href={"/collection#facialHair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Headwear"}
                  href={"/collection#Headwear"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Cigarette"}
                  href={"/collection#Cigarette"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Earring"}
                  href={"/collection#Earring"}
                />
              </ul>
              <div className="w-full order-1 lg:order-2 border-t border-gray-200 mr-4 mb-2 lg:mb-0"></div>
            </div>
            {/* Top Secondary */}
            <p className="text-gray-700 py-4 text-sm">
              <span className="font-bold text-black text-md">Base</span>{" "}
              description. Lorem ipsum dolor est si amet.
            </p>
            <div className="flex flex-col lg:flex-row flex-wrap w-full justify-between lg:items-center">
              <div className="flex justify-start flex-wrap lg:w-2/3">
                <Trait
                  traitName={"Chain"}
                  traitPath={"top_secondary"}
                  handleClick={handleClick}
                  tickerColor={yellow}
                  percent={topSecondaryPercentage[0]}
                  amount={topSecondary.datasets[0].data[0]}
                />

                <Trait
                  traitName={"Leather Jacket"}
                  traitPath={"top_secondary"}
                  handleClick={handleClick}
                  tickerColor={violet}
                  percent={topSecondaryPercentage[1]}
                  amount={topSecondary.datasets[0].data[1]}
                />

                {/* <Trait
                  traitName={"Loose Tie"}
                  traitPath={"top_secondary"}
                  handleClick={handleClick}
                  tickerColor={tanColor}
                  percent={topSecondaryPercentage[2]}
                  amount={topSecondary.datasets[0].data[2]}
                /> */}

                <Trait
                  traitName={"Suspenders"}
                  traitPath={"top_secondary"}
                  handleClick={handleClick}
                  tickerColor={black}
                  percent={topSecondaryPercentage[3]}
                  amount={topSecondary.datasets[0].data[3]}
                />

                <Trait
                  traitName={"None (Top Secondary)"}
                  traitPath={"top_secondary"}
                  textSizeOverride="text-xs"
                  handleClick={handleClick}
                  tickerColor={none}
                  percent={topSecondaryPercentage[4]}
                  amount={topSecondary.datasets[0].data[4]}
                />
              </div>
              <div className="max-w-xs md:w-1/3 my-auto text-right mx-auto pr-4">
                <div className="text-gray-500 text-xs underline">
                  Distribution of 5
                  <span className="font-black"> Top Secondary </span>
                  traits.
                </div>
                <PieChart chartData={topSecondary} />
              </div>
            </div>
          </section>
          {/* Top Secondary end*/}
          {/* trait nav */}
          <section
            className="bg-white w-full pl-4 max-w-6xl pb-6 mb-12 md:mb-24 shadow-md rounded-md"
            id="eyes"
          >
            <div className="pt-4 flex flex-wrap lg:flex-nowrap items-center">
              <ul className="flex flex-wrap lg:flex-nowrap items-baseline order-2 lg:order-1 text-gray-400">
                <TraitNavInactive
                  title={"Base"}
                  href={"/collection#base"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top"}
                  href={"/collection#Top"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top Secondary"}
                  href={"/collection#TopSecondary"}
                  dot={"·"}
                />
                <TraitNavActive title={"Eyes"} dot={"·"} />
                <TraitNavInactive
                  title={"Hair"}
                  href={"/collection#hair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Mouth"}
                  href={"/collection#mouth"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"FacialHair"}
                  href={"/collection#facialHair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Headwear"}
                  href={"/collection#Headwear"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Cigarette"}
                  href={"/collection#Cigarette"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Earring"}
                  href={"/collection#Earring"}
                />
              </ul>
              <div className="w-full order-1 lg:order-2 border-t border-gray-200 mr-4 mb-2 lg:mb-0"></div>
            </div>
            {/* eyes begin */}
            <p className="text-gray-700 py-4 text-sm">
              <span className="font-bold text-black text-md">Base</span>{" "}
              description. Lorem ipsum dolor est si amet.
            </p>
            <div className="flex flex-col lg:flex-row flex-wrap w-full justify-between lg:items-center">
              <div className="flex justify-start flex-wrap lg:w-2/3">
                <Trait
                  traitName={"Shades (dark)"}
                  traitPath={"eyes"}
                  handleClick={handleClick}
                  tickerColor={brown}
                  percent={eyesPercentage[0]}
                  amount={eyes.datasets[0].data[0]}
                />

                <Trait
                  traitName={"Shades Large (dark)"}
                  traitPath={"eyes"}
                  handleClick={handleClick}
                  tickerColor={black}
                  percent={eyesPercentage[1]}
                  amount={eyes.datasets[0].data[1]}
                />

                <Trait
                  traitName={"Shades (yellow)"}
                  traitPath={"eyes"}
                  handleClick={handleClick}
                  tickerColor={yellow}
                  percent={eyesPercentage[2]}
                  amount={eyes.datasets[0].data[2]}
                />
                <Trait
                  traitName={"Staring (tan)"}
                  traitPath={"eyes"}
                  handleClick={handleClick}
                  tickerColor={tanColor}
                  percent={eyesPercentage[3]}
                  amount={eyes.datasets[0].data[3]}
                />

                <Trait
                  traitName={"Staring (nude)"}
                  traitPath={"eyes"}
                  handleClick={handleClick}
                  tickerColor={peach}
                  percent={eyesPercentage[4]}
                  amount={eyes.datasets[0].data[4]}
                />

                <Trait
                  traitName={"Raised"}
                  traitPath={"eyes"}
                  handleClick={handleClick}
                  tickerColor={violet}
                  percent={eyesPercentage[5]}
                  amount={eyes.datasets[0].data[5]}
                />
              </div>
              <div className="max-w-xs md:w-1/3 my-auto text-right mx-auto pr-4">
                <div className="text-gray-500 text-xs underline">
                  Distribution of 6 <span className="font-black"> Eyes </span>
                  traits.
                </div>
                <PieChart chartData={eyes} />
              </div>
            </div>
          </section>
          {/* Eyes end */}
          {/* trait nav */}
          <section
            className="bg-white w-full pl-4 max-w-6xl pb-6 mb-12 md:mb-24 shadow-md rounded-md"
            id="hair"
          >
            <div className="pt-4 flex flex-wrap lg:flex-nowrap items-center">
              <ul className="flex flex-wrap lg:flex-nowrap items-baseline order-2 lg:order-1 text-gray-400">
                <TraitNavInactive
                  title={"Base"}
                  href={"/collection#base"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top"}
                  href={"/collection#Top"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top Secondary"}
                  href={"/collection#TopSecondary"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Eyes"}
                  href={"/collection#eyes"}
                  dot={"·"}
                />
                <TraitNavActive title={"Hair"} dot={"·"} />
                <TraitNavInactive
                  title={"Mouth"}
                  href={"/collection#mouth"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"FacialHair"}
                  href={"/collection#facialHair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Headwear"}
                  href={"/collection#Headwear"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Cigarette"}
                  href={"/collection#Cigarette"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Earring"}
                  href={"/collection#Earring"}
                />
              </ul>
              <div className="w-full order-1 lg:order-2 border-t border-gray-200 mr-4 mb-2 lg:mb-0"></div>
            </div>
            {/* Hair */}
            <p className="text-gray-700 py-4 text-sm">
              <span className="font-bold text-black text-md">Base</span>{" "}
              description. Lorem ipsum dolor est si amet.
            </p>
            <div className=" text-gray-500 mt-2 text-xs underline">
              Distribution of 60 <span className="font-black"> Hair</span>{" "}
              traits.
            </div>
            <div className="flex flex-wrap sm:my-4 md:my-0">
              {updatedHair.map((hair) => (
                <div key={hair.name} className="mb-4 flex flex-wrap  w-36">
                  <Hairs
                    traitName={hair.name}
                    traitPath={"/traits_hair/" + hair.name + ".png"}
                    handleClick={handleClick}
                    tickerColor={hair.color}
                    percent={addSumOfSingle(hair.distribution, 10000)}
                    amount={hair.distribution}
                  />
                </div>
              ))}
            </div>
          </section>
          {/* Hair end */}
          {/* trait nav */}
          <section
            className="bg-white w-full pl-4 max-w-6xl pb-6 mb-12 md:mb-24 shadow-md rounded-md"
            id="mouth"
          >
            <div className="pt-4 flex flex-wrap lg:flex-nowrap items-center">
              <ul className="flex flex-wrap lg:flex-nowrap items-baseline order-2 lg:order-1 text-gray-400">
                <TraitNavInactive
                  title={"Base"}
                  href={"/collection#base"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top"}
                  href={"/collection#Top"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top Secondary"}
                  href={"/collection#TopSecondary"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Eyes"}
                  href={"/collection#eyes"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Hair"}
                  href={"/collection#hair"}
                  dot={"·"}
                />
                <TraitNavActive title={"Mouth"} dot={"·"} />
                <TraitNavInactive
                  title={"FacialHair"}
                  href={"/collection#facialHair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Headwear"}
                  href={"/collection#Headwear"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Cigarette"}
                  href={"/collection#Cigarette"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Earring"}
                  href={"/collection#Earring"}
                />
              </ul>
              <div className="w-full order-1 lg:order-2 border-t border-gray-200 mr-4 mb-2 lg:mb-0"></div>
            </div>
            {/* Mouth */}
            <p className="text-gray-700 py-4 text-sm">
              <span className="font-bold text-black text-md">Base</span>{" "}
              description. Lorem ipsum dolor est si amet.
            </p>
            <div className="flex flex-col lg:flex-row flex-wrap w-full justify-between lg:items-center">
              <div className="flex justify-start flex-wrap lg:w-2/3">
                <Trait
                  traitName={"Lips"}
                  traitPath={"mouth"}
                  handleClick={handleClick}
                  tickerColor={rust}
                  percent={mouthPercentage[0]}
                  amount={mouth.datasets[0].data[0]}
                />

                <Trait
                  traitName={"Moustache (black)"}
                  traitPath={"mouth"}
                  handleClick={handleClick}
                  tickerColor={black}
                  percent={mouthPercentage[1]}
                  amount={mouth.datasets[0].data[1]}
                />

                <Trait
                  traitName={"Moustache (chestnut)"}
                  traitPath={"mouth"}
                  handleClick={handleClick}
                  tickerColor={brown}
                  percent={mouthPercentage[2]}
                  amount={mouth.datasets[0].data[2]}
                />

                <Trait
                  traitName={"Moustache (silver fox)"}
                  traitPath={"mouth"}
                  handleClick={handleClick}
                  tickerColor={lightGray}
                  percent={mouthPercentage[3]}
                  amount={mouth.datasets[0].data[3]}
                />
                <Trait
                  traitName={"Pout (nude)"}
                  traitPath={"mouth"}
                  handleClick={handleClick}
                  tickerColor={peach}
                  percent={mouthPercentage[4]}
                  amount={mouth.datasets[0].data[4]}
                />
                <Trait
                  traitName={"Pout (tan)"}
                  traitPath={"mouth"}
                  handleClick={handleClick}
                  tickerColor={tanColor}
                  percent={mouthPercentage[5]}
                  amount={mouth.datasets[0].data[5]}
                />

                <Trait
                  traitName={"Teeth"}
                  traitPath={"mouth"}
                  handleClick={handleClick}
                  tickerColor={white}
                  percent={mouthPercentage[6]}
                  amount={mouth.datasets[0].data[6]}
                />
              </div>
              <div className="max-w-xs md:w-1/3 my-auto text-right mx-auto pr-4">
                <div className="text-gray-500 text-xs underline">
                  Distribution of 5 <span className="font-black"> Mouth </span>
                  traits.
                </div>
                <PieChart chartData={mouth} />
              </div>
            </div>
          </section>
          {/* Mouth end */}
          {/* trait nav */}
          <section
            className="bg-white w-full pl-4 max-w-6xl pb-6 mb-12 md:mb-24 shadow-md rounded-md"
            id="facialHair"
          >
            <div className="pt-4 flex flex-wrap lg:flex-nowrap items-center">
              <ul className="flex flex-wrap lg:flex-nowrap items-baseline order-2 lg:order-1 text-gray-400">
                <TraitNavInactive
                  title={"Base"}
                  href={"/collection#base"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top"}
                  href={"/collection#Top"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top Secondary"}
                  href={"/collection#TopSecondary"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Eyes"}
                  href={"/collection#eyes"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Hair"}
                  href={"/collection#hair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Mouth"}
                  href={"/collection#mouth"}
                  dot={"·"}
                />
                <TraitNavActive title={"Facial Hair"} dot={"·"} />
                <TraitNavInactive
                  title={"Headwear"}
                  href={"/collection#Headwear"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Cigarette"}
                  href={"/collection#Cigarette"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Earring"}
                  href={"/collection#Earring"}
                />
              </ul>
              <div className="w-full order-1 lg:order-2 border-t border-gray-200 mr-4 mb-2 lg:mb-0"></div>
            </div>
            {/* Facial hair */}
            <p className="text-gray-700 py-4 text-sm">
              <span className="font-bold text-black text-md">Base</span>{" "}
              description. Lorem ipsum dolor est si amet.
            </p>
            <div className="flex flex-col lg:flex-row flex-wrap w-full justify-between lg:items-center">
              <div className="flex justify-start flex-wrap lg:w-2/3">
                <Trait
                  traitName={"Full Beard (black)"}
                  traitPath={"facial_hair"}
                  handleClick={handleClick}
                  tickerColor={black}
                  percent={facialHairPercentage[0]}
                  amount={facialHair.datasets[0].data[0]}
                />

                <Trait
                  traitName={"Full Beard (chestnut)"}
                  traitPath={"facial_hair"}
                  handleClick={handleClick}
                  tickerColor={brown}
                  percent={facialHairPercentage[1]}
                  amount={facialHair.datasets[0].data[1]}
                />

                <Trait
                  traitName={"Goatee (black)"}
                  traitPath={"facial_hair"}
                  handleClick={handleClick}
                  tickerColor={rust}
                  percent={facialHairPercentage[2]}
                  amount={facialHair.datasets[0].data[2]}
                />

                <Trait
                  traitName={"Goatee (chestnut)"}
                  traitPath={"facial_hair"}
                  handleClick={handleClick}
                  tickerColor={blue}
                  percent={facialHairPercentage[3]}
                  amount={facialHair.datasets[0].data[3]}
                />

                <Trait
                  traitName={"None (Facial Hair)"}
                  traitPath={"facial_hair"}
                  handleClick={handleClick}
                  tickerColor={none}
                  percent={facialHairPercentage[4]}
                  amount={facialHair.datasets[0].data[4]}
                />
              </div>
              <div className="max-w-xs md:w-1/3 my-auto text-right mx-auto pr-4">
                <div className="text-gray-500 text-xs underline">
                  Distribution of 5{" "}
                  <span className="font-black"> Facial Hair </span>
                  traits.
                </div>
                <PieChart chartData={facialHair} />
              </div>
            </div>
          </section>
          {/* facialHair */}
          {/* trait nav */}
          <section
            className="bg-white w-full pl-4 max-w-6xl pb-6 mb-12 md:mb-24 shadow-md rounded-md"
            id="Headwear"
          >
            <div className="pt-4 flex flex-wrap lg:flex-nowrap items-center">
              <ul className="flex flex-wrap lg:flex-nowrap items-baseline order-2 lg:order-1 text-gray-400">
                <TraitNavInactive
                  title={"Base"}
                  href={"/collection#base"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top"}
                  href={"/collection#Top"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top Secondary"}
                  href={"/collection#TopSecondary"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Eyes"}
                  href={"/collection#eyes"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Hair"}
                  href={"/collection#hair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Mouth"}
                  href={"/collection#mouth"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"FacialHair"}
                  href={"/collection#facialHair"}
                  dot={"·"}
                />
                <TraitNavActive title={"Headwear"} dot={"·"} />
                <TraitNavInactive
                  title={"Cigarette"}
                  href={"/collection#Cigarette"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Earring"}
                  href={"/collection#Earring"}
                />
              </ul>
              <div className="w-full order-1 lg:order-2 border-t border-gray-200 mr-4 mb-2 lg:mb-0"></div>
            </div>
            {/* Headwear */}
            <p className="text-gray-700 py-4 text-sm">
              <span className="font-bold text-black text-md">Base</span>{" "}
              description. Lorem ipsum dolor est si amet.
            </p>
            <div className="flex flex-col lg:flex-row flex-wrap w-full justify-between lg:items-center">
              <div className="flex justify-start flex-wrap lg:w-2/3">
                <Trait
                  traitName={"Beanie (army)"}
                  traitPath={"headwear"}
                  handleClick={handleClick}
                  tickerColor={armyGreen}
                  percent={headwearPercentage[0]}
                  amount={headwear.datasets[0].data[0]}
                />

                <Trait
                  traitName={"Beanie (yellow)"}
                  traitPath={"headwear"}
                  handleClick={handleClick}
                  tickerColor={yellow}
                  percent={headwearPercentage[1]}
                  amount={headwear.datasets[0].data[1]}
                />

                <Trait
                  traitName={"Beret (army)"}
                  traitPath={"headwear"}
                  handleClick={handleClick}
                  tickerColor={armyGreenDark}
                  percent={headwearPercentage[2]}
                  amount={headwear.datasets[0].data[2]}
                />

                <Trait
                  traitName={"Beret (rust)"}
                  traitPath={"headwear"}
                  handleClick={handleClick}
                  tickerColor={rust}
                  percent={headwearPercentage[3]}
                  amount={headwear.datasets[0].data[3]}
                />

                <Trait
                  traitName={"Snap Back (black)"}
                  traitPath={"headwear"}
                  handleClick={handleClick}
                  tickerColor={black}
                  percent={headwearPercentage[4]}
                  amount={headwear.datasets[0].data[4]}
                />

                <Trait
                  traitName={"Snap Back (pink)"}
                  traitPath={"headwear"}
                  handleClick={handleClick}
                  tickerColor={pink}
                  percent={headwearPercentage[5]}
                  amount={headwear.datasets[0].data[5]}
                />

                <Trait
                  traitName={"None (Headwear)"}
                  traitPath={"headwear"}
                  handleClick={handleClick}
                  tickerColor={none}
                  percent={headwearPercentage[6]}
                  amount={headwear.datasets[0].data[6]}
                />
              </div>
              <div className="max-w-xs md:w-1/3 my-auto text-right mx-auto pr-4">
                <div className="text-gray-500 text-xs underline">
                  Distribution of 7{" "}
                  <span className="font-black"> Headwear </span>
                  traits.
                </div>
                <PieChart chartData={headwear} />
              </div>
            </div>
          </section>
          {/* Headwear end */}
          {/* trait nav */}
          <section
            className="bg-white w-full pl-4 max-w-6xl pb-6 mb-12 md:mb-24 shadow-md rounded-md"
            id="Cigarette"
          >
            <div className="pt-4 flex flex-wrap lg:flex-nowrap items-center">
              <ul className="flex flex-wrap lg:flex-nowrap items-baseline order-2 lg:order-1 text-gray-400">
                <TraitNavInactive
                  title={"Base"}
                  href={"/collection#base"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top"}
                  href={"/collection#Top"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top Secondary"}
                  href={"/collection#TopSecondary"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Eyes"}
                  href={"/collection#eyes"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Hair"}
                  href={"/collection#hair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Mouth"}
                  href={"/collection#mouth"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"FacialHair"}
                  href={"/collection#facialHair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Headwear"}
                  href={"/collection#Headwear"}
                  dot={"·"}
                />
                <TraitNavActive title={"Cigarette"} dot={"·"} />
                <TraitNavInactive
                  title={"Earring"}
                  href={"/collection#Earring"}
                />
              </ul>
              <div className="w-full order-1 lg:order-2 border-t border-gray-200 mr-4 mb-2 lg:mb-0"></div>
            </div>
            {/* Cigarette */}
            <p className="text-gray-700 py-4 text-sm">
              <span className="font-bold text-black text-md">Base</span>{" "}
              description. Lorem ipsum dolor est si amet.
            </p>
            <div className="flex flex-col lg:flex-row flex-wrap w-full justify-between lg:items-center">
              <div className="flex justify-start flex-wrap lg:w-2/3">
                <Trait
                  traitName={"Regular"}
                  traitPath={"cigarette"}
                  handleClick={handleClick}
                  tickerColor={peach}
                  percent={50}
                  amount={5000}
                />
                <Trait
                  traitName={"None (Cigarette)"}
                  traitPath={"cigarette"}
                  handleClick={handleClick}
                  tickerColor={none}
                  percent={50}
                  amount={5000}
                />
              </div>
              <div className="w-1/3">{/* spacer */}</div>
            </div>
          </section>
          {/* Cigarette end*/}
          {/* trait nav */}
          <section
            className="bg-white w-full pl-4 max-w-6xl pb-6 mb-12 md:mb-24 shadow-md rounded-md"
            id="Earring"
          >
            <div className="pt-4 flex flex-wrap lg:flex-nowrap items-center">
              <ul className="flex flex-wrap lg:flex-nowrap items-baseline order-2 lg:order-1 text-gray-400">
                <TraitNavInactive
                  title={"Base"}
                  href={"/collection#base"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top"}
                  href={"/collection#Top"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Top Secondary"}
                  href={"/collection#TopSecondary"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Eyes"}
                  href={"/collection#eyes"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Hair"}
                  href={"/collection#hair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Mouth"}
                  href={"/collection#mouth"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"FacialHair"}
                  href={"/collection#facialHair"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Headwear"}
                  href={"/collection#Headwear"}
                  dot={"·"}
                />
                <TraitNavInactive
                  title={"Cigarette"}
                  href={"/collection#Cigarette"}
                  dot={"·"}
                />
                <TraitNavActive title={"Earring"} />
              </ul>
              <div className="w-full order-1 lg:order-2 border-t border-gray-200 mr-4 mb-2 lg:mb-0"></div>
            </div>
            {/* Earring */}
            <p className="text-gray-700 py-4 text-sm">
              <span className="font-bold text-black text-md">Base</span>{" "}
              description. Lorem ipsum dolor est si amet.
            </p>
            <div className="flex flex-col lg:flex-row flex-wrap w-full justify-between lg:items-center">
              <div className="flex justify-start flex-wrap lg:w-2/3">
                <Trait
                  traitName={"Golden"}
                  traitPath={"earring"}
                  handleClick={handleClick}
                  tickerColor={tanColor}
                  percent={33}
                  amount={3333}
                />
                <Trait
                  traitName={"None (Earring)"}
                  traitPath={"earring"}
                  handleClick={handleClick}
                  tickerColor={none}
                  percent={66}
                  amount={6666}
                />
              </div>
              <div className="w-1/3">{/* spacer */}</div>
            </div>
          </section>
          {/* Ear */}
        </div>
      </main>

      {/* M O D A L */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/* traitimg */}
                    <img
                      className="w-full min-w-[300px] pixelated"
                      src={traitImg}
                      alt={traitImg}
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-200 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Statistics;
