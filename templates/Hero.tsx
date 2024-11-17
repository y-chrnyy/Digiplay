import { FancyAnchor, HeadingKurut, TextAnimationWrapper } from "@/components"

const Hero = () => {
    return (
        <section className="flex flex-col min-h-screen px-[140px] uppercase pb-[50px] relative pt-[130px]"> {/* Нет мне оправдания */}
            <TextAnimationWrapper offset={40} staggerDelay={0.05} delay={0}>
                <HeadingKurut h="1" >
                    <span className="text-header-xl">DIGI*</span> <br />
                    <span className="text-header-xl relative left-[75px]">PLAY</span>
                </HeadingKurut>
            </TextAnimationWrapper>

            <img className="absolute top-[289px] right-[208px] rotate-[10deg]" src="/Hero_woman.png" alt="Фото рады" role="presentation" />
            <img className="absolute top-[505px] right-0 z-10" src="/Hero_longTape.png" alt="" role="presentation" />

            <div className="mt-[450px] flex flex-col gap-11 self-center">
                <div className="flex gap-14 w-full" >
                    <FancyAnchor appearance="pink-reverse" href={'/services'}>Связь</FancyAnchor>
                    <FancyAnchor appearance="pink-reverse" href={'/services'}>Отзывы</FancyAnchor>
                    <FancyAnchor appearance="pink-reverse" href={'/services'}>Об Агенстве</FancyAnchor>
                </div>
                <div className="flex gap-14 justify-center w-full max-w-[1030px]" >
                    <FancyAnchor appearance="pink-reverse" href={'/services'}>Услуги</FancyAnchor>
                    <FancyAnchor appearance="pink-reverse" href={'/services'}>Портфолио</FancyAnchor>
                </div>
            </div>


        </section>
    )
}

export { Hero }