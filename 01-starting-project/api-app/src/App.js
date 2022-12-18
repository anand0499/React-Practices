import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMovieHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films')
      if (!response.ok) {
        throw new Error('Something went wrong ');
      }

      const data = await response.json();


      const transformedMovies = data.results.map((movies) => {
        return {
          id: movies.id,
          title: movies.title,
          openingText: movies.opening_crawl,
          releaseDate: movies.release_date
        }
      })
      setMovies(transformedMovies);
    }
    catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }

  let content = <p>Found No Movies</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading....</p>
  }



  return (
    <>
      <section>
        <button onClick={fetchMovieHandler} >Fetch Movies</button>
      </section>
      <section>
        {/*

      {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
      {!isLoading && movies.length === 0 && !error && <p>NO Data Found</p>}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <p>Loading.....</p>}

  */}

        {content}


      </section>
    </>
  );
}

export default App;
