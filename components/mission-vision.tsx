export default function MissionVision() {
    return (
      <div className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600">It starts with you</p>
            <h2 className="text-3xl font-bold text-gray-900">Don't break so you won't have to mend</h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-500 text-white p-8 rounded-lg relative">
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              <p className="text-sm leading-relaxed">
              Advocating for individual affirmative action towards addressing societal challenges.
              </p>
              <span className="absolute bottom-4 right-4 text-2xl font-bold opacity-50">01</span>
            </div>
  
            <div className="bg-red-600 text-white p-8 rounded-lg relative">
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <p className="text-sm leading-relaxed">
              Self-aware, literate,accountable , responsible, mentally stable individuals in society.
              </p>
              <span className="absolute bottom-4 right-4 text-2xl font-bold opacity-50">02</span>
            </div>
  
            <div className="bg-emerald-500 text-white p-8 rounded-lg relative">
              <h3 className="text-xl font-bold mb-4">Goal</h3>
              <p className="text-sm leading-relaxed">
              To develop a community of mentally stable individuals that initiate action for achievement of 17 SDG's
              </p>
              <span className="absolute bottom-4 right-4 text-2xl font-bold opacity-50">03</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  