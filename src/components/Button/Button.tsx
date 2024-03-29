import { FC, MouseEventHandler } from "react";
import "./Button.scss";

interface PropsButton {
  children: React.ReactNode;
  className?: string | undefined;
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<PropsButton> = ({ children, className, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={className ? `btn ${className}` : "btn"}>
      {children}
    </button>
  );
};
