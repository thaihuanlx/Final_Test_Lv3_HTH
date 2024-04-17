import React from "react";
import "./style.css";
const MovieCard = ({ item }) => {
  return (
    <div className="card-movie">
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <h3>{item.name}</h3>
        <span>
          {item.time} min {item.year}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
