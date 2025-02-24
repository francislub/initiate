export default function BlogHeader() {
    return (
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.PNG-gCqqWNHUFcZoKB3FpoEF0Tzmkwz3e2.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <div className="flex items-center gap-2 text-sm">
            <span>Home</span>
            <span>/</span>
            <span>Blog</span>
          </div>
        </div>
      </div>
    )
  }
  
  