'use client'
import { useEffect, useRef } from 'react'
import { BurgerMenu, BurgerMenuContent, IBurgerMenu, IBurgerMenuContentTemplate } from '..'
import Digiplay from '../../public/DIGIPLAY.svg'

const Header = () => {
    const burgerRef = useRef<IBurgerMenu>(null),
        burgerContentRef = useRef<IBurgerMenuContentTemplate>(null);

    function toggleContent() {
        burgerContentRef.current!.toggle();
    }

    function onBurgerBackdropClick() {
        burgerRef.current!.close()
    }

    return (
        <header className='flex justify-between items-center px-10 py-[30px] text-white'>

            <p className='font-light text-[50px] mr-[88px] ml-auto'>меню</p>
            <BurgerMenu ref={burgerRef} onClick={() => toggleContent()} />
            <BurgerMenuContent ref={burgerContentRef} onBackdropClick={onBurgerBackdropClick}>

            </BurgerMenuContent>
        </header >
    )
}

export { Header }