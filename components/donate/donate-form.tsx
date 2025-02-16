"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard } from "lucide-react"

export default function DonationForm() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")
  const [amount, setAmount] = useState<number>(100)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [currency, setCurrency] = useState("USD")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gray-700 py-12 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Give today and support the future of adolescent girls and women
          </h1>

          <p className="text-gray-600 mb-8">
            Congratulations! You are about to change a girl's life for the better.
            <strong>
              {" "}
              Your support contributes to the creation of a new norm for girls as they step into their power and become
              the changemakers and leaders of tomorrow.
            </strong>
            Your gift today will provide transformational training, mentorship, and support for girls and youth living
            in slums in Uganda. Thank you!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex gap-2 mb-8">
              <button
                type="button"
                onClick={() => setDonationType("one-time")}
                className={`px-6 py-2 rounded-full ${
                  donationType === "one-time" ? "bg-pink-500 text-white" : "bg-pink-100 text-gray-800"
                }`}
              >
                One-time
              </button>
              <button
                type="button"
                onClick={() => setDonationType("monthly")}
                className={`px-6 py-2 rounded-full ${
                  donationType === "monthly" ? "bg-pink-500 text-white" : "bg-pink-100 text-gray-800"
                }`}
              >
                Monthly
              </button>
            </div>

            <p className="text-gray-600 mb-4">Choose a {donationType} amount</p>

            <div className="grid grid-cols-4 gap-4 mb-8">
              {[1000, 250, 100, 75].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setAmount(value)}
                  className={`p-4 rounded-lg ${
                    amount === value ? "bg-pink-500 text-white" : "bg-pink-100 text-gray-800"
                  }`}
                >
                  ${value}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <label className="flex items-center mb-4">
                <input type="checkbox" className="form-checkbox text-pink-500" />
                <span className="ml-2 text-gray-600">Dedicate my donation in honor or in memory of someone</span>
              </label>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Your Information</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" required className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" required className="w-full p-2 border rounded" />
                </div>
              </div>

              <div>
                <label className="block text-gray-600 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input type="email" required className="w-full p-2 border rounded" />
                <p className="text-sm text-gray-500 mt-1">Your receipt will be emailed here.</p>
              </div>

              <div>
                <label className="block text-gray-600 mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <input type="text" required className="w-full p-2 border rounded mb-4" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="City" required className="w-full p-2 border rounded" />
                  <select className="w-full p-2 border rounded">
                    <option>Select State</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  Credit Card
                </button>
                <button type="button" className="w-full bg-blue-500 text-white py-3 rounded-lg">
                  PayPal
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="mr-2">Questions</span>
          </h2>
          <div className="space-y-4">
            <p className="text-blue-600 hover:underline cursor-pointer">Is this donation tax deductible?</p>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Have an account?</span>
              <a href="#" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

