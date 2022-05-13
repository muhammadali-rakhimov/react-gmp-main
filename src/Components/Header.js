import React, { useState } from "react";
import styled from "./Header.module.css";
import wallpaper from "../assets/images/Bitmapwallpaper.png";

const Header = () => {
  const [input, setInput] = useState('')

  return (
    <>
      <nav
        style={{ backgroundImage: `url(${wallpaper})` }}
        className={`${styled.parent} navbar navbar-light p-5`}
      >
        <div className={`container-fluid ${styled.containerHeader}`}>
          <a href="/" className={styled.logo}>
            <b>netflix</b>
            roulette
          </a>
          <button className={`${styled.addMovie} p-2`}>+ ADD MOVIE</button>
        </div>
        <div className={`${styled.find} col p-5`}>
          <div className="container">
            <h1>FIND YOUR MOVIE</h1>
            <div>
              <input
                type="text"
                className={`${styled.input} col col-md-9 p-3`}
                placeholder="What do you want to watch?"
                onChange={e => setInput(e.target.value)}
              />
              <input
                type="submit"
                className={`${styled.inputSubmit} col col-md-3 p-3`}
                value="SEARCH"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
