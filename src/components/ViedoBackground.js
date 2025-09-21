import { useSelector } from "react-redux";
import useTrailerVideo from "../customHooks/useTrailerVideo";
const ViedoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(movieId);
  return (
    <div> 
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key +"?&autoplay=1&loop=1&mute=1&playlist="+trailer?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default ViedoBackground;
