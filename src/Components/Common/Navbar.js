import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(0);
  return (
    <>
      <div className="container mx-auto mt-8 pb-8">
        <div className="flex ">
          <div className="flex-auto text-start text-3xl font-bold">
            <h1>JobBox</h1>
          </div>
          <div className="flex-auto text-2xl font-semibold relative">
            <div className="grid grid-flow-col">
              <p
                onClick={() => {
                  setShowMenu(1)
                }}
              >
                Home
                <div
                  className={showMenu === 1 ? "grid grid-flow-row absolute bg-white px-6 py-2 rounded-lg top-8" : "hidden"}
                >
                  <p>Home1</p>
                  <p>Home2</p>
                  <p>Home3</p>
                  <p>Home4</p>
                  <p>Home5</p>
                </div>
              </p>
              <Link to="/FindJob"
                onClick={() => {
                  setShowMenu(2);
                }}
              >
                Find a job
                <div
                  className={showMenu === 2 ? "grid grid-flow-row absolute bg-white px-6 py-2 rounded-lg top-8" : "hidden"}
                >
                  <p>Find a job 1</p>
                  <p>Find a job 2</p>
                  <p>Find a job 3</p>
                  <p>Find a job 4</p>
                  <p>Find a job 5</p>
                </div>
              </Link>
              <p
                onClick={() => {
                  setShowMenu(3);
                }}
              >
                Recruiters
                <div
                  className={showMenu === 3 ? "grid grid-flow-row absolute bg-white px-6 py-2 rounded-lg top-8" : "hidden"}
                >
                  <p>Recruiters 1</p>
                  <p>Recruiters 2</p>
                  <p>Recruiters 3</p>
                  <p>Recruiters 4</p>
                  <p>Recruiters 5</p>
                </div>
              </p>
              <p
                onClick={() => {
                  setShowMenu(4);
                }}
              >
                Candidates
                <div
                  className={showMenu === 4 ? "grid grid-flow-row absolute bg-white px-6 py-2 rounded-lg top-8" : "hidden"}
                >
                  <p>Candidates 1</p>
                  <p>Candidates 2</p>
                  <p>Candidates 3</p>
                  <p>Candidates 4</p>
                  <p>Candidates 5</p>
                </div>
              </p>
              <p
                onClick={() => {
                  setShowMenu(5);
                }}
              >
                Pages
                <div className={showMenu === 5 ? "grid grid-flow-row absolute bg-white px-6 py-2 rounded-lg top-8" : "hidden"}>
                  <p>Page 1</p>
                  <p>Page 2</p>
                  <p>Page 3</p>
                  <p>Page 4</p>
                  <p>Page 5</p>
                </div>
              </p>
              <p>Contact</p>
            </div>
          </div>
          <div className="flex-auto text-end">
          <Link to="/Login" className="underline underline-offset-2 mr-8">Register</Link>
            <Link to="/Signin"  className="bg-blue-600 px-4 py-2 rounded-xl text-white text-2xl">Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
}
