import { forwardRef } from "react";
import { ISlideUpAnchorProps } from "./SlideUpAnchor.props";
import Link from "next/link";

const SlideUpAnchor = forwardRef<HTMLAnchorElement, ISlideUpAnchorProps>(
    (
        { text, className, href, onClick, ...props }: ISlideUpAnchorProps,
        outerRef
    ) => {
        return (
            <Link
                className={
                    ['group/a font-light text-[40px]/[100%] overflow-hidden cursor-pointer', className].join(' ')
                }
                {...props}
                ref={outerRef}
                href={href}
                onClick={onClick}
                target="_blank"
            >
                <em
                    className={`inline-block relative overflow-hidden pr-1
                                before:content-[attr(data-content)] before:inline-block
                                group-hover/a:before:-translate-y-[110%] group-hover/a:before:skew-y-[7deg]
                                before:transition-transform 
                                before:[transition-duration:1200ms] before:[transition-timing-function:cubic-bezier(.19,1,.22,1)]

                                after:content-[attr(data-content)] after:absolute after:left-0 after:top-0 after:inline-block
                                after:skew-y-[7deg] after:translate-y-[110%] 
                                group-hover/a:after:-translate-y-0 group-hover/a:after:skew-y-0
                                after:transition-transform after:origin-[left_top]
                                after:[transition-duration:1200ms] after:[transition-timing-function:cubic-bezier(.19,1,.22,1)]
                                
                                `}
                    data-content={text}
                >
                </em>
            </Link>
        )
    })

export { SlideUpAnchor }