"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useClickOutside } from "@/hooks/use-click-outside"
import { ThemeToggle } from "@/components/theme-toggle"

interface MobileMenuProps {
  links: {
    href: string
    label: string
  }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Use the click outside hook to close the menu when clicking outside
  const menuRef = useClickOutside<HTMLDivElement>(() => {
    if (isOpen) setIsOpen(false)
  })

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Close the menu when the screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="relative z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-40 w-3/4 max-w-sm bg-background p-6 shadow-lg"
            aria-modal="true"
            role="dialog"
          >
            <div className="flex h-full flex-col">
              <div className="flex-1 overflow-y-auto py-8">
                <nav className="flex flex-col space-y-6">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="border-t pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Link
                    href="#"
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    Log in
                  </Link>
                  <Button asChild onClick={handleLinkClick}>
                    <Link href="#cta">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
