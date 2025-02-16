interface TeamMember {
    name: string
    role: string
    image: string
  }
  
  export default function ProfessionalTeam() {
    const teamMembers: TeamMember[] = [
      {
        name: "Monica Nyiraguhabwa",
        role: "EXECUTIVE DIRECTOR & CO-FOUNDER",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-IOkxCFcW78XZ1CXMDYC7Uv1IT6js3q.png",
      },
      {
        name: "Clement Maraka",
        role: "HEAD OF OPERATIONS",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-IOkxCFcW78XZ1CXMDYC7Uv1IT6js3q.png",
      },
      {
        name: "Marion Achom",
        role: "DEVELOPMENT LEAD",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-IOkxCFcW78XZ1CXMDYC7Uv1IT6js3q.png",
      },
      {
        name: "Miriam Akera",
        role: "HEAD OF PARTNERSHIPS",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-IOkxCFcW78XZ1CXMDYC7Uv1IT6js3q.png",
      },
      {
        name: "Annah Kanowomugisha",
        role: "SECRETARY",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-IOkxCFcW78XZ1CXMDYC7Uv1IT6js3q.png",
      },
      {
        name: "Isaac Anguyo",
        role: "TRANSPORT",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-IOkxCFcW78XZ1CXMDYC7Uv1IT6js3q.png",
      },
      {
        name: "Michael Oomyu",
        role: "SECURITY",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-IOkxCFcW78XZ1CXMDYC7Uv1IT6js3q.png",
      },
      {
        name: "Teopista Nakiguli",
        role: "INSTITUTIONAL ACCOUNTANT",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.PNG-IOkxCFcW78XZ1CXMDYC7Uv1IT6js3q.png",
      },
    ]
  
    return (
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-pink-600 uppercase text-sm font-semibold mb-4">Exclusive Team</h2>
        <h3 className="text-3xl font-bold mb-12">Meet The Professional Team</h3>
  
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-medium text-lg mb-1">{member.name}</h4>
              <p className="text-pink-600 text-sm uppercase">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  