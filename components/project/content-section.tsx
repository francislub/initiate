import { CheckCircle } from "lucide-react"

export function ContentSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] md:h-[500px]">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/project-blow.PNG-22f91j1YS4XFBfOKVbELE7fHsO4Mz7.png"
            alt="Girl empowerment program"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-pink-500 font-semibold mb-4">EMPOWERING THE GIRL CHILD</p>
            <h2 className="text-3xl font-bold mb-4">Why is it important to empower the girl child?</h2>
            <p className="text-muted-foreground">
              Empowering the girl child is important because it promotes gender equality, improves access to education
              and healthcare, reduces poverty and child marriage rates, and creates opportunities for social and
              economic development, leading to a brighter and more equitable future for all.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-pink-500 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">An Empowered Nation</h3>
                <p className="text-muted-foreground">
                  Investing in girl child empowerment can lead to an empowered nation by unlocking the potential of half
                  the population, improving economic growth, reducing poverty, promoting gender equality, and creating a
                  more just and prosperous society for all.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-pink-500 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">An Empowered Community</h3>
                <p className="text-muted-foreground">
                  When girls are empowered, entire communities benefit through increased education levels, better health
                  outcomes, and stronger economic participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

