import { HeadingYanone, RevealAnimation, TextAnimationWrapper } from "../components"


const About = () => {
    return (
        <section className="min-h-screen pt-[213px] flex flex-col items-center">
            <RevealAnimation duration={0.5}>
                <HeadingYanone h="2" className="uppercase text-header-lg">Об Агенстве</HeadingYanone>
            </RevealAnimation>

            <TextAnimationWrapper staggerDelay={0.001} staggerMultiplier={0.01} >
                <p className="text-[40px]/[100%] font-yanone text-center max-w-[1176px] font-light mt-10">
                    МЫ - ДИДЖИТАЛ АГЕНТСТВО, КОТОРОЕ ИДЕТ В НОГУ СО ВРЕМЕНЕМ И УЗНАЕМ О ТРЕНДАХ <br />
                    ДО ТОГО, КАК ОНИ ПОЯВЛЯЮТСЯ. <br />
                    МЫ ПОМОЖЕМ ВАШЕМУ БИЗНЕСУ ВЫЙТИ НА НОВЫЙ УРОВЕНЬ. <br />
                    КРЕАТИВНЫЙ ПОДХОД К РАБОТЕ, ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ, ВНИМАНИЕ К ДЕТАЛЯМ, ПОСТОЯННОЕ РАЗВИТИЕ И РАБОТА С ТРЕНДАМИ - ЭТО ВСЁ ПРО НАС. <br />
                    МЫ СТРЕМИМСЯ К ТОМУ, ЧТОБЫ ВАШИ ПРОЕКТЫ БЫЛИ ЭФФЕКТНЫМИ, КРАСИВЫМИ, <br />
                    А ГЛАВНОЕ, ПРОДАВАЕМЫМИ.
                </p>
            </TextAnimationWrapper>
        </section>
    )
}

export { About }