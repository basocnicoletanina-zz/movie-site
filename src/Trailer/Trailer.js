import React from "react";
import "./Trailer.css";
import { API_KEY } from "../Constants";

class Trailer extends React.Component {
  state = {
    movie: {},
  };
  componentDidMount() {
    if (this.props.id)
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          this.props.id +
          "/videos?api_key=" +
          API_KEY
      )
        .then(response => response.json())
        .then(movie => {
          console.log("!!!", movie);
          this.setState({
            movie: {
              src: movie.results.length > 0 && movie.results[0].key,
            },
          });
        });
  }

  render() {
    return (
      <div>
        <div className="trailer">
          <p className="text-trailer">TRAILER</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${this.state.movie.src}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}
export default Trailer;
