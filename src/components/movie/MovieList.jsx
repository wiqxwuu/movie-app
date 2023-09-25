import React from "react";
import MovieItem from "./MovieItem";
import "./MovieList.css";

const MovieList = ({ movies = [], onDeleteMovie }) => {
  return movies.map((movie) => {
    return (
      <MovieItem
        key={movie.id}
        title={movie.title}
        image={movie.image}
        onDeleteMovie={onDeleteMovie}
        {...movie}
      />
    );
  });
};

export default MovieList;
