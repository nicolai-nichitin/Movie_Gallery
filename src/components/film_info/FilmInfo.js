import React from "react";
import { Header, Modal, Button } from "semantic-ui-react";
import ImageFilm from "elements/Image";
import "./FilmInfo.scss";

const FilmInfo = (props) => {
  return (
    <Modal
      trigger={
        <span>
          <ImageFilm src={props.filmData.poster_path} />
        </span>
      }
      closeIcon
    >
      <Modal.Content>
        <Modal.Description>
          <Header>{props.filmData.title}</Header>
          <hr />
          <p>{props.filmData.overview}</p>
          <hr />
          <p>Release Date : {props.filmData.release_date}</p>
          <hr />
          <p>Rating : {props.filmData.vote_average}</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default FilmInfo;
