import { createPortal } from "react-dom";

interface Props {
  children: JSX.Element;
}

export default function Modal({ children }: Props) {
  return createPortal(children, document.getElementById("modal"));
}
