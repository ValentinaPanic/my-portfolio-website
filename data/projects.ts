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
      "Interview prep app for frontend engineers — built after going through senior frontend interview loops and noticing specific gaps in API contract design, pagination patterns, and system design reasoning. The goal was a tool I would actually use, focused on parts of frontend interviews that traditional platforms don't cover.\n\nBuilt with React, TypeScript, Tailwind CSS, and the Anthropic API for AI-powered feedback. Currently client-side; planning to move the Anthropic calls server-side and add authentication and persisted session history.",
    liveUrl: "https://prep-code.vercel.app",
    tech: ["React", "TypeScript", "Tailwind CSS", "Anthropic API"],
  },
];
