import { Url } from "next/dist/shared/lib/router/router";
import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface IFancyAnchorProps extends LinkProps {
    children: ReactNode;
    appearance?: 'black' | 'ghost' | 'pink' | 'pink-reverse';
    className?: string;
    href: Url;
}