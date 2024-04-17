import React from "react";
import "./style.css";

const MoviePopup = ({ value, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-content">
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
          <div>
            <img src={value.image} alt="" />
          </div>
          <div>
            <h3>{value.name}</h3>
            <span>
              {value.time} min {value.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;
