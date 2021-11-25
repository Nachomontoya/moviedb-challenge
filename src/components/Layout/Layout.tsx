import React from "react";
import { useSelector } from "react-redux";

import { ChildrenProps, RootState } from "../../utils/types";
import Header from "../Header";
import Main from "../Main";

function Layout({ children }: ChildrenProps): React.ReactElement {
  const {
    mode: { isDark },
  } = useSelector((state: RootState) => state);

  return (
    <div
      className={`main-container ${
        isDark ? "bg-primary-light" : "bg-primary-dark"
      }`}
    >
      <Header />
      <Main>{children}</Main>
    </div>
  );
}

export default Layout;
