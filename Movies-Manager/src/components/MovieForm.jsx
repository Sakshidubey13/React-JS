import React, { useState, useEffect } from "react";

function MovieForm({ addMovie, editMovie }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (editMovie) {
      setTitle(editMovie.title);
      setGenre(editMovie.genre);
      setRating(editMovie.rating);
    }
  }, [editMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const movie = {
      id: editMovie ? editMovie.id : Date.now(),
      title,
      genre,
      rating,
    };

    addMovie(movie);

    setTitle("");
    setGenre("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />

      <button type="submit">{editMovie ? "Update Movie" : "Add Movie"}</button>
    </form>
  );
}

export default MovieForm;
