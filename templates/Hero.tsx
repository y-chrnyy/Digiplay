import { FancyAnchor } from "@/components"

const Hero = () => {
    return (
        <section className="mt-[386px] flex flex-col min-h-[calc(100dvh_-_135px)] px-[140px] uppercase pb-[50px]"> {/* Нет мне оправдания */}


            <div className="mt-[190px] flex flex-col gap-11">
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