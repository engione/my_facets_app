import { FC } from "react";
import "./Input.scss";

interface PropsInput {
  type?: string;
  className?: string | undefined;
  placeholder: string;
  props?: object;
}

export const Input: FC<PropsInput> = ({
  type = "text",
  className,
  placeholder = "",
  props,
}) => {
  return (
    <input
      {...props}
      type={type}
      className={`input ${className}`}
      placeholder={placeholder}
    />
  );
};
