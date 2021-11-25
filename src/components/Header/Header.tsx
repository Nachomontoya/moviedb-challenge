import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SiThemoviedatabase } from "react-icons/si";
import { Link } from "react-router-dom";
import Button from "../Button";

import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { setMode } from "../../redux/mode/actions";
import { RootState } from "../../utils/types";

function Header(): React.ReactElement {
  const {
    mode: { isDark },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleMode = () => {
    dispatch(setMode());
  };

  return (
    <header className="pb-35 d-flex justify-content-between">
      <Link to={"/"} data-testid="home-logo">
        <SiThemoviedatabase
          className={`fnt-logo ${isDark ? "dark-blue" : "white"}`}
        />
      </Link>
      <Button onClick={handleMode} isActive={isDark}>
        {isDark ? <MdOutlineWbSunny /> : <FiMoon />}
      </Button>
    </header>
  );
}

export default Header;
