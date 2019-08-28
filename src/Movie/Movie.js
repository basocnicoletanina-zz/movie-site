import React from "react";
import { API_KEY } from "../Constants";
import { Link } from "react-router-dom";
import "./Movie.css";
import Actors from "../Actors/Actors";
import Trailer from "../Trailer/Trailer";

class Movie extends React.Component {
  state = {
    movie: { title: "", description: "", src: "", id: "", genres: [] },
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
              title: movie.original_title,
              description: movie.overview,
              src:
                movie.poster_path &&
                "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              genres: movie.genres,
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

            {this.state.movie.genres > 0 ? (
              <ul className="list-genres">
                {this.state.movie.genres.map(genre => (
                  <li className="list-genre">{genre.name}</li>
                ))}
              </ul>
            ) : (
              <p className="no-genres">No genres available.</p>
            )}

            {this.state.movie.description ? (
              <p className="description-movie">
                {this.state.movie.description}
              </p>
            ) : (
              <p className="plot-unknown">Plot Unknown.</p>
            )}

            <Trailer id={this.props.match.params.id}></Trailer>
            <Actors cast={this.state.cast}></Actors>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
