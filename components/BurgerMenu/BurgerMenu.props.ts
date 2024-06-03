import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface IBurgerMenuProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    onClick?: () => void;
}

