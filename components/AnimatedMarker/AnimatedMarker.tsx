'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'
import { useInView } from 'framer-motion'

interface PathProps {
  path: string
  strokeWidth?: number
  strokeDasharray: number
  delay?: number
  duration?: number
}

interface AnimatedMarkerProps {
  className?: string
  width?: number
  height?: number
  paths?: PathProps[]
  children?: ReactNode
}

const defaultPaths: PathProps[] = [
  {
    path: "M20,160 C50,100 150,50 250,80 C350,110 380,170 390,220",
    strokeWidth: 8,
    strokeDasharray: 800,
    delay: 0.5,
    duration: 2
  },
  {
    path: "M50,220 C100,180 200,160 300,190 C350,205 380,240 390,280",
    strokeWidth: 6,
    strokeDasharray: 700,
    delay: 1.2,
    duration: 1.8
  },
  {
    path: "M30,100 C80,120 180,130 250,90 C320,50 350,30 380,20",
    strokeWidth: 7,
    strokeDasharray: 650,
    delay: 0.8,
    duration: 1.5
  }
]

const AnimatedMarker = ({ 
  className = '', 
  width = 410, 
  height = 320, 
  paths = defaultPaths,
  children
}: AnimatedMarkerProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  return (
    <div ref={ref} className={`${className} pointer-events-none`}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
        {paths.map((pathData, index) => (
          <path 
            key={index}
            d={pathData.path}
            fill="none" 
            stroke="#FF54A6" 
            strokeWidth={pathData.strokeWidth || 6}
            strokeLinecap="round"
            strokeDasharray={pathData.strokeDasharray}
            strokeDashoffset={isVisible ? 0 : pathData.strokeDasharray}
            style={{ 
              transition: isVisible 
                ? `stroke-dashoffset ${pathData.duration || 2}s ease-in-out ${pathData.delay || 0}s` 
                : '' 
            }}
          />
        ))}
        {children}
      </svg>
    </div>
  )
}

export { AnimatedMarker } 