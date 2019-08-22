import React from "react";
import "./Collection.css";
import { throwStatement } from "@babel/types";

class Collection extends React.Component {
  state = {
    status: "succes",
  };

  componentDidMount() {
    console.log("collection did mount");
    console.log("status:", this.state.status);

    this.setState({ status: "error" });
  }
  render() {
    return (
      <div>
        <h1>Status: {this.state.status}</h1>
        <img
          src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/vfPFP3W/movie-theater-film-reel-background-in-seamless-loop_xk6ivnb9__F0000.png"
          className="welcome-image"
        />
        <h1 className="title-home">POPULAR MOVIES</h1>
        <div className="collection">
          <div className="card">
            <img
              src="https://external-preview.redd.it/zF-DbyIBoAesgK1KnEjUDanMyzKqHnOaa2GWZYrrrUU.jpg?auto=webp&s=c6e05d0b8d45095861311c0f4917821e2ee787b9"
              className="image"
            />
            <div className="text-card">
              <h2 className="title">Just in love</h2>
              <ul className="genre">
                <li className="genre-item">Love</li>
                <li className="genre-item">Thriller</li>
              </ul>
              <p className="text">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature,
              </p>
              <button className="button">Read more</button>
            </div>
          </div>

          <div className="card">
            <img
              src="https://imgc.allpostersimages.com/img/print/u-g-Q10O17X0.jpg?w=550&h=550&p=0"
              className="image"
            />
            <div className="text-card">
              <h2 className="title">Mageie nestingherita</h2>
              <ul className="genre">
                <li className="genre-item">Romantic</li>
                <li className="genre-item">Horror</li>
              </ul>
              <p className="text">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature,
              </p>
              <button className="button">Read more</button>
            </div>
          </div>

          <div className="card">
            <img
              src="https://i.pinimg.com/736x/bd/1b/37/bd1b379cce7cb85a210c5d49056b3b4b--adorable-kittens-pets.jpg"
              className="image"
            />
            <div className="text-card">
              <h2 className="title">Copacul</h2>
              <ul className="genre">
                <li className="genre-item">love</li>
                <li className="genre-item">love</li>
              </ul>
              <p className="text">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature,
              </p>
              <button className="button">Read more</button>
            </div>
          </div>

          <div className="card">
            <img
              src="https://i.pinimg.com/originals/5d/ea/0a/5dea0a04bffe7b86b6ebbb7bacbb255c.jpg"
              className="image"
            />
            <div className="text-card">
              <div>
                <h2 className="title">Strada intunecata a pisicutelor</h2>
                <ul className="genre">
                  <li className="genre-item">love</li>
                  <li className="genre-item">love</li>
                </ul>
                <p className="text">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature,
                </p>
              </div>
              <button className="button">Read more</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
