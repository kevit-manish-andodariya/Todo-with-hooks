import { ButtonProps } from "../../models/components";
import "./button.css";

const Button = (props: ButtonProps) => {
  const { className, type, children, onClick } = props;
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
