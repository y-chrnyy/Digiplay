import { IMarqueeLinkProps } from "./MarqueeLink.props"
import IconArrow from '../../public/Arrow 2.svg'

const MarqueeLink = ({ children, ...props }: IMarqueeLinkProps) => {
    return (
        <a {...props} className="flex justify-between p-10 text-6xl font-light bg-black text-white">
            {children}
            <IconArrow></IconArrow>
        </a>
    )
}

export { MarqueeLink }