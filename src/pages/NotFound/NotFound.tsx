import React from "react";
import Layout from "../../components/Layout";

import { VscSearchStop } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/types";
import Button from "../../components/Button";
import { PUBLIC } from "../../constants/routes";
import { useHistory } from "react-router";

function NotFound(): React.ReactElement {
  const history = useHistory();

  const {
    mode: { isDark },
  } = useSelector((state: RootState) => state);

  const goHome = () => {
    history.push(`${PUBLIC.HOME}`);
  };

  return (
    <Layout>
      <div className="col-12 d-flex flex-column justify-content-center align-items-center h-100">
        <h1>
          <VscSearchStop className={isDark ? "dark-blue" : "white"} />
        </h1>
        <h1 className={isDark ? "dark-blue" : "white"}>Page not found</h1>
        <p className={`${isDark ? "dark-gray" : "white"} fnt-medium mb-4`}>
          It seems the page you were looking for does not exist.
        </p>
        <Button onClick={goHome} isActive={isDark}>
          Back Home
        </Button>
      </div>
    </Layout>
  );
}

export default NotFound;
