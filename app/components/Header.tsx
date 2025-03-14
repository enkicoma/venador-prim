"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "py-2" : "py-4")}
      style={{ backgroundColor: isScrolled ? "white" : "transparent" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between rounded-full bg-white py-3 px-6 shadow-sm">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <div className="text-primary font-bold mr-2">
                <span className="inline-block mr-1">|||</span>
              </div>
              <div>
                <div className="font-bold text-lg text-primary">VENADOR PRIM</div>
                <div className="text-xs uppercase tracking-wider text-secondary">CONCRETE POLES</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/product">Product</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/certificates">Certificates</NavLink>
            </div>
          </nav>

          {/* Right Side - Language & Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Select defaultValue="en">
                <SelectTrigger className="flex items-center h-10 space-x-1 rounded-full border border-gray-200 pl-1 pr-2 min-w-[60px] bg-transparent">
                  <div className="flex items-center gap-1">
                    <div className="relative h-6 w-6 overflow-hidden rounded-full">
                      <Image
                        src="https://kzmqv65a0608yx9nen20.lite.vusercontent.net/placeholder.svg?height=24&width=24"
                        alt="Language Flag"
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    {/* <SelectValue placeholder="EN" className="text-sm" /> */}
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="en">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <div className="relative h-4 w-4 overflow-hidden rounded-full">
                        <Image
                          src="https://kzmqv65a0608yx9nen20.lite.vusercontent.net/placeholder.svg?height=16&width=16"
                          alt="English"
                          width={16}
                          height={16}
                          className="object-cover"
                        />
                      </div>
                      <span>English</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="fr">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <div className="relative h-4 w-4 overflow-hidden rounded-full">
                        <Image
                          src="https://kzmqv65a0608yx9nen20.lite.vusercontent.net/placeholder.svg?height=16&width=16"
                          alt="French"
                          width={16}
                          height={16}
                          className="object-cover"
                        />
                      </div>
                      <span>French</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="es">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <div className="relative h-4 w-4 overflow-hidden rounded-full">
                        <Image
                          src="https://kzmqv65a0608yx9nen20.lite.vusercontent.net/placeholder.svg?height=16&width=16"
                          alt="Spanish"
                          width={16}
                          height={16}
                          className="object-cover"
                        />
                      </div>
                      <span>Spanish</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button asChild className="rounded-lg py-5 bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact" className="flex items-center space-x-2 px-5">
                <span>Contact</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-gray-600"></span>
              <span className="block h-0.5 w-6 bg-gray-600"></span>
              <span className="block h-0.5 w-6 bg-gray-600"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-lg bg-white shadow-lg p-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/">Home</MobileNavLink>
              <MobileNavLink href="/product">Product</MobileNavLink>
              <MobileNavLink href="/services">Services</MobileNavLink>
              <MobileNavLink href="/projects">Projects</MobileNavLink>
              <MobileNavLink href="/certificates">Certificates</MobileNavLink>
              <Button
                asChild
                className="py-5 w-full justify-center rounded-lg mt-2 bg-primary hover:bg-primary/90 text-white"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Contact</span>
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-base font-medium text-gray-700 hover:text-primary transition-colors py-2">
      {children}
    </Link>
  )
}

