/** @format */

import Image from "next/image";
import React from "react";

export function HomeHeader() {
  return (
    <div>
      <section className="px-2 py-10 md:px-0">
        <div className="mx-auto max-w-4xl">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="relative h-48 w-48 flex-shrink-0">
              <Image
                className="relative h-48 w-48 rounded-full object-cover"
                src="https://scontent.fpat1-1.fna.fbcdn.net/v/t39.30808-6/298100636_3266597176939669_8064129111758171061_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_ohc=2WkRGzoKfaMAX8-C3AU&_nc_ht=scontent.fpat1-1.fna&oh=00_AfBhBmrUy_9ipMiz2Q4Tqn1vV8qr3oxA6REm99diCdyZHw&oe=650D181E"
                alt=""
              />
            </div>

            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-black">
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam aliquam repellat laborum minima tempore deserunt
                  explicabo placeat! Fugit, molestias nesciunt.”
                </p>
              </blockquote>
              <p className="mt-7 text-lg font-semibold text-black">
                Trady-Yogi
              </p>
              <p className="mt-1 text-base text-gray-600">Trady-yogi Founder</p>
            </div>
          </div>
        </div>
      </section>
      {/*** Middle section ***/}
      <div className="border">
        <figure className="mx-auto max-w-2xl">
          <h1 className="mb-4 text-4xl font-semibold text-black">
            More than just learning
          </h1>
          <blockquote className="mt-10 text-xl text-gray-900">
            <p>
              Whether you want to revitalize your mind and body or take a break
              from your hectic lifestyle, we have you covered. To bring in a new
              you or begin a new career path, explore our countless
              life-changing courses, which have transformed millions of people
              over the last 10 decades. Every course has been designed to
              deliver organic and holistic results by incorporating 103 years of
              legacy, research, and knowledge. Choose now from our innumerable
              courses to get started on your journey of transformation!
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-x-6">
            <div className="isolate flex -space-x-2">
              <Image
                className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan_Abromov"
              />
              <Image
                className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
                alt="Guillermo_Rauch"
              />
              <Image
                className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
                alt="Lee_Robinson"
              />
              <Image
                className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
                alt="Delba"
              />
            </div>
            <div>
              <p className="font-semibold text-black">200+ Users</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
