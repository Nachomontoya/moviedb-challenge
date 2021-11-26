import React from "react";
import { BtnProps } from "../../utils/types";

function Button({ children, onClick, isActive }: BtnProps): React.ReactElement {
  let btnClass: string;

  isActive ? (btnClass = "active") : (btnClass = "");

  return (
    <button
      className={`${btnClass} fnt-small h-40`}
      type="button"
      onClick={onClick}
      data-testid="btn-text"
    >
      {children}
    </button>
  );
}
export default Button;
