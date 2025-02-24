import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
          <Image
            src="/initiate/log.jpg"
            alt="Initiate"
            width={200}
            height={80}
            className="mb-6 rounded-full"
          />
            <p className="text-gray-400 mb-6">Empowering girls and young women to achieve their full potential</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61565856121815" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              <Link href="https://x.com/initiateug" className="hover:text-gray-300 transition-colors">
              <span className="sr-only">X</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.707 2.293a1 1 0 00-1.414 0L12 10.586 3.707 2.293a1 1 0 10-1.414 1.414L10.586 12l-8.293 8.293a1 1 0 101.414 1.414L12 13.414l8.293 8.293a1 1 0 001.414-1.414L13.414 12l8.293-8.293a1 1 0 000-1.414z"/>
              </svg>
            </Link>

            <Link href="https://www.tiktok.com/@initiate375" className="hover:text-gray-300 transition-colors">
              <span className="sr-only">TikTok</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c1.434 2.937 3.689 5.083 7 5.252v2.025a8.376 8.376 0 01-4.129-1.114c.016 2.094.014 4.212.014 6.324 0 .747-.004 1.484-.014 2.212a4.86 4.86 0 01-4.846 4.846A4.862 4.862 0 015.18 16.64a4.86 4.86 0 014.846-4.846c.15 0 .299.007.447.019V15.6a2.369 2.369 0 00-.447-.043 2.375 2.375 0 102.375 2.375c0-.7.003-1.396.01-2.085.02-2.167.022-4.34-.01-6.513V2H12z"/>
              </svg>
            </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/project" className="text-gray-400 hover:text-white">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-400 hover:text-white">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Our Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-white">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-gray-400 hover:text-white">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-gray-400 hover:text-white">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-green-400" />
                <span className="text-gray-400">Plot 47 Ntinda II Road, Kampala, Uganda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-green-400" />
                <span className="text-gray-400">+256 414 667 630</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-green-400" />
                <span className="text-gray-400">info@girlupuganda.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Girl Up Initiative Uganda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

