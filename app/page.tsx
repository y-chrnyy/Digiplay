import { Hero, Subscribe, About, WhyWe, ContactForm } from "@/templates";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <WhyWe />
      <ContactForm />
      <Subscribe />
    </main>
  );
}
