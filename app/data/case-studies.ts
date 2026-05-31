export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  coverImage: string;
};

export const caseStudies: CaseStudy[] = [
  { slug: "project-01", title: "Project 01", client: "Client Name", year: "2024", category: "Branding", description: "", coverImage: "/assets/covers/project-01.jpg" },
  { slug: "project-02", title: "Project 02", client: "Client Name", year: "2024", category: "Web Design", description: "", coverImage: "/assets/covers/project-02.jpg" },
  { slug: "project-03", title: "Project 03", client: "Client Name", year: "2024", category: "Motion", description: "", coverImage: "/assets/covers/project-03.jpg" },
  { slug: "project-04", title: "Project 04", client: "Client Name", year: "2024", category: "Branding", description: "", coverImage: "/assets/covers/project-04.jpg" },
  { slug: "project-05", title: "Project 05", client: "Client Name", year: "2024", category: "Web Design", description: "", coverImage: "/assets/covers/project-05.jpg" },
  { slug: "project-06", title: "Project 06", client: "Client Name", year: "2024", category: "Identity", description: "", coverImage: "/assets/covers/project-06.jpg" },
  { slug: "project-07", title: "Project 07", client: "Client Name", year: "2024", category: "Art Direction", description: "", coverImage: "/assets/covers/project-07.jpg" },
  { slug: "project-08", title: "Project 08", client: "Client Name", year: "2024", category: "Branding", description: "", coverImage: "/assets/covers/project-08.jpg" },
  { slug: "project-09", title: "Project 09", client: "Client Name", year: "2024", category: "Web Design", description: "", coverImage: "/assets/covers/project-09.jpg" },
];
