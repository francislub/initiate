export default function HeroSection() {
    return (
      <div className="relative h-[600px] w-full overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.PNG-uxoXqKcmRfdfwoi1Bv8J2dEQUcBiBC.png"
          alt="Students celebrating"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Upcoming Events</h1>
          <p className="max-w-2xl text-lg">A great team to be with while insightfully sharing knowledge communally</p>
        </div>
      </div>
    )
  }
  
  