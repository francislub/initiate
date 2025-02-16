interface BoardMember {
    name: string
    role: string
  }
  
  export default function GovernanceSection() {
    const ugandaTeam: BoardMember[] = [
      { name: "Adong Pauline", role: "Uganda Board Member" },
      { name: "Oboth Timothy", role: "Uganda Board Member" },
      { name: "Mugabirwe Olivia", role: "Uganda Board Member" },
      { name: "Okwenje Joseph", role: "Uganda Board Member" },
      { name: "Agnes Athieno", role: "Uganda Board Member" },
    ]
  
    const usaTeam: BoardMember[] = [
      { name: "Kimberly Wolf", role: "Board President, Treasurer & Co-Founder" },
      { name: "Harvey Wolf", role: "Board Vice-President & Secretary" },
      { name: "Dr. Chisina Kapungu", role: "Board Member" },
      { name: "Priti Bhattarai", role: "Board Member" },
    ]
  
    return (
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-pink-600 uppercase text-sm font-semibold mb-4">Governance</h2>
        <h3 className="text-3xl font-bold mb-12">Our Members of the Board</h3>
  
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-bold mb-6">Uganda Team</h4>
            <div className="space-y-6">
              {ugandaTeam.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-pink-600 text-lg">•</span>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div>
            <h4 className="text-xl font-bold mb-6">USA Team</h4>
            <div className="space-y-6">
              {usaTeam.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-pink-600 text-lg">•</span>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  