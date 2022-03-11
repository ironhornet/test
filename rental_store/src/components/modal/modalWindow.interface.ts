import { ReactElement } from "react";

export interface IModalProps {
  children: ReactElement;
  isOpen: boolean;
  onClose: () => void;
}
