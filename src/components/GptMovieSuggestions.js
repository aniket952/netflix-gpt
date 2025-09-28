import MovieList from "./MovieList";

const GptMovieSuggestions = ({ movies }) => {
  console.log("i am in movies suggestion ", movies);
  return (
    <div className="text-red-500 flex flex-wrap gap-4">
      <div className="bg-black m-4">
        {movies.map((movie, index) =>
          movie && movie.length > 0 ? (
            <MovieList key={index} title="Recommendation" movies={movie} />
          ) : <h1>No recommendations</h1>
        )}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
