import { Ref, forwardRef } from "react";

const BurgerMenu = forwardRef((props, ref: Ref<HTMLButtonElement>) => {

    return (
        <button className="fixed right-14 top-[46px] w-[52px] h-6 z-50" ref={ref}>
            <div className="relative">
                <span className="block absolute top-0 w-[52px] h-1 bg-black"></span>
                <span className="block absolute top-4 w-[52px] h-1 bg-black"></span>
            </div>

            <span className="visually-hidden">Открыть меню</span>
        </button>
    )
})

export { BurgerMenu }