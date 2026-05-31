import { Hero } from "@/components/sections/Hero";
import { WorkList } from "@/components/sections/WorkList";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WorkList />
      <ServicesSection />
    </main>
  );
}
