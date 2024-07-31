import { HeadingKurut, TextAnimationWrapper } from "../components"


const WhyWe = () => {
    return (
        <section className="min-h-screen pt-[213px] flex flex-col items-center text-[40px]/[100%] px-[87px]">
            <HeadingKurut h="2" className="uppercase self-start text-header-md">Почему мы?</HeadingKurut>

            <h3 className="mt-[110px]">Преимущества сотрудничества с нами:</h3>
            <ul className="flex flex-col gap-[50px] mt-[50px] list-disc">
                <li>ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ ПРОЕКТУ.</li>
                <li>ОПЫТ РАБОТЫ С РАЗЛИЧНЫМИ ОТРАСЛЯМИ С УСПЕШНЫМИ ИНТЕГРАЦИЯМИ.</li>
                <li>ИСПОЛЬЗОВАНИЕ СОВРЕМЕННЫХ ТЕХНОЛОГИЙ И ТРЕНДОВ В ДИЗАЙНЕ.</li>
                <li>ГАРАНТИИ КАЧЕСТВА И СОБЛЮДЕНИЯ СРОКОВ.</li>
            </ul>
        </section>
    )
}

export { WhyWe }