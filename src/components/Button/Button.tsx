import React from "react";
import { BtnProps } from "../../utils/types";

function Button({ txtBtn, onClick, isActive }: BtnProps) {
  let btnClass: string;

  isActive ? (btnClass = "active") : (btnClass = "");

  return (
    <button className={`${btnClass} fnt-small`} type="button" onClick={onClick}>
      {txtBtn}
    </button>
  );
}
export default Button;
