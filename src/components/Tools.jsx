import Reveal from "./Reveal"
import { motion } from "framer-motion"

const tools = [
  { name: "Telegram", icon: "✈️" },
  { name: "Discord", icon: "💬" },
  { name: "Twitter/X", icon: "𝕏" },
  { name: "GitHub", icon: "🐙" },
  { name: "Notion", icon: "📒" },
  { name: "Canva", icon: "🎨" },
  { name: "OpenAI", icon: "🧠" },
  { name: "MetaMask", icon: "🦊" },
  { name: "Analytics", icon: "📊" },
  { name: "VS Code", icon: "💻" },
  { name: "React", icon: "⚛️" },
  { name: "Community", icon: "🌐" },
]

function Orbit({ isMobile = false }) {
  const size = isMobile ? "h-[310px] w-[310px]" : "h-[460px] w-[460px]"
  const innerCircle = isMobile ? "h-[210px] w-[210px]" : "h-[320px] w-[320px]"
  const outerCircle = isMobile ? "h-[290px] w-[290px]" : "h-[440px] w-[440px]"
  const center = isMobile ? "h-[120px] w-[120px]" : "h-[170px] w-[170px]"
  const translate = isMobile ? 145 : 220
  const item = isMobile ? "h-12 w-12 text-xl" : "h-16 w-16 text-2xl"

  return (
    <div className={`relative mx-auto flex ${size} items-center justify-center`}>
      <div className={`absolute ${innerCircle} rounded-full border border-white/10`} />
      <div className={`absolute ${outerCircle} rounded-full border border-emerald-400/10`} />

      <div
        className={`z-10 flex ${center} items-center justify-center rounded-full border border-emerald-400/30 bg-[#111827] shadow-[0_0_60px_rgba(52,211,153,0.14)]`}
      >
        <div className="text-center">
          <p className={isMobile ? "text-xl font-bold" : "text-2xl font-bold"}>
            Growth
          </p>

          <p
            className={
              isMobile
                ? "text-xl font-bold text-emerald-300"
                : "text-2xl font-bold text-emerald-300"
            }
          >
            Stack
          </p>
        </div>
      </div>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {tools.slice(0, 8).map((tool, index) => {
          const angle = (index / 8) * 360

          return (
            <div
              key={tool.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(${translate}px) rotate(-${angle}deg)`,
              }}
            >
              <div
                className={`flex ${item} items-center justify-center rounded-full border border-white/10 bg-[#111827] shadow-xl`}
              >
                {tool.icon}
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

function Tools() {
  return (
    <section id="tools" className="px-6 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-emerald-300">
              Tools & Platforms
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              My Community Growth Stack
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              Platforms and tools I use to manage communities, plan campaigns,
              create content, track growth, and support Web3 ecosystems.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="md:hidden">
              <Orbit isMobile />
            </div>

            <div className="hidden md:block">
              <Orbit />
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex items-center gap-3 rounded-[20px] border border-white/10 bg-[#111827]/70 px-4 py-3 shadow-[0_0_25px_rgba(52,211,153,0.04)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-[#151c2b] md:gap-4 md:rounded-[22px] md:px-5 md:py-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-xl transition group-hover:scale-110 md:h-12 md:w-12 md:text-2xl">
                    {tool.icon}
                  </div>

                  <p className="text-sm font-bold text-gray-100 md:text-base">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Tools