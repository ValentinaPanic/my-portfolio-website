export type Project = {
  name: string;
  tagline: string;
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    name: "PrepCode",
    tagline: "Interview prep app for frontend engineers",
    description:
      "A full-stack interview prep tool featuring system design questions, interactive quizzes, and timed component coding challenges, with AI-powered feedback and evaluation.",
    liveUrl: "https://prep-code.vercel.app",
    tech: ["React", "TypeScript", "Tailwind CSS", "Anthropic API"],
  },
];
