'use client'
import { motion, useAnimate } from 'framer-motion';
import { Ref, forwardRef, useRef, useState, useImperativeHandle } from "react";
import { IBurgerMenuProps } from './BurgerMenu.props';

export interface IBurgerMenu {
    open: () => void,
    close: () => void,
    toggle: () => void,
}

const BurgerMenu = forwardRef(({ onClick, className, ...props }: IBurgerMenuProps, outerRef) => {
    const [isOpen, setIsOpen] = useState(false),
        burgerRef = useRef<HTMLButtonElement>(null)

    const [scope, animate] = useAnimate(),
        f = useRef<HTMLSpanElement>(null),
        s = useRef<HTMLSpanElement>(null);

    useImperativeHandle(outerRef, () => {

        return {
            open() {
                openBurger();
            },
            close() {
                closeBurger();
            },
            toggle() {
                toggleBurger();
            }
        }
    })


    async function openBurger() {
        f.current!.style.backgroundColor = '#ff54a6'
        s.current!.style.backgroundColor = '#ff54a6'
        burgerRef.current!.style.pointerEvents = 'none'

        animate('.f', { scaleX: 0, }, { duration: 0.25, ease: 'easeIn' });
        await animate('.s', { scaleX: 0 }, { duration: 0.25, ease: 'easeIn' });

        // По хорошему нужно сделать так, { rotate: 45, scaleX: 0, }
        // Но независимо от порядка элементов, это превратиться в transform: scaleX() rotate()
        // А мне нужно изменить порядок на tranform: rotate() scale()
        // Поэтому буду анимировать вещи через ref
        f.current!.style.rotate = '45deg'
        s.current!.style.rotate = '-45deg'
        animate('.f', { scaleX: 0, top: -8, right: -5 }, { duration: 0.01, });
        await animate('.s', { scaleX: 0, top: -26, right: 9 }, { duration: 0.01, });

        animate('.f', { scaleX: 1, }, { duration: 0.25, ease: 'easeIn', delay: 0.075 });
        await animate('.s', { scaleX: 1, }, { duration: 0.25, ease: 'easeIn', delay: 0.125 });


        setIsOpen(true)
        burgerRef.current!.style.pointerEvents = ''
    }

    async function closeBurger() {
        burgerRef.current!.style.pointerEvents = 'none'
        f.current!.style.rotate = ''
        s.current!.style.rotate = ''

        animate('.f', { top: 0, right: 0 }, { duration: 0.2 })
        animate('.s', { top: -18, right: 0 }, { duration: 0.2 })

        setTimeout(() => {
            animate('.f', { top: 0, right: 0 }, { duration: 0.2, ease: 'easeIn' })
            animate('.s', { top: 0, right: 0 }, { duration: 0.2, ease: 'easeIn' })

            f.current!.style.backgroundColor = ''
            s.current!.style.backgroundColor = ''
            burgerRef.current!.style.pointerEvents = ''
            setIsOpen(false)
        }, 300)


    }

    function toggleBurger() {
        if (isOpen) {
            closeBurger();
            setIsOpen(false);
            return;
        }

        openBurger();
        setIsOpen(true);
    }


    return (
        <button
            onClick={() => {
                toggleBurger();
                (onClick) && onClick()
            }}
            className={["fixed p-[5px] right-[10px] sm:right-[52px] top-[51px] z-50", className].join(' ')}
            ref={burgerRef}
            aria-label='Открыть меню'
            {...props}
        >
            <div className="" ref={scope}>
                <motion.span
                    className={`f  pointer-events-none block  relative w-[52px] h-1 bg-white [transition:rotate_.2s;]`}
                    initial={{
                        originX: 0,
                        originY: 0.5,
                        rotate: 0,
                        scaleX: 1,
                    }}
                    ref={f}
                />
                <motion.span
                    className={`s mt-[15px] pointer-events-none block  relative w-[52px] h-1 bg-white [transition:rotate_.2s;]`}
                    initial={{
                        originX: 1,
                        originY: 0.5,
                        scaleX: 1,
                    }}
                    ref={s}
                />
            </div>
        </button>
    )
})

export { BurgerMenu }