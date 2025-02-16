"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, User, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow">
      <div className="relative z-50 mx-auto px-4">
        <div className="flex justify-between items-center lg:h-28">
          <Link href="/" className="flex-shrink-0">
            <Image src="/initiate/log.jpg" alt="initiate" width={150} height={60} className="h-16 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center text-sm sm:text-base md:text-text-base">
            <NavLinks />
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-[#E43F6F]">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-[#E43F6F]">
              <User className="h-5 w-5" />
            </button>
            <button className="lg:hidden text-gray-600 hover:text-[#E43F6F]" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLinks />
        </div>
      </div>
    </nav>
  )
}

function NavLinks() {
  return (
    <>
      <Link href="/" className="text-gray-900 hover:text-[#E43F6F] px-3 py-2">
        HOME
      </Link>
      <NavDropdown title="WHAT WE DO">
        <Link href="/domain" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          STRATEGIC DOMAINS
        </Link>
        <Link href="/project" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          PROJECTS
        </Link>
        <Link href="/impact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          IMPACT
        </Link>
        <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          DRIVING CHANGE
        </Link>
      </NavDropdown>
      <NavDropdown title="WHO WE ARE">
        <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          About Us
        </Link>
        <Link href="/story" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          OUR STORY
        </Link>
        <Link href="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          OUR TEAM
        </Link>
      </NavDropdown>
      <NavDropdown title="GET INVOLVED">
        <Link href="/event" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          EVENTS
        </Link>
        <Link href="/donate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          DONATE
        </Link>
      </NavDropdown>
      <NavDropdown title="MEDIA">
        <Link href="/media" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          MEDIA & ADVOCACY
        </Link>
        <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          PODCASTS
        </Link>
        <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          BLOGS
        </Link>
      </NavDropdown>
      <Link href="/contact" className="text-gray-900 hover:text-[#E43F6F] px-3 py-2">
        CONTACT US
      </Link>
    </>
  )
}

function NavDropdown({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative group">
      <button className="text-gray-900 group-hover:text-[#E43F6F] inline-flex items-center px-3 py-2">
        {title}
        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <div className="py-1">{children}</div>
      </div>
    </div>
  )
}

function MobileNavLinks() {
  return (
    <>
      <Link href="/" className="text-gray-900 hover:text-[#E43F6F] block px-3 py-2 text-base font-medium">
        HOME
      </Link>
      <MobileNavDropdown title="WHAT WE DO">
        <Link href="/domain" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
          STRATEGIC DOMAINS
        </Link>
        <Link href="/project" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
          PROJECTS
        </Link>
        <Link href="/impact" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
          IMPACT
        </Link>
        <Link href="/" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
          DRIVING CHANGE
        </Link>
      </MobileNavDropdown>
      <MobileNavDropdown title="WHO WE ARE">
        <Link href="/about" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
          About Us
        </Link>
        <Link href="/story" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
          OUR STORY
        </Link>
        <Link href="/team" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
          OUR TEAM
        </Link>
      </MobileNavDropdown>
      <MobileNavDropdown title="GET INVOLVED">
        <Link href="/event" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
          EVENTS
        </Link>
        <Link href="/donate" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
          DONATE
        </Link>
      </MobileNavDropdown>
      <MobileNavDropdown title="MEDIA">
        <Link href="/media" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
          MEDIA & ADVOCACY
        </Link>
        <Link href="/blog" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
          PODCASTS
        </Link>
        <Link href="/blog" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">
          BLOGS
        </Link>
      </MobileNavDropdown>
      <Link href="/contact" className="text-gray-900 hover:text-[#E43F6F] block px-3 py-2 text-base font-medium">
        CONTACT US
      </Link>
    </>
  )
}

function MobileNavDropdown({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-900 hover:text-[#E43F6F] block px-3 py-2 text-base font-medium w-full text-left flex justify-between items-center"
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

