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
    Promise.all([
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
          API_KEY +
          "&sort_by=" +
          this.props.sorting
      ).then(x => x.json()),
      fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY
      ).then(x => x.json()),
    ]).then(results => {
      const movies = results[0].results;
      const genres = results[1].genres;
      const newMovies = movies.map(movie => ({
        title: movie.original_title,
        src:
          movie.poster_path &&
          "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        description: movie.overview,
        id: movie.id,
        genre_names: movie.genre_ids.map(
          genreID => genres.find(genre => genre.id === genreID).name
        ),
      }));

      this.setState({ movies: newMovies });
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
                genres={movie.genre_names}
                src={movie.src}
                to={"/movie/" + movie.id}></Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collection;
