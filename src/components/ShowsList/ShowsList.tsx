import React, { useEffect, useState } from "react";
import Card from "../Card";

import { getPopularShows } from "../../api/tmdb-api";
import { API } from "../../constants/routes";
import { ResultProps } from "../../utils/types";

import Loader from "react-loader-spinner";

function ShowsList(): React.ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [shows, setShows] = useState<ResultProps>([]);

  const loadShows = async () => {
    setIsLoading(true);
    try {
      const {
        data: { results },
      } = await getPopularShows();
      setShows(results);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadShows();
  }, []);

  return (
    <div className="row">
      {isLoading ? (
        <Loader type="ThreeDots" color="#63acf0" height={50} width={50} />
      ) : (
        <>
          {shows &&
            shows.map((show) => (
              <Card
                key={show.id}
                id={show.id}
                imgUrl={
                  show.poster_path
                    ? `${API.IMAGES_URL}/${show.poster_path}`
                    : ""
                }
                title={show.name}
                votes={show.vote_average?.toFixed(1)}
              />
            ))}
        </>
      )}
    </div>
  );
}

export default ShowsList;
