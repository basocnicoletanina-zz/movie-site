import React from "react";
import "./Collection.css";
import Card from "../Card/Card";
import { API_KEY } from "../Constants";
import { tsImportEqualsDeclaration } from "@babel/types";

class Collection extends React.Component {
  state = {
    status: "succes",
    movies: [],
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
        API_KEY +
        "&sort_by=" +
        this.props.sorting
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          movies: response.results.map(movie => {
            return {
              title: movie.original_title,
              src:
                movie.poster_path &&
                "https://image.tmdb.org/t/p/w500" + movie.poster_path,
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
        <div className="collection">
          {this.state.movies.slice(0, this.props.cardCount).map(movie => {
            return (
              <Card
                title={movie.title}
                description={movie.description}
                genres={movie.genres}
                src={movie.src}></Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collection;
