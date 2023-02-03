import React from "react";
import img1 from "../Assests/img1.jpg";
import img3 from "../Assests/img3.jpg";

export default function RightJob() {
  return (
    <>
      <div className="bg-white pt-20 pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="relative">
              <img
                className="w-[300px] h-[350] absolute rounded-xl"
                src={img3}
                alt=""
              />
              <img
                className="w-[520px] h-[470px] absolute top-20 left-20 z-10 rounded-xl"
                src={img1}
                alt=""
              />
              <img
                className="w-[300px] h-[350] top-[400px] right-0 absolute rounded-xl"
                src={img3}
                alt=""
              />
            </div>
            <div className="pt-20 ml-16">
              <p className="text-[#a0abb8] text-4xl font-bold">
                Millions of job
              </p>
              <h1 className="text-[#05264e] text-6xl font-bold">
                Find the one That's <br />{" "}
                <span className="text-[#3c65f5]">right</span> for you
              </h1>
              <p className="text-sm mt-12">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide. The right job is out there.
              </p>
              <div className="flex">
                <button className="bg-blue-600 px-4 py-2 rounded-xl text-white mt-8">
                  Search Jobs{" "}
                </button>
                <p className="ml-4 mt-10 underline underline-offset-2">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-10 mt-80">
            <div className="text-center">
              <h1 className="text-[#3c65f5] text-5xl font-bold">25k+</h1>
              <p className="text-[#05264e] text-2xl font-semibold mx-4">
                Completed Cases
              </p>
              <p className="text-[#ac7764] text-sm">
                We always provide people a complete solution upon focused of any
                business
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-[#3c65f5] text-5xl font-bold">17k+</h1>
              <p className="text-[#05264e] text-2xl font-semibold mx-4">
                Our Office
              </p>
              <p className="text-[#ac7764] text-sm">
                We always provide people a complete solution upon focused of any
                business
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-[#3c65f5] text-5xl font-bold">86k+</h1>
              <p className="text-[#05264e] text-2xl font-semibold mx-4">
                Skilled People
              </p>
              <p className="text-[#ac7764] text-sm">
                We always provide people a complete solution upon focused of any
                business
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-[#3c65f5] text-5xl font-bold">28k+</h1>
              <p className="text-[#05264e] text-2xl font-semibold mx-4">
                Happy Clients
              </p>
              <p className="text-[#ac7764] text-sm">
                We always provide people a complete solution upon focused of any
                business
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
