import Reveal from "./Reveal"

function Resume() {
  return (
    <section id="resume" className="px-6 py-12 md:py-14">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-[26px] border border-white/10 bg-white/[0.04] p-5 md:p-8">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[4px] text-emerald-300 md:text-sm">
              Latest Resume
            </p>

            <h2 className="text-2xl font-bold md:text-4xl">
              Choose The Right Profile
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
              View the resume that matches your focus — Web3 growth or development and research.
            </p>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-[20px] border border-emerald-400/20 bg-emerald-400/5 p-5 transition hover:-translate-y-1 hover:bg-emerald-400/10"
            >
              <div className="text-2xl">🚀</div>
              <h3 className="mt-3 text-xl font-bold">Marketing CV</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Web3 growth, community strategy, campaigns, AMA/KOL management, and brand positioning.
              </p>
              <p className="mt-4 text-sm font-semibold text-emerald-300">
                View Resume →
              </p>
            </a>

            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-[20px] border border-sky-400/20 bg-sky-400/5 p-5 transition hover:-translate-y-1 hover:bg-sky-400/10"
            >
              <div className="text-2xl">💻</div>
              <h3 className="mt-3 text-xl font-bold">
                Developer + Research CV
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Blockchain systems, automation tools, Telegram bots, AI/ML research, and development projects.
              </p>
              <p className="mt-4 text-sm font-semibold text-sky-300">
                View Resume →
              </p>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Resume