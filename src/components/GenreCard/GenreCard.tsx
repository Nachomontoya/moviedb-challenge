import React from "react";
import { GenreCardProps } from "../../utils/types";

function GenreCard({ genre }: GenreCardProps): React.ReactElement {
  return <div className="b-2 round white genre-wrapper me-2">{genre}</div>;
}

export default GenreCard;
