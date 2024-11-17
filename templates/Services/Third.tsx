import { HeadingKurut, P } from "../../components"
import Image from "next/image"


export const Third = () => {

    return (
        <section className="grid grid-cols-1 gap-2 relative min-h-screen bg-service-scretch px-[130px] py-[70px] bg-no-repeat bg-center bg-cover w-full h-full">
            <div className="justify-self-start flex flex-col gap-11">
                <HeadingKurut h="2" className="text-[130px]/[100%]">Тамлинк</HeadingKurut>
                <P w="300" text="md" className="max-w-[908] text-center">
                    МОБИЛЬНАЯ ВЕРСИЯ ОНЛАЙН-ВИЗИТКИ, <br />
                    ПРАЙСА, ПОРТФОЛИО, ИНТЕРНЕТ-МАГАЗИНА <br />
                    С ПРОСТЫМ ФУНКЦИОНАЛОМ.
                </P>
            </div>
            <div className="justify-self-end flex flex-col gap-11">
                <HeadingKurut h="2" className="text-[130px]/[100%]">Презентация</HeadingKurut>
                <P w="300" text="md" className="max-w-[908] text-center">
                    КРАСИВО И ГРАМОТНО СДЕЛАННАЯ ПРЕЗЕНТАЦИЯ <br />
                    В ЕДИННОЙ СТИЛИСТИКЕ, ВИЗУАЛЬНЫЙ <br />
                    ПОМОЩНИК, КОТОРЫЙ ПОДАЕТ ИНФОРМАЦИЮ <br />
                    БОЛЕЕ ДОХОДЧИВО И ПОВЫШАЕТ ЛОЯЛЬНОСТЬ.
                </P>

            </div>
            <div className="justify-self-start flex flex-col gap-11">
                <HeadingKurut h="2" className="text-[130px]/[100%] ml-20">СММ</HeadingKurut>
                <P w="300" text="md" className="max-w-[908] text-center">
                    СОЗДАДИМ ИДЕАЛЬНЫЙ ВИЗУАЛ ВАШИХ СОЦИАЛЬНЫХ СЕТЕЙ, <br />
                    ДОПОЛНИМ ПРОДАЮЩИМИ ТЕКСТАМИ И ПРИВЛЕЧЕМ НОВЫЙ <br />
                    ПОТОК АУДИТОРИИ И ПОТЕНЦИАЛЬНЫХ КЛИЕНТОВ.
                </P>

            </div>
        </section >
    )
}