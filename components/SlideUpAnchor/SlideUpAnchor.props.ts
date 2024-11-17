import { Url } from "next/dist/shared/lib/router/router";
import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ISlideUpAnchorProps extends LinkProps {
    text: string;
    href: Url;
    className?: string;
    onClick?: () => void
}