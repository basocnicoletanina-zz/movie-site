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
        <p className="title">{props.title}</p>

        {props.genres.length > 0 ? (
          <ul className="genre">
            {props.genres.map((genre, index) => (
              <li key={index} className="genre-item">
                {genre}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-genres-card">No genres available.</p>
        )}

        {props.description ? (
          <p className="text">{props.description}</p>
        ) : (
          <p className="plot-unknown-card">Plot Unknown.</p>
        )}

        <Link to={props.to} className="button">
          Read more
        </Link>
      </div>
    </div>
  );
}
export default Card;
