'use client'
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { IBurgerMenuContentProps } from "./BurgetMenuContentTemplate.props"
import cn from 'classnames'

export interface IBurgerMenuContentTemplate {
    close: () => void;
    open: () => void;
    toggle: () => void;

}

const BurgerMenuContentTemplate = forwardRef(({ children, className, onBackdropClick }: IBurgerMenuContentProps, outerRef) => {
    const innerRef = useRef<HTMLDivElement>(null),
        backdropRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(outerRef, () => {
        const { classList: innerClassList } = innerRef.current!;
        const { classList: backdropClassList } = backdropRef.current!;

        return {
            close() {
                closeContent(backdropClassList, innerClassList)
            },
            open() {
                openContent(backdropClassList, innerClassList)
            },
            toggle() {
                toggleContent(backdropClassList, innerClassList)
            }
        };
    });

    useEffect(() => {
        function closeContentOnBackdropClick(e: MouseEvent) {
            const target = e.target as Element
            if (innerRef.current?.contains(target)) return;

            closeContent(backdropRef.current!.classList, innerRef.current!.classList)
            onBackdropClick && onBackdropClick()
        }

        if (onBackdropClick) {
            backdropRef.current?.addEventListener('click', closeContentOnBackdropClick)
        }

        return () => {
            backdropRef.current?.removeEventListener('click', closeContentOnBackdropClick)
        }
    }, [])

    return (
        <>
            <span
                className="fixed inset-0 bg-black z-20 opacity-0 transition-opacity duration-700 ease-out pointer-events-none"
                ref={backdropRef}
            >
            </span>
            <section className={cn(`w-full max-w-[946px] h-screen fixed right-0 top-0 z-30 bg-red-400 
                             scale-x-0 transition-all duration-500 origin-[right_center] ease-out max-sm:max-w-full`, className)}
                ref={innerRef}
            >
                {children}
            </section>
        </>

    )
})

export { BurgerMenuContentTemplate }




function openContent(backdropClassList: DOMTokenList, contentClassList: DOMTokenList) {
    contentClassList.remove('scale-x-0')

    backdropClassList.remove('opacity-0');
    backdropClassList.remove('pointer-events-none');
    backdropClassList.add('opacity-0');
    backdropClassList.add('pointer-events-auto');
}

function closeContent(backdropClassList: DOMTokenList, contentClassList: DOMTokenList) {
    contentClassList.add('scale-x-0')

    backdropClassList.remove('opacity-50');
    backdropClassList.remove('pointer-events-auto');
    backdropClassList.add('opacity-0');
    backdropClassList.add('pointer-events-none');
}

function toggleContent(backdropClassList: DOMTokenList, contentClassList: DOMTokenList) {
    contentClassList.toggle('scale-x-0')

    backdropClassList.toggle('opacity-0');
    backdropClassList.toggle('opacity-50');
    backdropClassList.toggle('pointer-events-auto');
    backdropClassList.toggle('pointer-events-none');
}