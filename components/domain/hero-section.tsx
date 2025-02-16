import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle?: string
  imageUrl: string
  overlay?: boolean
}

export default function HeroSection({ title, subtitle, imageUrl, overlay = true }: HeroSectionProps) {
  return (
    <div className="relative w-full h-[400px] z-0">
      <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      {overlay && <div className="absolute inset-0 bg-black/40" />}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  )
}

