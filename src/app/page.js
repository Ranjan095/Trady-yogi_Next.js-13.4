/** @format */
"use client";
import CourseCard from "@/component/CourseCard";
import FAQ from "@/component/FAQ";
import { HomeHeader } from "@/component/HomeHeader";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);

  let getData = () => {
    setLoading(true);
    axios
      .get("/api/course")
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="m-1 md:m-2 lg:m-3">
      <HomeHeader />

      {/*** Course Card ***/}
      <h1 className="text-2xl font-bold text-center mt-10">Our Courses</h1>
      {loading && (
        <div className=" text-center mt-3">
          <button className="place-self-center " type="button" disabled>
            <Loader2
              className="animate-spin h-12 w-12 mr-3"
              viewBox="0 0 24 24"
            />
          </button>
        </div>
      )}
      <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((course, i) => {
          return <CourseCard key={i} {...course} />;
        })}
      </div>
      {/*** FAQ section ***/}
      <FAQ />
    </div>
  );
}
