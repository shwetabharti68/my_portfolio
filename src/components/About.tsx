
export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#B9857C]">
            Get to know me
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#EFE1CE] md:text-5xl">
            About Me
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#B9857C]" />
        </div>

        {/* About Content */}
        <div className="grid items-start gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-[#B9857C]/20 bg-[#42121F]/30 p-7 md:p-9">
            <h3 className="mb-5 font-serif text-2xl font-semibold text-[#EFE1CE]">
              My Journey
            </h3>

            <div className="space-y-4 leading-8 text-[#EFE1CE]/75">
              <p>
                Hello! I’m Shweta Bharti, a B.Tech CSIT student and an
                aspiring software engineer who loves building, exploring,
                and learning through technology.
              </p>

              <p>
                I’m currently focused on Web Development, DSA, and
                exploring Full-Stack Development, with a strong interest
                in creating interactive and practical solutions to
                real-world problems.
              </p>

              <p>
                Alongside Web Development, I’m exploring AI and Data
                technologies, including Machine Learning, Deep Learning,
                and Generative AI. I enjoy learning through projects and
                challenges and continuously improving my technical skills.
              </p>

              <p>
                My goal is to become a strong software developer, build
                meaningful real-world projects, and prepare myself for
                exciting opportunities in the software industry.
              </p>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            <div className="rounded-2xl border border-[#B9857C]/25 bg-[#1C0B12] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9857C]/60">
              <span className="mb-3 block text-2xl">💻</span>
              <h3 className="mb-2 text-lg font-semibold text-[#EFE1CE]">
                Web Development
              </h3>
              <p className="text-sm leading-6 text-[#EFE1CE]/65">
                Learning to build interactive websites and exploring
                full-stack development.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B9857C]/25 bg-[#1C0B12] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9857C]/60">
              <span className="mb-3 block text-2xl">🧩</span>
              <h3 className="mb-2 text-lg font-semibold text-[#EFE1CE]">
                DSA & Problem Solving
              </h3>
              <p className="text-sm leading-6 text-[#EFE1CE]/65">
                Practising data structures and algorithms to strengthen
                logical thinking.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B9857C]/25 bg-[#1C0B12] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9857C]/60 sm:col-span-2 md:col-span-1">
              <span className="mb-3 block text-2xl">✨</span>
              <h3 className="mb-2 text-lg font-semibold text-[#EFE1CE]">
                AI & Emerging Tech
              </h3>
              <p className="text-sm leading-6 text-[#EFE1CE]/65">
                Exploring Machine Learning, Deep Learning, and Generative AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
