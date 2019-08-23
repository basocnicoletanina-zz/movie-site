import React from "react";
import Collection from "../Collection/Collection";

function Popular() {
  return (
    <div>
      <Collection sorting="popularity.desc&include_adult=false&include_video=false&page=1"></Collection>
    </div>
  );
}
export default Popular;
