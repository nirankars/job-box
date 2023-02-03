import { Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./Components/Common/Layout";
import Home from "./Components/Pages/Home/Home";
import Signin from "./Components/Pages/Singnin/Singnin"
import FindJob from "./Components/Pages/Findjob/FindJob";
import Login from "./Components/Pages/Login/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/FindJob" element={<FindJob />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
