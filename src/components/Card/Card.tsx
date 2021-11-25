import React from "react";

import { CardProps } from "../../utils/types";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function Card({
  id,
  imgUrl,
  title,
  votes,
  isMovie = false,
}: CardProps): React.ReactElement {
  return (
    <motion.div
      className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 rounded-3"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="poster-wrapper rounded-3">
        <Link
          to={isMovie ? `/movie/${id}` : `/tv/${id}`}
          data-testid="card-test"
        >
          {imgUrl ? (
            <img
              src={imgUrl}
              alt={title}
              className="poster-image image-filter rounded-3"
            />
          ) : (
            <div className="no-image" />
          )}
          <div className="info-wrapper d-flex flex-column justify-content-between">
            <h4 className="white">{title}</h4>
            <div className="d-flex align-items-center">
              <FaStar className="gold fnt-medium me-1" />
              <span className="white fnt-medium fnt-semibold">{votes}</span>
              <span className="white m-0 fnt-light pt-1">/10</span>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default Card;
