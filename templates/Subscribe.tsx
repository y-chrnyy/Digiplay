import { SubscribeMarqueeLink, FancyAnchor, HeadingKurut } from '../components/index'

const Subscribe = () => {
    return (
        <section className=" flex flex-col uppercase pb-[45px]">
            <HeadingKurut className='mt-[130px] self-center !text-[120px]/[100%] text-pink font-extralight' h='2'> Подпишитесь на нас </HeadingKurut>

            {/* <h2 className="mt-[130px] self-center text-[120px]/[100%] text-pink font-extralight"></h2> */}
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


        </section>
    )
}

export { Subscribe }






