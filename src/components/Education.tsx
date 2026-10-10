
import { GraduationCap, BookOpen, CalendarDays } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#B9857C]">
            My Academic Background
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#EFE1CE] md:text-5xl">
            Education
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#B9857C]" />
        </div>

        {/* Education Card */}
        <div className="group rounded-3xl border border-[#B9857C]/25 bg-gradient-to-br from-[#42121F]/50 to-[#1C0B12] p-7 transition-all duration-300 hover:border-[#B9857C]/60 md:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            {/* Icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#B9857C]/30 bg-[#721D35]/25">
              <GraduationCap
                size={32}
                className="text-[#B9857C]"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#B9857C]/30 px-3 py-1 text-sm text-[#B9857C]">
                  <CalendarDays
                    size={14}
                    className="mr-2 inline"
                  />
                  2024 – 2028
                </span>

                <span className="rounded-full bg-[#721D35]/40 px-3 py-1 text-sm text-[#EFE1CE]/80">
                  Currently Pursuing
                </span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#EFE1CE] md:text-3xl">
                Bachelor of Technology (B.Tech)
              </h3>

              <p className="mt-3 text-lg font-medium text-[#B9857C]">
                Computer Science & Information Technology (CSIT)
              </p>

              <p className="mt-2 text-[#EFE1CE]/75">
                KIET Group of Institutions, Ghaziabad
              </p>

              <div className="my-7 h-px bg-[#B9857C]/20" />

              <h4 className="mb-4 flex items-center gap-2 font-semibold text-[#EFE1CE]">
                <BookOpen size={18} className="text-[#B9857C]" />
                Relevant Coursework
              </h4>

              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "DBMS",
                  "Operating Systems",
                  "Computer Networks",
                  "Software Engineering",
                  "Machine Learning",
                  "Deep Learning",
                ].map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full border border-[#B9857C]/20 bg-[#1C0B12]/60 px-3 py-2 text-sm text-[#EFE1CE]/75"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
