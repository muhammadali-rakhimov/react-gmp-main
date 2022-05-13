import React from "react";
import Movie from "./Movie";

const Movies = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="col-4 p-5">
          <Movie />
        </div>
        <div className="col-4 p-5">
          <Movie />
        </div>
        <div className="col-4 p-5">
          <Movie />
        </div>
      </div>
      <div className="d-flex">
        <div className="col-4 p-5">
          <Movie />
        </div>
        <div className="col-4 p-5">
          <Movie />
        </div>
        <div className="col-4 p-5">
          <Movie />
        </div>
      </div>
      <div className="d-flex">
        <div className="col-4 p-5">
          <Movie />
        </div>
        <div className="col-4 p-5">
          <Movie />
        </div>
        <div className="col-4 p-5">
          <Movie />
        </div>
      </div>
    </div>
  );
};

export default Movies;
