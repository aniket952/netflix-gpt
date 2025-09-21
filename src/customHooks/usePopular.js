import { useDispatch } from "react-redux";
import { addPopular} from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const usePopular = () => {
  const dispatch = useDispatch();

  const popular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addPopular(jsonData.results));
  };
  useEffect(() => {
    popular();
  }, []);
};
export default usePopular;
