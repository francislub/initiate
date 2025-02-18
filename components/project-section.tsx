export default function ProjectsSection() {
    return (
      <div className="bg-pink-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-red-600">Projects</span>
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <img
                  src="/initiate/chil4.jpg"
                  alt="SRHR4ALL Project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm">Project</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">SRHR4ALL Project</h3>
                <p className="text-gray-600 text-sm">
                  Straight Talk Foundation (STF) with support from SONKE Gender Justice is implementing a five-year
                  project, Sexual Reproductive Health and Rights Strategies for...
                </p>
              </div>
            </div>
  
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <img
                  src="/initiate/chil5.jpg"
                  alt="Bidi Bidi Community Radio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm">Project</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Bidi Bidi Community Radio</h3>
                <p className="text-gray-600 text-sm">
                  Straight Talk Foundation (STF) in partnership with UNHCR, REF FM and DW Akademie, is managing a
                  community radio station, Bidibidi FM, in Bidibidi Refugee Settle...
                </p>
              </div>
            </div>
  
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <img
                  src="/initiate/chil6.jpg"
                  alt="ADRA TOGETHER PROJECT"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm">Project</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">ADRA TOGETHER PROJECT</h3>
                <p className="text-gray-600 text-sm">
                  Uniting Towards Gender Equality for Enjoyment of Women and Girls total health and Rights (TOGETHER)
                  project is implemented by Straight Talk Foundation and Mifumi...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  