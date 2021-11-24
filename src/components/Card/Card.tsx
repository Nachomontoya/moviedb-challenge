import React from "react";

import { CardProps } from "../../utils/types";

import { FaStar } from "react-icons/fa";

function Card({ imgUrl, title, votes }: CardProps): React.ReactElement {
  console.log(title);

  return (
    <div className="col-6 col-md-4 col-xl-3 mb-5 rounded-3">
      <div className="poster-wrapper rounded-3">
        <img src={imgUrl} alt={title} className="poster-image rounded-3" />
        <div className="info-wrapper d-flex flex-column justify-content-between">
          <h3 className="fnt-white">{title}</h3>
          <div className="d-flex align-items-center">
            <FaStar className="gold fnt-medium me-1" />
            <span className="fnt-white fnt-medium fnt-semibold">{votes}</span>
            <span className="fnt-white m-0 fnt-light pt-1">/10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
