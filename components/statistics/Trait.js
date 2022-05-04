import React from "react";
import Image from "next/image";

function Trait(props) {
  const traitName = props.traitName;
  const handleClick = props.handleClick;
  const tickerColor = props.tickerColor;
  const percent = props.percent;
  const centered = props.centered;
  const amount = props.amount;
  const traitPath = props.traitPath;
  return (
    <>
      <dl
        // className="mb-2 rounded-md w-5/12 md:w-36 max-h-40  font-nunito trait-width text-gray-600 font-bold mr-1 flex flex-col cursor-pointer"
        className="mb-4 rounded-md w-36 md:w-52  text-gray-600 font-nunito font-bold mr-1 flex flex-wrap flex-col cursor-pointer"
        onClick={() =>
          handleClick("/traits_" + traitPath + "/" + traitName + ".png")
        }
        style={{ margin: centered }}
      >
        <dd className="text-xs md:text-sm tracking-wide font-bold  text-gray-700 mt-1 break-words">
          {traitName}
        </dd>
        {/* <dt className="text-xs text-gray-500 tracking-wide">
          {amount} / 10000 ({percent}%)
        </dt> */}
        {/* <svg
          className="w-full h-6 border-solid"
          style={{ background: tickerColor }}
        ></svg> */}
        <img
          // h-16
          className="pixelated bg-primary mb-1 w-36 md:w-48 object-contain"
          src={"/traits_" + traitPath + "/" + traitName + ".png"}
          alt={traitName}
        />
      </dl>
    </>
  );
}

export default Trait;
