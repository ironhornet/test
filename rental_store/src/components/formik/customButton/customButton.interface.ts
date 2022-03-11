import { ReactNode } from "react";

export interface ICustomButton {
  children: ReactNode;
  variant: string;
  color: string;
  type: string;
  href?: string;
}
