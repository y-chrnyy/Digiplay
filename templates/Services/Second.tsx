import { HeadingKurut, P, TextAnimationWrapper } from "../../components"
import Image from "next/image"


export const Second = () => {

    return (
        <section className="flex flex-col relative min-h-screen pl-[242px] pr-[108px] pt-[135px] gap-[84px] overflow-hidden">
            <div className="flex flex-col gap-[34px]">
                <TextAnimationWrapper offset={50}>
                    <HeadingKurut h='2' className="uppercase text-[130px]/[100%]">
                        Лендинг
                    </HeadingKurut>
                </TextAnimationWrapper>

                <TextAnimationWrapper staggerDelay={0.08} staggerMultiplier={0.01}>
                    <P text="md" w="400" className="max-w-[908px]">
                        ЛЕНДИНГ - ОДНОСТРАНИЧНЫЙ САЙТ С ПРИЗЫВОМ К ДЕЙСТВИЮ.
                        ИСПОЛЬЗУЕТСЯ ДЛЯ СОЗДАНИЯ ЛИЧНОЙ ИНФОРМАЦИИ,
                        ПРОДАЖИ ТОВАРА, ЗАКАЗА ИЛИ ОФОРМЛЕНИЯ УСЛУГИ, РЕГИСТРАЦИИ.
                    </P>
                </TextAnimationWrapper>
            </div>

            <div className="flex flex-col gap-[61px] self-end">
                <TextAnimationWrapper offset={50}>
                    <HeadingKurut h="2" className="uppercase text-[130px]/[100%] text-right mxa-w-[1257px] relative">
                        Многостраничный Сайт
                    </HeadingKurut>
                </TextAnimationWrapper>

                <TextAnimationWrapper staggerDelay={0.08} staggerMultiplier={0.01}>
                    <P text="md" w="400" className="max-w-[653px]">
                        БОЛЬШИЕ САЙТЫ СО МНОЖЕСТВОМ РАЗДЕЛОВ,
                        СОДЕРЖАЩИЕ БОЛЬШОЙ ОБЪЕМ ИНФОРМАЦИИ.
                        СТРАНИЦЫ СВЯЗАНЫ МЕЖДУ СОБОЙ ССЫЛКАМИ
                        С РАЗВЕТВЛЕННОЙ СТРУКТУРОЙ.
                    </P>
                </TextAnimationWrapper>
            </div>

            <Image src={"/Services_second_cross.png"} width={422} height={249} alt="" className="absolute rotate-[27deg] top-0 right-0" />
            <Image className="absolute -left-24 -top-10" src='/services_second_white.png' alt="" width={500} height={320} />

        </section>
    )
}