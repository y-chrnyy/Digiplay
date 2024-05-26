import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IFancyAnchorProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    children: ReactNode;
    appearance?: 'black' | 'ghost' | 'pink';
}