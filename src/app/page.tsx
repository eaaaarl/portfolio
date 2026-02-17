import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import SkillsSection from "@/components/skill-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="hero" className="pt-4">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex justify-between items-start gap-6">

            {/* Left: name + tagline */}
            <div className="flex flex-col flex-1 gap-3">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${DATA.devName}`}
              />

              {/* Subtle role badge */}
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 w-fit">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for work
                </span>
              </BlurFade>

              <BlurFadeText
                className="max-w-[500px] italic text-muted-foreground text-sm leading-relaxed"
                delay={BLUR_FADE_DELAY * 3}
                text={DATA.description}
              />
            </div>

            {/* Right: avatar */}
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-900 blur-sm opacity-60" />
                <Avatar className="relative size-28 border-2 border-white dark:border-neutral-900 shadow-lg">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section id="about">
        <div className="mx-auto w-full max-w-2xl space-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
              About me
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed">
              {DATA.summary}
            </Markdown>
            <p className="text-sm text-muted-foreground mt-2">
              <Link
                href={DATA.contact.social.Resume.url}
                className="underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-600 dark:hover:decoration-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
              >
                Check my resume
              </Link>
              {" "}for detailed experience and projects
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────── */}
      <section id="skills">
        <div className="mx-auto w-full max-w-2xl">
          <SkillsSection />
        </div>
      </section>

      {/* <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── HACKATHONS / EVENTS ──────────────────────────────── */}
      <section id="hackathons">
        <div className="mx-auto w-full max-w-2xl space-y-10">

          {/* Header */}
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Competitions & Events
              </h2>
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-bold tracking-tight">
                  I thrive on challenges
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                  During my time in university, I participated in{" "}
                  <span className="font-medium text-foreground">
                    {DATA.events.length}+ events
                  </span>
                  , including hackathons, cybersecurity competitions, and other
                  technical challenges — pushing boundaries alongside
                  like-minded people.
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Event list */}
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l border-neutral-200 dark:border-neutral-800">
              {DATA.events.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact">
        <div className="mx-auto w-full max-w-2xl py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 px-8 py-10 flex flex-col items-center text-center gap-4">

              {/* Badge */}
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Contact
              </span>

              <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
                Get in Touch
              </h2>

              <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.Facebook.url}
                  className="font-medium text-blue-500 hover:text-blue-600 underline underline-offset-4 decoration-blue-300 hover:decoration-blue-500 transition-colors"
                >
                  with a direct question on Facebook
                </Link>{" "}
                and I&apos;ll respond whenever I can.{" "}
                <span className="text-neutral-400 dark:text-neutral-600">
                  I will ignore all soliciting.
                </span>
              </p>

              {/* CTA */}
              <Link href={DATA.contact.social.Facebook.url}>
                <button className="mt-2 px-5 py-2 rounded-full text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-80 transition-opacity">
                  Say hello →
                </button>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

    </main>
  );
}