import { Hero } from "@/components/sections/Hero";
import { WorkList } from "@/components/sections/WorkList";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WorkList />
      <ServicesSection />
      <ClientsSection />
      <InsightsSection />
      <FooterSection />
    </main>
  );
}
