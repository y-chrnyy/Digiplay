import { IMarqueeLinkProps } from "./MarqueeLink.props"
import IconArrow from '../../public/Arrow 2.svg'
import { Marquee } from '../index'
import { useId } from "react"

const MarqueeLink = ({ children, title, ...props }: IMarqueeLinkProps) => {
    const id = useId()

    return (
        <a {...props} className="group/link flex justify-between items-center p-10 text-6xl font-light bg-black text-white relative">
            <span className="absolute w-full h-[1px] top-0 left-0 bg-white"></span>
            {title}
            <IconArrow></IconArrow>
            <span className="absolute w-full h-[1px] bottom-0 left-0 bg-white"></span>
            <div
                className={`absolute w-full h-0  group-hover/link:h-full left-0 top-1/2 -translate-y-1/2 flex justify-center items-center z-10 bg-white
                            overflow-hidden transition-all duration-500 `}
                id={`${id}`}
            >
                <Marquee runOnHover={true} runOnTarget={`${id}`}>
                    {children}
                </Marquee>
            </div>
        </a>
    )
}

export { MarqueeLink }