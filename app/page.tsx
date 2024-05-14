import { FancyLink } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <FancyLink >Об Агенстве</FancyLink>
      <FancyLink appearance="ghost">Услуги</FancyLink>
      <FancyLink appearance="pink">Портфолио</FancyLink>

    </main>
  );
}
