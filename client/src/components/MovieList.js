import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_MOVIES_QUERY } from '../queries/queries';
import MovieDetails from './MovieDetails';

const MovieList = () => {
  const { loading, data } = useQuery(GET_MOVIES_QUERY);
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {data.movies.map((movie) => {
          return (
            <li
              className='list-group-item m-2 shadow-sm '
              style={{ cursor: 'pointer', borderRadius: '5px' }}
              key={movie.id}
              onClick={(e) => setSelectedMovie(movie.id)}
            >
              {movie.name}
            </li>
          );
        })}
      </ul>
      <div
        className='col-md-5 p-4 text-white'
        style={{ backgroundColor: '#457b9d' }}
      >
        <MovieDetails selectedMovie={selectedMovie} />
      </div>
    </div>
  );
};

export default MovieList;
