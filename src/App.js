import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import MainContent from './components/MainContent';
import MovieForm from './components/form/MovieForm';

const MOVIES = [
  {
      title: 'Horimiya 2',
      image: 'https://gizmostory.com/wp-content/uploads/2021/07/Horimiya-Season-2.jpg',
      // stars: 5,
      id: 1,
  },
  {
      title: 'Forever',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVL1m7aOR9V4UBapVAWo9YTR-MGv53x3maDuAZ16Noe5DwAGVFJtai8auiRgx8zJUsSEw&usqp=CAU',
      // stars: 4,
      id: 2,
  },
  {
      title: 'Miraculous',
      image: 'https://m.media-amazon.com/images/M/MV5BZWU3OGRlOWUtZjhiMC00ZmIxLWJmNDktYjUzODEwNjg4YWFlXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg',
      // stars: 5,
      id: 3,
  },
  {
      title: 'Lie to me',
      image: 'https://flxt.tmsimg.com/assets/p191739_b_v8_ab.jpg',
      // stars: 5,
      id: 4,
  },
]

function App() {
  const [movies, setMovies] = useState(MOVIES)
  const [isShowFormVisable, setIsShowFormVisable] = useState(false)

  const openHandler = () => {
    setIsShowFormVisable(!isShowFormVisable)
  }

  const addNewMovie = (title, url) => {
    const newMovie = {
      id: Math.random(),
      title: title,
      image: url,
    }
    setMovies([...movies, newMovie])
    setIsShowFormVisable(!isShowFormVisable )
  }

  const deleteMovie = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  console.log(movies);

  return (
    <div className="App">
      <Header onOpen={openHandler}/>
      {isShowFormVisable? <MovieForm onClose={openHandler} onAddMovie={addNewMovie}/> : null}
      <MainContent onDelete={deleteMovie} moviesList={movies}/>
    </div>
  );
}

export default App;
