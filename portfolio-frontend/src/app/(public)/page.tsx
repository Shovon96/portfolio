import AboutMe from "@/components/home/AboutMe";
import Blogs from "@/components/home/Blog";
import ContactForm from "@/components/home/ContactForm";
import Education from "@/components/home/Education";
import Hero from "@/components/home/Hero";
import Project from "@/components/home/Project";
import Skills from "@/components/home/skills/Skills";

export default async function HomePage() {

  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Project />
      <Education />
      <Blogs />
      <ContactForm />
    </div>
  );
}