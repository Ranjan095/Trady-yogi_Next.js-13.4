/** @format */

"use client";

import React from "react";
import {
  Menu,
  X,
  MapPin,
  ArrowUpRight,
  ArrowUpRightFromCircle,
  Plus,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const locations = [
  {
    title: "Bengaluru office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN",
  },
  {
    title: "Head office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN",
  },
  {
    title: "Karnataka office",
    timings: "Mon-Sat 9am to 5pm.",
    address:
      "42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN",
  },
];

const users = [
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.pexels.com/photos/6698513/pexels-photo-6698513.jpeg?auto=compress&cs=tinysrgb&w=600",
    position: "Marketing Lead",
  },
  {
    name: "Victória Silva",
    image:
      "https://images.pexels.com/photos/317155/pexels-photo-317155.jpeg?auto=compress&cs=tinysrgb&w=600",
    position: "Back-end developer",
  },
  {
    name: "Gabrielle Fernandez",
    image:
      "https://images.pexels.com/photos/3758056/pexels-photo-3758056.jpeg?auto=compress&cs=tinysrgb&w=600",
    position: "Sales",
  },
];

let developer = [
  {
    name: "Ranjan Yadav",
    image: "https://avatars.githubusercontent.com/u/113471389?v=4",
    position: "Full stack developer",
    portfolio: "https://ranjan095.github.io/",
    position: "Full Stack Developer",
    skills: [
      "Javascript",
      "React",
      "Next.js",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
      "tailwindcss",
      "MUI",
    ],
    description:
      "If you're seeking a MERN Stack developer who prioritises user-friendly apps and top-notch code, I am enthusiastic about the opportunity to Contribute to your team.",
  },
];

export default function AboutPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto max-w-7xl px-4">
      {/* Hero Map */}
      <div className="flex flex-col space-y-8 pb-10 pt-5 md:pt-10">
        <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
          <p className="text-xs font-semibold leading-normal md:text-sm">
            About the organization
          </p>
        </div>
        <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Made with love, right here in India
        </p>
        <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          veritatis voluptates neque itaque repudiandae sint, explicabo
          assumenda quam ratione placeat?
        </p>
      </div>
      <div className="w-full space-y-4">
        <Image
          className="h-[200px] w-full rounded-xl object-cover md:h-full"
          src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
          alt=""
        />
      </div>
      {/* locations */}
      <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
        {locations.map((location) => (
          <div
            key={location.title}
            className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5"
          >
            <MapPin className="h-5 w-5" />
            <p className="w-full text-xl font-semibold  text-gray-900">
              {location.title}
            </p>
            <p className="w-full text-base text-gray-700">{location.timings}</p>
            <p className="text-sm font-medium">{location.address}</p>
          </div>
        ))}
      </div>
      <hr className="mt-20" />
      {/* greetings */}
      <div className="mt-5 flex items-center">
        <div className="space-y-6 md:w-3/4">
          <p className="text-3xl font-bold text-gray-900 md:text-4xl">
            Meet our Instractor
          </p>
          <p className="max-w-4xl text-base text-gray-700 md:text-xl">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
          <div></div>
        </div>
      </div>
      {/* Instractor */}
      <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {users.map((user) => (
          <div className="rounded-md border" key={user.name}>
            <Image
              src={user.image}
              alt={user.name}
              className=" w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
              {user.name}
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              {user.position}
            </p>
          </div>
        ))}
      </div>

      {/*** Developer Team ***/}
      <div className="mt-2 flex flex-col justify-center items-center">
        <div className="text-center mb-3">
          <div className="">
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">
              Meet our Developer
            </p>
          </div>

          {/* developer */}
          <div className="">
            {developer.map((dev, i) => (
              <div
                key={i}
                className="flex max-w-3xl flex-col border items-center rounded-md  md:flex-row my-3"
              >
                <div className="h-full w-full ">
                  <Image
                    src={dev.image}
                    alt={dev.name}
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
                <div>
                  <div className="p-4">
                    <Link
                      className="border-b-2 border-gray-500 rounded-lg"
                      href={dev.portfolio}
                      target="blanck"
                    >
                      {" "}
                      <h1 className="inline-flex items-center text-lg font-semibold hover:text-blue-500">
                        {dev.name} <ArrowUpRight className="ml-2 h-4 w-4" />
                      </h1>
                    </Link>

                    <p className="mt-3 text-sm text-gray-600">
                      {dev.description}
                    </p>
                    <div className="mt-4">
                      {dev.skills.map((skill, i) => {
                        return (
                          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                            {`#${skill}`}
                          </span>
                        );
                      })}

                      {/* <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Next.js
                  </span>
                  <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #Node
                  </span> */}
                    </div>
                    <div className="mt-3 flex items-center space-x-2">
                      <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-700">
                        {dev.position}
                      </p>
                      <Link href={dev.portfolio} target="blanck">
                        <button
                          type="button"
                          className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <ArrowUpRightFromCircle className="h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hiring Banner */}
      <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
        <div className="space-y-6">
          <p className="text-sm font-semibold md:text-base">
            Join our team &rarr;
          </p>
          <p className="text-3xl font-bold md:text-4xl">
            We&apos;re just getting started
          </p>
          <p className="text-base text-gray-600 md:text-lg">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link href={"/contact"}>Join Now</Link>
          </button>
        </div>
        <div className="md:mt-o mt-10 w-full">
          <Image
            src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Getting Started"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
