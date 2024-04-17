import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import "./style.css";
import axios from "axios";
const MovieList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/movies/");
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("data", data);
  return (
    <div className="movie-list">
      <div className="header">
        <div className="icon">
          <i class="fa-solid fa-bars"></i>
        </div>
        <h1>
          MOVIE <span>UI</span>
        </h1>
        <div className="icon-search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="movie-content">
        <h2>Most Popular Movies</h2>
      </div>
      <div className="list-card">
        {data &&
          data.slice(0, 4).map((value, index) => {
            return <MovieCard key={index} item={value} />;
          })}
      </div>
    </div>
  );
};

export default MovieList;
