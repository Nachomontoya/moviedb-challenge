import React, { useEffect } from "react";
import { getPopularMovies } from "../../api/tmdb-api";
import { CardProps } from "../../utils/types";

function Card({ imgUrl, title, votes }: CardProps): React.ReactElement {
  const loadMovies = async () => {
    try {
      const {
        data: { results },
      } = await getPopularMovies();
      console.log(results);
      console.log(`${imageUrl}/${results[0].poster_path}`);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div>
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{votes}</p>
    </div>
  );
}

export default Card;
