import React from "react";
import { SiThemoviedatabase } from "react-icons/si";
import { Link } from "react-router-dom";

function Header(): React.ReactElement {
  return (
    <header className="pb-35">
      <Link to={"/"}>
        <SiThemoviedatabase className="fnt-logo fnt-white" />
      </Link>
    </header>
  );
}

export default Header;
