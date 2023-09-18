/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCard = ({ title, _id, price, description, image }) => {
  return (
    <div className="border">
      <Image src={image} className="aspect-video w-full rounded-md" alt="" />
      <div className="min-h-min p-3">
        <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
          #{"Yoga"}
        </p>
        <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
          {title}
        </p>
        <p className="mt-4 w-full text-sm leading-normal text-gray-600">
          {description}
        </p>
        <Link href={`/${_id}`}>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
