import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function StrategicDomains() {
  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Our Strategic Domains</h2>
        <p className="text-gray-600 mb-12 max-w-3xl">
          By 2026, Girl Up Initiative Uganda will contribute to the increased and sustained well-being of 34,000 girls,
          young women, and boys in communities that promote their rights and gender equality.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Quality, Gender-Transformative Education for Adolescent Girls & Boys
            </h3>
            <p className="text-gray-600 mb-6">
              We focus on improving educational outcomes for girls and boys through our Adolescent Girls Program and Boy
              Champions Program. These initiatives enhance girls' voice and agency while engaging boys in promoting
              positive masculinities.
            </p>
            <Link href="#" className="inline-flex items-center text-pink-600 hover:text-pink-700">
              LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Skilling for Workforce Development</h3>
            <p className="text-gray-600 mb-6">
              We empower girls and young women with the skills needed for workforce development and entrepreneurship.
              Through training in fashion & design, apprenticeship for girls in mechanics, digital literacy, and soft
              skills.
            </p>
            <Link href="#" className="inline-flex items-center text-pink-600 hover:text-pink-700">
              LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-pink-500">
            <h3 className="text-xl font-semibold mb-4">
              Gender-Responsive Sexual Reproductive Health & Rights (SRHR) Education
            </h3>
            <p className="text-gray-600 mb-6">
              Access to quality, inclusive SRH services is critical to attaining gender equality. Our goal is to
              increase the number of adolescent girls and young women who have autonomy over their bodies.
            </p>
            <Link href="#" className="inline-flex items-center text-pink-600 hover:text-pink-700">
              LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

