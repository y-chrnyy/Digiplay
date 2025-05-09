import {
  SubscribeMarqueeLink,
  FancyAnchor,
  HeadingKurut,
  TextAnimationWrapper,
} from "../components/index";

const Subscribe = () => {
  return (
    <section className="flex flex-col uppercase pb-[45px] xs:pb-[30px]">
      <TextAnimationWrapper offset={40}>
        <HeadingKurut
          className="mt-[130px] xs:mt-[90px] self-center text-header-md text-pink font-extralight whitespace-pre-line !text-[60px] !xs:text-[40px]"
          h="2"
        >
          Подпишитесь на нас
        </HeadingKurut>
      </TextAnimationWrapper>

      <h3 className="text-[30px]/[100%] xs:text-[24px]/[100%] text-white font-light ml-10 xs:ml-5 mt-[150px] xs:mt-[100px] mb-[35px] xs:mb-[25px]">
        Социальные сети и контакты
      </h3>
      <SubscribeMarqueeLink text={"Instagram"} />
      <SubscribeMarqueeLink text={"Telegram"} />
      <SubscribeMarqueeLink text={"Whats up"} />
      <SubscribeMarqueeLink text={"Linkedin"} />

      <div className="mt-[213px] xs:mt-[150px] mx-[60px] xs:mx-[30px] flex gap-[45px] xs:gap-[25px]">
        <FancyAnchor appearance="pink" href={"/services"}>
          <strong className="font-light text-[30px]/[100%] xs:text-[24px]/[100%] underline">
            Digiplay@gmail.ru
          </strong>
        </FancyAnchor>
      </div>
    </section>
  );
};

export { Subscribe };
