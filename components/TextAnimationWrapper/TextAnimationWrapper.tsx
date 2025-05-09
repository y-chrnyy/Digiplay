'use client'
import { useRef, useEffect, ReactNode, cloneElement, isValidElement } from "react"
import { ITextAnimationWrapperProps } from "./TextAnimationWrapper.props"
import { motion, useInView, useAnimation } from "framer-motion"
import cn from 'classnames'

const spanVariants = {
    initial: {
        y: '160%',
    },
    animate: (index: number) => ({
        y: '0%',

    })
}


export type Config = {
    staggerDelay: number;
    offset: number
    delay: number;
    staggerMultiplier: number
}


// Получает массив слов. Оборачивает каждое слово в <div><span></span></div>. Каж
function wordsToSpan(words: string[], config: Config) {
    const wrapperRef = useRef(null),
        isInView = useInView(wrapperRef, { once: true })

    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start('animate')
        }
    }, [isInView])

    return (
        <>
            {words.map(word =>
            (<span
                className={cn("overflow-hidden inline-block")}
                style={{ paddingTop: config.offset + 'px', marginTop: -1 * config.offset + 'px' }}
                ref={wrapperRef}
                key={word + config.staggerDelay + config.offset}
            >
                <motion.span
                    className={cn("inline-block whitespace-pre-wrap")}
                    variants={spanVariants}
                    initial='initial'
                    animate={controls}
                    transition={{
                        duration: 0.85,
                        delay: config.delay + config.staggerDelay++ * config.staggerMultiplier,
                        ease: [0.26, 0.48, 0.11, 0.97]
                    }}
                >
                    {word}
                    {" "}
                </motion.span>
            </span>)

            )}
        </>
    )
}

// Принимает компонент. Возвращает этот же компонент, но слова внутри будут обёрнуты в <div><span></span></div>
function getIsolatedWords(node: ReactNode, config: Config): ReactNode {

    if (isValidElement(node)) {
        const newChildren: ReactNode[] = []
        const children = node.props.children;

        if (Array.isArray(children)) {
            for(let child of children) {
                if(!Array.isArray(child)) {
                    newChildren.push(getIsolatedWords(child, config))
                }
            }
        
            // newChildren.push(children.map((child) => getIsolatedWords(child, config)))
        }

        if (typeof children === 'string' || typeof children === 'number') {
            const words = children.toString().trim().replace(/ +/g, ' ').split(' ');
            newChildren.push(wordsToSpan(words, config))
        }

        if (isValidElement(children)) {
            newChildren.push(getIsolatedWords(children, config));
        }

        return cloneElement(node, {}, newChildren.length > 0 ? newChildren : null)
    }

    if (typeof node === 'string' || typeof node === 'number') {
        const words = node.toString().trim().replace(/ +/g, ' ').split(' ');
        return wordsToSpan(words, config)
    }
}

const TextAnimationWrapper = ({ children, offset = 0, staggerDelay = 0.05, delay = 0, staggerMultiplier = 0.1 }: ITextAnimationWrapperProps): JSX.Element => {
    const wrappedChildren = getIsolatedWords(children, { staggerDelay, offset, delay, staggerMultiplier })

    return (
        <>
            {wrappedChildren}
        </>
    )
}

export { TextAnimationWrapper }