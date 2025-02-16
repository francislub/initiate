import { Users, UserPlus, Heart, Home } from "lucide-react"

export default function ImpactStats() {
  const stats = [
    {
      number: "65,634+",
      description: "Adolescents reached with transformative education",
      icon: Users,
    },
    {
      number: "58,680+",
      description: "Youth reached with SRH&GBV-related information and services",
      icon: UserPlus,
    },
    {
      number: "15,588+",
      description: "Parent/caregivers reached with parental and social skills education",
      icon: Heart,
    },
    {
      number: "17,500+",
      description: "Families supported with our COVID-19 response relief packages",
      icon: Home,
    },
  ]

  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">ASPIRE to INSPIRE</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="mx-auto mb-4 h-8 w-8 text-pink-500" />
              <h3 className="mb-2 text-3xl font-bold text-pink-500">{stat.number}</h3>
              <p className="text-sm text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

