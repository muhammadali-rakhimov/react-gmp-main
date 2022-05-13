import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App container-fluid min-vh-100 d-flex flex-column">
      <div className="container">
        <div className="row">
          <Header />
        </div>
      </div>
      <div className="container">
        <div className="row flex-grow-1">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default hot(module)(App);
