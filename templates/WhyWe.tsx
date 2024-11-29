import { HeadingKurut, TextAnimationWrapper } from "../components";

const WhyWe = () => {
  return (
    <section className="min-h-screen pt-[213px] flex flex-col items-center text-[40px]/[100%] px-[87px]">
      <TextAnimationWrapper offset={40}>
        <HeadingKurut h="2" className="uppercase self-start text-header-md">
          Почему мы?
        </HeadingKurut>
      </TextAnimationWrapper>

      <TextAnimationWrapper offset={10}>
        <h3 className="mt-[110px]">Преимущества сотрудничества с нами:</h3>
      </TextAnimationWrapper>

      <TextAnimationWrapper
        delay={0.2}
        staggerDelay={0.03}
        staggerMultiplier={0.03}
      >
        <div className="flex flex-col gap-[50px] mt-[50px] list-disc font-yanone text-center">
          <p>- ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ ПРОЕКТУ.</p>
          <p>- ОПЫТ РАБОТЫ С РАЗЛИЧНЫМИ ОТРАСЛЯМИ С УСПЕШНЫМИ ИНТЕГРАЦИЯМИ.</p>
          <p>- ИСПОЛЬЗОВАНИЕ СОВРЕМЕННЫХ ТЕХНОЛОГИЙ И ТРЕНДОВ В ДИЗАЙНЕ.</p>
          <p>- ГАРАНТИИ КАЧЕСТВА И СОБЛЮДЕНИЯ СРОКОВ.</p>
        </div>
      </TextAnimationWrapper>
    </section>
  );
};

export { WhyWe };
