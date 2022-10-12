import React from "react";
import propTypes from "prop-types";
import rigo from "../../img/rigo-baby.jpg";

const postcard = (
  <div className="card m-3 p-0" style={{ width: "16rem" }}>
    <img src={rigo} class="card-img-top border-bottom" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
    <div className="border-top text-center p-2 bg-light">
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

export default postcard;
