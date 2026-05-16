import React from "react";

function MovieList({ movies, deleteMovie, setEditMovie }) {
  return (
    <div>
      <h2>Movie List</h2>

      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <h3>{movie.title}</h3>
          <p>Genre: {movie.genre}</p>
          <p>Rating: {movie.rating}</p>

          <button onClick={() => setEditMovie(movie)}>Edit</button>
          <button onClick={() => deleteMovie(movie.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;