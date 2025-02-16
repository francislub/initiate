"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, User, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`bg-white shadow ${isFixed ? "fixed top-0 left-0 right-0 z-50" : ""}`}>
      <div className="relative z-50 mx-auto px-4">
        <div className="flex justify-between items-center lg:h-28">
          <Link href="/" className="flex-shrink-0">
            <Image src="/initiate/log.jpg" alt="initiate" width={200} height={100} className="h-20 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center text-sm sm:text-base md:text-text-base">
            <NavLinks pathname={pathname} />
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-green-500">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-green-500">
              <User className="h-5 w-5" />
            </button>
            <button className="lg:hidden text-gray-600 hover:text-green-500" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLinks pathname={pathname} />
        </div>
      </div>
    </nav>
  )
}

function NavLinks({ pathname }: { pathname: string }) {
  return (
    <>
      <NavLink href="/" active={pathname === "/"}>
        HOME
      </NavLink>
      <NavDropdown title="WHAT WE DO" active={["/domain", "/project", "/impact"].includes(pathname)}>
        <NavLink href="/domain" active={pathname === "/domain"}>
          STRATEGIC DOMAINS
        </NavLink>
        <NavLink href="/project" active={pathname === "/project"}>
          PROJECTS
        </NavLink>
        <NavLink href="/impact" active={pathname === "/impact"}>
          IMPACT
        </NavLink>
        <NavLink href="/" active={false}>
          DRIVING CHANGE
        </NavLink>
      </NavDropdown>
      <NavDropdown title="WHO WE ARE" active={["/about", "/story", "/team"].includes(pathname)}>
        <NavLink href="/about" active={pathname === "/about"}>
          About Us
        </NavLink>
        <NavLink href="/story" active={pathname === "/story"}>
          OUR STORY
        </NavLink>
        <NavLink href="/team" active={pathname === "/team"}>
          OUR TEAM
        </NavLink>
      </NavDropdown>
      <NavDropdown title="GET INVOLVED" active={["/event", "/donate"].includes(pathname)}>
        <NavLink href="/event" active={pathname === "/event"}>
          EVENTS
        </NavLink>
        <NavLink href="/donate" active={pathname === "/donate"}>
          DONATE
        </NavLink>
      </NavDropdown>
      <NavDropdown title="MEDIA" active={["/media", "/blog"].includes(pathname)}>
        <NavLink href="/media" active={pathname === "/media"}>
          MEDIA & ADVOCACY
        </NavLink>
        <NavLink href="/blog" active={pathname === "/blog"}>
          PODCASTS
        </NavLink>
        <NavLink href="/blog" active={pathname === "/blog"}>
          BLOGS
        </NavLink>
      </NavDropdown>
      <NavLink href="/contact" active={pathname === "/contact"}>
        CONTACT US
      </NavLink>
    </>
  )
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 ${active ? "bg-green-100 text-green-800" : "text-gray-900 hover:text-green-500"}`}
    >
      {children}
    </Link>
  )
}

function NavDropdown({ title, children, active }: { title: string; children: React.ReactNode; active: boolean }) {
  return (
    <div className="relative group">
      <button
        className={`inline-flex items-center px-3 py-2 text-base ${
          active ? "bg-green-100 text-green-800" : "text-gray-900 group-hover:text-green-500"
        }`}
      >
        {title}
        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <div className="py-1 flex flex-col">{children}</div>
      </div>
    </div>
  )
}

function MobileNavLinks({ pathname }: { pathname: string }) {
  return (
    <>
      <MobileNavLink href="/" active={pathname === "/"}>
        HOME
      </MobileNavLink>
      <MobileNavDropdown title="WHAT WE DO" active={["/domain", "/project", "/impact"].includes(pathname)}>
        <MobileNavLink href="/domain" active={pathname === "/domain"}>
          STRATEGIC DOMAINS
        </MobileNavLink>
        <MobileNavLink href="/project" active={pathname === "/project"}>
          PROJECTS
        </MobileNavLink>
        <MobileNavLink href="/impact" active={pathname === "/impact"}>
          IMPACT
        </MobileNavLink>
        <MobileNavLink href="/" active={false}>
          DRIVING CHANGE
        </MobileNavLink>
      </MobileNavDropdown>
      <MobileNavDropdown title="WHO WE ARE" active={["/about", "/story", "/team"].includes(pathname)}>
        <MobileNavLink href="/about" active={pathname === "/about"}>
          About Us
        </MobileNavLink>
        <MobileNavLink href="/story" active={pathname === "/story"}>
          OUR STORY
        </MobileNavLink>
        <MobileNavLink href="/team" active={pathname === "/team"}>
          OUR TEAM
        </MobileNavLink>
      </MobileNavDropdown>
      <MobileNavDropdown title="GET INVOLVED" active={["/event", "/donate"].includes(pathname)}>
        <MobileNavLink href="/event" active={pathname === "/event"}>
          EVENTS
        </MobileNavLink>
        <MobileNavLink href="/donate" active={pathname === "/donate"}>
          DONATE
        </MobileNavLink>
      </MobileNavDropdown>
      <MobileNavDropdown title="MEDIA" active={["/media", "/blog"].includes(pathname)}>
        <MobileNavLink href="/media" active={pathname === "/media"}>
          MEDIA & ADVOCACY
        </MobileNavLink>
        <MobileNavLink href="/blog" active={pathname === "/blog"}>
          PODCASTS
        </MobileNavLink>
        <MobileNavLink href="/blog" active={pathname === "/blog"}>
          BLOGS
        </MobileNavLink>
      </MobileNavDropdown>
      <MobileNavLink href="/contact" active={pathname === "/contact"}>
        CONTACT US
      </MobileNavLink>
    </>
  )
}

function MobileNavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      href={href}
      className={`block px-3 py-2 text-base font-medium ${active ? "bg-green-100 text-green-800" : "text-gray-900 hover:text-green-500"}`}
    >
      {children}
    </Link>
  )
}

function MobileNavDropdown({ title, children, active }: { title: string; children: React.ReactNode; active: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`block px-3 py-2 text-base font-medium w-full text-left flex justify-between items-center ${active ? "bg-green-100 text-green-800" : "text-gray-900 hover:text-green-500"}`}
      >
        {title}
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  )
}

