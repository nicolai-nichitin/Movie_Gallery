import React from "react";
import "./App.scss";
import FilmList from "components/film_list";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src="img/logo.png"></img>
      </div>
      <h1>Now Playing</h1>
      <FilmList data_type="now_playing" page={1} />
      <h1>Upcoming</h1>
      <FilmList data_type="upcoming" page={1} />
      <h1>Latest</h1>
      <FilmList data_type="latest" />
    </div>
  );
};

export default App;
