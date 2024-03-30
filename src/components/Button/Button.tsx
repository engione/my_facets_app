import { FC, MouseEventHandler } from "react";
import "./Button.scss";

interface PropsButton {
  children: React.ReactNode;
  className?: string | undefined;
  type?: "submit" | "reset" | "button";
  bgImage?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<PropsButton> = ({ children, className, type, bgImage, onClick }) => {
  return (
    <button type={type} onClick={onClick} style={{backgroundImage: `url(\'${bgImage}\')`}} className={className ? `btn ${className}` : "btn"}>
      {children}
    </button>
  );
};
