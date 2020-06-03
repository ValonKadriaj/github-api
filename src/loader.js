import React from 'react';
import './loader.css';
const Loader = () => (
  <div>
    <div className="showbox">
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="2"
            stroke-miterlimit="10"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default Loader;
