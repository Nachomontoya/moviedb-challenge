import React, { useEffect, useState } from "react";
import { getPopularShows } from "../../api/tmdb-api";
import { API } from "../../constants/routes";
import { ResultProps } from "../../utils/types";
import Card from "../Card";

function ShowsList(): React.ReactElement {
  const [shows, setShows] = useState<ResultProps>([]);

  const loadShows = async () => {
    try {
      const {
        data: { results },
      } = await getPopularShows();
      setShows(results);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    loadShows();
  }, []);
  return (
    <div className="row">
      {shows &&
        shows.map((show) => (
          <Card
            key={show.id}
            id={show.id}
            imgUrl={`${API.IMAGES_URL}/${show.poster_path}`}
            title={show.title}
            votes={show.vote_average}
          />
        ))}
    </div>
  );
}

export default ShowsList;
