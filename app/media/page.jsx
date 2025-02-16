import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.PNG-MbK46ru4lVbEmnoUJ8ps7GcMYDB47F.png"
          alt="Girl Up Uganda celebration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Media & Advocacy</h1>
              <p className="text-xl">Girl Up Uganda has impacted the community immensely one individual at a time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Girl Up Initiative in the Global Space</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.PNG-t6fZOhTwXAvPDOm6yEAjKNNyzvS7Qe.png"
                alt="MS Magazine"
                width={200}
                height={80}
                className="mb-4"
              />
              <p className="text-sm text-gray-600">Endangered In a Pandemic: The Education of Millions of Girls</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.PNG-t6fZOhTwXAvPDOm6yEAjKNNyzvS7Qe.png"
                alt="CNN"
                width={200}
                height={80}
                className="mb-4"
              />
              <p className="text-sm text-gray-600">
                Michelle Obama & Melinda Gates: We can't ignore adolescent girls in COVID-19 response
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.PNG-t6fZOhTwXAvPDOm6yEAjKNNyzvS7Qe.png"
                alt="Today Show"
                width={200}
                height={80}
                className="mb-4"
              />
              <p className="text-sm text-gray-600">Jenna Bush Hager meets the remarkable woman behind Girl Up Uganda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                We believe that storytelling is a powerful tool that can be used to drive social change and influence
                positive behaviors and mindsets.
              </h2>
              <p className="text-gray-600 mb-8">
                Watch our media below to meet our vibrant community members and hear their stories. Click the button
                below to head over to our YouTube channel and subscribe to receive the latest updates.
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              >
                SEE MORE ON OUR YOUTUBE CHANNEL
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              {/* Video player would go here */}
              <div className="w-full h-full bg-gray-800" />
            </div>
          </div>
        </div>
      </section>

      {/* Great Moments Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Great Moments</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.PNG-f5SO9TKAVK8xKiYQdmNK3nVPZNNCHC.png"
                  alt="Community member"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                {/* Add more images as needed */}
              </div>
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

