import { FC } from "react";
import "./Button.scss";

interface PropsButton {
  children: string;
  className?: string | undefined;
  type?: "submit" | "reset" | "button";
}

export const Button: FC<PropsButton> = ({ children, className, type }) => {
  return (
    <button type={type} className={className ? `btn ${className}` : "btn"}>
      {children}
    </button>
  );
};
