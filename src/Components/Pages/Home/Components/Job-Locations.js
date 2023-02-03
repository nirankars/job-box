import React from "react";
import img7 from "../Assests/img7.jpg";
import img5 from "../Assests/img5.jpg";
import img6 from "../Assests/img6.jpg";

export default function JobLocations() {
  return (
    <>
      <div className="bg-white pt-20">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-[#05264e] text-4xl font-bold">
              Jobs by Locations
            </h1>
            <p className="text-[#8997b3] text-lg mt-2">
              Find your favourite jobs and get the benefits of yourself
            </p>
          </div>
          <div className="flex gap-x-10 mt-8">
            <div className="border p-2 rounded-xl basis-1/4">
              <img src={img7} className="w-full h-[300px] rounded-xl" alt="" />
              <h1 className="text-[#05264e] text-2xl font-bold">Lonon, UK</h1>
              <div className="grid grid-cols-2 text-sm">
                <p>5 Vacancies</p>
                <p>120 companies</p>
              </div>
            </div>
            <div className="border p-2 rounded-xl basis-1/3">
              <img src={img6} className="w-full h-[300px] rounded-xl" alt="" />
              <h1 className="text-[#05264e] text-2xl font-bold">Lonon, UK</h1>
              <div className="grid grid-cols-2 text-sm">
                <p>5 Vacancies</p>
                <p>120 companies</p>
              </div>
            </div>
            <div className="border p-2 rounded-xl basis-1/3">
              <img src={img5} className="w-full h-[300px] rounded-xl" alt="" />
              <h1 className="text-[#05264e] text-2xl font-bold">Lonon, UK</h1>
              <div className="grid grid-cols-2 text-sm">
                <p>5 Vacancies</p>
                <p>120 companies</p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-10 mt-8">
            <div className="border p-2 rounded-xl basis-1/3">
              <img src={img5} className="w-full h-[300px] rounded-xl" alt="" />
              <h1 className="text-[#05264e] text-2xl font-bold">Lonon, UK</h1>
              <div className="grid grid-cols-2 text-sm">
                <p>5 Vacancies</p>
                <p>120 companies</p>
              </div>
            </div>

            <div className="border p-2 rounded-xl basis-1/3">
              <img src={img6} className="w-full h-[300px] rounded-xl" alt="" />
              <h1 className="text-[#05264e] text-2xl font-bold">Lonon, UK</h1>
              <div className="grid grid-cols-2 text-sm">
                <p>5 Vacancies</p>
                <p>120 companies</p>
              </div>
            </div>
            <div className="border p-2 rounded-xl basis-1/4">
              <img src={img7} className="w-full h-[300px] rounded-xl" alt="" />
              <h1 className="text-[#05264e] text-2xl font-bold">Lonon, UK</h1>
              <div className="grid grid-cols-2 text-sm">
                <p>5 Vacancies</p>
                <p>120 companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
