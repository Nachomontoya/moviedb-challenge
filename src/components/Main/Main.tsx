import React from "react";
import { ChildrenProps } from "../../utils/types";

function Main({ children }: ChildrenProps) {
  return <main className="main-wrapper">{children}</main>;
}
export default Main;
