import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const HeaderSecondayContainer = () => {
  const movies = useSelector((store) => store.movies);
 
  return (
    <div className=" bg-black">
      <div className="-mt-72 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popular} />
        <MovieList title={"Top Rated"} movies={movies.topRated} />
        <MovieList title={"Upcoming"} movies={movies.upcoming} />
      </div>
    </div>
  );
};

export default HeaderSecondayContainer;
