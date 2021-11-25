import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getRelatedContent } from "../../api/tmdb-api";
import { API } from "../../constants/routes";
import { ImgObject, RelatedProps } from "../../utils/types";
import Card from "../Card";

function RelatedList({ endpoint }: RelatedProps): React.ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [related, setRelated] = useState([]);

  const location = useLocation();

  const loadRelated = async () => {
    setIsLoading(true);
    try {
      const {
        data: { results },
      } = await getRelatedContent(endpoint);
      setRelated(results);
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
    loadRelated();
  }, [location]);

  return (
    <>
      {isLoading ? (
        <Loader type="ThreeDots" color="#63acf0" height={50} width={50} />
      ) : (
        <>
          {related ? (
            related.map((art: ImgObject) => (
              <Card
                key={art.id}
                id={art.id}
                imgUrl={`${API.IMAGES_URL}/${art.poster_path}`}
                title={art.name || art.title}
                votes={art.vote_average?.toFixed(1)}
                isMovie={art.title ? true : false}
              />
            ))
          ) : (
            <p>No related content</p>
          )}
        </>
      )}
    </>
  );
}

export default RelatedList;
