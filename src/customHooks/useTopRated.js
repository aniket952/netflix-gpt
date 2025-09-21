import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useTopRated = () => {
  const dispatch = useDispatch();

  const topRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addTopRated(jsonData.results));
  };
  useEffect(() => {
    topRated();
  }, []);
};
export default useTopRated;
