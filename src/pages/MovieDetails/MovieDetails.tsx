import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();

  const loadDetails = async () => {
    try {
      const { data } = await getMovieDetails(history.location.pathname);
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
      } = await getRelatedMovies(history.location.pathname);
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
      <div className="d-flex flex-column justify-content-between">
        <div className="row mb-5">
          <div className="col-6 col-md-8">
            {/* Title  */}
            <h1 className="fnt-white">{details.title}</h1>
            {/*  Votes */}
            <div className="d-flex align-items-center mb-4">
              <FaStar className="gold fnt-medium me-1" />
              <span className="fnt-white fnt-medium fnt-semibold">
                {details.votes}
              </span>
              <span className="fnt-white m-0 fnt-light pt-1">/10</span>
            </div>
            {/* Overview */}
            <div className="col-md-6 col-xl-8">
              <h3 className="fnt-white mb-3">Overview</h3>
              <p className="fnt-white fnt-light">{details.overview}</p>
            </div>
          </div>
          <div className="col-6 col-md-4 d-flex align-items-start justify-content-end poster-wrapper-small">
            {details.image ? (
              <img
                src={details.image ? `${API.IMAGES_URL}/${details.image}` : ""}
                alt={details.title}
                className="poster-image-small rounded-3"
              />
            ) : (
              <div className="no-image" />
            )}
          </div>
        </div>
        {/* related */}
        <div className="col-12">
          <h3 className="fnt-white mb-3">Related movies</h3>
          <div className="row">
            {related ? (
              related.map((art, index) => {
                while (index < 8) {
                  return (
                    <Card
                      key={art.id}
                      id={art.id}
                      imgUrl={`${API.IMAGES_URL}/${art.poster_path}`}
                      title={art.title}
                      votes={art.vote_average?.toFixed(1)}
                    />
                  );
                }
              })
            ) : (
              <p>No related content</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Details;
