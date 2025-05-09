import { ReactNode } from "react"
import { HeadingYanone, P, TextAnimationWrapper } from "../../components"
import Image from 'next/image'

const Text = ({ children }: { children: ReactNode }) => {
    return <p>{children}</p>
}

export const First = () => {
    return (
        <section className="min-h-screen flex flex-col pt-12 sm:pt-[80px] md:pt-[100px] lg:pt-[120px] px-4 sm:px-6 md:px-8 lg:px-10 bg-service-hero object-cover relative">

            <TextAnimationWrapper offset={40}>
                <div className="xs:ml-0 mt-4 sm:mt-2 md:mt-0">
                    <HeadingYanone h="1" className="font-normal leading-[100%]">
                        Услуги <br className="md:hidden" />
                        <span className="ml-2 xs:ml-3 sm:ml-5 md:ml-8 lg:ml-10">Агенства</span>
                    </HeadingYanone>
                </div>
            </TextAnimationWrapper>

            <TextAnimationWrapper staggerMultiplier={0.05} delay={0.25} offset={15}>
                <div className="mt-6 xs:mt-7 sm:mt-10 md:mt-14 lg:mt-16">
                    <P text="sm" w="300" className="uppercase block max-w-[95%] sm:max-w-[85%] md:max-w-full">
                        ЧТО МЫ ДЕЛАЕМ И ЧЕМ МОЖЕМ ВАМ ПОМОЧЬ?  <br className="sm:hidden" />
                        У НАС ШИРОКИЙ СПЕКТР УСЛУГ НА ЛЮБОЙ ВКУС
                    </P>
                </div>
            </TextAnimationWrapper>

            <div className="absolute -bottom-3 xs:-bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 right-0 w-full h-[150px] xs:h-[200px] sm:h-[280px] md:h-[350px] lg:h-[428px]">
                <Image 
                    src='/services_first_lip.png' 
                    alt="" 
                    fill={true} 
                    priority={true}
                    sizes="100vw"
                    style={{ 
                        objectFit: 'contain', 
                        objectPosition: 'bottom right',
                        maxWidth: '100%'
                    }} 
                />
            </div>
        </section>
    )
}