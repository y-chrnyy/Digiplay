import { FancyAnchor } from "@/components"

const Hero = () => {
    return (
        <section className="mt-[386px] flex flex-col min-h-[calc(100dvh_-_135px)] px-[140px] uppercase"> {/* Нет мне оправдания */}
            <div className="text-[120px]/[100%] font-medium">
                Диджитал агенство <br />
                <span className="text-pink">Digiplay</span>
            </div>

            <div className="mt-[190px] flex flex-col gap-11">
                <div className="flex gap-14 w-full" >
                    <FancyAnchor >Связь</FancyAnchor>
                    <FancyAnchor>Отзывы</FancyAnchor>
                    <FancyAnchor >Об Агенстве</FancyAnchor>
                </div>
                <div className="flex gap-14 justify-center w-full max-w-[1030px]" >
                    <FancyAnchor >Услуги</FancyAnchor>
                    <FancyAnchor>Портфолио</FancyAnchor>
                </div>
            </div>
        </section>
    )
}

export { Hero }