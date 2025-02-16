"use client"

import { useState } from "react"
import YouTube from "react-youtube"

export default function FeaturedVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-pink-100 text-green-400 rounded-full text-sm font-medium">
              GLOBAL SPACE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Watch Our Feature on NBC&apos;S The Today Show with Michelle Obama
            </h2>
            <p className="text-gray-600">
              TODAY&apos;s Jenna Bush Hager traveled to East Africa to meet Monica Nyiraguhabwa, a remarkable woman
              whose &quot;Girl Up Uganda&quot; program is creating change for girls across her community. Monica is also
              joining former first lady Michelle Obama&apos;s Global Girls Alliance.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <YouTube
              videoId="your-video-id" // Replace with actual YouTube video ID
              opts={{
                height: "100%",
                width: "100%",
                playerVars: {
                  autoplay: isPlaying ? 1 : 0,
                },
              }}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

