import { FC, ReactNode } from "react";
import "./FormField.scss";

interface IFormFieldProps {
  children: ReactNode;
  errorMessage?: string;
  className?: string;
}

export const FormField: FC<IFormFieldProps> = ({
  children,
  errorMessage,
  className,
}) => {
  return (
    <label className={className ? `form-field ${className}` : "form-field"}>
      {children}
      {errorMessage && (
        <span className="form-field__error-text">{errorMessage}</span>
      )}
    </label>
  );
};
