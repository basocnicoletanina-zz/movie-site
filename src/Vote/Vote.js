import React from "react";
import Collection from "../Collection/Collection";
import "./Vote.css";

function Vote() {
  return (
    <div>
      <h1 className="title-home-vote">BEST RATED</h1>
      <Collection sorting="vote_average.asc&include_adult=false&include_video=false&page=1"></Collection>
    </div>
  );
}
export default Vote;
