'use client'
import { useEffect, useRef } from 'react'
import { BurgerMenu, BurgerMenuContent } from '..'
import Digiplay from '../../public/DIGIPLAY.svg'

const Header = () => {
    const burgerRef = useRef<HTMLButtonElement>(null),
        burgerContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!burgerRef.current || !burgerContentRef.current) return;

        burgerRef.current.onclick = () => {
            console.log(burgerContentRef.current)
            burgerContentRef.current!.classList.toggle('scale-x-0')
        }

        return () => { burgerRef.current!.onclick = null }
    }, [])

    return (
        <header className='flex justify-between items-center px-10 py-[30px]'>
            <Digiplay />

            <p className='font-light text-[50px] mr-[88px]'>меню</p>
            <BurgerMenu ref={burgerRef} />
            <BurgerMenuContent ref={burgerContentRef} />
        </header >
    )
}

export { Header }