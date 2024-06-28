import { ComponentProps, ReactNode } from "react";
import "./styles.css";

interface ButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className="btn" {...rest}>
      {children}
    </button>
  );
};
