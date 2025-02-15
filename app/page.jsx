import FeaturedVideo from "../components/featured-video";
import Footer from "../components/footer";
import Hero from "../components/hero";
import ImpactStatistics from "../components/impact-statistics";
import Navigation from "../components/navigation";
import TopBar from "../components/top-bar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <ImpactStatistics />
      <FeaturedVideo />
        {/* Add other sections here */}
      </main>
      <Footer />
    </div>
  )
}

