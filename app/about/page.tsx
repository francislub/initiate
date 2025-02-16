import HeroSection from "../../components/about/hero-section";
import ImpactStats from "../../components/about/impact-stats";
import Testimonials from "../../components/about/testimonials";
import VisionMission from "../../components/about/vision-mission";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <VisionMission />
      <ImpactStats />
      <Testimonials />
    </main>
  )
}

