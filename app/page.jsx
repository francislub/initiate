import FeaturedVideo from "../components/featured-video";
import Footer from "../components/footer";
import Hero from "../components/hero";
import ImpactStatistics from "../components/impact-statistics";
import Navigation from "../components/navigation";
import TopBar from "../components/top-bar";
import HeroSection from "../components/hero-section"
import MissionVision from "../components/mission-vision"
import ProjectsSection from "../components/project-section"
import DirectorsMessage from "../components/director-message"


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <HeroSection/>
        <MissionVision/>
        <DirectorsMessage/>
        <ProjectsSection/>
        <ImpactStatistics />
        <FeaturedVideo />
        {/* Add other sections here */}
      </main>
    </div>
  )
}

