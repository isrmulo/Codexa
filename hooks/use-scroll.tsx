"use client"

import { useState, useEffect } from "react"

export function useScroll(threshold = 0) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Check initial scroll position
    handleScroll()

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [threshold])

  return scrolled
}
