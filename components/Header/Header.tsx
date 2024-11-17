'use client'
import { createContext, useContext, useRef } from 'react'
import { BurgerMenu, BurgerMenuContent, IBurgerMenu, IBurgerMenuContentTemplate } from '..'

export type IBurgerContext = () => void


export const BurgerContextDefault = () => { }

export const useCloseBurger = () => {
    const close = useContext(BurgerContext);

    return close
}

export const BurgerContext = createContext(BurgerContextDefault)

const Header = () => {
    const burgerRef = useRef<IBurgerMenu>(null),
        burgerContentRef = useRef<IBurgerMenuContentTemplate>(null);

    function toggleContent() {
        burgerContentRef.current!.toggle();
    }

    function onBurgerBackdropClick() {
        burgerRef.current?.close()
    }

    function onLinkClick() {
        burgerRef.current?.close()
        burgerContentRef.current?.close()
    }

    return (
        <header className='flex justify-between items-center px-10 py-[30px] text-white z-50 absolute w-screen'>
            <BurgerContext.Provider value={onLinkClick}>
                <p className='font-light text-[50px] mr-[88px] ml-auto'>меню</p>
                <BurgerMenu ref={burgerRef} onClick={() => toggleContent()} />
                <BurgerMenuContent ref={burgerContentRef} onBackdropClick={onBurgerBackdropClick} />
            </BurgerContext.Provider>
        </header >
    )
}

export { Header }