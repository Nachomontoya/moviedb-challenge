import React from "react";

import { CardProps } from "../../utils/types";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card({ id, imgUrl, title, votes }: CardProps): React.ReactElement {
  return (
    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-5 rounded-3">
      <Link to={`${id}`}>
        <div className="poster-wrapper rounded-3">
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
            <h3 className="fnt-white">{title}</h3>
            <div className="d-flex align-items-center">
              <FaStar className="gold fnt-medium me-1" />
              <span className="fnt-white fnt-medium fnt-semibold">{votes}</span>
              <span className="fnt-white m-0 fnt-light pt-1">/10</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
