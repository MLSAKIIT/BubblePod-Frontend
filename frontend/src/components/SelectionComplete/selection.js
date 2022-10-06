import "./selection.css";
import travelling from "../images/travelling-modified.png"
import movies from "../images/movies.jpg"
import music from "../images/music.jpg"
import anime from "../images/anime.jpg"
import meme from "../images/meme.jpg"
import videogames from "../images/videogames.jpg"
import food from "../images/food.jpg"
import books from "../images/books.jpg"
import scienceAndTechnology from "../images/scienceandtechnology.jpg"
import sports from "../images/sports.jpg"

import React from "react";

const ButtonWithText = ({ text, onClick, src }) => {
  return (
    <div className="buttonWrapper">
      <button
        className="circle"
        onClick={onClick}
        style={{ backgroundImage: `url(${src})` }}
      ></button>
      <p>{text}</p>
    </div>
  );
};

const ConfirmButton = ({ text, onClick, src }) => {
  return (
    <div className="buttonWrapper">
      <button className="circle confirm" onClick={onClick}>
        { <p>{text}</p>}
      </button>
     
    </div>
  );
};

const Selection = () => {
  return (
    <div className="container">
        <div className="row">
          <ButtonWithText text="Travelling" src={travelling} />
          <ButtonWithText text="Movie/Series" src={movies} />
          <ButtonWithText text="Music" src={music} />
          <ButtonWithText text="Anime" src={anime} />
        </div>
        <div className="row">
          <ButtonWithText text="Memes" src={meme} />
          <ButtonWithText text="Video Games" src={videogames} />
          <ConfirmButton text="Confirm?"  />
          <ButtonWithText text="Foodie" src={food} />
          <ButtonWithText text="Books" src={books} />
        </div>
        <div className="row">
          <ButtonWithText text="Memes" src={meme} />
          <ButtonWithText text="Science" src={scienceAndTechnology}/>
          <ButtonWithText text="Sports" src={sports} />
          <ButtonWithText text="Books" src={books} />
        </div>
      </div>
  );
};

export default Selection;



