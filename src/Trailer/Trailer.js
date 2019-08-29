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
          this.setState({
            movie: {
              src: movie.results.length > 0 && movie.results[0].key,
            },
          });
        });
  }

  render() {
    return (
      <div className="trailer">
        {this.state.movie.src ? (
          <iframe
            width="900"
            height="576"
            src={`https://www.youtube.com/embed/${this.state.movie.src}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        ) : (
          <img
            className="no-trailer"
            src="https://cdn.windowsreport.com/wp-content/uploads/2018/02/windows-10-error-video-could-not-be-decoded-3.png"
          />
        )}
      </div>
    );
  }
}
export default Trailer;
