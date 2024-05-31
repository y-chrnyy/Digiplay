'use client'
import { useAnimate } from 'framer-motion';
import { Ref, forwardRef, useRef, useState } from "react";

const BurgerMenu = forwardRef((props, ref: Ref<HTMLButtonElement>) => {
    const [isOpen, setIsOpen] = useState(false)

    const [scope, animate] = useAnimate(),
        fRef = useRef<HTMLSpanElement>(null), // Это нужно, чтобы менять стили НЕ ЧЕРЕЗ framer-motion
        sRef = useRef<HTMLSpanElement>(null);

    async function openBurger() {
        animate('.f', { scaleX: 0, });
        await animate('.s', { scaleX: 0 });

        fRef.current!.style.rotate = '45deg';
        sRef.current!.style.rotate = '-45deg';
        await animate('.s', { y: -24, x: 2.5 });


        animate('.f', { scaleX: 1, }, { duration: 0.250, ease: 'easeIn' });
        await animate('.s', { scaleX: 1 }, { delay: 0.085, duration: 0.250, ease: 'easeIn' });
    }

    async function closeBurger() {

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
            onClick={() => toggleBurger()}
            className="fixed p-3 right-[52px] top-[46px] z-50"
            ref={ref}
            aria-label='Открыть меню'
            {...props}
        >
            <div className="flex flex-col gap-[15px]" ref={scope}>
                <span className="pointer-events-none f block  top-0 w-[52px] h-1 bg-black origin-[0%_50%]" ref={fRef} />
                <span className="pointer-events-none s block  top-4 w-[52px] h-1 bg-black origin-[100%_50%]" ref={sRef} />
            </div>
        </button>
    )
})

export { BurgerMenu }