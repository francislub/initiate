export default function HeroBanner() {
    return (
      <div className="relative w-full h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.PNG-nfqRgXD1ws612FCJUHwbTLtUzitFVn.png)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl">The exclusive and talented team</p>
        </div>
      </div>
    )
  }
  
  