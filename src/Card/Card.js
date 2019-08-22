import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.src} className="image" />
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
        <button className="button">Read more</button>
      </div>
    </div>
  );
}
export default Card;
