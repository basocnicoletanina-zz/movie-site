import React from "react";
import { Link } from "react-router-dom";
import Collection from "../Collection/Collection";

function Home() {
  return (
    <div>
      <Link to="about">Go To About Page</Link>
      <Collection collectionIdeea="bjksdbfviwebvjb"></Collection>
    </div>
  );
}

export default Home;
