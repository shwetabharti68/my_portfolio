import {
  Mail,
  ExternalLink,
  Send,
  Code2,
  Users,
} from "lucide-react";

const contactLinks = [
  {
    title: "Email",
    detail: "bhartishweta027@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=bhartishweta027@gmail.com",
    icon: Mail,
  },
  {
    title: "GitHub",
    detail: "Explore my code and repositories",
    href: "https://github.com/shwetabharti68",
    icon: Code2,
  },
  {
    title: "LinkedIn",
    detail: "Connect with me professionally",
    href: "https://www.linkedin.com/in/shweta-bharti-16331732b",
    icon: Users,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#B9857C]">
            Let&apos;s Connect
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#EFE1CE] md:text-5xl">
            Get In Touch
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#B9857C]" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#EFE1CE]/65">
            I&apos;m interested in internship opportunities,
            learning from others, and collaborating on meaningful
            technology projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target={
                  item.title === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  item.title === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group rounded-3xl border border-[#B9857C]/25 bg-gradient-to-br from-[#42121F]/50 to-[#1C0B12] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9857C]/60"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#B9857C]/30 bg-[#721D35]/25">
                  <Icon
                    size={24}
                    className="text-[#B9857C]"
                  />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-[#EFE1CE]">
                  {item.title}
                </h3>

                <p className="mb-5 break-words text-sm leading-6 text-[#EFE1CE]/60">
                  {item.detail}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#B9857C]">
                  {item.title === "Email"
                    ? "Send an Email"
                    : "Visit Profile"}
                  <ExternalLink size={15} />
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-[#B9857C]/25 bg-[#42121F]/25 p-8 text-center md:p-10">
          <Send
            size={28}
            className="mx-auto mb-4 text-[#B9857C]"
          />

          <h3 className="font-serif text-2xl font-semibold text-[#EFE1CE] md:text-3xl">
            Have an Opportunity?
          </h3>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-[#EFE1CE]/65">
            I&apos;d love to hear about internships, collaborations,
            and opportunities to grow as a software engineer.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bhartishweta027@gmail.com"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#B9857C] px-7 py-3 font-semibold text-[#1C0B12] transition-all hover:bg-[#EFE1CE]"
          >
            Contact Me
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}