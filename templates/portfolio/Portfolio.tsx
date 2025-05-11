import { HeadingYanone, Marquee } from "@/components";
import { PortfolioItem } from "./PortfolioItem";
import { SimpleMarquee } from "@/components/Marquee/simpleMarquee";

export const Portfolio = () => {
  return (
    <section className="min-h-screen overflow-hidden w-screen flex flex-col py-[100px] px-[130px] gap-32 items-center bg-service-scretch bg-cover">
      <HeadingYanone h="1" className="text-[180px]/[100%]">
        ПОРТФОЛИО
      </HeadingYanone>

      <SimpleMarquee className="" stopOnHover={true} gap={100} toLeft={true}>
        <MarquueContent />
      </SimpleMarquee>

      <SimpleMarquee className="" stopOnHover={true} gap={100} toLeft={false}>
        <MarquueContent />
      </SimpleMarquee>
    </section>
  );
};

const MarquueContent = () => {
  return (
    <>
      <div className="flex flex-nowrap gap-[100px] w-max min-w-[100vw]">
        <PortfolioItem labelImg="/portfolio_1.png" href="/smm">
          ШКОЛА СММ <br />
          ФИРМЕННЫЙ СТИЛЬ
        </PortfolioItem>
        <PortfolioItem labelImg="/nails_third.png" href="/nails-heart">
          NAILSHEART
        </PortfolioItem>

        <PortfolioItem labelImg="/portfolio_4.png" href="/imi-nami">
          ВОКАЛЬНАЯ СТУДИЯ
        </PortfolioItem>

      </div>

      <div className="flex flex-nowrap gap-[100px] w-max min-w-[100vw]">
      <PortfolioItem labelImg="/portfolio_1.png" href="/smm">
          ШКОЛА СММ <br />
          ФИРМЕННЫЙ СТИЛЬ
        </PortfolioItem>
        <PortfolioItem labelImg="/nails_third.png" href="/nails-heart">
          NAILSHEART
        </PortfolioItem>
 
        <PortfolioItem labelImg="/portfolio_4.png" href="/imi-nami">
          ВОКАЛЬНАЯ СТУДИЯ
        </PortfolioItem>
      </div>
    </>
  );
};
