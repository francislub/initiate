interface EventCardProps {
    date: {
      day: string
      month: string
    }
    title: string
    image: string
  }
  
  export default function EventCard({ date, title, image }: EventCardProps) {
    return (
      <div className="group relative overflow-hidden rounded-lg">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="absolute left-4 top-4 rounded bg-pink-500 px-3 py-1 text-center text-white">
          <span className="block text-2xl font-bold">{date.day}</span>
          <span className="text-sm uppercase">{date.month}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    )
  }
  
  