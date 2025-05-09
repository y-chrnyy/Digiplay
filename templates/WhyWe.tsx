import { HeadingKurut, TextAnimationWrapper } from "../components";

const WhyWe = () => {
  return (
    <section className="min-h-screen pt-[213px] md:pt-[150px] sm:pt-[100px] xs:pt-[80px] flex flex-col items-center text-[40px]/[100%] md:text-[32px]/[120%] sm:text-[28px]/[130%] xs:text-[24px]/[130%] px-[87px] md:px-[50px] sm:px-[20px] xs:px-[15px]">
      <TextAnimationWrapper offset={40}>
        <HeadingKurut h="2" className="uppercase self-start text-header-md !md:text-[120px] !sm:text-[100px] !text-[80px] !xs:text-[60px] px-2">
          Почему мы?
        </HeadingKurut>
      </TextAnimationWrapper>

      <TextAnimationWrapper offset={10}>
        <h3 className="mt-[110px] md:mt-[80px] sm:mt-[50px] xs:mt-[40px]">Преимущества сотрудничества с нами:</h3>
      </TextAnimationWrapper>

      <TextAnimationWrapper
        delay={0.2}
        staggerDelay={0.03}
        staggerMultiplier={0.03}
      >
        <div className="font-light flex flex-col gap-[50px] md:gap-[40px] sm:gap-[30px] xs:gap-[25px] mt-[50px] md:mt-[40px] sm:mt-[30px] xs:mt-[25px] list-disc font-yanone text-center">
          <p>- ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ ПРОЕКТУ.</p>
          <p>- ОПЫТ РАБОТЫ С РАЗЛИЧНЫМИ ОТРАСЛЯМИ С УСПЕШНЫМИ ИНТЕГРАЦИЯМИ.</p>
          <p>- ИСПОЛЬЗОВАНИЕ СОВРЕМЕННЫХ ТЕХНОЛОГИЙ И ТРЕНДОВ В ДИЗАЙНЕ.</p>
          <p>- ГАРАНТИИ КАЧЕСТВА И СОБЛЮДЕНИЯ СРОКОВ.</p>
        </div>
      </TextAnimationWrapper>
    </section>
  );
};

export { WhyWe };
