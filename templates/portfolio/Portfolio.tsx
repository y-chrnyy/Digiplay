import { HeadingYanone, Marquee } from "@/components"
import { PortfolioItem } from "./PortfolioItem"

export const Portfolio = () => {
    return (
        <section className="min-h-screen overflow-hidden w-screen flex flex-col py-[100px] px-[130px] gap-32">
            <HeadingYanone h="1" className="text-[180px]/[100%]">
                ПОРТФОЛИО
            </HeadingYanone>

            <Marquee>
                <PortfolioItem labelImg="/portfolio_1" href="/">
                    ШКОЛА СММ <br />
                    ФИРМЕННЫЙ СТИЛЬ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_2" href="/">
                    NAILSHEART
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_3" href="/">
                    РУМТИБЕТ <br />
                    ВЕБ-САЙТ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_4" href="/">
                    ВОКАЛЬНАЯ СТУДИЯ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_5" href="/">
                    РАЗРАБОТКА МЕНЮ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_6" href="/">
                    МАКЕТ ЖУРНАЛА
                </PortfolioItem>
            </Marquee>
            <Marquee>
                <PortfolioItem labelImg="/portfolio_1" href="/">
                    ШКОЛА СММ <br />
                    ФИРМЕННЫЙ СТИЛЬ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_2" href="/">
                    NAILSHEART
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_3" href="/">
                    РУМТИБЕТ <br />
                    ВЕБ-САЙТ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_4" href="/">
                    ВОКАЛЬНАЯ СТУДИЯ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_5" href="/">
                    РАЗРАБОТКА МЕНЮ
                </PortfolioItem>
                <PortfolioItem labelImg="/portfolio_6" href="/">
                    МАКЕТ ЖУРНАЛА
                </PortfolioItem>
            </Marquee>
        </section>
    )
}