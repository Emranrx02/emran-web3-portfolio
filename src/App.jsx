import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Resume from "./components/Resume"
import Services from "./components/Services"
import Strategy from "./components/Strategy"
import Projects from "./components/Projects"
import Events from "./components/Events"
import Research from "./components/Research"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Tools from "./components/Tools"

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0F19] text-white">

      {/* BACKGROUND GLOW */}

      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse" />

      <div className="absolute right-[-120px] top-[300px] h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[120px] animate-pulse" />

      {/* BLOCKCHAIN GRID */}

      <div className="absolute inset-0 opacity-[0.03]">

        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <About />

        <Services />

        <Strategy />
        <Tools />

        <Projects />

        <Events />

        <Research />

        <Resume />

        <Contact />
        
        <Footer />

      </div>

    </div>
  )
}

export default App