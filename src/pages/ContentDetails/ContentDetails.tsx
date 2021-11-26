import React from "react";
import { useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import { RootState } from "../../utils/types";
import Scrollbars from "react-custom-scrollbars";

import ContentInfo from "../../components/ContentInfo";
import RelatedList from "../../components/RelatedList";

function ContentDetails(): React.ReactElement {
  const {
    mode: { isDark },
  } = useSelector((state: RootState) => state);

  const location = useLocation();

  return (
    <Layout>
      <Scrollbars autoHide>
        {/* content details */}
        <div
          className="d-flex flex-column justify-content-between"
          data-testid="cnt-details"
        >
          <div className="row m-0 mb-5">
            <ContentInfo isDark={isDark} endpoint={location.pathname} />
          </div>
          {/* related content */}
          <div className="col-12">
            <div className="row m-0">
              <RelatedList endpoint={location.pathname} isDark={isDark} />
            </div>
          </div>
        </div>
      </Scrollbars>
    </Layout>
  );
}

export default ContentDetails;
