import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IMarqueeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    gap: number;
    runOnHover?: boolean;
    runOnTarget?: string;
    stopOnHover?: boolean;
}