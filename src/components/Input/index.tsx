import { ComponentProps } from "react";
import "./styles.css";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  name: string;
}

export const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>

      <input name={name} {...rest} />
    </div>
  );
};
