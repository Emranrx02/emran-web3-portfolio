const projects = [
  {
    title: "HashHelp",
    type: "Blockchain Donation Platform",
    desc: "Transparent charity donation system using blockchain, smart contracts, and decentralized records.",
  },

  {
    title: "GIA Fashion AI",
    type: "Growth Campaign",
    desc: "Community growth, campaign strategy, platform registration, and Web3 marketing execution.",
  },

  {
    title: "Telegram Bots",
    type: "Automation Development",
    desc: "Payment, tracking, invoice, and community automation bots for real business operations.",
  },

  {
    title: "JobLens Research",
    type: "AI / ML Research",
    desc: "NLP and machine learning-driven CV mapping and job placement model.",
  },
]

import Reveal from "./Reveal"

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-20"
    >

      <Reveal>
        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 text-gray-400">
            A mix of growth, development, automation, and research work.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {projects.map((project) => (

              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:bg-white/[0.06]"
              >

                <div className="mb-6 flex h-44 items-center justify-center rounded-2xl bg-[#111827] text-gray-500">
                  Project Image Placeholder
                </div>

                <p className="text-sm font-semibold text-emerald-300">
                  {project.type}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {project.desc}
                </p>

              </div>

            ))}

          </div>

        </div>
      </Reveal>

    </section>
  )
}

export default Projects