'use client'
import React, { isValidElement, memo, ReactNode, useEffect, useRef } from "react";
import { IMarqueeProps } from "./Marquee.pops";
import cn from 'classnames';

export interface ISimpleMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
    gap: number
    stopOnHover: boolean
}

const SimpleMarquee = memo(({ children, className, stopOnHover, gap, ...props }: ISimpleMarqueeProps) => {
    const marquue = useRef<HTMLDivElement>(null);

    const keyframes = [
        { transform: 'translateX(0px)' },
        { transform: `translateX(calc(0px - 100% - ${gap}px))` }
    ]

    const animateOptions = {
        duration: 10000,
        iterations: Infinity,
        easing: 'linear'
    }

    useEffect(() => {
        if (!marquue.current) return
        marquue.current.animate(keyframes, animateOptions)
    }, [])


    return (
        <div className={cn(`group/a flex flex-nowrap overflow-hidden  relative`, className)} {...props}>
            <div
                className={`will-change-transform min-w-full w-max flex flex-nowrap shrink-0 animate-marquee ${stopOnHover ? 'running group-hover/a:paused' : 'running'}`}
                style={{gap: `${gap}px`}}
                ref={marquue}
            >
                {children}
            </div>
        </div >
    )
})



export { SimpleMarquee }