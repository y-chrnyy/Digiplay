import { createElement } from "react"
import { IHeadingKurutProps } from "./HeadingKurut.props"
import { TextAnimationWrapper } from "../"
import cn from 'classnames'

const HeadingKurut = ({ children, h, className }: IHeadingKurutProps) => {
    return (
        createElement(
            `h${h}`,
            { className: cn('text-pink font-kurut', className) },
            children
        )
    )
}

export { HeadingKurut }