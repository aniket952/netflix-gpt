import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import HeaderMainContainer from "./HeaderMainContainer";
import HeaderSecondayContainer from "./HeaderSecondayContainer";
import useTopRated from "../customHooks/useTopRated";
import useUpcomings from "../customHooks/useUpcoming";
import usePopular from "../customHooks/usePopular"

const Browse = () => {
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpcomings();
  return (
    <div>
      <Header />
      <HeaderMainContainer />
      <HeaderSecondayContainer />
    </div>
  );
};

export default Browse;
