import React, { useState } from "react";
import "./style.css";
const MovieCard = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="card-movie" onClick={togglePopup}>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <h3>{item.name}</h3>
        <span>
          {item.time} min {item.year}
        </span>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <div className="img-popup">
              <img src={item.image} alt="" />
            </div>
            <h2>{item.name}</h2>
            <span>
              {item.time} min {item.year}
            </span>
            <p>{item.introduce}</p>
            <button className="btn-play">
              <i class="fa-solid fa-play"></i> PLAY MOVIE
            </button>
            <button className="btn-close" onClick={togglePopup}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
