import React from "react";
import Collection from "../Collection/Collection";
import "./Popular.css";

function Popular() {
  return (
    <div>
      <h1 className="title-home-popular">POPULAR MOVIES</h1>
      <Collection sorting="popularity.desc&include_adult=false&include_video=false&page=1"></Collection>
    </div>
  );
}
export default Popular;
