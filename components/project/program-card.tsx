import type React from "react"

interface ProgramCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function ProgramCard({ icon, title, description }: ProgramCardProps) {
  return (
    <div className="w-full rounded-lg border bg-white shadow-md">
      <div className="flex items-start gap-4 p-6">
        <div className="text-pink-500">{icon}</div>
        <div className="space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  )
}
