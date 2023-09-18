/** @format */
"use client";
import { Star, ChevronDown, Loader2 } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { caculateOffer } from "@/halpers/offer";
import Link from "next/link";
import Image from "next/image";

export default function CourseOverview({ params }) {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  let getData = () => {
    setLoading(true);
    axios
      .get(`api/course/${params.id}`)
      .then((ele) => {
        setLoading(false);
        setData(ele.data);
        console.log(ele.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  // useEffect(() => {
  getData();
  // }, []);
  return loading ? (
    <div className=" text-center mt-3 h-screen items-center ">
      <button className="place-self-center " type="button" disabled>
        <Loader2 className="animate-spin h-12 w-12 mr-3" viewBox="0 0 24 24" />
      </button>
    </div>
  ) : (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <Image
            alt="course image"
            className="h-full w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={data.image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
              #Yoga
            </h2>
            <h1 className="my-4 text-3xl font-semibold text-black">
              {data.title}
            </h1>
            {/* <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">
                  4 Reviews
                </span>
              </span>
            </div> */}
            <div className="border-b-2 inline-block border-yellow-500 ">
              <p className=" font-semibold">About this Course :</p>
            </div>
            <p className="leading-relaxed bg-blue-200 p-3 mt-1 rounded-md">
              {data.description}
            </p>

            <div className="mb-5 mt-6  items-center border-b-2 border-gray-100 pb-5">
              <div className="border-b-2 inline-block border-yellow-500 ">
                <p className=" font-semibold">Benefits :</p>
              </div>
              {data.benifits?.map((ele, i) => (
                <li key={i} className=" bg-yellow-100 my-2 rounded-bl-xl px-2">
                  {ele}
                </li>
              ))}
            </div>
            <div>
              <p className="font-bold text-green-600">
                Off : {caculateOffer(data.mrp, data.price)}%
              </p>
              <div className="flex items-center justify-between">
                <span className="title-font text-xl font-bold text-gray-900">
                  ₹{(+data.price).toLocaleString("en-IN")}
                </span>
                <span className="title-font text-xl font-bold text-gray-500  line-through">
                  mrp ₹{(+data.mrp).toLocaleString("en-IN")}
                </span>
                <Link href={"/contact"}>
                  {" "}
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
