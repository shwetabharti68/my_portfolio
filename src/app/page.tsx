import Image from "next/image";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1C0B12]">
      <Navbar />

      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-28 md:px-8 lg:px-20"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-2 lg:gap-12">
          
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#B9857C]">
              Hello, I'm
            </p>

            <h1 className="font-serif text-5xl font-bold leading-tight text-[#EFE1CE] md:text-4xl lg:text-6xl">
              Shweta Bharti
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-[#B9857C] md:text-3xl">
              B.Tech CSIT Student
            </h2>

            <p className="mt-2 text-xl text-[#EFE1CE]/80">
              Aspiring Software Engineer
            </p>

            <p className="mt-6 max-w-xl leading-7 text-[#EFE1CE]/65">
              Passionate about Web Development, DSA, and exploring
              AI & Data technologies. I enjoy learning, building, and
              solving real-world problems through technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#721D35] px-6 py-3 font-medium text-[#EFE1CE] transition-all duration-300 hover:bg-[#B9857C] hover:text-[#1C0B12]"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#B9857C]/60 px-6 py-3 font-medium text-[#EFE1CE] transition-all duration-300 hover:bg-[#42121F]"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-[#B9857C]/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#B9857C]/40 bg-[#42121F]/40 p-2 shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Shweta Bharti"
                  width={480}
                  height={600}
                  priority
                  className="h-[420px] w-[340px] object-cover object-top md:h-[520px] md:w-[400px]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <About />

      <Skills />

      <Projects />

      <Education />

      <Certifications />

      <Contact />

      <Footer />
    </main>
  );
}