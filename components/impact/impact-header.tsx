import Image from "next/image"

export function ImpactHeader() {
  return (
    <div className="relative w-full h-[400px]">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/impactheader.PNG-A5iXKkSAE0O2UuJI1sp0V3QIK1sVGu.png"
        alt="Girl Up Uganda community impact"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-5xl font-bold mb-4">Impact</h1>
        <p className="text-xl max-w-2xl">
          Girl Up Uganda has impacted the community immensely one individual at a time
        </p>
      </div>
    </div>
  )
}

