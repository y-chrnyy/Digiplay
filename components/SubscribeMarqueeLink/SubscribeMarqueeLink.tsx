import { MarqueeLink } from ".."
import { ICustomMarqueeLinkProps } from "./SubcribeMarqueeLink.props"
import IconArrow from '../../public/Arrow 2.svg'

const content = <>
    

</>

function SubscribeMarqueeLink({ text, href }: ICustomMarqueeLinkProps) {
    return (
        <MarqueeLink title={text} href={href}>
            <span className="flex gap-[100px] items-center">
                <span className="whitespace-nowrap">{text}</span>
                <IconArrow width='47px' height='42px' fill='#FF54A6'></IconArrow>
            </span>
            <span className="flex gap-[100px] items-center" aria-hidden='true'><span className="whitespace-nowrap">{text}</span> <IconArrow width='47px' height='42px' fill='#FF54A6' /></span>
            <span className="flex gap-[100px] items-center" aria-hidden='true'><span className="whitespace-nowrap">{text}</span> <IconArrow width='47px' height='42px' fill='#FF54A6' /></span>
            <span className="flex gap-[100px] items-center" aria-hidden='true'><span className="whitespace-nowrap">{text}</span> <IconArrow width='47px' height='42px' fill='#FF54A6' /></span>
            <span className="flex gap-[100px] items-center" aria-hidden='true'><span className="whitespace-nowrap">{text}</span> <IconArrow width='47px' height='42px' fill='#FF54A6' /></span>
            <span className="flex gap-[100px] items-center" aria-hidden='true'><span className="whitespace-nowrap">{text}</span> <IconArrow width='47px' height='42px' fill='#FF54A6' /></span>
        </MarqueeLink>
    )
}

export { SubscribeMarqueeLink }