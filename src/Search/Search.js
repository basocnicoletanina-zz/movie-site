import React from "react";
import { API_KEY } from "../Constants";
import Card from "../Card/Card";
import "../Collection/Collection.css";
import "./Search.css";

class Search extends React.Component {
  state = {
    value: "",
    movies: [],
  };
  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  handleClick(e) {
    {
      this.state.value &&
        Promise.all([
          fetch(
            "https://api.themoviedb.org/3/search/movie?" +
              API_KEY +
              "language=en-US&query=" +
              this.state.value +
              "&page=1&include_adult=false"
          ).then(response => response.json()),
          fetch(
            "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
              API_KEY +
              "&language=en-US"
          ).then(response => response.json()),
        ]).then(response => {
          const movieList = response[0].results;
          const genreList = response[1].genres;
          const newMovie = movieList.map(movie => ({
            title: movie.original_title,
            description: movie.overview,
            src:
              movie.poster_path &&
              "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            genres_id: movie.genre_ids,
            genres_name: movie.genre_ids.map(
              genreID => genreList.find(id => id.id === genreID).name
            ),
            id: movie.id,
          }));
          this.setState({
            movies: newMovie,
          });
        });
    }
  }

  render() {
    return (
      <div className="search">
        <div className="input-and-button">
          <input
            type="text"
            className="input-search"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <button
            onClick={this.handleClick.bind(this)}
            className="button-search">
            Search
          </button>
        </div>
        <div className="collection">
          {this.state.movies.map(movie => {
            return (
              <Card
                title={movie.title}
                description={movie.description}
                genres={movie.genres_name}
                src={movie.src}
                to={"/movie/" + movie.id}></Card>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Search;
