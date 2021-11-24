import React, { useEffect, useState } from "react";
import Card from "../Card";

import { getPopularMovies } from "../../api/tmdb-api";
import { API } from "../../constants/routes";
import { ResultProps } from "../../utils/types";

function MovieList(): React.ReactElement {
  const [movies, setMovies] = useState<ResultProps>([]);

  const loadMovies = async () => {
    try {
      const {
        data: { results },
      } = await getPopularMovies();
      setMovies(results);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  console.log(movies);

  return (
    <div className="row">
      {movies &&
        movies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            imgUrl={`${API.IMAGES_URL}/${movie.poster_path}`}
            title={movie.title}
            votes={movie.vote_average}
          />
        ))}
    </div>
  );
}

export default MovieList;
