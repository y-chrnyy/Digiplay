import { IMarqueeProps } from "./Marquee.pops";
import cn from 'classnames';

const Marquee = ({ children, className, ...props }: IMarqueeProps) => {


    return (


        <div className={cn("group/a flex flex-nowrap gap-[100px] overflow-hidden text-[60px] font-light text-pink relative", className)} >
            <div className="min-w-full w-max flex gap-[100px] animate-marquee paused group-hover/a:running shrink-0">
                {children}

            </div>
            <div className="min-w-full w-max flex gap-[100px] animate-marquee paused group-hover/a:running shrink-0">
                {children}

            </div>
        </div >
    )
}

export { Marquee }