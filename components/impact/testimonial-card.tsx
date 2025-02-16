import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  image: string
  name: string
  role: string
  content: string
}

export function TestimonialCard({ image, name, role, content }: TestimonialCardProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-1">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
      </div>
      <p className="text-gray-600">{content}</p>
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-pink-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

