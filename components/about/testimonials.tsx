import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Regina Nandawula",
    role: "Community Member",
    content:
      "Girl Up welcomes all grown ladies and girls. Just know coaches are there ready to mentor you in almost everything you need to start a beautiful living free of charges. (Kindly please try them DON'T suffer silently, Girl Up team, Kudos!",
    rating: 4,
  },
  {
    name: "Paul Atwine",
    role: "Parent",
    content:
      "I visited girl up offices during the time they were making preparations for the P7 leavers concert. The team was friendly and the ambience organized. They are doing amazing projects with adolescent girls in Uganda most especially in the Bwaise-Kisenyi area.",
    rating: 5,
  },
  {
    name: "Acleo Mugusha",
    role: "Founder & CEO",
    content:
      "The Girls education is real. The Menstrual health programs are innovative and tailor made for every girl child.",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">What People Say</h2>
        <p className="mb-12 text-center text-gray-600">
          We're thrilled to hear from our community and how our work has made a difference in their lives
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-100 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-4 text-gray-600">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

