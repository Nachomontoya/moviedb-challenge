import React from "react";
import { API } from "../../constants/routes";
import { ContentImgProps } from "../../utils/types";

function ContentImg({ image, title }: ContentImgProps): React.ReactElement {
  return (
    <>
      {image ? (
        <img
          src={image ? `${API.IMAGES_URL}/${image}` : ""}
          alt={title}
          className="poster-image-small rounded-3"
        />
      ) : (
        <div className="no-image" />
      )}
    </>
  );
}

export default ContentImg;
