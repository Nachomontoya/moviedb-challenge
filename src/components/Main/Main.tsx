import React from "react";
import { ChildrenProps } from "../../utils/types";

function Main({ children }: ChildrenProps): React.ReactElement {
  return <main className="main-wrapper rounded-3">{children}</main>;
}
export default Main;
