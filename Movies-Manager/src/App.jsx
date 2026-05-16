import React, { useState, useEffect } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import SessionUser from "./components/SessionUser";
import { getMovies, saveMovies } from "./utils/storage";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [editMovie, setEditMovie] = useState(null);

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  const addMovie = (movie) => {
    let updatedMovies;

    if (editMovie) {
      updatedMovies = movies.map((m) =>
        m.id === movie.id ? movie : m
      );
      setEditMovie(null);
    } else {
      updatedMovies = [...movies, movie];
    }

    setMovies(updatedMovies);
    saveMovies(updatedMovies);
  };

  const deleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    saveMovies(updatedMovies);
  };

  return (
    <div className="app">
      <h1>Favorite Movies Manager</h1>

      <SessionUser />

      <MovieForm addMovie={addMovie} editMovie={editMovie} />

      <MovieList
        movies={movies}
        deleteMovie={deleteMovie}
        setEditMovie={setEditMovie}
      />
    </div>
  );
}

export default App;