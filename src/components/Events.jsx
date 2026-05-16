import Reveal from "./Reveal"
import { motion } from "framer-motion"

import Event1 from "../assets/event1.jpg"
import Event2 from "../assets/event2.jpg"
import Event3 from "../assets/event3.jpg"

const events = [
  {
    image: Event1,
    title: "Blockchain Community Session",
    desc: "Community discussion and Web3 awareness event focused on blockchain growth and ecosystem engagement.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7246119600856129537/",
  },
  {
    image: Event2,
    title: "CoinEx Community Connect",
    desc: "Interactive blockchain event discussing decentralized systems, P2P payments, and community development.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7273684314469343232/",
  },
  {
    image: Event3,
    title: "Blockchain Community Meetup",
    desc: "Community-driven blockchain discussion and ecosystem engagement session.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7273684314469343232/",
  },
]

function Events() {
  return (
    <section id="events" className="overflow-hidden px-6 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-emerald-300">
              Events & Community Moments
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Real Community Work, Real Impact
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              A collection of community events, blockchain sessions,
              and ecosystem-building experiences.
            </p>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <motion.div
              className="flex w-max gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...events, ...events].map((event, index) => (
                <div
                  key={index}
                  className="w-[82vw] max-w-[360px] shrink-0 overflow-hidden rounded-[30px] border border-white/10 bg-[#111827]/70 p-3 shadow-[0_0_45px_rgba(52,211,153,0.06)] md:w-[420px] md:max-w-none"
                >
                  <div className="overflow-hidden rounded-[24px] border border-white/10">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-[340px] w-full object-cover object-center md:h-[430px]"
                    />
                  </div>

                  <div className="px-3 py-5">
                    <p className="text-sm font-semibold text-emerald-300">
                      Web3 Community Event
                    </p>

                    <h3 className="mt-3 text-xl font-bold md:text-2xl">
                      {event.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                      {event.desc}
                    </p>

                    <a
                      href={event.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-block rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
                    >
                      View LinkedIn Post →
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Events