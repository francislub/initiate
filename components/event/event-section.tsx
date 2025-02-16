import EventCard from "./events-card"

export default function EventsSection() {
  const events = [
    {
      date: { day: "26", month: "AUG" },
      title: "Big Sister Camp 2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-EnIXX3V2OCbf3kqmLBTfudsiPXgsma.png",
    },
    {
      date: { day: "10", month: "APR" },
      title: "Launching the New Look and Feel of the site",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-EnIXX3V2OCbf3kqmLBTfudsiPXgsma.png",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-pink-500">UPCOMING EVENTS</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Upcoming Events</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-pink-500 text-white">
            1
          </span>
          <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100">
            2
          </span>
          <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100">
            →
          </span>
        </div>
      </div>
    </section>
  )
}

