export default function HeroSection() {
    return (
      <div className="relative h-[400px] md:h-[500px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project.PNG-fM8oBT8DLD6HXhUcZnpYVXrysKlQ21.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl md:text-2xl">10 Years of Impact</p>
        </div>
      </div>
    )
  }
  
  