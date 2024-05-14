import { AnchorHTMLAttributes, DetailedHTMLProps, LinkHTMLAttributes, ReactNode } from "react";

export interface IFancyLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    children: ReactNode;
    appearance?: 'black' | 'ghost' | 'pink';
}