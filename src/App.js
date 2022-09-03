import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MoviesCard from "./MoviesCard";
//28758109
const API_URL = "http://www.omdbapi.com?apikey=28758109";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerme, setSearchTerme] = useState("");

  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`);

    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Avenger");
  }, []);
  return (
    <div className="app">
      <h1>BambaMovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="search for movies"
          value={searchTerme}
          onChange={(e) => setSearchTerme(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerme)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MoviesCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>no movie found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
