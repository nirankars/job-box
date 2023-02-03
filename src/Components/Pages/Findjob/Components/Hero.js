import React, { useState } from "react";

export default function Hero() {
    const [showMenu, setShowMenu] = useState(0);
  return (
  
      <div className="container mx-auto">
        <div>
          <div className="bg-[#f2f6fd] px-20 text-center rounded-3xl pt-16 mx-40 pb-10">
            <h1 className="text-4xl font-bold text-[#05264e]">
              <span className="text-[#3c65f5]">22 Jobs</span> Available Now
            </h1>
            <p className="text-[#93a0bb] px-40 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              repellendus magni, atque delectus molestias quis?
            </p>
            <div className="flex gap-10 shadow-lg rounded-lg mt-8 bg-white p-4 items-center relative mx-40">
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
          </div>
        </div>
      </div>
  
  );
}
