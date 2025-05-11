import { IMarqueeLinkProps } from "./MarqueeLink.props"
import IconArrow from '../../public/Arrow 2.svg'
import { Marquee } from '../index'
import { useId } from "react"

const MarqueeLink = ({ children, title, href, ...props }: IMarqueeLinkProps) => {
    const id = useId()

    return (
        <a {...props} href={href} target="_blank" className="group/link flex justify-between items-center p-10 text-6xl font-light bg-black text-white relative cursor-pointer">
            <span className="absolute w-full h-[1px] top-0 left-0 bg-white"></span>
            <span className="whitespace-nowrap">{title}</span>
            <IconArrow></IconArrow>
            <span className="absolute w-full h-[1px] bottom-0 left-0 bg-white"></span>
            <div
                className={`absolute w-full h-0  group-hover/link:h-full left-0 top-1/2 -translate-y-1/2 flex justify-center items-center z-10 bg-white
                            overflow-hidden transition-all duration-500 `}
                id={`${id}`}
            >
                <Marquee runOnHover={true} runOnTarget={`${id}`} gap={100}>
                    {children}
                </Marquee>
            </div>
        </a>
    )
}

export { MarqueeLink }


