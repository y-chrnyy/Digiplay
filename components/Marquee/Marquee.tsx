'use client'
import React, { isValidElement, memo, ReactNode, useEffect, useRef } from "react";
import { IMarqueeProps } from "./Marquee.pops";
import cn from 'classnames';

const Marquee = memo(({ children, className, runOnHover = true, runOnTarget, stopOnHover, ...props }: IMarqueeProps) => {
    const firstMarqueeContent = useRef<HTMLDivElement>(null),
        secondMarqueeContent = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (runOnTarget) {
            const target = document.getElementById(runOnTarget);
            if (!target) return;

            target.onmouseenter = () => {
                firstMarqueeContent.current!.style.animationPlayState = 'running'
                secondMarqueeContent.current!.style.animationPlayState = 'running'
            }

            target.onmouseleave = () => {
                firstMarqueeContent.current!.style.animationPlayState = ''
                secondMarqueeContent.current!.style.animationPlayState = ''
            }
            return () => {
                target.onmouseenter = null;
                target.onmouseleave = null;
            }
        }

    }, [])

    let marqueItems: ReactNode

    if (isValidElement(children)) {
        marqueItems = React.cloneElement(children)
    } else {
        marqueItems = children
    }

    return (
        <div className={cn(`group/a flex flex-nowrap overflow-hidden text-[60px] font-light text-pink relative gap-[100px]`, className)} {...props}>
            <div
                className={`will-change-transform min-w-full w-fit flex shrink-0 gap-[100px] animate-marquee ${runOnHover && 'paused group-hover/a:running'} ${stopOnHover && 'running group-hover/a:paused'}`}
                ref={firstMarqueeContent}
            >
                {marqueItems}
            </div>
            <div
                className={`will-change-transform min-w-full w-fit flex shrink-0 gap-[100px] animate-marquee ${runOnHover && 'paused group-hover/a:running'} ${stopOnHover && 'running group-hover/a:paused'}`}
                aria-hidden='true'
                ref={secondMarqueeContent}
            >
                {children}
            </div>
        </div >
    )
})


/*


<div className={cn(`group/a flex flex-nowrap gap-[100px] overflow-hidden text-[60px] font-light text-pink relative`, className)} {...props}>
            <div
                className={`will-change-transform min-w-full w-fit flex shrink-0 gap-[100px] animate-marquee ${runOnHover && 'paused group-hover/a:running'} ${stopOnHover && 'running group-hover/a:paused'}`}
                ref={firstMarqueeContent}
            >
                {marqueeItems}
            </div>
            <div
                className={`will-change-transform min-w-full w-fit flex shrink-0 gap-[100px] animate-marquee ${runOnHover && 'paused group-hover/a:running'} ${stopOnHover && 'running group-hover/a:paused'}`}
                aria-hidden='true'
                ref={secondMarqueeContent}
            >
                {children}
            </div>
        </div >

*/

export { Marquee }