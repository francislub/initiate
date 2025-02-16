export default function CommunitySection() {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-pink-500">SOCIAL MEDIA</span>
          <h2 className="mt-2 text-3xl font-bold">Want to Join our Community?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Join a community with a shared mission to empower girls & work together towards creating positive change.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
              <a
                key={social}
                href={`https://${social}.com`}
                className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-pink-500 hover:text-white"
              >
                <span className="sr-only">{social}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  