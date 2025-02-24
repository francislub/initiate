import { Eye, Target } from "lucide-react"

export default function VisionMission() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">What we stand for</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-gray-100 p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <Eye className="h-8 w-8 text-pink-500" />
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-600"> Self-aware, literate,accountable , responsible, mentally stable individuals in society.</p>
          </div>

          <div className="rounded-lg border border-gray-100 p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <Target className="h-8 w-8 text-pink-500" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-600">
            Advocating for individual affirmative action towards addressing societal challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

