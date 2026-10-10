import { Code2, ExternalLink, Heart, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#B9857C]/20 bg-[#1C0B12] px-6 pb-8 pt-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-serif text-2xl font-bold text-[#EFE1CE] transition-colors hover:text-[#B9857C]"
            >
              <Code2 size={25} className="text-[#B9857C]" />
              Shweta Bharti
            </a>

            <p className="mt-4 leading-7 text-[#EFE1CE]/60">
              B.Tech CSIT student and aspiring software engineer,
              learning, building, and growing through technology.
            </p>
          </div>

          <div className="text-center md:text-right">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B9857C]">
              Quick Links
            </h3>

            <nav className="flex max-w-md flex-wrap justify-center gap-x-5 gap-y-3 md:justify-end">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#EFE1CE]/70 transition-colors hover:text-[#B9857C]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="my-8 border-t border-[#B9857C]/15" />

        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row">
          <p className="text-sm text-[#EFE1CE]/50">
            © {new Date().getFullYear()} Shweta Bharti. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/shwetabharti68"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-[#EFE1CE]/70 transition-colors hover:text-[#B9857C]"
            >
              <Code2 size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/shweta-bharti-16331732b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-[#EFE1CE]/70 transition-colors hover:text-[#B9857C]"
            >
              <ExternalLink size={21} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B9857C]/30 text-[#B9857C] transition-all hover:bg-[#721D35]"
            >
              <ArrowUp size={19} />
            </a>
          </div>
        </div>

        <p className="mt-6 flex items-center justify-center gap-1 text-xs text-[#EFE1CE]/40">
          Made with <Heart size={13} className="text-[#B9857C]" /> and a passion for learning.
        </p>
      </div>
    </footer>
  );
}