import React from "react";
import { GenreListObject, GenreListProps } from "../../utils/types";
import GenreCard from "../GenreCard";

function GenreList({ genres }: GenreListProps): React.ReactElement {
  return (
    <div className="row m-0 mb-2">
      {genres &&
        genres.map((genre: GenreListObject) => (
          <GenreCard key={genre.id} genre={genre.name} />
        ))}
    </div>
  );
}

export default GenreList;
