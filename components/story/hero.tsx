export default function Hero() {
    return (
      <section className="relative h-[600px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.PNG-2f601EeSx7n7lR1wObteVbBKBNNhOw.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl">The Dynamic Duo</p>
        </div>
      </section>
    )
  }
  
  