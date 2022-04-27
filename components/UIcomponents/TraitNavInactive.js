import React from "react";
import Link from "next/link";

function TraitNavInactive(props) {
  const href = props.href;
  const title = props.title;
  const dot = props.dot;

  return (
    <li className="flex items-center">
      <Link href={href}>
        <a className="font-nunito min-w-max text-xs hover:underline-color text-gray-500 hover:text-gray-900 duration-400">
          {title}
        </a>
      </Link>
      <span className="mx-1 lg:mx-2">{dot}</span>
    </li>
  );
}

export default TraitNavInactive;
