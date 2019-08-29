import React from "react";
import Collection from "../Collection/Collection";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-section">
        <img
          src="./movie-theater-film-reel-background-in-seamless-loop_xk6ivnb9__F0000.png"
          className="welcome-image"
          alt=""
        />
        <h1 className="title-home">POPULAR MOVIES</h1>
        <Collection
          cardCount={4}
          sorting="popularity.desc&include_adult=false&include_video=false&page=1"></Collection>
      </div>
      <Link className="button-home-read-more" to="/popular">
        VIEW ALL POPULAR
      </Link>
      <div className="home-section">
        <h1 className="title-home">NEW</h1>
        <Collection
          cardCount={4}
          sorting="release_date.desc&include_adult=false&include_video=false&page=1"></Collection>
      </div>
      <Link className="button-home-read-more" to="/new">
        VIEW ALL NEW
      </Link>
      <div className="home-section">
        <h1 className="title-home">BEST RATED</h1>
        <Collection
          cardCount={4}
          sorting="vote_average.asc&include_adult=false&include_video=false&page=1"></Collection>
      </div>
      <Link className="button-home-read-more" to="/best_voted">
        VIEW ALL WITH BEST RATING
      </Link>
    </div>
  );
}
export default Home;
