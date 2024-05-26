import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ISlideUpAnchorProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    text: string;
}