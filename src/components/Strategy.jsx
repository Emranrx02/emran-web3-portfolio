import Reveal from "./Reveal"
import { motion } from "framer-motion"

import {
  Target,
  MessageSquare,
  Megaphone,
  BarChart3,
  Users,
} from "lucide-react"

const steps = [
  {
    title: "01. Project Research",
    icon: <Target size={26} />,
    color: "text-purple-300",
    bg: "bg-purple-400/10",
  },

  {
    title: "02. Market Analysis",
    icon: <MessageSquare size={26} />,
    color: "text-cyan-300",
    bg: "bg-cyan-400/10",
  },

  {
    title: "03. Content Strategy",
    icon: <Megaphone size={26} />,
    color: "text-pink-300",
    bg: "bg-pink-400/10",
  },

  {
    title: "04. Community Growth",
    icon: <Users size={26} />,
    color: "text-yellow-300",
    bg: "bg-yellow-400/10",
  },

  {
    title: "05. Analytics & Scaling",
    icon: <BarChart3 size={26} />,
    color: "text-emerald-300",
    bg: "bg-emerald-400/10",
  },
]

function Strategy() {
  return (
    <section className="px-6 py-16 md:py-24">

      <Reveal>

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-emerald-300">
              My Framework
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Growth Strategy Roadmap
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              some of the core steps and strategies I use to build and grow engaged Web3 communities.
            </p>

          </div>

          <div className="mt-12 rounded-[32px] border border-white/10 bg-[#111827]/50 p-6 md:p-10">

            <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">

              {/* LEFT CIRCLE */}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mx-auto flex h-[260px] w-[260px] items-center justify-center rounded-full border-[10px] border-emerald-400/80 bg-[#0B0F19] shadow-[0_0_70px_rgba(52,211,153,0.18)] md:h-[360px] md:w-[360px]"
              >

                <div className="flex h-[210px] w-[210px] items-center justify-center rounded-full border-2 border-dashed border-white/20 md:h-[295px] md:w-[295px]">

                  <div className="text-center">

                    <p className="text-2xl font-bold md:text-4xl">
                      Growth
                    </p>

                    <p className="text-4xl font-bold tracking-wide text-emerald-300 md:text-6xl">
                      Strategy
                    </p>

                    <p className="mt-2 text-[10px] uppercase tracking-[5px] text-gray-400 md:text-xs">
                      Framework
                    </p>

                  </div>

                </div>

              </motion.div>

              {/* RIGHT STEPS */}

              <div className="space-y-5">

                {steps.map((step, index) => (

                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.18 }}
                    viewport={{ once: true }}
                    className="relative flex items-center gap-4"
                  >

                    <div
                      className={`z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 ${step.bg} ${step.color}`}
                    >
                      {step.icon}
                    </div>

                    <div className="flex-1 rounded-full border border-dashed border-white/25 bg-[#0B0F19]/80 px-6 py-4">

                      <h3 className="text-base font-bold md:text-xl">
                        {step.title}
                      </h3>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </Reveal>

    </section>
  )
}

export default Strategy