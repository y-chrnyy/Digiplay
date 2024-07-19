import { FancyAnchor, HeadingKurut } from "@/components"

const Hero = () => {
    return (
        <section className="flex flex-col min-h-[calc(100dvh_-_135px)] px-[140px] uppercase pb-[50px] relative"> {/* Нет мне оправдания */}
            <HeadingKurut h="1">
                DIGI* <br />
                <span className="block  ml-[89px]">PLAY</span>
            </HeadingKurut>

            <img className="absolute top-[289px] right-[208px] rotate-[10deg]" src="/Hero_woman.png" alt="Фото рады" role="presentation" />
            <img className="absolute top-[505px] right-0 z-10" src="/Hero_longTape.png" alt="" role="presentation" />

            <div className="mt-[450px] flex flex-col gap-11 self-center">
                <div className="flex gap-14 w-full" >
                    <FancyAnchor appearance="pink-reverse">Связь</FancyAnchor>
                    <FancyAnchor appearance="pink-reverse">Отзывы</FancyAnchor>
                    <FancyAnchor appearance="pink-reverse">Об Агенстве</FancyAnchor>
                </div>
                <div className="flex gap-14 justify-center w-full max-w-[1030px]" >
                    <FancyAnchor appearance="pink-reverse">Услуги</FancyAnchor>
                    <FancyAnchor appearance="pink-reverse">Портфолио</FancyAnchor>
                </div>
            </div>
        </section>
    )
}

export { Hero }