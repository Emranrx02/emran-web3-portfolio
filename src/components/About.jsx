import Reveal from "./Reveal"
import AboutImage from "../assets/about.png"

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion"

import { useEffect, useRef, useState } from "react"

function Counter({ value, suffix = "" }) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
  })

  const motionValue = useMotionValue(0)

  const springValue = useSpring(motionValue, {
    duration: 1800,
  })

  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest))
    })
  }, [springValue])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 md:py-24"
    >
      <Reveal>

        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111827]/70 p-3 shadow-[0_0_45px_rgba(52,211,153,0.06)]">

              <img
                src={AboutImage}
                alt="Emran Haque"
                className="h-[420px] w-full rounded-[24px] object-cover object-center md:h-[540px]"
              />

            </div>

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-emerald-300">
              About Me
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              A Peek Into My Journey
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-400 md:text-base md:leading-8">
              My journey in the blockchain space began with a deep passion
              for building online communities and making decentralized
              technologies more approachable.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-400 md:text-base md:leading-8">
              Over the years, I’ve worked with Web3 projects, organized
              blockchain events, built community ecosystems, and contributed
              to growth-focused digital strategies.
            </p>

            {/* STATS */}

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-[24px] border border-white/10 bg-[#111827]/70 p-5">

                <h3 className="text-4xl font-bold text-emerald-300">
                  <Counter value={6} suffix="+" />
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Years Experience
                </p>

              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#111827]/70 p-5">

                <h3 className="text-4xl font-bold text-sky-300">
                  <Counter value={50} suffix="+" />
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Campaigns
                </p>

              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#111827]/70 p-5">

                <h3 className="text-4xl font-bold text-purple-300">
                  Web3
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Growth & Research
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </Reveal>
    </section>
  )
}

export default About