import { createElement } from "react"
import { IHeadingKurutProps } from "./HeadingKurut.props"

const HeadingKurut = ({ children, h, className }: IHeadingKurutProps) => {

    return (
        createElement(
            `h${h}`,
            { className: 'text-[230px]/[100%] text-pink font-kurut ' + className },
            children
        )
    )
}

export { HeadingKurut }