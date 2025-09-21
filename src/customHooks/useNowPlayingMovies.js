import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addNowPlayingMovie(jsonData.results));
  };
  useEffect(() => {
    nowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
