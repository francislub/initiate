'use client'

import { useEffect, useRef } from 'react'
import { Mic, Scale, Users } from 'lucide-react'

interface StatisticProps {
  icon: React.ReactNode
  number: number
  title: string
  description: string
}

const Statistic = ({ icon, number, title, description }: StatisticProps) => {
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const target = countRef.current
    if (!target) return

    let start = 0
    const end = number
    const duration = 2000
    const increment = end / (duration / 16)
    
    const counter = setInterval(() => {
      start += increment
      if (start >= end) {
        if (target) target.textContent = end.toLocaleString()
        clearInterval(counter)
      } else {
        if (target) target.textContent = Math.floor(start).toLocaleString()
      }
    }, 16)

    return () => clearInterval(counter)
  }, [number])

  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 text-green-400">{icon}</div>
      <div className="text-4xl font-bold mb-2">
        <span ref={countRef}>0</span>
      </div>
      <h3 className="text-xl font-semibold text-green-400 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function ImpactStatistics() {
  return (
    <section className="bg-[#0088CC] py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Impact at a Glance</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Statistic
            icon={<Mic className="h-12 w-12" />}
            number={138000}
            title="Autonomy"
            description="Adolescents & Youths empowered to voice their ideas & opinions"
          />
          <Statistic
            icon={<Scale className="h-12 w-12" />}
            number={58680}
            title="Choice"
            description="Youths provided access to sexual & reproductive health information & services"
          />
          <Statistic
            icon={<Users className="h-12 w-12" />}
            number={1300}
            title="Ownership"
            description="Girls trained as seamstresses with improved livelihoods"
          />
        </div>
      </div>
    </section>
  )
}
