import React from 'react';
import './Box.css';

const Box = ({ 
  movieTitle,
  movieAuthor,
  movieDuration,
  movieRate,
  children,
  ...props
}) => {
  return (
    <div className="box" {...props}>
      {movieTitle && <h2 className="movie-title">{movieTitle}</h2>}
      {movieAuthor && <p className="movie-author">{movieAuthor}</p>}
      {movieDuration && <p className="movie-duration">{movieDuration}</p>}
      {movieRate && <p className="movie-rate">{movieRate}</p>}
      {children}
    </div>
  );
};

export default Box;
