import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import HeaderMainContainer from "./HeaderMainContainer";
import HeaderSecondayContainer from "./HeaderSecondayContainer";
import useTopRated from "../customHooks/useTopRated";
import useUpcomings from "../customHooks/useUpcoming";
import usePopular from "../customHooks/usePopular";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const userClick = useSelector((store) => store.userClick);
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpcomings();
  return (
    <div>
      <Header />
      {userClick.gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <HeaderMainContainer />
          <HeaderSecondayContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
