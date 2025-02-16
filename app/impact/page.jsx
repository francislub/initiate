import { ImpactHeader } from "../../components/impact/impact-header"
import { ProgramCard } from "../../components/impact/program-card"


const programs = [
  {
    title: "Ni-Yetu Youth Program",
    description:
      "In partnership with Plan International Uganda, the Ni-Yetu Youth Program promotes leadership skills and equips young people 13-24 years with the correct knowledge, attitude, and skills for reducing gender-based violence (GBV) and improving their SRHR (sexual and reproductive health & rights) outcomes.",
    metrics: [
      {
        label: "Boy Champions of Change agree that a girl should state her opinions in public",
        percentage: 93,
      },
      {
        label: "Participants increased their knowledge on how STIs are spread",
        percentage: 77,
      },
      {
        label: "Participants seeking out sexual & reproductive health services",
        percentage: 30,
      },
    ],
    testimonial: {
      image: "/placeholder.svg?height=64&width=64",
      name: "Magandida Patrick",
      role: "Program Participant",
      content:
        "With the support of the Niyetu project and local leaders, I overcame drug and alcohol addiction and improved my relationship with my family. Positive parenting sessions helped me recognize the value of seeking help and contributed to my personal growth.",
    },
  },
  {
    title: "Adolescent Girls Program",
    description:
      "The Adolescent Girls Program (AGP) empowers in-school adolescent girls to be leaders; reach their full educational potentials; and make healthy and informed choices.",
    metrics: [
      {
        label: "Girls that can refuse unwanted sexual attention",
        percentage: 87,
      },
      {
        label: "Girls who believe in their power to improve their lives",
        percentage: 96,
      },
      {
        label: "Girls that hold leadership positions in their school",
        percentage: 37,
      },
    ],
    testimonial: {
      image: "/placeholder.svg?height=64&width=64",
      name: "Namuro Felista",
      role: "Program Participant",
      content:
        "I didn't know about reusable sanitary pads. Living with my uncle, I was afraid to discuss menstruation and pretended to be sick. Eventually, I asked my uncle to call my mom in the village, who sent money for pads.",
    },
  },
  {
    title: "She Leads",
    description:
      "She Leads is a comprehensive five-year consortium program aimed at empowering girls and young women aged 14-24 across eight districts in Uganda.",
    metrics: [
      {
        label: "Girls that can advocate for their rights",
        percentage: 90,
      },
      {
        label: "Girls participating in decision making spaces",
        percentage: 87,
      },
      {
        label: "Girls that hold leadership positions in their communities",
        percentage: 37,
      },
    ],
    testimonial: {
      image: "/placeholder.svg?height=64&width=64",
      name: "Nagujja Hanifah",
      role: "Program Participant",
      content:
        "The safe spaces played a significant role in positively impacting my life. I am now happy and emotionally stable, capable of making better and informed decisions.",
    },
  },
]

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ImpactHeader />
      <div className="max-w-7xl mx-auto py-12 space-y-12">
        {programs.map((program, i) => (
          <ProgramCard key={i} {...program} />
        ))}
      </div>
    </main>
  )
}

