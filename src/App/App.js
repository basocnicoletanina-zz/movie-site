import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Home from "../Home/Home";
import About from "../About/About";
import Popular from "../Popular/Popular";
import New from "../New/New";
import Movie from "../Movie/Movie";
import Search from "../Search/Search";

function App() {
  return (
    <Router>
      <div className="app">
        <Header
          imageSource="https://www.logospng.com/images/117/console-playlist-genre-intro-videos-playlists-amp-playlist-117795.png"
          anotherProps="Ma"
          menu={[
            { link: "/popular", title: "Popular" },
            { link: "/new", title: "New" },
            { link: "/search", title: "Search" },
          ]}></Header>
        <div className="app-content">
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route exact path="/new" component={New}></Route>
          <Route path="/popular" exact component={Popular}></Route>
          <Route path="/movie/:id" exact component={Movie}></Route>
          <Route path="/search" extact component={Search}></Route>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
