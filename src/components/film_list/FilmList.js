import React, { useEffect, useState } from "react";
import "./FilmList.scss";
import FilmInfo from "components/film_info";
import STYLE_LINK from "constants/constants";

const FilmList = (props) => {
  const [filmData, setFilmData] = useState([]);

  useEffect(() => {
    fetchFilmImage();
  }, []);

  const fetchFilmImage = () => {
    const base_url = "https://api.themoviedb.org/3/movie/";
    const api_key = "09d5b5c766e0eaefad2144761d854005";

    fetch(
      `${base_url}${props.data_type}?api_key=${api_key}&language=en-US&${
        props.page ? `page=${props.page}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setFilmData(data.results);
        } else {
          setFilmData(data);
        }
      });
  };

  const images = () =>
    filmData.map((filmData) => (
      <FilmInfo key={filmData.id} filmData={filmData} />
    ));

  return (
    <div className="film-list">
      {Array.isArray(filmData) ? images() : <FilmInfo filmData={filmData} />}
    </div>
  );
};

export default FilmList;
