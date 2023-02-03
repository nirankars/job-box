import React from "react";

import Login from "../Login/Login"
import CategoryBrowser from "./Components/Category-Browser";
import Hero from "./Components/Hero";
import JobLocations from "./Components/Job-Locations";
import JobsOfDay from "./Components/Jobs-Of-Day";
import News from "./Components/News";
import RightJob from "./Components/Right-Job";
import TopRecruiiters from "./Components/Top-Recruiters";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryBrowser />
      <JobsOfDay />
      <RightJob />
      <TopRecruiiters />
      <JobLocations />
      <News />
      <Login/>
    
    </>
  );
}
