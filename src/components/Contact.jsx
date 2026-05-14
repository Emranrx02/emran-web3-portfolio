import Reveal from "./Reveal"

function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24"
    >

      <Reveal>
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.04] p-10 text-center">

          <h2 className="text-4xl font-bold">
            Let’s Build Something Meaningful
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Open for Web3 growth, community strategy,
            automation, and blockchain product collaborations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:emran.huk2016@gmail.com"
              className="rounded-full border border-white/10 px-5 py-3 hover:bg-white/5 transition"
            >
              Email
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 px-5 py-3 hover:bg-white/5 transition"
            >
              Telegram
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 px-5 py-3 hover:bg-white/5 transition"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 px-5 py-3 hover:bg-white/5 transition"
            >
              GitHub
            </a>

          </div>

        </div>
      </Reveal>

    </section>
  )
}

export default Contact