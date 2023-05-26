import { ButtonProps } from "../../models/components";
import "./button.css";

/**
 * This is a TypeScript React component for rendering a button element with customizable props.
 * @param {ButtonProps} props - The `props` parameter is an object that contains the properties passed
 * to the `Button` component. These properties can include `className`, `type`, `children`, and
 * `onClick`.
 * @returns A React functional component named `Button` is being returned. It takes in a set of props,
 * including `className`, `type`, `children`, and `onClick`, and returns a button element with those
 * props.
 */
const Button = (props: ButtonProps) => {
  const { className, type, children, onClick } = props;
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
