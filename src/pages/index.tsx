import Carrer from "@/components/carrer";
import Contact from "@/components/contact";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="space-y-36 justify-center">
      <Hero />
      <Carrer />
      <Contact />
    </main>
  );
}
