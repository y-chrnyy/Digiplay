import { createElement } from "react"
import { IHeadingYanoneProps } from "./HeadingYanone.props"

const HeadingYanone = ({ children, h, className }: IHeadingYanoneProps) => {

    return (
        createElement(
            `h${h}`,
            { className: 'text-pink font-yanone ' + className },
            children
        )
    )
}

export { HeadingYanone }