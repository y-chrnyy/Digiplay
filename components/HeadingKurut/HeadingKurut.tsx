import { createElement } from "react"
import { IHeadingKurutProps } from "./HeadingKurut.props"
import { TextAnimationWrapper } from "../"

const HeadingKurut = ({ children, h, className }: IHeadingKurutProps) => {
    return (
        createElement(
            `h${h}`,
            { className: ' text-pink font-kurut ' + className },
            children
        )
    )
}

export { HeadingKurut }