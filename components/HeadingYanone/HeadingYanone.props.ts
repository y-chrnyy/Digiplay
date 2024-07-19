import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IHeadingYanoneProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: ReactNode;
    h: string;
}