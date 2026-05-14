import Reveal from "./Reveal"
import AboutImage from "../assets/about.png"

function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 md:py-24"
    >

      <Reveal>

        <div className="mx-auto grid max-w-6xl items-center gap-10 md:gap-14 md:grid-cols-[0.85fr_1.15fr]">

          {/* IMAGE */}

          <div className="flex justify-center">

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-3 shadow-xl">

              <img
                src={AboutImage}
                alt="Emran Haque"
                className="h-[320px] w-full max-w-[280px] rounded-[22px] object-cover object-center md:h-[430px] md:max-w-[320px]"
              />

            </div>

          </div>

          {/* TEXT */}

          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-emerald-300">
              About Me
            </p>

            <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              From Community Building To Blockchain Innovation
            </h2>

            <div className="mt-8 space-y-5">

              <p className="leading-8 text-gray-400">
                Passionate about Web3, blockchain communities,
                and digital growth, I’ve spent the last few years
                helping projects build stronger online ecosystems.
              </p>

              <p className="leading-8 text-gray-400">
                From CoinEx and ViaBTC to emerging blockchain initiatives,
                my focus has always been creating meaningful connections
                between technology and people.
              </p>

              <p className="leading-8 text-gray-400">
                Today, I combine technical knowledge with real-world
                blockchain experience to build communities,
                products, and growth-driven solutions.
              </p>

            </div>

            {/* SMALL STATS */}

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4">
                <h3 className="text-2xl font-bold text-emerald-300">
                  6+
                </h3>
                <p className="text-sm text-gray-400">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4">
                <h3 className="text-2xl font-bold text-sky-300">
                  50+
                </h3>
                <p className="text-sm text-gray-400">
                  Campaigns
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4">
                <h3 className="text-2xl font-bold text-purple-300">
                  Web3
                </h3>
                <p className="text-sm text-gray-400">
                  Growth & Research
                </p>
              </div>

            </div>

          </div>

        </div>

      </Reveal>

    </section>
  )
}

export default About