import Footer from "../components/footer";
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import TopBar from "../components/top-bar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />
      <main className="flex-grow">
        <Hero />
        {/* Add other sections here */}
      </main>
      <Footer />
    </div>
  )
}

