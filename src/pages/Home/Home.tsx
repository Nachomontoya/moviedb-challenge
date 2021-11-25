import React, { useState } from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import MovieList from "../../components/MovieList";
import ShowsList from "../../components/ShowsList";
import { Scrollbars } from "react-custom-scrollbars";

function Home(): React.ReactElement {
  const [isMovie, setIsMovie] = useState<boolean>(true);

  return (
    <Layout>
      <Scrollbars autoHide>
        <div className="d-flex justify-content-between py-2 mb-4">
          <h2 className="fnt-white">Popular {isMovie ? "Movies" : "Shows"}</h2>
          <div className="d-flex gap-3">
            <Button onClick={() => setIsMovie(true)} isActive={isMovie}>
              Movies
            </Button>
            <Button onClick={() => setIsMovie(false)} isActive={!isMovie}>
              Shows
            </Button>
          </div>
        </div>
        {isMovie ? <MovieList /> : <ShowsList />}
      </Scrollbars>
    </Layout>
  );
}

export default Home;
