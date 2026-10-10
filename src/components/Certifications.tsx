import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "March 2026",
    description:
      "AWS cloud certification covering foundational cloud concepts and services.",
    link: "/certificates/aws-cloud-practitioner.pdf",
linkLabel: "View Certificate",
  },
  {
    title: "Official Practice Exam: AWS Certified AI Practitioner",
    issuer: "AWS Training & Certification",
    date: "February 2026",
    description:
      "Completed the official practice exam for AWS Certified AI Practitioner (AIF-C01).",
    link: "/certificates/aws-ai-practice-exam.pdf",
    linkLabel: "View Certificate",
  },
  {
    title: "Getting Started with Data",
    issuer: "IBM SkillsBuild",
    date: "February 2026",
    description:
      "A foundational learning credential focused on getting started with data.",
    link: "/certificates/ibm-getting-started-data.pdf",
    linkLabel: "View Certificate",
  },
  {
    title: "AI Tools Workshop",
    issuer: "be10x",
    date: "February 2026",
    description:
      "Completed a workshop on using AI tools and ChatGPT for presentations, data analysis, and coding assistance.",
    link: "/certificates/be10x-ai-workshop.pdf",
    linkLabel: "View Certificate",
  },
  {
    title: "Digital Application Fundamentals (STEM)",
    issuer: "IT-ITeS SSC, Nasscom",
    date: "February 2026",
    description:
      "Certificate of participation for Digital Application Fundamentals (STEM).",
    link: "/certificates/digital-application-fundamentals.pdf",
    linkLabel: "View Certificate",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#B9857C]">
            Learning & Achievements
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#EFE1CE] md:text-5xl">
            Certifications
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#B9857C]" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#EFE1CE]/65">
            Certifications and learning experiences that reflect
            my growing interest in cloud computing, AI, and data.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={cert.title}
              className="group rounded-3xl border border-[#B9857C]/25 bg-gradient-to-br from-[#42121F]/50 to-[#1C0B12] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9857C]/60 md:p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B9857C]/30 bg-[#721D35]/25">
                <Award
                  size={28}
                  className="text-[#B9857C]"
                />
              </div>

              <p className="mb-2 text-sm text-[#B9857C]">
                {cert.issuer}
              </p>

              <h3 className="mb-3 font-serif text-2xl font-semibold text-[#EFE1CE]">
                {cert.title}
              </h3>

              <p className="mb-3 text-sm text-[#EFE1CE]/50">
                {cert.date}
              </p>

              <p className="mb-7 leading-7 text-[#EFE1CE]/65">
                {cert.description}
              </p>

              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#B9857C]/50 px-5 py-2.5 text-sm font-medium text-[#EFE1CE] transition-colors hover:bg-[#721D35]"
                >
                  {cert.linkLabel}
                  <ExternalLink size={16} />
                </a>
              ) : (
                <span className="inline-flex items-center rounded-full border border-[#B9857C]/25 px-5 py-2.5 text-sm text-[#EFE1CE]/50">
                  Certificate link to be added
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}