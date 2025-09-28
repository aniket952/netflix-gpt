import { useRef } from "react";
import { BG_URL } from "../utils/constant";
import { lang } from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { generateFromGemini } from "../utils/gemini";
import { API_OPTIONS } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { addAISuggested } from "../utils/movieSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const userClickLang = useSelector((store) => store.userClick.language);
  const aiSuggestedMovies = useSelector((store) => store.movies.aiSuggested);
  const searchText = useRef("");

  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movie.trim()
        )}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error("TMDB fetch failed: " + response.status);
      }

      const dataTMDB = await response.json();
      return dataTMDB.results;
    } catch (err) {
      console.error("TMDB error:", err);
      return [];
    }
  };

  const handleGPTSearchClick = async () => {
    const text = await generateFromGemini(searchText.current.value);
    const movieArray = text.split(",").map((m) => m.trim());

    const tmdbMovieArray = await Promise.all(
      movieArray.map((movie) => searchMovieTMDB(movie))
    );
    dispatch(addAISuggested(tmdbMovieArray));
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-gradient-to-b from-black fixed">
          <img src={BG_URL} alt="bg-screen" />
        </div>
        <form
          className="mt-[10%] w-1/2 grid grid-cols-12 absolute"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="p-4 m-4 col-span-9 rounded-lg"
            placeholder={lang[userClickLang].gptSearchPlaceHolder}
            ref={searchText}
          />
          <button
            className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
            onClick={handleGPTSearchClick}
          >
            {lang[userClickLang].search}
          </button>
        </form>
        <div className="absolute mt-[15%] m-5">
          <GptMovieSuggestions movies={aiSuggestedMovies} />
        </div>
      </div>
    </>
  );
};

export default GptSearchBar;
