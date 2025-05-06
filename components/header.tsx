"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { useScroll } from "@/hooks/use-scroll"

interface HeaderProps {
  navigationLinks: {
    href: string
    label: string
  }[]
}

export function Header({ navigationLinks }: HeaderProps) {
  const scrolled = useScroll(10)

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/placeholder.svg?height=32&width=32" alt="StreamLine Logo" width={32} height={32} />
          <span className="text-xl font-bold">StreamLine</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Log in
          </Link>
          <Button asChild>
            <Link href="#cta">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu links={navigationLinks} />
      </div>
    </header>
  )
}
