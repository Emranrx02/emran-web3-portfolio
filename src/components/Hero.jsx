import Profile from "../assets/profile.png"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-4 inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs text-emerald-300 md:text-sm">
          Web3 Growth • Blockchain • Research
        </p>

        <h1 className="text-4xl font-bold leading-tight md:text-7xl">
          Emran Haque
        </h1>

        <div className="mt-3 min-h-[34px] text-xl font-semibold text-emerald-300 md:text-3xl">
          <TypeAnimation
            sequence={[
              "Web3 Growth Strategist",
              2000,
              "Blockchain Builder",
              2000,
              "AI Researcher",
              2000,
              "Community Architect",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="mt-5 max-w-xl text-base leading-7 text-gray-400 md:text-lg md:leading-8">
          Building communities, blockchain products, automation systems, and
          research-driven digital solutions.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300 md:px-6 md:text-base"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/5 md:px-6 md:text-base"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative mx-auto w-full max-w-[330px] md:max-w-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl md:rounded-[32px] md:p-4">
          <div className="aspect-[4/4.7] overflow-hidden rounded-[20px] bg-[#111827] md:rounded-[24px]">
            <img
              src={Profile}
              alt="Emran"
              className="h-full w-full rounded-[20px] object-cover object-center md:rounded-[24px]"
            />
          </div>
        </div>

        <div className="absolute -bottom-4 left-3 rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 md:-left-4 md:p-5">
          <p className="text-xl font-bold text-emerald-400 md:text-3xl">6+</p>
          <p className="text-xs text-gray-400 md:text-sm">Years Experience</p>
        </div>

        <div className="absolute -right-2 top-6 rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 md:-right-3 md:top-8 md:p-5">
          <p className="text-xl font-bold text-sky-400 md:text-3xl">50+</p>
          <p className="text-xs text-gray-400 md:text-sm">Campaigns</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero