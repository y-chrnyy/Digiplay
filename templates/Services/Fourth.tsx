import { HeadingKurut, P, TextAnimationWrapper } from "../../components"
import Image from 'next/image'

export const Fourth = () => {
    return (
        <section className="min-h-screen flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-28 xl:gap-[225px] uppercase py-10 sm:py-16 md:py-24 lg:py-32 xl:py-48 relative">
            <div className="grid grid-cols-1 gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-32 px-4 sm:px-6 md:px-8 lg:px-10 xl:pl-[62px] xl:pr-2">
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[90px] justify-self-start md:justify-self-end pr-0 sm:pr-4 md:pr-8 lg:pr-20 xl:pr-[200px]">
                    <TextAnimationWrapper offset={40}>
                        <HeadingKurut className="text-[50px]/[100%] xs:text-[60px]/[100%] sm:text-[70px]/[100%] md:text-[90px]/[100%] lg:text-[110px]/[100%] xl:text-[130px]/[100%]" h="2">СЪЕМКА И МОНТАЖ</HeadingKurut>
                    </TextAnimationWrapper>

                    <TextAnimationWrapper staggerDelay={0.03} staggerMultiplier={0.05} >
                        <P text="md" w="400" className="text-center max-w-full sm:max-w-[90%] md:max-w-[90%] lg:max-w-[870px]">
                            СОЗДАНИЕ КОНТЕНТА С ВАШЕГО МЕРОПРИЯТИЯ,
                            ЭКСПЕРТНЫЕ РИЛСЫ, СЪЕМКА ДЛЯ ЛИЧНОГО ИСПОЛЬЗОВАНИЯ.
                        </P>
                    </TextAnimationWrapper>

                </div>

                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 justify-self-start pl-0 sm:pl-4 md:pl-6 lg:pl-8 xl:pl-[100px]">
                    <TextAnimationWrapper offset={40}>
                        <HeadingKurut className="text-[50px]/[100%] xs:text-[60px]/[100%] sm:text-[70px]/[100%] md:text-[90px]/[100%] lg:text-[110px]/[100%] xl:text-[130px]/[100%]" h="2">3D-ДИЗАЙН</HeadingKurut>
                    </TextAnimationWrapper>

                    <TextAnimationWrapper staggerDelay={0.03} staggerMultiplier={0.1} >
                        <P text="md" w="400" className="text-center max-w-full sm:max-w-[95%] md:max-w-[95%] lg:max-w-[1533px]">
                            Создание и анимирование трёхмерных персонажей для мультфильмов и игр, создание объёмных рисунков предметов, которые существуют только в виде эскизов и документации, создание трёхмерных моделей, основанных на реальных или выдуманных объектах.
                        </P>
                    </TextAnimationWrapper>
                </div>

                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[90px] justify-self-start md:justify-self-end pr-0 sm:pr-0 md:pr-4 lg:pr-0">
                    <TextAnimationWrapper offset={40}>
                        <HeadingKurut className="text-[44px]/[100%] xs:text-[50px]/[100%] sm:text-[70px]/[100%] md:text-[90px]/[100%] lg:text-[110px]/[100%] xl:text-[130px]/[100%]" h="2">МОУШН-ДИЗАЙН</HeadingKurut>
                    </TextAnimationWrapper>
                    <TextAnimationWrapper staggerDelay={0.04} staggerMultiplier={0.04} >
                        <P text="md" w="400" className="text-center max-w-full sm:max-w-[95%] md:max-w-[95%] lg:max-w-[1400px]">
                            направление дизайна, которое сочетает в себе элементы анимации, монтаж видео и другие методы для создания визуально захватывающих решений. Этот тип дизайна добавляет проектам динамичности и эмоциональной насыщенности, которых невозможно достичь с помощью статичных изображений или обычного текста.
                        </P>
                    </TextAnimationWrapper>
                </div>

            </div>

            <div className="border-t-[1px] border-b-[1px] border-white py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 flex justify-center items-center">
                <P w="300" text="md" className="max-w-full sm:max-w-[95%] md:max-w-[95%] lg:max-w-[1300px] text-center">
                    СОЗДАНИЕ ДИЗАЙН МАКЕТА БАННЕРОВ, СЕРТИФИКАТОВ, ОФОРМЛЕНИЕ CОЦИАЛЬНЫХ СЕТЕЙ, КРЕАТИВОВ, чат-ботов И ДРУГОЕ - ПО ЗАПРОСУ.
                </P>
            </div>

        </ section>
    )
}