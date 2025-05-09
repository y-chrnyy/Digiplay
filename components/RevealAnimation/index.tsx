'use client'
import { motion, useAnimation, useInView } from "framer-motion"
import { ReactNode, useEffect, useRef } from "react"

export interface IRevealAnimationProps {
    children: ReactNode
    duration: number
    delay?: number
    offset?: number
}

const variants = {
    init: {
        y: "160%"
    },
    start: {
        y: "0%"
    }
}

export const RevealAnimation = ({ children, duration, delay = 0, offset }: IRevealAnimationProps) => {
    const spanRef = useRef<HTMLSpanElement>(null),
        containerRef = useRef<HTMLSpanElement>(null),
        isInView = useInView(containerRef, { once: true })

    const controls = useAnimation()

    useEffect(() => {
        if (!isInView) return;

        controls.start('start')
    }, [isInView])

    return (
        <span
            className="block overflow-hidden"
            ref={containerRef}
            style={{
                paddingTop: `${offset}px`,
                marginTop: `${-1 * (offset || 0)}px`
            }}
        >
            <motion.span
                className="block"
                ref={spanRef}
                variants={variants}
                animate={controls}
                initial='init'
                transition={{
                    duration,
                    delay,
                    ease: [0.26, 0.48, 0.11, 0.97]
                }}
            >
                {children}
            </motion.span>
        </span>
    )
}