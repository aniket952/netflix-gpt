import ViedoBackground from "./ViedoBackground";
import ViedoTitle from "./ViedoTitle";
import { useSelector } from "react-redux";

const HeaderMainContainer = () => {
  const data = useSelector((store) => store.movies);
  const primaryMovie = data?.nowPlayingMovies?.[0];
  if (!primaryMovie) {
    return null; // or a loader/spinner component
  }
  const { title, overview, id } = primaryMovie;
  return (
    <div>
      <ViedoTitle title={title} overview={overview} />
      <ViedoBackground movieId={id} />
    </div>
  );
};

export default HeaderMainContainer;
