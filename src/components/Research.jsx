import Reveal from "./Reveal"

function Research() {
  return (
    <section
      id="research"
      className="px-6 py-20"
    >

      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/[0.04] p-10">

          <h2 className="text-4xl font-bold">
            Research & Publications
          </h2>

          <p className="mt-5 max-w-3xl text-gray-400 leading-7">
            Research focused on AI, machine learning, CV mapping,
            job placement models, and blockchain-based transparency systems.
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-[#111827] p-6">

            <p className="text-sm font-semibold text-sky-300">
              Published Research
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              JobLens
            </h3>

            <p className="mt-3 text-gray-400 leading-7">
              NLP and Machine Learning-Driven CV Mapping and Job Placement
              Model for Fresh Graduates in Bangladesh.
            </p>

          </div>

        </div>
      </Reveal>

    </section>
  )
}

export default Research