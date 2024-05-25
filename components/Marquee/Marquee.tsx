'use client'
import { useEffect, useRef } from "react";
import { IMarqueeProps } from "./Marquee.pops";
import cn from 'classnames';

const Marquee = ({ children, className, runOnHover = true, runOnTarget, ...props }: IMarqueeProps) => {
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

    return (
        <div className={cn("group/a flex flex-nowrap gap-[100px] overflow-hidden text-[60px] font-light text-pink relative", className)} {...props}>
            <div
                className={`will-change-transform min-w-full w-max flex shrink-0 gap-[100px] animate-marquee  ${runOnHover && 'paused group-hover/a:running'}`}
                ref={firstMarqueeContent}
            >
                {children}
            </div>
            <div
                className={`will-change-transform min-w-full w-max flex shrink-0 gap-[100px] animate-marquee ${runOnHover && 'paused group-hover/a:running'}`}
                aria-hidden='true'
                ref={secondMarqueeContent}
            >
                {children}
            </div>
        </div >
    )
}

export { Marquee }