"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPageOne() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div
        className="bg-gray-400 py-16 px-4"
        style={{
          backgroundImage: `url()`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <div className="text-white">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">|</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="border border-red-100 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Bugema University</p>
                </div>
              </div>
            </div>

            <div className="border border-red-100 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+256 780229050 </p>
                  <p className="text-gray-600">Whatsapp: +256 780229050 </p>
                </div>
              </div>
            </div>

            <div className="border border-red-100 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600"> initiateug@gmail.com </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's talk...!</h2>
            <p className="text-gray-600 mb-6">Send us a message and we will get back to you as soon as possible</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Names"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder="Your message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d63833.92994241275!2d32.60255230703123!3d0.5703809818343463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x177c4be209db538d%3A0xe4ac675b7d218fc9!2sBugema%20University%20Kiwenda!3m2!1d0.5702953!2d32.6437524!4m5!1s0x177c4be209db538d%3A0xe4ac675b7d218fc9!2sBugema%20University%2C%20Kiwenda!3m2!1d0.5702953!2d32.6437524!5e0!3m2!1sen!2sug!4v1739916452366!5m2!1sen!2sug"

          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

