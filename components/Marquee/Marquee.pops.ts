import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IMarqueeProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    children: ReactNode;
}