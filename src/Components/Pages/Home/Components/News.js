import React from "react";
import img9 from "../Assests/img9.jpg";
import img10 from "../Assests/img10.jpg";
import img11 from "../Assests/img11.jpg";
import img12 from "../Assests/img12.jpg";

export default function News() {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto pt-20">
          <div className="text-center">
            <h1 className="text-[#05264e] text-4xl font-bold">News and Blog</h1>
            <p className="text-[#8997b3] text-lg mt-2">
              Get the latest news, updates and tips
            </p>
          </div>
          <div className="flex gap-x-10 mt-8">
            <div className="border p-2 rounded-xl basis-1/3">
              <img src={img10} className="w-full h-[300px] rounded-xl" alt="" />
              <h1 className="text-[#05264e] text-2xl font-bold mt-2">
                Top 10 Interview Questions
              </h1>
              <p className="mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam vel modi error? Doloremque nam quis inventore, sunt
                pariatur culpa cum magni.
              </p>
              <div className="grid grid-cols-2 text-sm mt-2">
                <p className="mt-2 font-bold">
                  <img
                    src={img12}
                    className="w-[50px] h-[50px] rounded-full"
                    alt=""
                  />
                  Steve Jobs <br /> 06 september
                </p>

                <p>120 companies</p>
              </div>
            </div>
            <div className="border p-2 rounded-xl basis-1/3">
              <img src={img9} className="w-full h-[300px] rounded-xl" alt="" />
              <h1 className="text-[#05264e] text-2xl font-bold mt-2">
                Top 10 Interview Questions
              </h1>
              <p className="mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam vel modi error? Doloremque nam quis inventore, sunt
                pariatur culpa cum magni.
              </p>
              <div className="grid grid-cols-2 text-sm mt-2">
                <p className="mt-2 font-bold">
                  <img
                    src={img12}
                    className="w-[50px] h-[50px] rounded-full"
                    alt=""
                  />
                  Steve Jobs <br /> 06 september
                </p>

                <p>120 companies</p>
              </div>
            </div>
            <div className="border p-2 rounded-xl basis-1/3">
              <img src={img11} className="w-full h-[300px] rounded-xl" alt="" />
              <h1 className="text-[#05264e] text-2xl font-bold mt-2">
                Top 10 Interview Questions
              </h1>
              <p className="mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam vel modi error? Doloremque nam quis inventore, sunt
                pariatur culpa cum magni.
              </p>
              <div className="grid grid-cols-2 text-sm mt-2">
                <p className="mt-2 font-bold">
                  <img
                    src={img12}
                    className="w-[50px] h-[50px] rounded-full"
                    alt=""
                  />
                  Steve Jobs <br /> 06 september
                </p>

                <p>120 companies</p>
              </div>
            </div>
            <div className="border p-2 rounded-xl basis-1/3">
              <img src={img10} className="w-full h-[300px] rounded-xl" alt="" />
              <h1 className="text-[#05264e] text-2xl font-bold mt-2">
                Top 10 Interview Questions
              </h1>
              <p className="mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam vel modi error? Doloremque nam quis inventore, sunt
                pariatur culpa cum magni.
              </p>
              <div className="grid grid-cols-2 text-sm mt-2">
                <p className="mt-2 font-bold">
                  <img
                    src={img12}
                    className="w-[50px] h-[50px] rounded-full"
                    alt=""
                  />
                  Steve Jobs <br /> 06 september
                </p>

                <p>120 companies</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 px-4 py-2 rounded-xl text-white mt-8">
              Load More Posts
            </button>
          </div>
          <div className="bg-blue-600 p-20 text-center rounded-3xl mt-16 mx-40  ">
            <h1 className="text-4xl font-bold text-white">New Things Will Always <br/> Update Regularly</h1>
            <div className="bg-white p-4 mt-12 rounded-xl mx-40 ">
                <input type="text" placeholder="Enter you email here" />
                <button className="bg-blue-600 px-4 py-2 rounded-xl text-white">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
