import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import MovieList from "../../components/MovieList";
import ShowsList from "../../components/ShowsList";
import { Scrollbars } from "react-custom-scrollbars";
import { RootState } from "../../utils/types";

function Home(): React.ReactElement {
  const [isMovie, setIsMovie] = useState<boolean>(true);
  const {
    mode: { isDark },
  } = useSelector((state: RootState) => state);

  return (
    <Layout>
      <Scrollbars autoHide>
        <div className="row m-0 py-2 mb-4">
          <h2 className={`${isDark ? "dark-blue" : "white"} col-12 col-sm-6`}>
            Popular {isMovie ? "Movies" : "Shows"}
          </h2>
          <div className="col-12 col-sm-6 d-flex justify-content-end gap-3">
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
