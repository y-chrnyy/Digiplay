import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IHeadingKurutProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: ReactNode;
    h: string;
}