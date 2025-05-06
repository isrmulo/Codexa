"use client"

import { motion, useScroll } from "framer-motion"
import { type ReactNode, useMemo } from "react"
import { cn } from "@/lib/utils"

interface FloatingElementsProps {
  className?: string
  count?: number
  children?: ReactNode
  speed?: number
}

export function FloatingElements({ className, count = 10, children, speed = 0.5 }: FloatingElementsProps) {
  const { scrollYProgress } = useScroll()

  // Create an array of elements with random positions and sizes
  const elements = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 40 + 10
      const initialX = Math.random() * 100
      const initialY = Math.random() * 100
      const delay = Math.random() * 2
      const duration = Math.random() * 10 + 10
      const xOffset = (Math.random() * 20 - 10) * speed
      const yOffset = (Math.random() * 20 - 10) * speed
      const rotateOffset = Math.random() * 360 * speed

      return { size, initialX, initialY, delay, duration, id: i, xOffset, yOffset, rotateOffset }
    })
  }, [count, speed])

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-primary/10"
          style={{
            width: element.size,
            height: element.size,
            x: `${element.initialX}%`,
            y: `${element.initialY}%`,
          }}
          animate={{
            x: [`${element.initialX}%`, `${element.initialX + element.xOffset}%`, `${element.initialX}%`],
            y: [`${element.initialY}%`, `${element.initialY + 5}%`, `${element.initialY}%`],
            rotate: [0, element.rotateOffset, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {children}
    </div>
  )
}
