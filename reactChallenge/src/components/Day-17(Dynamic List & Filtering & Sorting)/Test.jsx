import { useState } from "react";
import movies from "./data";

function Test() {
  const [filterGenre, setFilterGenre] = useState("");
  const [sortOption, setSortOption] = useState("title");

  const filteredMovies = movies.filter((movie) => {
    if (filterGenre) {
      return movie.genre === filterGenre;
    } else {
      return movies;
    }
  });

  const sortedMovies = filteredMovies.sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    } else {
      return a.releaseYear - b.releaseYear;
    }
  });

  return (
    <div>
      <select
        value={filterGenre}
        onChange={(e) => setFilterGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Crime">Crime</option>
      </select>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="title">Sort by Title</option>
        <option value="releaseYear">Sort by Release Year</option>
      </select>
      <ul>
        {sortedMovies.map((movie) => (
          <li key={movie.title}>
            {movie.title} <span>{movie.releaseYear}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
