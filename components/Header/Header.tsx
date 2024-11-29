'use client'
import { createContext, memo, useCallback, useContext, useRef } from 'react'
import { BurgerMenu, BurgerMenuContent, IBurgerMenu, IBurgerMenuContentTemplate, TextAnimationWrapper } from '..'

export type IBurgerContext = () => void


export const BurgerContextDefault = () => { }

export const useCloseBurger = () => {
    const close = useContext(BurgerContext);

    return close
}

export const BurgerContext = createContext(BurgerContextDefault)

const Header = memo(() => {
    const burgerRef = useRef<IBurgerMenu>(null),
        burgerContentRef = useRef<IBurgerMenuContentTemplate>(null);

    const toggleContent = useCallback(() => {
        burgerContentRef.current!.toggle();
    }, [])

    const onBurgerBackdropClick = useCallback(() => {
        burgerRef.current?.close()
    }, [])

    const onLinkClick = useCallback(() => {
        burgerRef.current?.close()
        burgerContentRef.current?.close()
    }, [])

    return (
        <header className='flex justify-between items-center px-10 py-[30px] text-white z-50 absolute w-full'>
            <BurgerContext.Provider value={onLinkClick}>
                <TextAnimationWrapper delay={0.1} offset={1}>
                    <p className='font-light text-[50px] mr-[88px] ml-auto'>меню</p>
                </TextAnimationWrapper>
                <BurgerMenu ref={burgerRef} onClick={() => toggleContent()} />
                <BurgerMenuContent ref={burgerContentRef} onBackdropClick={onBurgerBackdropClick} />
            </BurgerContext.Provider>
        </header >
    )
})

export { Header }