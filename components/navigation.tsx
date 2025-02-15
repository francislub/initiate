import Link from "next/link"
import Image from "next/image"
import { Search, User } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="bg-white shadow">
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center lg:h-28">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/initiate/log.jpg"
              alt="initiate"
              width={150}
              height={60}
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center text-sm sm:text-base md:text-text-base">
            <Link href="/" className="text-gray-900 hover:text-[#E43F6F]">
              HOME
            </Link>
            <div className="relative group">
              <button className="text-gray-900 group-hover:text-[#E43F6F] inline-flex items-center text-sm sm:text-base">
                WHAT WE DO
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-1">
                  <Link href="/programs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Our Programs
                  </Link>
                  <Link href="/impact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Our Impact
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-900 group-hover:text-[#E43F6F] inline-flex items-center text-sm sm:text-base md:text-text-base">
                WHO WE ARE
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-1">
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    About Us
                  </Link>
                  <Link href="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Our Team
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-900 group-hover:text-[#E43F6F] inline-flex items-center text-sm sm:text-base md:text-text-base">
                GET INVOLVED
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-1">
                  <Link href="/volunteer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Volunteer
                  </Link>
                  <Link href="/partner" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Partner With Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-900 group-hover:text-[#E43F6F] inline-flex items-center text-sm sm:text-base md:text-text-base">
                MEDIA
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-1">
                  <Link href="/news" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    News
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Blog
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/contact" className="text-gray-900 hover:text-[#E43F6F]">
              CONTACT US
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-[#E43F6F]">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-[#E43F6F]">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

