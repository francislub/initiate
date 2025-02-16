"use client"

import type React from "react"

import { motion } from "framer-motion"
import { HandshakeIcon, Users2, GraduationCap, Home } from "lucide-react"

interface StatProps {
  icon: React.ReactNode
  number: number
  description: string
}

const StatCard = ({ icon, number, description }: StatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="text-[#E43F6F] mb-4">{icon}</div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-2"
      >
        {number.toLocaleString()}+
      </motion.div>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  )
}

export default function DomainStatistics() {
  const stats = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      number: 65634,
      description: "Adolescents reached with transformative education",
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      number: 58680,
      description: "Youth reached with SRHR/GBV-related information and services",
    },
    {
      icon: <HandshakeIcon className="h-8 w-8" />,
      number: 15588,
      description: "Parent / caregivers reached with parental and social skills education",
    },
    {
      icon: <Home className="h-8 w-8" />,
      number: 17500,
      description: "Families supported with our COVID-19 response relief packages",
    },
  ]

  return (
    <div className="bg-[#1f2937] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  )
}

