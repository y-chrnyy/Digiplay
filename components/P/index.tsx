import classNames from "classnames"
import { DetailedHTMLProps, ParamHTMLAttributes } from "react"


export interface IPProps extends DetailedHTMLProps<ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    w: "300" | "400"
    text: "sm" | "md"
}

export const P = ({ children, className, w, text, ...props }: IPProps) => {
    const weight = w === "300" ? "font-light" : "font-normal",
        fontSize = text === "sm" ? "text-[40px]/[100%]" : "text-[45px]/[100%]"


    return (
        <p className={classNames("font-yanone text-pink", weight, fontSize, className)} {...props}> {children}</p>
    )
}