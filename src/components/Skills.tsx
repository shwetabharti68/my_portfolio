
const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Core Computer Science",
    skills: [
      "DSA",
      "DBMS",
      "OOP",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    title: "AI & Data",
    skills: ["Machine Learning", "Deep Learning", "Generative AI"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#B9857C]">
            My technical toolkit
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#EFE1CE] md:text-5xl">
            Skills & Technologies
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#B9857C]" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#EFE1CE]/65">
            Technologies and concepts I have learned or am currently
            exploring as I grow as a software developer.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-[#B9857C]/20 bg-[#42121F]/25 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9857C]/60 hover:bg-[#42121F]/50"
            >
              <h3 className="mb-5 font-serif text-xl font-semibold text-[#EFE1CE] transition-colors group-hover:text-[#B9857C]">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#B9857C]/25 bg-[#1C0B12]/70 px-3 py-2 text-sm text-[#EFE1CE]/80 transition-colors duration-300 hover:border-[#B9857C] hover:text-[#EFE1CE]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
