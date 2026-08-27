import Reveal from "./Reveal"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "CoinEx",
    role: "Marketing Executive & Ambassador",
    period: "2020 — 2025",
    desc: "Contributed to community growth, marketing campaigns, offline events, user engagement, and ecosystem awareness.",
    tags: ["Community", "Marketing", "Events"],
    logo: "/projects/coinex.png",
  },
  {
    name: "GIA",
    role: "Growth Marketing Manager",
    period: "2025 — Present",
    desc: "Supporting growth strategy, community development, campaign planning, and positioning across an AI-driven ecosystem.",
    tags: ["Growth", "AI", "Strategy"],
    logo: "/projects/gia.png",
  },
  {
    name: "EXRA Network",
    role: "Community Specialist",
    period: "2026 — Present",
    desc: "Contributing to communication, content strategy, community engagement, and ecosystem narratives for a DePIN-focused network.",
    tags: ["DePIN", "Content", "Community"],
    logo: "/projects/exra.png",
  },
  {
    name: "Trinity Community",
    role: "Community Manager & Content Specialist",
    period: "2024 — Present",
    desc: "Managing community communication, social content, engagement initiatives, and Web3 community activities.",
    tags: ["Telegram", "Content", "Web3"],
    logo: "/projects/trinity.png",
  },
  {
    name: "LF Labs",
    role: "Bangladesh Country Manager",
    period: "2025",
    desc: "Supported regional ecosystem growth, community development, communication, and market-facing activities in Bangladesh.",
    tags: ["Leadership", "Regional Growth", "Community"],
    logo: "/projects/lflabs.png",
  },
  {
    name: "Oracle Free Dollar",
    role: "Community Relations Specialist",
    period: "2024 — 2025",
    desc: "Led community engagement initiatives, supported awareness campaigns, and helped strengthen adoption across the ecosystem.",
    tags: ["DeFi", "Community", "Growth"],
    logo: "/projects/oracle.png",
  },
  {
    name: "Vino Teach",
    role: "Project Collaboration",
    period: "Digital Ecosystem",
    desc: "Contributed to digital community and ecosystem-focused initiatives as part of broader growth and online engagement work.",
    tags: ["Digital", "Community", "Growth"],
    logo: "/projects/vino.png",
  },
]

function Projects() {
  return (
    <section id="projects" className="px-6 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-emerald-300">
              Projects & Ecosystems
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              Communities I’ve Contributed To
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              Selected Web3, AI, DePIN, and digital ecosystems where I’ve contributed through growth, community, strategy, content, leadership, and ecosystem development.
            </p>
          </div>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#111827]/65 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-[#151c2b] md:p-6"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/0 blur-[70px] transition duration-500 group-hover:bg-emerald-400/10" />

                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-2.5 shadow-[0_0_25px_rgba(52,211,153,0.04)]">
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="h-full w-full rounded-[16px] object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white md:text-2xl">
                          {project.name}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-emerald-300">
                          {project.role}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-2 text-xs text-gray-500 sm:text-sm">
                        <span>{project.period}</span>
                        <ArrowUpRight
                          size={16}
                          className="text-gray-600 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
                        />
                      </div>
                    </div>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400 md:text-[15px]">
                      {project.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Projects
