import React from "react";
import Hero from "./Components/Hero";
import JobSearch from "./Components/Job-Search";

export default function FindJob() {
  return (
    <>
      <div className="bg-white">
        <Hero />
        <JobSearch />
      </div>
    </>
  );
}
