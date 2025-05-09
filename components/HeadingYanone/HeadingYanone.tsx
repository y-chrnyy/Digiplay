import { createElement } from "react"
import { IHeadingYanoneProps } from "./HeadingYanone.props"
import cn from 'classnames'

const HeadingYanone = ({ children, h, className }: IHeadingYanoneProps) => {

    return (
        createElement(
            `h${h}`,
            { className: cn('text-pink font-yanone text-[80px] md:text-[120px] sm:text-[100px] xs:text-[60px]', className) },
            children
        )
    )
}

export { HeadingYanone }