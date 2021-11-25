import React, { useState } from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import MovieList from "../../components/MovieList";
import ShowsList from "../../components/ShowsList";

function Home(): React.ReactElement {
  const [isMovie, setIsMovie] = useState<boolean>(true);

  return (
    <Layout>
      <div className="d-flex justify-content-between py-2 mb-4">
        <h2 className="fnt-white">Popular {isMovie ? "Movies" : "Shows"}</h2>
        <div className="d-flex gap-3">
          <Button
            txtBtn="Movies"
            onClick={() => setIsMovie(true)}
            isActive={isMovie}
          />
          <Button
            txtBtn="Shows"
            onClick={() => setIsMovie(false)}
            isActive={!isMovie}
          />
        </div>
      </div>
      {isMovie ? <MovieList /> : <ShowsList />}
    </Layout>
  );
}

export default Home;
