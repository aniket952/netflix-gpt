import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsondata = await data.json();
    const trailerData = jsondata.results.filter(
      (video) => video.type === "Trailer"
    );
    const filterTrailer = trailerData.length
      ? trailerData[0]
      : jsondata.results[0];

    dispatch(addTrailerVideo(filterTrailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVideo;
