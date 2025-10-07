import AboutMe from "@/components/home/AboutMe";
import Hero from "@/components/home/Hero";

export default async function HomePage() {

  return (
    <div>
      <Hero />
      <AboutMe />
    </div>
  );
}