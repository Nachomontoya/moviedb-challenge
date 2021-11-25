import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { getContentDetails, getRelatedContent } from "../../api/tmdb-api";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { API } from "../../constants/routes";
import { DetailsProps, ResultProps } from "../../utils/types";
import Loader from "react-loader-spinner";
import Scrollbars from "react-custom-scrollbars";

import { motion } from "framer-motion";

function ContentDetails(): React.ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [details, setDetails] = useState<DetailsProps>({
    title: "",
    votes: 0,
    overview: "",
    image: "",
  });
  const [related, setRelated] = useState<ResultProps>([]);

  const location = useLocation();

  const loadDetails = async () => {
    setIsLoading(true);
    try {
      const { data } = await getContentDetails(location.pathname);
      setDetails({
        title: data.name || data.title,
        votes: data.vote_average,
        overview: data.overview,
        image: data.poster_path,
      });
    } catch (error: any) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const loadRelated = async () => {
    setIsLoading(true);
    try {
      const {
        data: { results },
      } = await getRelatedContent(location.pathname);
      setRelated(results);
    } catch (error: any) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadDetails();
    loadRelated();
  }, [location]);

  return (
    <Layout>
      <Scrollbars autoHide>
        <div className="d-flex flex-column justify-content-between">
          <div className="row mb-5">
            {isLoading ? (
              <Loader type="ThreeDots" color="#63acf0" height={50} width={50} />
            ) : (
              <>
                <motion.div
                  className="col-6 col-md-8"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
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
                </motion.div>
                <motion.div
                  className="col-6 col-md-4 d-flex align-items-start justify-content-end poster-wrapper-small"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {details.image ? (
                    <img
                      src={
                        details.image
                          ? `${API.IMAGES_URL}/${details.image}`
                          : ""
                      }
                      alt={details.title}
                      className="poster-image-small rounded-3"
                    />
                  ) : (
                    <div className="no-image" />
                  )}
                </motion.div>
              </>
            )}
          </div>
          {/* related */}
          <div className="col-12">
            <h3 className="fnt-white mb-3">Related Content</h3>
            <div className="row">
              {isLoading ? (
                <Loader
                  type="ThreeDots"
                  color="#63acf0"
                  height={50}
                  width={50}
                />
              ) : (
                <>
                  {related ? (
                    related.map((art, index) => {
                      while (index < 8) {
                        return (
                          <Card
                            key={art.id}
                            id={art.id}
                            imgUrl={`${API.IMAGES_URL}/${art.poster_path}`}
                            title={art.name || art.title}
                            votes={art.vote_average?.toFixed(1)}
                            isMovie={art.title ? true : false}
                          />
                        );
                      }
                    })
                  ) : (
                    <p>No related content</p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </Scrollbars>
    </Layout>
  );
}

export default ContentDetails;
