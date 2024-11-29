import { HeadingYanone, Marquee } from "@/components"
import { PortfolioItem } from "./PortfolioItem"
import { SimpleMarquee } from "@/components/Marquee/simpleMarquee"

export const Portfolio = () => {
    return (
        <section className="min-h-screen overflow-hidden w-screen flex flex-col py-[100px] px-[130px] gap-32 items-center">
            <HeadingYanone h="1" className="text-[180px]/[100%]">
                ПОРТФОЛИО
            </HeadingYanone>

            <SimpleMarquee className="" stopOnHover={true} gap={100}>
                <MarquueContent />
            </SimpleMarquee>
            <SimpleMarquee className="" stopOnHover={true} gap={100}>
                <MarquueContent />
            </SimpleMarquee>
        </section>
    )
}


const MarquueContent = () => {
    return (
        <>
            <div className="flex gap-[100px] flex-nowrap" >
                <PortfolioItem labelImg="/portfolio_1.png" href="/">
                    ШКОЛА СММ <br />
                    ФИРМЕННЫЙ СТИЛЬ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_2.png" href="/">
                    NAILSHEART
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_3.png" href="/">
                    РУМТИБЕТ <br />
                    ВЕБ-САЙТ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_4.png" href="/">
                    ВОКАЛЬНАЯ СТУДИЯ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_5.png" href="/">
                    РАЗРАБОТКА МЕНЮ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_6.png" href="/">
                    МАКЕТ ЖУРНАЛА
                </PortfolioItem>
            </div>
            <div className="flex gap-[100px] flex-nowrap" >
                <PortfolioItem labelImg="/portfolio_1.png" href="/">
                    ШКОЛА СММ <br />
                    ФИРМЕННЫЙ СТИЛЬ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_2.png" href="/">
                    NAILSHEART
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_3.png" href="/">
                    РУМТИБЕТ <br />
                    ВЕБ-САЙТ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_4.png" href="/">
                    ВОКАЛЬНАЯ СТУДИЯ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_5.png" href="/">
                    РАЗРАБОТКА МЕНЮ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_6.png" href="/">
                    МАКЕТ ЖУРНАЛА
                </PortfolioItem>
            </div>
        </>
    )
}