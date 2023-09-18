/** @format */

import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const FAQ_CARD = ({ title, description }) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
      >
        <span className="flex text-start text-lg font-semibold text-black">
          {title}
        </span>
        {isOpen ? (
          <ChevronDown className=" h-5 w-5 text-gray-500 " />
        ) : (
          <ChevronUp className=" h-5 w-5 text-gray-500 " />
        )}
      </button>
      <div className="px-4 pb-5 sm:px-6 sm:pb-6">
        <p className={`text-gray-500 ${!isOpen ? "hidden" : "block"}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FAQ_CARD;
