import React from "react";
import "./Collection.css";
import Card from "../Card/Card";
import { API_KEY } from "../Constants";

class Collection extends React.Component {
  state = {
    status: "succes",
    movies: [],
  };

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY)
      .then(response => response.json())
      .then(response => {
        this.setState({
          movies: response.results.map(movie => {
            return {
              title: movie.original_title,
              src: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              description: movie.overview,
              genres: movie.genre_ids,
            };
          }),
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Status: {this.state.status}</h1>
        <img
          src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/vfPFP3W/movie-theater-film-reel-background-in-seamless-loop_xk6ivnb9__F0000.png"
          className="welcome-image"
          alt=""
        />
        <h1 className="title-home">POPULAR MOVIES</h1>
        <div className="collection">
          {this.state.movies.map((movie, index) => {
            return (
              <Card
                key={index}
                src={movie.src}
                title={movie.title}
                genres={movie.genres}
                description={movie.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collection;
