import { createElement } from "react"
import { IHeadingKurutProps } from "./HeadingKurut.props"
import { TextAnimationWrapper } from "../"
import cn from 'classnames'

const HeadingKurut = ({ children, h, className }: IHeadingKurutProps) => {
    return (
        createElement(
            `h${h}`,
            { className: cn('text-pink font-kurut text-[80px] md:text-[120px] sm:text-[100px] xs:text-[60px]', className) },
            children
        )
    )
}

export { HeadingKurut }