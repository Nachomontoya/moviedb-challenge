import React from "react";
import { FaStar } from "react-icons/fa";
import { RatingProps } from "../../utils/types";

function RatingCard({ isDark, votes }: RatingProps): React.ReactElement {
  return (
    <div className="d-flex align-items-center mb-4">
      <FaStar className="gold fnt-medium me-1" />
      <span
        className={`${isDark ? "dark-gray" : "white"} fnt-medium fnt-semibold`}
      >
        {votes}
      </span>
      <span className={`${isDark ? "dark-gray" : "white"} m-0 fnt-light pt-1`}>
        /10
      </span>
    </div>
  );
}

export default RatingCard;
