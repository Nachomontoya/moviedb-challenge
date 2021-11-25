import React, { useEffect, useState } from "react";
import Card from "../Card";
import { toast } from "react-toastify";

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
      let errorMessage: string;
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = String(error);
      }
      toast(errorMessage, {
        type: "error",
      });
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
