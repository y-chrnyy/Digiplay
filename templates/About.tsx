import { HeadingKurut,  RevealAnimation, TextAnimationWrapper } from "../components"


const About = () => {
    return (
        <section className="min-h-screen pt-[213px] md:pt-[150px] sm:pt-[100px] xs:pt-[80px] flex flex-col items-center px-6 xs:px-4">
            <RevealAnimation offset={40} duration={0.5}>
                <HeadingKurut h="2" className="uppercase text-header-lg !md:text-[120px] !sm:text-[100px] !text-[80px] !xs:text-[60px]">Об Агенстве</HeadingKurut>
            </RevealAnimation>

            <TextAnimationWrapper staggerDelay={0.001} staggerMultiplier={0.01} >
                <p className="text-[40px]/[100%] md:text-[32px]/[120%] sm:text-[28px]/[130%] xs:text-[22px]/[130%] font-yanone text-center max-w-[1176px] font-light mt-10 sm:mt-6 xs:mt-4">
                    МЫ - ДИДЖИТАЛ АГЕНТСТВО, КОТОРОЕ ИДЕТ В НОГУ СО ВРЕМЕНЕМ И УЗНАЕМ О ТРЕНДАХ 
                    <span className="hidden sm:inline"> </span><span className="sm:hidden"><br /></span>
                    ДО ТОГО, КАК ОНИ ПОЯВЛЯЮТСЯ. 
                    <br />
                    МЫ ПОМОЖЕМ ВАШЕМУ БИЗНЕСУ ВЫЙТИ НА НОВЫЙ УРОВЕНЬ. 
                    <br />
                    КРЕАТИВНЫЙ ПОДХОД К РАБОТЕ, ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ, ВНИМАНИЕ К ДЕТАЛЯМ, ПОСТОЯННОЕ РАЗВИТИЕ И РАБОТА С ТРЕНДАМИ - ЭТО ВСЁ ПРО НАС. 
                    <span className="hidden sm:inline"> </span><span className="sm:hidden"><br /></span>
                    МЫ СТРЕМИМСЯ К ТОМУ, ЧТОБЫ ВАШИ ПРОЕКТЫ БЫЛИ ЭФФЕКТНЫМИ, КРАСИВЫМИ, 
                    <span className="hidden sm:inline"> </span><span className="sm:hidden"><br /></span>
                    А ГЛАВНОЕ, ПРОДАВАЕМЫМИ.
                </p>
            </TextAnimationWrapper>
        </section>
    )
}

export { About }