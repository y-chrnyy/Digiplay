import { HeadingYanone, P } from "../../components"
import Image from 'next/image'

export const First = () => {
    return (
        <section className="min-h-screen flex flex-col pt-20 px-10 bg-service-hero object-cover relative">
            <HeadingYanone h="1" className="text-[100px]/[100%] !lg:text-[180px]/[100%] font-normal">
                Услуги <br />
                <span className="ml-10">Агенства</span>
            </HeadingYanone>

            <P text="sm" w="300" className="uppercase mt-16">
                ЧТО МЫ ДЕЛАЕМ И ЧЕМ МОЖЕМ ВАМ ПОМОЧЬ? <br />
                У НАС ШИРОКИЙ СПЕКТР УСЛУГ НА ЛЮБОЙ ВКУС
            </P>


            <div className="absolute -bottom-10 right-0 w-full h-[428px]">
                <Image src='/services_first_lip.png' alt="" fill={true} />
            </div>
        </section>
    )
}