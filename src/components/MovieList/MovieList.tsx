import React, { useEffect, useState } from "react";
import Card from "../Card";

import { getPopularMovies } from "../../api/tmdb-api";
import { API } from "../../constants/routes";
import { ResultProps } from "../../utils/types";

import Loader from "react-loader-spinner";

function MovieList(): React.ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<ResultProps>([]);

  const loadMovies = async () => {
    setIsLoading(true);
    try {
      const {
        data: { results },
      } = await getPopularMovies();
      setMovies(results);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="row">
      {isLoading ? (
        <Loader type="ThreeDots" color="#63acf0" height={50} width={50} />
      ) : (
        <>
          {movies &&
            movies.map((movie) => (
              <Card
                key={movie.id}
                id={movie.id}
                imgUrl={`${API.IMAGES_URL}/${movie.poster_path}`}
                title={movie.title}
                votes={movie.vote_average?.toFixed(1)}
                isMovie
              />
            ))}
        </>
      )}
    </div>
  );
}

export default MovieList;
