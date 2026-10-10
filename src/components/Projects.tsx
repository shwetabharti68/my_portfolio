
import { Code2, Rocket, Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#B9857C]">
            Turning ideas into reality
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#EFE1CE] md:text-5xl">
            My Projects
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#B9857C]" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#EFE1CE]/65">
            I am working towards building practical applications
            that solve real-world problems. This space will grow
            as I complete and publish my projects.
          </p>
        </div>

        {/* Currently Building Card */}
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#B9857C]/30 bg-gradient-to-br from-[#42121F]/70 to-[#1C0B12] p-8 text-center transition-all duration-300 hover:border-[#B9857C]/60 md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#B9857C]/30 bg-[#721D35]/30">
            <Code2 size={30} className="text-[#B9857C]" />
          </div>

          <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-[#B9857C]/30 px-4 py-1.5 text-sm text-[#EFE1CE]/80">
              <Rocket size={14} className="mr-2 inline" />
              Currently Building
            </span>

            <span className="rounded-full border border-[#B9857C]/30 px-4 py-1.5 text-sm text-[#EFE1CE]/80">
              <Sparkles size={14} className="mr-2 inline" />
              Learning by Doing
            </span>
          </div>

          <h3 className="mb-4 font-serif text-2xl font-semibold text-[#EFE1CE] md:text-3xl">
            Something Exciting Is in the Works
          </h3>

          <p className="mx-auto max-w-xl leading-7 text-[#EFE1CE]/65">
            I am strengthening my development skills and preparing
            to build meaningful projects using modern technologies.
            Completed projects, live demos, and source code will
            be showcased here as they become available.
          </p>

          <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-[#B9857C]/50 to-transparent" />

          <p className="mt-6 text-sm text-[#B9857C]">
            Building my skills, one step at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
