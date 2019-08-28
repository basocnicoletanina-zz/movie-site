import React from "react";
import { API_KEY } from "../Constants";
import Card from "../Card/Card";
import "../Collection/Collection.css";

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
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        API_KEY +
        "&query=" +
        this.state.value
    )
      .then(response => response.json())
      .then(obj => {
        this.setState({
          movies: obj.results.map(movie => ({
            title: movie.original_title,
            src:
              movie.poster_path &&
              "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            description: movie.overview,
            genres: movie.genre_ids,
            id: movie.id,
          })),
        });
      });
  }

  render() {
    return (
      <div className="collection">
        <input
          type="text"
          className="input-search"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleClick.bind(this)} className="button-search">
          Search
        </button>
        {this.state.movies.map(movie => {
          return (
            <Card
              title={movie.title}
              description={movie.description}
              genres={movie.genres}
              src={movie.src}
              to={"/movie/" + movie.id}></Card>
          );
        })}
      </div>
    );
  }
}
export default Search;
