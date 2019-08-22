import React from "react";
import "./Header.css";
import { API_KEY } from "../Constants.js";

function Header(props) {
  fetch("https://api.themoviedb.org/3/movie/550?api_key=" + API_KEY).then(res =>
    res.json().then(json => console.log(json))
  );
  return (
    <header className="header">
      <div className="header-logo">
        <img src={props.imageSource} alt="" className="logo" />
      </div>
      <ul className="header-menu">
        {props.menu.map(item => (
          <li className="lists-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
