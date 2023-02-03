import React from "react";

export default function LoginForm () {
    return (
        <>
            <div className="bg-white">
                <div className="container mx-auto">
                <div className="container mx-auto text-center pt-16 pb-16">
          <p className="text-sm text-blue-600">Register</p>
          <h1 className="text-3xl font-bold text-[#05264e] my-2">Start for free Today</h1>
          <p className="text-sm text-grey-100 mb-4">
            Access to all features. No credit card required.
          </p>
          <span className="border px-20 py-2 rounded-lg text-xl font-semibold mt-2"> Sign in Google</span>
          <p className="mt-4 text-sm">or continue with</p>
          <p className="text-sm mr-[245px] mb-2">Full Name</p>
          <input type="text" className="px-16 py-2 border"/>
          <p className="text-sm mt-2 mr-[280px]">Email</p>
          <input type="text" className="px-16 py-2 border mt-2"/>
          <p className="text-sm mr-36 mb-2 mt-2">Username or Email address</p>
          <input type="text" className="px-16 py-2 border"/>
          <p className="text-sm mt-2 mr-[252px]">Password</p>
          <input type="text" className="px-16 py-2 border mt-2"/>
          <p className="text-sm mt-2 mr-[235px]">Re-Password</p>
          <input type="text" className="px-16 py-2 border mt-2"/>
          <div className="mt-2">
            <span className="text-sm mr-24">Agree our terms & policy</span>
            <span className="text-sm">Learn More</span>
          </div>
          <button className="bg-[#05264e] text-white px-12 mt-2 py-2 rounded-lg">Submit & Register</button>
          <p className="text-sm mt-2">Don't have an account? Sign up</p  >
        </div>
                </div>
            </div>
        </>
    );
}