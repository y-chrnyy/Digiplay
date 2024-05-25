import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IMarqueeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    runOnHover?: boolean;
    runOnTarget?: string;
}