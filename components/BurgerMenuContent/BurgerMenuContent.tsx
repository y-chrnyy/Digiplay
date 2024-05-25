import { forwardRef } from "react"
import { IBurgerMenuContentProps } from "./BurgetMenuContent.props"
import cn from 'classnames'

const BurgerMenuContent = forwardRef<HTMLDivElement, IBurgerMenuContentProps>(({ className }, ref) => {
    return (
        <section className={cn(`w-full max-w-[946px] h-screen fixed right-0 top-0 z-40 bg-red-400 
                             scale-x-0 transition-all duration-500 origin-[right_center] ease-in-out`, className)}
            ref={ref}
        >

        </section>
    )
})

export { BurgerMenuContent }