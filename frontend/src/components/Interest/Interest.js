import React from "react";
import "./interest.css";
import travelling from "./images/travelling-modified.png"
import movies from "./images/movies.jpg"
import music from "./images/music.jpg"
import anime from "./images/anime.jpg"
import meme from "./images/meme.jpg"
import videogames from "./images/videogames.jpg"
import food from "./images/food.jpg"
import books from "./images/books.jpg"
import scienceAndTechnology from "./images/scienceandtechnology.jpg"
import sports from "./images/sports.jpg"

const ButtonWithText = ({ text, src }) => {
  return (
    <div className="buttonWrapper">
      <button
        className="circle"
        style={{ backgroundImage: `url(${src})` }}>
      </button>
      <p>{text}</p>
    </div>
  );
};

const SelectionButton = ({ text }) => {
  return (
    <div className="buttonWrapper">
      <button className="circle confirm">
        {text}
      </button>
    </div>
  );
};


export default function Interest() {
  return (
    <div className="container">
      <div className="row">
        <ButtonWithText text="Travelling" src={travelling} />
        <ButtonWithText text="Movies/Series" src={movies} />
        <ButtonWithText text="Music" src={music} />
        <ButtonWithText text="Anime" src={anime} />
      </div>
      <div className="row">
        <ButtonWithText text="Meme" src={meme} />
        <ButtonWithText text="Video Games" src={videogames} />
        <SelectionButton text="Select your Interest" />
        <ButtonWithText text="Food" src={food} />
        <ButtonWithText text="Books" src={books} />
      </div>
      <div className="row">
        <ButtonWithText text="Science" src={scienceAndTechnology} />
        <ButtonWithText text="Sports" src={sports} />
        <ButtonWithText text="Sports" src={sports} />
        <ButtonWithText text="Sports" src={sports} />
      </div>
    </div>
  );
};
