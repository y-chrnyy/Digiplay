import Link from "next/link"
import { ReactNode } from "react"

export interface IPortfolioItemProps {
    labelImg: string
    children: ReactNode
    href: string
}

export const PortfolioItem = ({ labelImg, children, href }: IPortfolioItemProps) => {


    return (
        <Link className="w-[407px] h-[481px] group relative flex overflow-hidden" href={href} style={{ backgroundImage: `url(${labelImg})` }}>

            <div className="opacity-0 group-hover:opacity-100 w-full flex-auto rounded-[50px] flex flex-col transition-opacity">
                <div className="text-[30px]/[100%] text-pink font-yanone flex justify-center items-center">{children}</div>

                <div className="flex justify-between w-full rounded-[50px] h-[100px] items-center ml-auto">
                    подробнее

                    <svg width="41" height="31" viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.3765 17.4509C41.1778 16.6907 41.2112 15.4248 40.4509 14.6235L28.0622 1.56513C27.302 0.763807 26.0361 0.730494 25.2348 1.49073C24.4335 2.25096 24.4002 3.51685 25.1604 4.31817L36.1726 15.9256L24.5651 26.9378C23.7638 27.698 23.7305 28.9639 24.4907 29.7652C25.251 30.5665 26.5169 30.5998 27.3182 29.8396L40.3765 17.4509ZM0.947387 16.9993L38.9474 17.9993L39.0526 14.0007L1.05261 13.0007L0.947387 16.9993Z" fill="white" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}