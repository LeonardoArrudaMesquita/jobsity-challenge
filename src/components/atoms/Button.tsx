import { ReactNode } from "react";

export interface ButtonsProps {
  children: ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonsProps) {
  return <button onClick={onClick}>{children}</button>;
}
