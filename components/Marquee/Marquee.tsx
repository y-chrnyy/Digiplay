
import { Children } from "react";
import { IMarqueeProps } from "./Marquee.pops";
import cn from 'classnames'
import classes from './Marquee.module.css'

const Marquee = ({children, className, ...props}: IMarqueeProps) => {

    let content = Children.toArray(children);
    content = content.flatMap(i => Array(10).fill(i));

    
    return (
        <div className={cn("flex flex-nowrap overflow-hidden text-[60px] font-light text-pink gap-[100px] relative", classes['marquee'], className)}>
            <div className={cn("flex min-w-full shrink-0", classes['marquee-content'])}>
                {content.map(i => <span>{i}</span> )}
            </div>
            <div className={cn("flex min-w-full shrink-0", classes['marquee-content'] )}>
                {content.map(i => <span>{i}</span> )}
            </div>
        </div>
    )
}

export {Marquee}