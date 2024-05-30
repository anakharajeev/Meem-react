import React from "react";

export const Item = ({ heading, details, backgroundImage }) => {
  return (
    <div className="item">
      <div
        className="service-box"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="service-content">
          <h2>{heading}</h2>
          <p>{details}</p>
          <a href="service-details.html">
            <button className="btn-curve btn-lit readmore-btn sm-btn wow">
              <span>Read More</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
