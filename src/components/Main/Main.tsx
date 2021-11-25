import React from "react";
import { useSelector } from "react-redux";
import { ChildrenProps, RootState } from "../../utils/types";

function Main({ children }: ChildrenProps): React.ReactElement {
  const {
    mode: { isDark },
  } = useSelector((state: RootState) => state);

  return (
    <main
      className={`main-wrapper rounded-3 ${isDark ? "bg-light" : "bg-dark"}`}
    >
      {children}
    </main>
  );
}
export default Main;
