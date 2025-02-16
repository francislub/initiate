import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative h-[600px] w-full">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about.PNG-npGVLCL9WVgyd7WiTKWuhB0mI3uvKJ.png"
        alt="Group of students with mentor from Girl Up Initiative Uganda"
        fill
        className="object-cover brightness-90"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">About Girl Up Initiative Uganda</h1>
          <p className="text-xl">A gender-equal world where girls thrive and lead.</p>
        </div>
      </div>
    </div>
  )
}

