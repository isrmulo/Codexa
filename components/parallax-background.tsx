"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { type ReactNode, useRef } from "react"
import { cn } from "@/lib/utils"

interface ParallaxBackgroundProps {
  children: ReactNode
  className?: string
  backgroundImage?: string
  speed?: number
  darkOverlay?: boolean
}

export function ParallaxBackground({
  children,
  className,
  backgroundImage,
  speed = 0.5,
  darkOverlay = true,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 30}%`])

  return (
    <motion.div ref={ref} className={cn("relative overflow-hidden", className)}>
      {backgroundImage && (
        <>
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              y: backgroundY,
            }}
          />
          {darkOverlay && <div className="absolute inset-0 z-0 bg-background/40 dark:bg-background/80" />}
        </>
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
