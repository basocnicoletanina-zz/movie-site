import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

class Card extends React.Component {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render(props) {
    return (
      <div className="card">
        {this.props.src ? (
          <img src={this.props.src} className="image" alt="" />
        ) : (
          <img
            className="no-image"
            src="https://s3-ap-southeast-1.amazonaws.com/silverscreen-photos/1534489151m000001.jpg"
            alt=""
          />
        )}
        <div className="text-card">
          <h1 className="title">{this.props.title}</h1>

          {this.props.genres.length > 0 ? (
            <ul className="genre">
              {this.props.genres.map((genre, index) => (
                <li key={index} className="genre-item">
                  {genre}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-genres-card">No genres available.</p>
          )}

          {this.props.description ? (
            <p className="text">{this.props.description}</p>
          ) : (
            <p className="plot-unknown-card">Plot Unknown.</p>
          )}

          <Link
            onClick={this.scrollToTop.bind(this)}
            to={this.props.to}
            className="button">
            Read more
          </Link>
        </div>
      </div>
    );
  }
}
export default Card;
