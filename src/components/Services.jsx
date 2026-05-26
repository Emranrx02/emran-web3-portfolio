import Reveal from "./Reveal"

import {
  Megaphone,
  Code2,
  Bot,
  Blocks,
  GraduationCap,
  BarChart3,
} from "lucide-react"

const services = [
  {
    icon: <Megaphone size={24} />,
    title: "Web3 Growth",
    desc: "Community growth, Telegram strategy, AMA campaigns, and brand positioning.",
    color: "text-emerald-300",
  },

  {
    icon: <Code2 size={24} />,
    title: "Development",
    desc: "React websites, dashboards, blockchain systems, and automation tools.",
    color: "text-sky-300",
  },

  {
    icon: <Bot size={24} />,
    title: "Telegram Bots",
    desc: "Payment bots, tracking systems, and Telegram automation solutions.",
    color: "text-purple-300",
  },

  {
    icon: <Blocks size={24} />,
    title: "Blockchain",
    desc: "Decentralized systems, transparency solutions, and Web3 innovation.",
    color: "text-pink-300",
  },

  {
    icon: <GraduationCap size={24} />,
    title: "Research",
    desc: "AI/ML research, blockchain studies, and academic publications.",
    color: "text-yellow-300",
  },

  {
    icon: <BarChart3 size={24} />,
    title: "Strategy",
    desc: "Campaign planning, analytics, growth metrics, and ecosystem strategy.",
    color: "text-cyan-300",
  },
]

function Services() {
  return (
    <section
      id="services"
      className="px-6 py-20"
    >

      <Reveal>

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="mb-4 text-base font-semibold uppercase tracking-[5px] text-emerald-300 md:text-lg">
              What I Do
            </p>

            <h2 className="mx-auto max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
              Building Growth, Products & Communities
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              Here are some steps and strategies I use to build and grow engaged Web3 communities, products, and research-driven solutions.
            </p>

          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service) => (

              <div
                key={service.title}
                className="group rounded-[20px] border border-white/10 bg-[#111827]/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-[#151c2b] shadow-[0_0_20px_rgba(16,185,129,0.03)]"
              >

                <div
                  className={`mb-4 inline-flex rounded-xl bg-white/5 p-2.5 ${service.color}`}
                >
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {service.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </Reveal>

    </section>
  )
}

export default Services