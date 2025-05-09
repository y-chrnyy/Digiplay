import { HeadingKurut, P, TextAnimationWrapper, RevealAnimation } from "../../components"
import Image from "next/image"


export const Third = () => {

    return (
        <section className="grid grid-cols-1 gap-2 relative min-h-screen bg-service-scretch px-4 sm:px-6 md:px-8 lg:px-20 xl:px-[130px] py-8 sm:py-10 md:py-12 lg:py-16 xl:py-[70px] bg-no-repeat bg-center bg-cover w-full h-full">
            <div className="justify-self-start flex flex-col gap-5 sm:gap-7 md:gap-9 lg:gap-11">
                <TextAnimationWrapper offset={40}>
                    <HeadingKurut h="2" className="text-[60px]/[100%] xs:text-[70px]/[100%] sm:text-[80px]/[100%] md:text-[100px]/[100%] lg:text-[120px]/[100%] xl:text-[130px]/[100%]">Тамлинк</HeadingKurut>
                </TextAnimationWrapper>

                <TextAnimationWrapper staggerDelay={0.04} staggerMultiplier={0.06}>
                    <P w="300" text="md" className="text-center max-w-full sm:max-w-[90%] md:max-w-[90%] lg:max-w-[908px]">
                        МОБИЛЬНАЯ ВЕРСИЯ ОНЛАЙН-ВИЗИТКИ, <br />
                        ПРАЙСА, ПОРТФОЛИО, ИНТЕРНЕТ-МАГАЗИНА <br />
                        С ПРОСТЫМ ФУНКЦИОНАЛОМ.
                    </P>
                </TextAnimationWrapper>
            </div>
            <div className="justify-self-start md:justify-self-center lg:justify-self-end flex flex-col gap-5 sm:gap-7 md:gap-9 lg:gap-11">
                <TextAnimationWrapper offset={40}>
                    <HeadingKurut h="2" className="text-[60px]/[100%] xs:text-[70px]/[100%] sm:text-[80px]/[100%] md:text-[100px]/[100%] lg:text-[120px]/[100%] xl:text-[130px]/[100%]">Презентация</HeadingKurut>
                </TextAnimationWrapper>

                <TextAnimationWrapper staggerDelay={0.04} staggerMultiplier={0.09}>
                    <P w="300" text="md" className="max-w-full sm:max-w-[90%] md:max-w-[90%] lg:max-w-[908px] text-center">
                        КРАСИВО И ГРАМОТНО СДЕЛАННАЯ ПРЕЗЕНТАЦИЯ <br />
                        В ЕДИННОЙ СТИЛИСТИКЕ, ВИЗУАЛЬНЫЙ <br />
                        ПОМОЩНИК, КОТОРЫЙ ПОДАЕТ ИНФОРМАЦИЮ <br />
                        БОЛЕЕ ДОХОДЧИВО И ПОВЫШАЕТ ЛОЯЛЬНОСТЬ.
                    </P>
                </TextAnimationWrapper>
            </div>
            <div className="justify-self-start flex flex-col gap-5 sm:gap-7 md:gap-9 lg:gap-11">
                <TextAnimationWrapper offset={40}>
                    <HeadingKurut h="2" className="text-[60px]/[100%] xs:text-[70px]/[100%] sm:text-[80px]/[100%] md:text-[100px]/[100%] lg:text-[120px]/[100%] xl:text-[130px]/[100%] ml-0 xs:ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20">СММ</HeadingKurut>
                </TextAnimationWrapper>

                <TextAnimationWrapper staggerDelay={0.04} staggerMultiplier={0.03}>
                    <P w="300" text="md" className="max-w-full sm:max-w-[90%] md:max-w-[90%] lg:max-w-[908px] text-center">
                        СОЗДАДИМ ИДЕАЛЬНЫЙ ВИЗУАЛ ВАШИХ СОЦИАЛЬНЫХ СЕТЕЙ, <br />
                        ДОПОЛНИМ ПРОДАЮЩИМИ ТЕКСТАМИ И ПРИВЛЕЧЕМ НОВЫЙ <br />
                        ПОТОК АУДИТОРИИ И ПОТЕНЦИАЛЬНЫХ КЛИЕНТОВ.
                    </P>
                </TextAnimationWrapper>
            </div>

            <div className="absolute -top-8 sm:-top-10 md:-top-12 lg:-top-16 left-0 w-1/2 h-[150px] xs:h-[180px] sm:h-[200px] md:h-[220px] lg:h-[248px]">
                <Image 
                    src="/services_third_lip.png" 
                    alt="" 
                    role="presentation" 
                    fill={true}
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'top left'
                    }} 
                />
            </div>

        </section >
    )
}