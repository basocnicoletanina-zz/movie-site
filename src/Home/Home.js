import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card.js";

function Home() {
  return (
    <div>
      <Link to="about">Go To About Page</Link>
      <Card sar="bhsdfvhv"></Card>
    </div>
  );
}
export default Home;
