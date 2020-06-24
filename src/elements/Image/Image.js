import React from "react";
import { Image } from "semantic-ui-react";
import "./Image.scss";

const ImageFilm = (props) => {
  const base_url = "https://image.tmdb.org/t/p/w500";

  return props.src ? (
    <Image className="imageFilm" src={base_url + props.src} size="medium" />
  ) : (
    <Image className="imageFilm" src="img/banner.png" size="medium" />
  );
};

export default ImageFilm;
