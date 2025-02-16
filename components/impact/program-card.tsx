import { AvatarGroup } from "./avatar-group"
import { ProgressBar } from "./progress-bar"
import { TestimonialCard } from "./testimonial-card"

interface ProgramCardProps {
  title: string
  description: string
  metrics: Array<{
    label: string
    percentage: number
  }>
  testimonial: {
    image: string
    name: string
    role: string
    content: string
  }
}

export function ProgramCard({ title, description, metrics, testimonial }: ProgramCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 p-6">
      <div className="space-y-6">
        <div>
          <span className="text-pink-500 font-medium">IMPACT</span>
          <h2 className="text-2xl font-bold mt-2">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>

        <div className="space-y-4">
          {metrics.map((metric, i) => (
            <ProgressBar key={i} label={metric.label} percentage={metric.percentage} />
          ))}
        </div>
      </div>

      <div className="rounded-lg border bg-white shadow-md p-6">
        <div className="mb-4">
          <h3 className="text-sm text-gray-600">Most Popular in the community</h3>
          <AvatarGroup />
        </div>
        <div>
          <TestimonialCard {...testimonial} />
        </div>
      </div>
    </div>
  )
}
