import { Plus } from "lucide-react"
import Image from "next/image"

export function AvatarGroup() {
  // Sample avatar data - in real app this would come from props or API
  const avatars = Array(7).fill("/placeholder.svg?height=40&width=40")

  return (
    <div className="flex -space-x-2">
      {avatars.map((avatar, i) => (
        <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
          <Image src={avatar || "/placeholder.svg"} alt={`Community member ${i + 1}`} fill className="object-cover" />
        </div>
      ))}
      <button className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center border-2 border-white">
        <Plus className="w-5 h-5 text-white" />
      </button>
    </div>
  )
}

