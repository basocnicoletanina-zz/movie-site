import React from "react";
import { API_KEY } from "../Constants";
import { Link } from "react-router-dom";

function Movie(props) {
  return <div>{props.match.params.id}</div>;
}
export default Movie;
