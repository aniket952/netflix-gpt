import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import HeaderMainContainer from "./HeaderMainContainer";
import HeaderSecondayContainer from "./HeaderSecondayContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <HeaderMainContainer />
      <HeaderSecondayContainer />
    </div>
  );
};

export default Browse;
