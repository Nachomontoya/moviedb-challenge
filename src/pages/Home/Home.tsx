import React, { useState } from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import MovieList from "../../components/MovieList";

function Home(): React.ReactElement {
  const [isMovie, setIsMovie] = useState<boolean>(false);

  return (
    <Layout>
      <div className="d-flex justify-content-between py-2 mb-3">
        <h1 className="fnt-white">Popular</h1>
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
      {isMovie ? (
        <>
          <p className="fnt-white">Popular Movies</p>
          <MovieList />
        </>
      ) : (
        <p className="fnt-white">Popular Shows</p>
      )}
    </Layout>
  );
}

export default Home;
