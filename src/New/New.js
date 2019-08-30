import React from "react";
import Collection from "../Collection/Collection";
import "./New.css";

function New() {
  return (
    <div>
      <h1 className="title-home-new">NEW MOVIES</h1>
      <Collection sorting="release_date.desc&include_adult=false&include_video=false&page=1"></Collection>
    </div>
  );
}
export default New;
