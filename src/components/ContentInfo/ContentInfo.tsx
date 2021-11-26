import React, { useEffect, useState } from "react";
import { getContentDetails } from "../../api/tmdb-api";
import { toast } from "react-toastify";

import { DetailsProps, InfoProps } from "../../utils/types";
import RatingCard from "../RatingCard";
import Loader from "react-loader-spinner";
import { motion } from "framer-motion";
import { useLocation } from "react-router";
import ContentImg from "../ContentImg";
import GenreCard from "../GenreCard";
import GenreList from "../GenreList";

function ContentInfo({ isDark, endpoint }: InfoProps): React.ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [details, setDetails] = useState<DetailsProps>({
    title: "",
    votes: 0,
    overview: "",
    image: "",
    genres: [],
  });

  const location = useLocation();

  const loadDetails = async () => {
    setIsLoading(true);
    try {
      const { data } = await getContentDetails(endpoint);
      console.log(data);
      setDetails({
        title: data.name || data.title,
        votes: data.vote_average,
        overview: data.overview,
        image: data.poster_path,
        genres: data.genres,
      });
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
    loadDetails();
  }, [location]);

  return (
    <>
      {isLoading ? (
        <Loader type="ThreeDots" color="#63acf0" height={50} width={50} />
      ) : (
        <>
          <motion.div
            className="col-12 col-sm-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <h1 className={`${isDark ? "dark-blue" : "white"} mb-2`}>
              {details.title}
            </h1>
            {/* Genres */}
            <GenreList genres={details.genres} />
            {/*  Votes */}
            <RatingCard isDark={isDark} votes={details.votes} />
            {/* Overview */}
            <div className="col-12 col-lg-8">
              <h3 className={`${isDark ? "dark-gray" : "white"} mb-3`}>
                Overview
              </h3>
              <p className={`${isDark ? "dark-gray" : "white"} fnt-light`}>
                {details.overview}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-12 col-sm-4 d-flex align-items-start justify-content-end poster-wrapper-small"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ContentImg image={details.image} title={details.title} />
          </motion.div>
        </>
      )}
    </>
  );
}

export default ContentInfo;
