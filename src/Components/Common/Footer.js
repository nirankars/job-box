import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export default function Footer() {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto">
          <div className="pt-20 grid grid-cols-6 gap-x-6 mb-6">
            <div className="">
              <h1 className="text-3xl font-bold">JobBox</h1>
              <p className="mt-2 text-sm">
                JobBox is the heart of the design community and the best
                resource to discover and connect with designers and jobs
                worldwide.
              </p>
              <div className="flex mt-2">
                <BsFacebook />
                <span className="mr-2"></span>
                <AiFillTwitterCircle />
                <span className="mr-2"></span>
                <TiSocialLinkedinCircular />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold mb-2">Resources</h1>
              <p className="text-sm">About Us</p>
              <p className="text-sm">Our Team</p>
              <p className="text-sm">Products</p>
              <p className="text-sm">Contact</p>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold mb-2">Community</h1>
              <p className="text-sm">Features</p>
              <p className="text-sm">Pricing</p>
              <p className="text-sm">Credit</p>
              <p className="text-sm">FAQ</p>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold mb-2">Resources</h1>
              <p className="text-sm">iOS</p>
              <p className="text-sm">Android</p>
              <p className="text-sm">Mocrosoft</p>
              <p className="text-sm">Desktop</p>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold mb-2">More</h1>
              <p className="text-sm">Privacy</p>
              <p className="text-sm">Help</p>
              <p className="text-sm">Terms</p>
              <p className="text-sm">FAQ</p>
            </div>
            <div>
              <h1 className="text-xl font-bold mb-2">Download App</h1>
              <p className="text-sm">
                Download our Apps and get extra 15% Discount on your first
                Order…!
              </p>
              <button className="bg-blue-600 px-2 py-[4px] mr-2 mt-4 rounded-lg text-white text-sm">
                App Store
              </button>
              <button className="bg-blue-600 px-2 py-[4px] mt-4 rounded-lg text-white text-sm">
                Play Store
              </button>
            </div>
          </div>
          <hr />
          <div className="mt-4 pb-2 text-sm grid grid-cols-2 mx-8">
            <p>Copyright © 2022. JobBox all right reserved</p>
            <div className="text-end">
              <button>Privacy Police</button>{" "}
              <button className="mx-4">Terms & Conditions</button>{" "}
              <button>Security</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
