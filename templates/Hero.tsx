import { FancyAnchor, HeadingKurut, TextAnimationWrapper } from "@/components"

const Hero = () => {
    return (
        <section className="flex flex-col min-h-screen bg-black relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-[140px] pt-[80px] md:pt-[100px] lg:pt-[130px] pb-[30px] md:pb-[50px]">
            <div className="flex flex-col z-10">
                <TextAnimationWrapper offset={40} staggerDelay={0.05}>
                    <HeadingKurut h="1" className="flex flex-col">
                        <span className="text-8xl lg:text-[170px] xl:text-[200px] 2xl:text-header-xl">DIGI*</span>
                        <span className="text-8xl lg:text-[170px] xl:text-[200px] 2xl:text-header-xl ml-0 sm:ml-[25px] md:ml-[40px] lg:ml-[50px] xl:ml-[75px]">PLAY</span>
                    </HeadingKurut>
                </TextAnimationWrapper>
            </div>

            

            {/* Декоративные элементы */}
            <div className="absolute top-[30%] sm:top-[35%] md:top-28 lg:top-40 xl:top-40 right-0 w-full md:w-[45%] lg:w-[500px] xl:w-[600px] h-auto md:h-auto lg:h-auto xl:h-[550px] z-10 pointer-events-none flex justify-center md:justify-end">
                <div className="relative flex flex-col items-center md:items-end">
                    <img 
                        className="w-[300px] h-auto sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[550px]" 
                        src="/Hero_woman.png" 
                        alt="Фото рады" 
                        role="presentation" 
                    />
                    <img 
                        className="right-0 absolute top-[20%] sm:top-[25%] md:top-[25%] left-0 md:left-auto w-full md:w-[380px] lg:w-[450px] xl:w-[550px] h-auto" 
                        src="/Hero_rada_tape.png" 
                        alt="" 
                        role="presentation" 
                    />
                </div>
            </div>

            {/* Маркер только для md и больше, позиционирование внизу слева с половиной за пределами экрана */}
            <div className="w-[350px] h-[410px] hidden md:block absolute -bottom-60 left-0 z-0 pointer-events-none">
                <img 
                    className="w-[350px] lg:w-[410px] h-auto absolute" 
                    src="/hero_marker.png" 
                    alt="" 
                    role="presentation" 
                />
            </div>

            <div className="mt-auto md:mt-[80px] lg:mt-[90px] xl:mt-[100px] flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-11 w-full md:w-auto md:self-end z-10">
                <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14 w-full">
                    <div className="hidden xl:block">
                        <FancyAnchor 
                            appearance="pink-reverse" 
                            href={'/services'} 
                        >
                            СВЯЗЬ
                        </FancyAnchor>
                    </div>
                    <div className="block xl:hidden">
                        <FancyAnchor 
                            appearance="pink-reverse" 
                            href={'/services'} 
                            className="!min-w-[140px] sm:!min-w-[180px] md:!min-w-[220px] lg:!min-w-[250px] !h-[50px] sm:!h-[54px] md:!h-[62px] lg:!h-[70px] !text-2xl sm:!text-2xl md:!text-2xl !py-0 !flex !items-center !justify-center"
                        >
                            СВЯЗЬ
                        </FancyAnchor>
                    </div>
                    
                    <div className="hidden xl:block">
                        <FancyAnchor 
                            appearance="pink-reverse" 
                            href={'/services'} 
                        >
                            ОТЗЫВЫ
                        </FancyAnchor>
                    </div>
                    <div className="block xl:hidden">
                        <FancyAnchor 
                            appearance="pink-reverse" 
                            href={'/services'} 
                            className="!min-w-[140px] sm:!min-w-[180px] md:!min-w-[220px] lg:!min-w-[250px] !h-[50px] sm:!h-[54px] md:!h-[62px] lg:!h-[70px] !text-2xl sm:!text-2xl md:!text-2xl !py-0 !flex !items-center !justify-center"
                        >
                            ОТЗЫВЫ
                        </FancyAnchor>
                    </div>
                    
                    <div className="hidden xl:block">
                        <FancyAnchor 
                            appearance="pink-reverse" 
                            href={'/services'} 
                        >
                            ОБ АГЕНСТВЕ
                        </FancyAnchor>
                    </div>
                    <div className="block xl:hidden">
                        <FancyAnchor 
                            appearance="pink-reverse" 
                            href={'/services'} 
                            className="!min-w-[140px] sm:!min-w-[180px] md:!min-w-[220px] lg:!min-w-[250px] !h-[50px] sm:!h-[54px] md:!h-[62px] lg:!h-[70px] !text-2xl sm:!text-2xl md:!text-2xl !py-0 !flex !items-center !justify-center"
                        >
                            ОБ АГЕНСТВЕ
                        </FancyAnchor>
                    </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14 w-full">
                    <div className="hidden xl:block">
                        <FancyAnchor 
                            appearance="pink-reverse" 
                            href={'/services'} 
                        >
                            УСЛУГИ
                        </FancyAnchor>
                    </div>
                    <div className="block xl:hidden">
                        <FancyAnchor 
                            appearance="pink-reverse" 
                            href={'/services'} 
                            className="!min-w-[140px] sm:!min-w-[180px] md:!min-w-[220px] lg:!min-w-[250px] !h-[50px] sm:!h-[54px] md:!h-[62px] lg:!h-[70px] !text-2xl sm:!text-2xl md:!text-2xl !py-0 !flex !items-center !justify-center"
                        >
                            УСЛУГИ
                        </FancyAnchor>
                    </div>
                    
                    <div className="hidden xl:block">
                        <FancyAnchor 
                            appearance="pink-reverse" 
                            href={'/services'} 
                        >
                            ПОРТФОЛИО
                        </FancyAnchor>
                    </div>
                    <div className="block xl:hidden">
                        <FancyAnchor 
                            appearance="pink-reverse" 
                            href={'/services'} 
                            className="!min-w-[140px] sm:!min-w-[180px] md:!min-w-[220px] lg:!min-w-[250px] !h-[50px] sm:!h-[54px] md:!h-[62px] lg:!h-[70px] !text-2xl sm:!text-2xl md:!text-2xl !py-0 !flex !items-center !justify-center"
                        >
                            ПОРТФОЛИО
                        </FancyAnchor>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Hero }