import Profile from "../assets/profile.png"
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <p className="mb-5 inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
          Web3 Growth • Blockchain • Research
        </p>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Emran Haque
        </h1>

        <div className="mt-4 text-2xl font-semibold text-emerald-300 md:text-3xl">

          <TypeAnimation
            sequence={[
              'Web3 Growth Strategist',
              2000,
              'Blockchain Builder',
              2000,
              'AI Researcher',
              2000,
              'Community Architect',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

        </div>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
          Building communities, blockchain products, automation systems,
          and research-driven digital solutions.
        </p>

        <div className="mt-8 flex gap-4">

          <a
            href="#projects"
            className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-black hover:bg-emerald-300 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition"
          >
            Contact Me
          </a>

        </div>

      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >

        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-4 shadow-2xl">

          <div className="flex aspect-[4/4.5] items-center justify-center rounded-[24px] bg-[#111827] text-center text-gray-400">

            <img
              src={Profile}
              alt="Emran"
              className="h-full w-full object-cover rounded-[24px]"
            />

          </div>

        </div>

        <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-[#111827] p-5">

          <p className="text-3xl font-bold text-emerald-400">
            6+
          </p>

          <p className="text-sm text-gray-400">
            Years Experience
          </p>

        </div>

        <div className="absolute -right-3 top-8 rounded-2xl border border-white/10 bg-[#111827] p-5">

          <p className="text-3xl font-bold text-sky-400">
            50+
          </p>

          <p className="text-sm text-gray-400">
            Campaigns
          </p>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero