import React from "react";
import Collection from "../Collection/Collection";

function New() {
  return (
    <div>
      <Collection sorting="release_date.desc&include_adult=false&include_video=false&page=1"></Collection>
    </div>
  );
}
export default New;
