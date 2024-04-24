import { FC, MouseEventHandler } from "react";
import btn from "./Button.module.scss";

interface PropsButton {
  children: React.ReactNode;
  className?: string | undefined;
  type?: "submit" | "reset" | "button";
  version?: "first" | "secondary" | "third" | "white" | "bordered";
  bgImage?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<PropsButton> = ({
  children,
  className,
  type,
  bgImage,
  onClick,
  version = "first",
}) => {
  switch (version) {
    case "first":
      return (
        <button
          type={type}
          onClick={onClick}
          className={className ? `${btn.first} ${className}` : `${btn.first}`}
        >
          {children}
        </button>
      );

    case "secondary":
      return (
        <button
          type={type}
          onClick={onClick}
          className={
            className ? `${btn.secondary} ${className}` : `${btn.secondary}`
          }
        >
          {children}
        </button>
      );

    case "third":
      return (
        <button
          type={type}
          onClick={onClick}
          className={className ? `${btn.third} ${className}` : `${btn.third}`}
        >
          {children}
        </button>
      );

    case "white":
      return (
        <button
          type={type}
          onClick={onClick}
          className={className ? `${btn.white} ${className}` : `${btn.white}`}
        >
          {children}
        </button>
      );
    case "bordered":
      return (
        <button
          type={type}
          onClick={onClick}
          className={className ? `${btn.bordered} ${className}` : `${btn.bordered}`}
        >
          {children}
        </button>
      );
  }
};
