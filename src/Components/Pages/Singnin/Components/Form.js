import React from "react";

export default function Form() {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto text-center pt-16 pb-16">
          <p className="text-sm text-blue-600">Welcome Back!</p>
          <h1 className="text-3xl font-bold text-[#05264e] my-2">Member Login</h1>
          <p className="text-sm text-grey-100 mb-4">
            Access to all features. No credit card required.
          </p>
          <span className="border px-20 py-2 rounded-lg text-xl font-semibold"> Sign in Google</span>
          <p className="mt-4 text-sm">or continue with</p>
          <p className="text-sm mr-36 mb-2">Username or Email address</p>
          <input type="text" className="px-16 py-2 border"/>
          
          <div className="mt-2">
            <span className="text-sm mr-28">Remember me</span>
            <span className="text-sm">Forgot Password</span>
          </div>
          <button className="bg-[#05264e] text-white px-12 mt-2 py-2 rounded-lg">Login</button>
          <p className="text-sm mt-2">Don't have an account? Sign up</p  >
        </div>
      </div>
    </>
  );
}
