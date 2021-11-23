import React, { useEffect } from "react";
import { getPopularMovies } from "../../api/tmdb-api";
import { CardProps } from "../../utils/types";

function Card(/* { imgUrl, title, votes }: CardProps */) {
  const loadMovies = async () => {
    try {
      const data = await getPopularMovies();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div>
      {/* <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{votes}</p> */}
    </div>
  );
}

export default Card;
