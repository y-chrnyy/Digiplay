import { forwardRef } from "react"
import { IFancyAnchorProps } from "./FancyAnchor.props"
import classes from './FancyAnchor.module.css'
import cn from "classnames"
import Link from "next/link"


const FancyAnchor = forwardRef<HTMLAnchorElement, IFancyAnchorProps>(({ appearance = 'black', children, className, href = '#', ...props }, ref) => {
    const base = `group/a cursor-pointer inline-flex justify-center items-center min-w-[306px] h-[78px] rounded-[40px] py-5 text-[40px] relative overflow-hidden
                  hover:scale-x-[1.02] transition-transform duration-500 [transition-timing-function:cubic-bezier(.34,5.56,.64,1)]
                  before:absolute before:w-full before:h-full before:translate-y-[101%] hover:before:translate-y-0
                  before:rounded-t-[50%] hover:before:[border-radius:0px] before:transition-all before:duration-500 
                  before:[transition-timing-function:cubic-bezier(.4,0,0,1)]`

    const styles = {
        'black': 'bg-black text-white before:bg-white hover:border-black hover:border',
        'ghost': 'bg-transparent text-black border border-black before:bg-black',
        'pink': 'bg-transparent border border-pink  before:bg-pink',
        'pink-reverse': 'bg-pink border border-pink before:bg-black'
    }

    const spanStyles = {
        'black': 'text-white',
        'ghost': 'text-black',
        'pink': 'text-white',
        'pink-reverse': 'text-black'
    };

    const textSpanStyles = {
        'black': 'text-black',
        'ghost': 'text-white',
        'pink': 'text-black',
        'pink-reverse': 'text-white'
    }


    return (
        <Link
            className={cn(base, styles[appearance], className, classes.link)}
            ref={ref}
            href={href}
            {...props}
        >
            <span className="relative overflow-hidden z-10 font-light">
                <span className={cn('inline-block ', spanStyles[appearance], classes.textSpan)}>{children}</span>
                <span className={cn(`inline-block absolute top-0 left-0 translate-y-[101%] ${textSpanStyles[appearance]}`, classes.ripleSpan)}>{children}</span>
            </span>
        </Link>
    )
})

export { FancyAnchor }