import React from "react";

function TraitNavActive(props) {
  const title = props.title;
  const dot = props.dot;
  return (
    <li className="flex">
      <a className="font-nunito min-w-max underline-color text-gray-600 font-bold tracking-wide text-sm md:text-lg">
        {title}
      </a>
      <span className="mx-2">{dot}</span>
    </li>
  );
}

export default TraitNavActive;
