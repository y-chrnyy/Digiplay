'use client'
import { useEffect, useRef } from 'react'
import { BurgerMenu, BurgerMenuContent, IBurgerMenuContentTemplate } from '..'
import Digiplay from '../../public/DIGIPLAY.svg'

const Header = () => {
    const burgerRef = useRef<HTMLButtonElement>(null),
        burgerContentRef = useRef<IBurgerMenuContentTemplate>(null);

    // useEffect(() => {

    //     burgerRef.current!.onclick = () => {
    //         console.log('click')
    //         console.log('---')

    //         burgerContentRef.current!.toggle()
    //     }

    //     return () => {
    //         burgerRef.current!.onclick = null
    //     }
    // }, []);

    function toggleContent() {
        burgerContentRef.current!.toggle();
        console.log('toggle')
        console.log('__________')

    }

    return (
        <header className='flex justify-between items-center px-10 py-[30px]'>
            <Digiplay className='z-[100] cursor-pointer' />

            <p className='font-light text-[50px] mr-[88px]'>меню</p>
            <BurgerMenu ref={burgerRef} onClick={() => toggleContent()} />
            <BurgerMenuContent ref={burgerContentRef}>

            </BurgerMenuContent>
        </header >
    )
}

export { Header }