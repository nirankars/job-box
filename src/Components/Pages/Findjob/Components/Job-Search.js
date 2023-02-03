import React from "react";

export default function JobSearch() {
  return (
    <>
      <div className="container mx-auto mt-4 mb-4">
        <div className="flex">
          <div>
            <span className="text-lg font-semibold text-[#05264e]">
              Advance Filter
            </span>
            <span className="ml-20">Reset</span>
            <hr />
            <input
              type="text"
              className="w-full mt-2 py-2 px-2"
              placeholder="Location"
            />
            {/* industry starts */}
            <div>
              <h1 className="text-lg font-semibold text-[#05264e]">Industry</h1>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>All</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Software</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Finance</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Recruiting</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Management</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2 mb-4">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Advertising</span>
                </div>

                <p className=" text-end">180</p>
              </div>
            </div>
            <hr />
            {/* Salary Package starts */}
            <div>
              <h1 className="text-lg font-semibold text-[#05264e]">
                Salary Package
              </h1>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>All</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>$0k-$20k</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>$20k-$40k</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>$40k-$60K</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>$60k-$80k</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2 mb-4">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>$80k-$100k</span>
                </div>

                <p className=" text-end">180</p>
              </div>
            </div>
            <hr />
            {/* Popular Keyword starts */}
            <div className="mt-2">
              <h1 className="text-lg font-semibold text-[#05264e]">
                Popular Keyword
              </h1>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>All</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Software</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Developer</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2 mb-4">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Web</span>
                </div>

                <p className=" text-end">180</p>
              </div>
            </div>
            <hr />

            {/* Experience starts */}
            <div>
              <h1 className="text-lg font-semibold text-[#05264e]">Experience Leve;</h1>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Internship</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Software</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Entry Level</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Associate</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Mid Level</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2 mb-4">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Director</span>
                </div>

                <p className=" text-end">180</p>
              </div>
            </div>
            <hr />
            {/* Location start */}
            <div className="mt-2">
              <h1 className="text-lg font-semibold text-[#05264e]">
                Onsite/Remote
              </h1>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>On-site</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Remote</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              <div className="grid grid-cols-2 mt-2">
                <div>
                  <input
                    type="text"
                    className="w-[20px] border rounded-md mr-2"
                  />{" "}
                  <span>Hybrid</span>
                </div>

                <p className=" text-end">180</p>
              </div>
              
            </div>
            <hr />
          </div>

          <div className="ml-4">hi</div>
        </div>
      </div>
    </>
  );
}
