import { Users, Heart } from "lucide-react"
import { ProgramCard } from "./program-card"

export function ProgramsSection() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <ProgramCard
          icon={<Users className="h-6 w-6" />}
          title="Ni-Yetu Youth Program"
          description="Youth for gender-transformative empowerment."
        />
        <ProgramCard
          icon={<Heart className="h-6 w-6" />}
          title="She Leads Project"
          description="She Leads is ensuring that there is..."
        />
      </div>
    </div>
  )
}

