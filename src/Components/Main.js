import React, { useState } from "react";
import styled from "./Main.module.css";
import Movies from "./Movies";

const Main = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styled.parent}`}>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#1">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#3">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#4">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#5">
                Link
              </a>
            </li>
          </ul>
          <div className="">
            <button onClick={() => setToggle(!toggle)}>RELEASE DATE</button>
            <ul
              style={{ visibility: toggle ? "visible" : "hidden" }}
              className={`${styled.dropdownList} px-4 py-2`}
            >
              <li>
                <a href="#First">First</a>
              </li>
              <li>
                <a href="#Second">Second</a>
              </li>
              <li>
                <a href="#Third">Third</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
      <p>39 movies found</p>
      <Movies />
    </div>
  );
};

export default Main;
