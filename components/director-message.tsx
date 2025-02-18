export default function DirectorsMessage() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-red-600 font-medium mb-2">Message</h3>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Director's Message</h2>
            </div>
  
            <p className="text-gray-600 leading-relaxed">
              The Straight Talk Foundation has been in existence since 1993 and has consistently served numerous
              generations of young people in Uganda. Since its establishment, Straight Talk has dedicated its efforts to
              leading and supporting initiatives aimed at providing young people in Uganda with the necessary services and
              information to help them transition safely into adulthood. The model adopted by the Straight Talk Foundation
              places children and young people at the core of our work. We ensure that we meaningfully involve them in the
              development and execution of our programs countrywide
            </p>
  
            <button className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-full hover:bg-red-700 transition-colors">
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
  
          <div className="w-full md:w-[450px] h-[450px] relative rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <img
                src="/initiate/ceo.jpg"
                alt="Director of Straight Talk Foundation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  