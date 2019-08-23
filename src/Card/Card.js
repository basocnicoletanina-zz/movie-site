import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      {props.src ? (
        <img src={props.src} className="image" />
      ) : (
        <img
          className="no-image"
          src="https://s3-ap-southeast-1.amazonaws.com/silverscreen-photos/1534489151m000001.jpg"
        />
      )}
      <div className="text-card">
        <h2 className="title">{props.title}</h2>
        <ul className="genre">
          {props.genres.map((genre, index) => (
            <li key={index} className="genre-item">
              {genre}
            </li>
          ))}
        </ul>
        <p className="text">{props.description}</p>

        <Link to={props.to} className="button">
          Read more
        </Link>
      </div>
    </div>
  );
}
export default Card;
