import { HeadingYanone, P } from "../../components"


export const First = () => {
    return (
        <section className="min-h-screen flex flex-col pt-20 px-10 bg-service-hero object-cover">
            <HeadingYanone h="1" className="text-[100px]/[100%] !lg:text-[180px]/[100%] font-normal">
                Услуги <br />
                <span className="ml-10">Агенства</span>
            </HeadingYanone>

            <P text="sm" w="300" className="uppercase mt-16">
                ЧТО МЫ ДЕЛАЕМ И ЧЕМ МОЖЕМ ВАМ ПОМОЧЬ? <br />
                У НАС ШИРОКИЙ СПЕКТР УСЛУГ НА ЛЮБОЙ ВКУС
            </P>
        </section>
    )
}