import AboutMe from "@/components/home/AboutMe";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/skills/Skills";

export default async function HomePage() {

  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
}