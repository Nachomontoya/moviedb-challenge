import React from "react";
import { CardProps } from "../../utils/types";

function Card({ imgUrl, title, votes }: CardProps) {
  return (
    <div>
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{votes}</p>
    </div>
  );
}

export default Card;
