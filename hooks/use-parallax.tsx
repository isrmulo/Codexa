"use client"

import { useScroll, useTransform, type MotionValue } from "framer-motion"
import { useRef } from "react"

interface ParallaxOptions {
  speed?: number
  offset?: number
  direction?: "up" | "down" | "left" | "right"
  inputRange?: [number, number]
  outputRange?: [number, number]
}

export function useParallax(options: ParallaxOptions = {}) {
  const { speed = 0.5, offset = 0, direction = "up", inputRange = [0, 1], outputRange = [0, 1] } = options

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const upTransform = useTransform(scrollYProgress, inputRange, [
    offset + outputRange[1] * speed * 100,
    offset + outputRange[0] * speed * 100,
  ])

  const downTransform = useTransform(scrollYProgress, inputRange, [
    offset + outputRange[0] * speed * -100,
    offset + outputRange[1] * speed * -100,
  ])

  const leftTransform = useTransform(scrollYProgress, inputRange, [
    offset + outputRange[1] * speed * 100,
    offset + outputRange[0] * speed * 100,
  ])

  const rightTransform = useTransform(scrollYProgress, inputRange, [
    offset + outputRange[0] * speed * -100,
    offset + outputRange[1] * speed * -100,
  ])

  // Calculate the transform based on direction
  let transform: MotionValue<number>

  switch (direction) {
    case "up":
      transform = upTransform
      break
    case "down":
      transform = downTransform
      break
    case "left":
      transform = leftTransform
      break
    case "right":
      transform = rightTransform
      break
    default:
      transform = upTransform
  }

  return { ref, transform, scrollYProgress }
}
