import Reveal from "./Reveal"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "HashhypeLabs",
    role: "Founder & Web3 Strategist",
    period: "2025 - Present",
    location: "Bangladesh",
    type: "Agency & Growth",
  },
  {
    company: "GIA Fashion AI",
    role: "Growth Marketing Manager",
    period: "2025 - Present",
    location: "UAE • Remote",
    type: "AI + Web3",
  },
  {
    company: "EXRA Network",
    role: "Community Specialist",
    period: "2026 - Present",
    location: "Remote",
    type: "DePIN Ecosystem",
  },
  {
    company: "Trinity Community",
    role: "Content Specialist",
    period: "2024 - Present",
    location: "Hong Kong",
    type: "Community & Content",
  },
  {
    company: "CoinEx",
    role: "Marketing Executive",
    period: "2020 - 2025",
    location: "Global Remote",
    type: "Exchange Ecosystem",
  },
  {
    company: "Oracle Free Dollar",
    role: "Community Relations Specialist",
    period: "2024 - 2025",
    location: "United States",
    type: "Community Growth",
  },
]

function WorkedWith() {
  return (
    <section id="worked" className="px-6 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-5xl">

          {/* HEADING */}

          <div className="mb-14 text-center">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-emerald-300">
              Experience
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Communities & Ecosystems
            </h2>

          </div>

          {/* TIMELINE */}

          <div className="relative">

            {/* CENTER LINE */}

            <div className="absolute left-[18px] top-0 h-full w-[2px] bg-gradient-to-b from-emerald-400/40 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10">

              {experiences.map((item, index) => {

                const isLeft = index % 2 === 0

                return (

                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className={`relative flex w-full ${
                      isLeft ? "md:justify-start" : "md:justify-end"
                    }`}
                  >

                    {/* DOT */}

                    <div className="absolute left-[7px] top-7 z-20 h-6 w-6 rounded-full border-4 border-[#0B0F19] bg-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.6)] md:left-1/2 md:-translate-x-1/2" />

                    {/* CARD */}

                    <div className="ml-14 w-full md:ml-0 md:w-[46%]">

                      <div className="group rounded-[28px] border border-white/10 bg-[#111827]/70 p-6 shadow-[0_0_40px_rgba(52,211,153,0.03)] transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-[#151c2b]">

                        {/* TOP */}

                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-3">

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-lg font-bold text-emerald-300">
                              {item.company.charAt(0)}
                            </div>

                            <div>

                              <p className="text-lg font-bold text-white md:text-xl">
                                {item.company}
                              </p>

                              <p className="text-sm text-emerald-300">
                                {item.type}
                              </p>

                            </div>

                          </div>

                        </div>

                        {/* ROLE */}

                        <h3 className="mt-5 text-xl font-bold leading-tight text-white md:text-2xl">
                          {item.role}
                        </h3>

                        {/* DETAILS */}

                        <p className="mt-3 text-sm leading-7 text-gray-400 md:text-base">
                          {item.period} • {item.location}
                        </p>

                        {/* TAG */}

                        <div className="mt-5 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
                          Web3 • Community • Growth
                        </div>

                      </div>

                    </div>

                  </motion.div>
                )
              })}

            </div>

          </div>

        </div>
      </Reveal>
    </section>
  )
}

export default WorkedWith