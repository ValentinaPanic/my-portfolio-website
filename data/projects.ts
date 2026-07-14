export type Project = {
  name: string;
  tagline: string;
  description: string;
  liveUrl?: string;
  npmUrl?: string;
  repoUrl?: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    name: "Crestline UI",
    tagline: "React component library, published to npm",
    description:
      "A React component library I built and published to npm as @crestline/ui after my layoff, covering Button, TextField, Badge, Indicator, Spinner, and Card. Rather than reaching for Tailwind, I built it on CSS Modules and a custom design token system so the styling layer stays framework-agnostic and fully mine.\n\nBuilt with dual ESM/CJS output via tsup, full TypeScript types, and React 19 native, with accessibility linted through Storybook's a11y addon. I own the entire pipeline myself: the token system, the build config, and the trusted-publishing GitHub Actions workflow that ships each release to npm.",
    liveUrl: "https://crestline-storybook.vercel.app",
    npmUrl: "https://www.npmjs.com/package/@crestline/ui",
    repoUrl: "https://github.com/ValentinaPanic/crestline",
    tech: ["React", "TypeScript", "CSS Modules", "tsup", "Storybook"],
  },
  {
    name: "PrepCode",
    tagline: "Interview prep app for frontend engineers",
    description:
      "Interview prep app for frontend engineers — built after going through senior frontend interview loops and noticing specific gaps in API contract design, pagination patterns, and system design reasoning. The goal was a tool I would actually use, focused on parts of frontend interviews that traditional platforms don't cover.\n\nBuilt with React, TypeScript, Tailwind CSS, and the Anthropic API for AI-powered feedback. Currently client-side; planning to move the Anthropic calls server-side and add authentication and persisted session history.",
    liveUrl: "https://prep-code.vercel.app",
    repoUrl: "https://github.com/ValentinaPanic/PrepCode",
    tech: ["React", "TypeScript", "Tailwind CSS", "Anthropic API"],
  },
];
