import React, { useState } from "react";
import img1 from "../Assests/img1.jpg";
import img2 from "../Assests/img2.jpg";

export default function Hero() {
  const [showMenu, setShowMenu] = useState(0);
  return (
    <>
      <div className="container mx-auto mt-20">
        {/* heading part */}
        <div className="flex gap-10">
          <div className="basis-1/2 mt-20">
            <h1 className="text-5xl font-bold">
              The Easiest Way <br /> to Get Your New Job
            </h1>
            <p className="mt-8 text-xl">
              Each month, more than 3 million job seekers turn to <br /> website
              in their search for work, making over 140,000 <br /> applications
              every single day
            </p>
            <div className="flex gap-10 shadow-lg rounded-lg mt-8 bg-white p-4 items-center relative">
              <div>
                <p
                  className="text-xl"
                  onClick={() => {
                    setShowMenu(1);
                  }}
                >
                  Industry
                  <div
                    className={
                      showMenu === 1
                        ? "grid grid-flow-row absolute bg-white top-20 px-6 py-2 rounded-lg"
                        : "hidden"
                    }
                  >
                    <p>software</p>
                    <p className="my-2">finance</p>
                    <p>hardware</p>
                  </div>
                </p>
              </div>
              <div>
                <p
                  className="text-xl"
                  onClick={() => {
                    setShowMenu(2);
                  }}
                >
                  Location
                  <div
                    className={
                      showMenu === 2
                        ? "grid grid-flow-row absolute bg-white top-20 px-6 py-2 rounded-lg"
                        : "hidden"
                    }
                  >
                    <p>Jaipur</p>
                    <p>Delhi</p>
                    <p>Mumbai</p>
                  </div>
                </p>
              </div>
              <div>
                <input type="Hello" placeholder="your keyword" />
              </div>
              <button className="bg-blue-600 px-4 py-2 rounded-xl text-white">
                Search
              </button>
            </div>
            <p className="mt-8 text-xl">
              <span className="font-semibold">Popular Searches:</span>
              <span className="underline underline-offset-4">
                 Designer,
              </span>{" "}
              <span className="underline underline-offset-4"> Web,</span>{" "}
              <span className="underline underline-offset-4"> IOS,</span>{" "}
              <span className="underline underline-offset-4"> Developer,</span>{" "}
              <span className="underline underline-offset-4"> PHP,</span>{" "}
              <span className="underline underline-offset-4"> Senior,</span>
              <span className="underline underline-offset-4"> Engineer</span>,
            </p>
          </div>

          {/* img part */}

          <div className="basis-1/2 relative">
            <div className="absolute top-12">
              <img
                className="w-96 h-72 rounded-t-2xl rounded-br-2xl"
                src={img1}
                alt="img"
              />
            </div>
            <div className="absolute top-64 left-40">
              <img
                className="w-82 h-72 rounded-t-2xl rounded-br-2xl"
                src={img2}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
