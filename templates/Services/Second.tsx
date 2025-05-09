import { HeadingKurut, P, TextAnimationWrapper } from "../../components"
import Image from "next/image"


export const Second = () => {

    return (
        <section className="flex flex-col relative min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 xl:pl-[242px] xl:pr-[108px] pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[135px] gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-[84px] overflow-hidden">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-[34px]">
                <TextAnimationWrapper offset={50}>
                    <HeadingKurut h='2' className="uppercase text-[60px]/[100%] xs:text-[70px]/[100%] sm:text-[80px]/[100%] md:text-[100px]/[100%] lg:text-[120px]/[100%] xl:text-[130px]/[100%]">
                        Лендинг
                    </HeadingKurut>
                </TextAnimationWrapper>

                <TextAnimationWrapper staggerDelay={0.08} staggerMultiplier={0.01}>
                    <P text="md" w="400" className="max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[908px]">
                        ЛЕНДИНГ - ОДНОСТРАНИЧНЫЙ САЙТ С ПРИЗЫВОМ К ДЕЙСТВИЮ.
                        ИСПОЛЬЗУЕТСЯ ДЛЯ СОЗДАНИЯ ЛИЧНОЙ ИНФОРМАЦИИ,
                        ПРОДАЖИ ТОВАРА, ЗАКАЗА ИЛИ ОФОРМЛЕНИЯ УСЛУГИ, РЕГИСТРАЦИИ.
                    </P>
                </TextAnimationWrapper>
            </div>

            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[61px] self-start md:self-end w-full">
                <TextAnimationWrapper offset={50}>
                    <HeadingKurut h="2" className="uppercase !text-[40px]/[100%] !xs:text-[46px]/[100%] !xs:max-w-full !sm:text-[60px]/[100%] !md:text-[100px]/[100%] !lg:text-[130px]/[100%] !xl:text-[150px]/[100%] text-left md:text-right w-full xl:mxa-w-[1257px] relative break-words pr-4">
                        <span className="sm:hidden">Многостраничный<br/>Сайт</span>
                        <span className="hidden sm:inline">Многостраничный Сайт</span>
                    </HeadingKurut>
                </TextAnimationWrapper>

                <TextAnimationWrapper staggerDelay={0.08} staggerMultiplier={0.01}>
                    <P text="sm" w="300" className="text-[30px]/[100%] xs:text-[34px]/[100%] sm:text-[40px]/[100%] max-w-[90%] sm:max-w-[90%] md:max-w-[75%] lg:max-w-[653px] break-words md:text-md md:font-normal pr-4">
                        БОЛЬШИЕ САЙТЫ СО МНОЖЕСТВОМ РАЗДЕЛОВ,
                        СОДЕРЖАЩИЕ БОЛЬШОЙ ОБЪЕМ ИНФОРМАЦИИ.
                        СТРАНИЦЫ СВЯЗАНЫ МЕЖДУ СОБОЙ ССЫЛКАМИ
                        С РАЗВЕТВЛЕННОЙ СТРУКТУРОЙ.
                    </P>
                </TextAnimationWrapper>
            </div>

            <Image 
                src={"/Services_second_cross.png"} 
                width={422} 
                height={249} 
                alt="" 
                className="absolute rotate-[27deg] top-0 right-0 w-[200px] h-auto sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[422px]" 
            />
            <Image 
                className="absolute -left-24 -top-10 w-[250px] h-auto sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]" 
                src='/services_second_white.png' 
                alt="" 
                width={500} 
                height={320} 
            />

        </section>
    )
}