import { caseStudies } from "@/data/case-studies";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) notFound();

  return (
    <main className="min-h-screen pt-24 px-8">
      <p className="text-sm tracking-widest uppercase text-white/40 mb-4">
        {study.category} — {study.year}
      </p>
      <h1 className="text-6xl font-medium tracking-tight mb-6">{study.title}</h1>
      <p className="text-white/60">{study.client}</p>
    </main>
  );
}
