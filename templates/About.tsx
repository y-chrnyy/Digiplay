import { HeadingYanone } from "../components"


const About = () => {
    return (
        <section className="min-h-screen pt-[213px] flex flex-col items-center">
            <HeadingYanone h="2" className="uppercase text-header-lg">Об Агенстве</HeadingYanone>

            <p className="text-[40px]/[100%] font-yanone text-center max-w-[1176px] font-light mt-10">
                МЫ - ДИДЖИТАЛ АГЕНТСТВО, КОТОРОЕ ИДЕТ В НОГУ СО ВРЕМЕНЕМ И УЗНАЕМ О ТРЕНДАХ
                ДО ТОГО, КАК ОНИ ПОЯВЛЯЮТСЯ.
                МЫ ПОМОЖЕМ ВАШЕМУ БИЗНЕСУ ВЫЙТИ НА НОВЫЙ УРОВЕНЬ.
                КРЕАТИВНЫЙ ПОДХОД К РАБОТЕ, ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ, ВНИМАНИЕ К ДЕТАЛЯМ, ПОСТОЯННОЕ РАЗВИТИЕ И РАБОТА С ТРЕНДАМИ - ЭТО ВСЁ ПРО НАС.
                МЫ СТРЕМИМСЯ К ТОМУ, ЧТОБЫ ВАШИ ПРОЕКТЫ БЫЛИ ЭФФЕКТНЫМИ, КРАСИВЫМИ,
                А ГЛАВНОЕ, ПРОДАВАЕМЫМИ.
            </p>
        </section>
    )
}

export { About }