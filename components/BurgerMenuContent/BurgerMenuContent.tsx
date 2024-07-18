'use client'
import { forwardRef, useImperativeHandle, useRef } from "react";
import { BurgerMenuContentTemplate, IBurgerMenuContentTemplate, SlideUpAnchor } from "../";
import { IBurgerMenuContentProps } from "./BurgetMenuContent.props";



const BurgerMenuContent = forwardRef(({ onBackdropClick }: IBurgerMenuContentProps, outerRef) => {
    const templateRef = useRef<IBurgerMenuContentTemplate>(null),
        contentRef = useRef<HTMLDivElement>(null)

    function onBackdropClickUpdated() {
        if (onBackdropClick) {
            onBackdropClick && onBackdropClick();

            if (!templateRef.current) return;
            closeTemplate(templateRef.current, contentRef.current!.classList)
        }

    }

    useImperativeHandle(outerRef, () => {
        const { classList: contentClassList } = contentRef.current!;

        return {
            close() {
                if (!templateRef.current) return;

                closeTemplate(templateRef.current, contentClassList)
            },
            open() {
                if (!templateRef.current) return;
                templateRef.current.open()

                if (!contentRef.current) return;
                contentClassList.add('delay-100');
                contentClassList.remove('opacity-0')
            },
            toggle() {
                if (!templateRef.current) return;
                templateRef.current.toggle()

                if (!contentRef.current) return;
                contentClassList.toggle('opacity-0')
                contentClassList.contains('opacity-0') ? contentClassList.remove('delay-100') : contentClassList.add('delay-100')
            }
        }
    })

    return (
        <BurgerMenuContentTemplate ref={templateRef} className="bg-stone-50" onBackdropClick={onBackdropClickUpdated}>
            <div className="w-full h-screen pt-[90px] flex flex-col justify-between relative text-[40px]/[100%] transition-opacity opacity-0 delay-100 !text-black" ref={contentRef}>
                <div className="flex grow-[2] font-light px-10">
                    <div className="w-full max-w-[316px]">
                        <h4 className="text-pink mb-[80px]">социальные сети</h4>
                        <ul className="font-extralight flex flex-col gap-10">
                            <li><SlideUpAnchor text="instagram" ></SlideUpAnchor></li>
                            <li><SlideUpAnchor text="telegram"></SlideUpAnchor></li>
                        </ul>
                    </div>

                    <div className="w-full">
                        <h4 className="text-pink mb-[80px]">меню</h4>
                        <ul className="font-extralight flex flex-col gap-10 *:uppercase">
                            <li><SlideUpAnchor text="Об агенстве" ></SlideUpAnchor></li>
                            <li><SlideUpAnchor text="Портфолио"></SlideUpAnchor></li>
                            <li><SlideUpAnchor text="Отзывы" ></SlideUpAnchor></li>
                            <li><SlideUpAnchor text="Услуги"></SlideUpAnchor></li>
                        </ul>
                    </div>
                </div>

                <footer className="flex flex-col pb-[80px]  px-10">
                    <h4 className="text-pink mb-[50px] font-light">cвязаться</h4>
                    <strong className="mb-30 font-extralight cursor-pointer" >whats up</strong>
                    <strong className="font-extralight cursor-pointer">Digiplay@gmail.ru</strong>
                </footer>
            </div>
        </BurgerMenuContentTemplate>
    )
})

export { BurgerMenuContent }


function closeTemplate(template: IBurgerMenuContentTemplate, contentClassList: DOMTokenList) {
    template.close()

    contentClassList.remove('delay-100');
    contentClassList.add('opacity-0')
}