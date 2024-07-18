import { SubscribeMarqueeLink, FancyAnchor } from '../components/index'

const Subscribe = () => {
    return (
        <section className="bg-black flex flex-col uppercase pb-[45px]">
            <h2 className="mt-[130px] self-center text-[120px]/[100%] text-pink font-extralight">Подпишитесь на нас</h2>
            <h3 className="text-[30px]/[100%]  text-white font-light ml-10 mt-[150px] mb-[35px]">Социальные сети и контакты</h3>
            <SubscribeMarqueeLink text={'Instagram'} />
            <SubscribeMarqueeLink text={'Telegram'} />
            <SubscribeMarqueeLink text={'Whats up'} />
            <SubscribeMarqueeLink text={'Linkedin'} />

            <div className='mt-[213px] mx-[60px] flex gap-[45px]'>

                <FancyAnchor appearance='pink'>
                    <strong className='font-light text-[30px]/[100%] underline'>Digiplay@gmail.ru</strong>
                </FancyAnchor>
            </div>

            <h5 className='mt-[100px] font-light text-[70px]/[100%] text-center text-white normal-case'>
                Как сплоченная команда экспертов, мы создаем запоминающиеся <br />
                и эмоциональные веб-сайты, цифровые впечатления <br />
                и нативные приложения.
            </h5>
        </section>
    )
}

export { Subscribe }






