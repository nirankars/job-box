import React from "react";
import { CiBullhorn } from "react-icons/ci";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";

export default function CategoryBrowser() {
  return (
    <>
    <div className="bg-white">
    <div className="container mx-auto mt-60 pt-20 text-center relative">
        <div>
          <h1 className="text-3xl font-bold">Browse by category</h1>
          <p className="mt-4 text-xl">
            Find the job that’s perfect for you. about 800+ new jobs everyday
          </p>
        </div>
        <button className="absolute -left-8 bottom-10">
          <BsArrowLeftSquareFill />
        </button>
        <button className="absolute -right-8 bottom-10">
          <BsArrowRightSquareFill />
        </button>
        <div className="flex gap-10 mt-16">
          <div className="border px-6 py-2 rounded-xl bg-white border-blue-700">
            <button>
              <CiBullhorn />
            </button>

            <div>
              <h1 className="font-bold text-blue-900">Marketing & Sale</h1>
              <p>1526 jobs</p>
            </div>
          </div>
          <div className="border px-6 py-2 rounded-xl bg-white border-blue-700">
            <button>
              <CiBullhorn />
            </button>

            <div>
              <h1 className="font-bold text-blue-900">Marketing & Sale</h1>
              <p>1526 jobs</p>
            </div>
          </div>
          <div className="border px-6 py-2 rounded-xl bg-white border-blue-700">
            <button>
              <CiBullhorn />
            </button>

            <div>
              <h1 className="font-bold text-blue-900">Marketing & Sale</h1>
              <p>1526 jobs</p>
            </div>
          </div>
          <div className="border px-6 py-2 rounded-xl bg-white border-blue-700">
            <button>
              <CiBullhorn />
            </button>

            <div>
              <h1 className="font-bold text-blue-900">Marketing & Sale</h1>
              <p>1526 jobs</p>
            </div>
          </div>
          <div className="border px-6 py-2 rounded-xl bg-white border-blue-700">
            <button>
              <CiBullhorn />
            </button>

            <div>
              <h1 className="font-bold text-blue-900">Marketing & Sale</h1>
              <p>1526 jobs</p>
            </div>
          </div>
          <div className="border px-6 py-2 rounded-xl bg-white border-blue-700">
            <button>
              <CiBullhorn />
            </button>

            <div>
              <h1 className="font-bold text-blue-900">Marketing & Sale</h1>
              <p>1526 jobs</p>
            </div>
          </div>
          <div className="border px-6 py-2 rounded-xl bg-white border-blue-700">
            <button>
              <CiBullhorn />
            </button>

            <div>
              <h1 className="font-bold text-blue-900">Marketing & Sale</h1>
              <p>1526 jobs</p>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col mt-16 p-12 border border-blue-700 w-[900px] ml-[325px]  gap-10 rounded-xl bg-white shadow-2xl">
          <div className= "">
            <p className="text-lg font-bold text-[#a0abb8]">We are</p>
            <h1 className="text-3xl font-bold text-[#05264e] ml-8">HIRING</h1>
          </div>
          <div className="">
            <p className="text-lg">
              Let’s Work Together <br />& Explore Opportunities
            </p>
          </div>
          <div className="">
            <button className="bg-blue-600 px-4 py-2 rounded-xl text-white my-auto">Apply Now</button>
          </div>
        </div>
      </div>

    </div>
          </>
  );
}
