"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { type ReactNode, useRef } from "react"
import { cn } from "@/lib/utils"

interface ParallaxElementProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  rotate?: boolean
  scale?: boolean
  opacity?: boolean
}

export function ParallaxElement({
  children,
  className,
  speed = 0.3,
  direction = "up",
  rotate = false,
  scale = false,
  opacity = false,
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Calculate transform values based on direction
  const xValue = direction === "left" ? -speed * 100 : speed * 100
  const yValue = direction === "up" ? -speed * 100 : speed * 100

  const x = useTransform(scrollYProgress, [0, 1], direction === "left" || direction === "right" ? [0, xValue] : [0, 0])
  const y = useTransform(scrollYProgress, [0, 1], direction === "up" || direction === "down" ? [0, yValue] : [0, 0])

  // Optional rotation effect
  const rotationValue = direction === "left" ? -10 : 10
  const rotation = rotate ? useTransform(scrollYProgress, [0, 1], [0, rotationValue]) : 0

  // Optional scale effect
  const scaleValueTransform = scale ? useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]) : 1
  const scaleValue = scale ? scaleValueTransform : 1

  // Optional opacity effect
  const opacityValueTransform = opacity ? useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]) : 1
  const opacityValue = opacity ? opacityValueTransform : 1

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{
        x,
        y,
        rotate: rotation,
        scale: scaleValue,
        opacity: opacityValue,
      }}
    >
      {children}
    </motion.div>
  )
}
