import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { getMovieDetails, getRelatedMovies } from "../../api/tmdb-api";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { API } from "../../constants/routes";
import { DetailsProps, ResultProps } from "../../utils/types";

function Details(): React.ReactElement {
  const [details, setDetails] = useState<DetailsProps>({
    title: "",
    votes: 0,
    overview: "",
    image: "",
  });
  const [related, setRelated] = useState<ResultProps>([]);

  const loadDetails = async () => {
    try {
      const { data } = await getMovieDetails(566525);
      setDetails({
        title: data.title,
        votes: data.vote_average,
        overview: data.overview,
        image: data.poster_path,
      });
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const loadRelated = async () => {
    try {
      const {
        data: { results },
      } = await getRelatedMovies(566525);
      setRelated(results);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDetails();
    loadRelated();
  }, []);

  return (
    <Layout>
      <div className="h-100 position-relative">
        {details.image ? (
          <img
            src={`${API.IMAGES_URL}/${details.image}`}
            alt={details.title}
            className="bg-image-wrapper"
          />
        ) : (
          <div className="no-image" />
        )}
        <div className="d-flex flex-column justify-content-between h-100 position-absolute">
          <div className="col-12 d-flex">
            <div className="col-9 pe-5">
              <h1 className="fnt-white">{details.title}</h1>
              <div className="d-flex align-items-center mb-4">
                <FaStar className="gold fnt-medium me-1" />
                <span className="fnt-white fnt-medium fnt-semibold">
                  {details.votes}
                </span>
                <span className="fnt-white m-0 fnt-light pt-1">/10</span>
              </div>
              <div className="col-8">
                <h3 className="fnt-white mb-3">Overview</h3>
                <p className="fnt-white fnt-light">{details.overview}</p>
              </div>
            </div>
            <div className="col-3 rounded-3 poster-wrapper">
              {details.image ? (
                <img
                  src={`${API.IMAGES_URL}/${details.image}`}
                  alt={details.title}
                  className="poster-image"
                />
              ) : (
                <div className="no-image" />
              )}
            </div>
          </div>

          <div className="col-12">
            <h2 className="fnt-white mb-3">Related movies</h2>
            <div className="d-flex gap-3">
              {related ? (
                related.map((art) => (
                  <Card
                    key={art.id}
                    id={art.id}
                    imgUrl={`${API.IMAGES_URL}/${art.poster_path}`}
                    title={art.title}
                    votes={art.vote_average}
                  />
                ))
              ) : (
                <p>No related content</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Details;
