import { MarqueeLink } from "@/components"
import IconArrow from '../public/Arrow 2.svg'

const Subscribe = () => {
    return (
        <section className="bg-black flex flex-col uppercase">
            <h2 className="mt-[130px] self-center text-[120px]/[100%] text-pink font-extralight">Подпишитесь на нас</h2>
            <h3 className="text-[30px]/[100%]  text-white font-light ml-10 mt-[150px] mb-[35px]">Социальные сети и контакты</h3>
            <CustomMarqueeLink text={'Instagram'} />
            <CustomMarqueeLink text={'Telegram'} />
            <CustomMarqueeLink text={'Whats up'} />
            <CustomMarqueeLink text={'Linkedin'} />

        </section>
    )
}

export { Subscribe }







interface ICustomMarqueeLinkProps {
    text: string;
}

function CustomMarqueeLink({ text }: ICustomMarqueeLinkProps) {
    return (
        <MarqueeLink title={text}>
            <span className="flex gap-[100px]">
                {text}
                <IconArrow width='46px' height='42px' fill='#ef62d0' />
            </span>
            <span className="flex gap-[100px]" aria-hidden='true'>{text} <IconArrow width='46px' height='42px' fill='#ef62d0' /></span>
            <span className="flex gap-[100px]" aria-hidden='true'>{text} <IconArrow width='46px' height='42px' fill='#ef62d0' /></span>
            <span className="flex gap-[100px]" aria-hidden='true'>{text} <IconArrow width='46px' height='42px' fill='#ef62d0' /></span>
            <span className="flex gap-[100px]" aria-hidden='true'>{text} <IconArrow width='46px' height='42px' fill='#ef62d0' /></span>
            <span className="flex gap-[100px]" aria-hidden='true'>{text} <IconArrow width='46px' height='42px' fill='#ef62d0' /></span>

        </MarqueeLink>

    )
}