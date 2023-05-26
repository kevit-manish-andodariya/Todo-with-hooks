import { ReactNode } from "react";

// Button
export interface ButtonProps {
  className?: string;
  type?: "button" | "reset" | "submit";
  children: ReactNode;
  onClick?: () => void;
}
