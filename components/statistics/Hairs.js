import React from "react";

function Hairs(props) {
  const traitName = props.traitName;
  const traitPath = props.traitPath;
  const handleClick = props.handleClick;
  const tickerColor = props.tickerColor;
  const percent = props.percent;
  const amount = props.amount;

  const hairSrc = traitPath;

  return (
    <dl
      className="flex flex-col text-gray-600 font-bold pl-1 mt-2 hover:opacity-100 cursor-pointer hover:bg-yellow-100 transition duration-300"
      onClick={() => handleClick(traitPath)}
    >
      <dd className="text-xs mt-1 break-all">{traitName}</dd>
      <dt className="text-xs" style={{ color: tickerColor }}>
        {amount} ({percent}%)
      </dt>
      <div>
        <div className="bg-primary w-24">
          <img
            height={64}
            width={64}
            className="mx-auto pixelated bg-primary h-16 object-contain"
            src={hairSrc}
            alt={traitName}
          />
        </div>
      </div>
    </dl>
  );
}

export default Hairs;
