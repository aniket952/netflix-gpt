import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useUpcomings = () => {
  const dispatch = useDispatch();

  const upcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addUpcoming(jsonData.results));
  };
  useEffect(() => {
    upcoming();
  }, []);
};
export default useUpcomings;
