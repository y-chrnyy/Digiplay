import { MarqueeLink } from ".."
import { ICustomMarqueeLinkProps } from "./SubcribeMarqueeLink.props"
import IconArrow from '../../public/Arrow 2.svg'

function SubscribeMarqueeLink({ text }: ICustomMarqueeLinkProps) {
    return (
        <MarqueeLink title={text}>
            <span className="flex gap-[100px] items-center">
                {text}
                <IconArrow width='47px' height='42px' fill='#FF54A6'></IconArrow>
            </span>
            <span className="flex gap-[100px] items-center" aria-hidden='true'>{text} <IconArrow width='47px' height='42px' fill='#FF54A6' /></span>
            <span className="flex gap-[100px] items-center" aria-hidden='true'>{text} <IconArrow width='47px' height='42px' fill='#FF54A6' /></span>
            <span className="flex gap-[100px] items-center" aria-hidden='true'>{text} <IconArrow width='47px' height='42px' fill='#FF54A6' /></span>
            <span className="flex gap-[100px] items-center" aria-hidden='true'>{text} <IconArrow width='47px' height='42px' fill='#FF54A6' /></span>
            <span className="flex gap-[100px] items-center" aria-hidden='true'>{text} <IconArrow width='47px' height='42px' fill='#FF54A6' /></span>

        </MarqueeLink>

    )
}

export { SubscribeMarqueeLink }