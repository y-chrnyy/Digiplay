import { forwardRef } from "react"
import { IFancyLinkProps } from "./FancyLink.props"
import classes from './FancyLink.module.css'
import cn from "classnames"


const FancyLink = forwardRef<HTMLAnchorElement, IFancyLinkProps>(({ appearance = 'black', children, className, ...props }, ref) => {
    const base = `group/a cursor-pointer inline-flex justify-center items-center min-w-[306px] h-[78px] rounded-[40px] py-5 text-[40px] relative overflow-hidden
                  hover:scale-x-[1.02] transition-transform duration-500 [transition-timing-function:cubic-bezier(.34,5.56,.64,1)]
                  before:absolute before:w-full before:h-full before:translate-y-[101%] hover:before:translate-y-0
                  before:rounded-t-[50%] hover:before:[border-radius:0px] before:transition-all before:duration-500 
                  before:[transition-timing-function:cubic-bezier(.4,0,0,1)]`

    const styles = {
        'black': 'bg-black text-white before:bg-white hover:border-black hover:border',
        'ghost': 'bg-transparent text-black border border-black before:bg-black',
        'pink': 'bg-transparent border border-pink text-pink before:bg-pink'
    }

    const spanStyles = {
        'black': 'text-white',
        'ghost': 'text-black',
        'pink': 'text-pink'
    };



    return (
        <a
            className={cn(base, styles[appearance], className, classes.link)}
            ref={ref}
            {...props}
        >
            <span className="relative overflow-hidden z-10 font-light">
                <span className={cn('inline-block ', spanStyles[appearance], classes.textSpan)}>{children}</span>
                <span className={cn(`inline-block absolute top-0 left-0 translate-y-[101%] ${appearance === "black" ? "text-black" : 'text-white'}`, classes.ripleSpan)}>{children}</span>
            </span>
        </a>
    )
})

export { FancyLink }