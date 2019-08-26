import React from "react";
import { API_KEY } from "../Constants";
import { Link } from "react-router-dom";
import "./Movie.css";
import Actors from "../Actors/Actors";
import Trailer from "../Trailer/Trailer";

class Movie extends React.Component {
  state = {
    movie: {},
    cast: [],
  };

  componentDidMount() {
    if (this.props.match.params.id)
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          this.props.match.params.id +
          "?api_key=" +
          API_KEY
      )
        .then(response => response.json())
        .then(movie => {
          this.setState({
            movie: {
              trailer: "",
              title: movie.original_title,
              description: movie.overview,
              src:
                movie.poster_path &&
                "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              genres: movie.genres.name,
              id: movie.id,
            },
          });
        });
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.props.match.params.id +
        "/credits?api_key=" +
        API_KEY
    )
      .then(response => response.json())
      .then(response => {
        // console.log("cast", response);
        this.setState({
          cast: response.cast.map(actor => {
            return {
              name: actor.name,
              src:
                actor.profile_path &&
                "https://image.tmdb.org/t/p/w500" + actor.profile_path,
              character: actor.character,
            };
          }),
        });
      });
  }

  render() {
    return (
      <div className="individual-card-movie">
        <div className="image-and-text">
          {this.state.movie.src ? (
            <img src={this.state.movie.src} className="image-movie" />
          ) : (
            <img
              className="image-movie"
              src="https://s3-ap-southeast-1.amazonaws.com/silverscreen-photos/1534489151m000001.jpg"
            />
          )}
          <div className="text-card-movie">
            <p className="title-movie"> {this.state.movie.title}</p>
            <p className="genre-movie">{this.state.movie.genres}</p>
            <p className="description-movie">{this.state.movie.description} </p>
          </div>
          <Trailer id={this.props.match.params.id}></Trailer>
        </div>
        <Actors cast={this.state.cast}></Actors>
      </div>
    );
  }
}

export default Movie;
