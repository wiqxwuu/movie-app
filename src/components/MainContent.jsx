import MovieList from "./movie/MovieList";

const MainContent = ({ moviesList = [], onDelete }) => {

  return (
    <main>
      <MovieList onDeleteMovie={onDelete} movies={moviesList} />
    </main>
  );
};

export default MainContent;
