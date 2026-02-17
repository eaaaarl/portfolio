import Image from "next/image";
import React from "react";

const BLUR_FADE_DELAY = 0.1;

const BlurFade = ({ children, delay, className = "" }: any) => {
  return <div className={className}>{children}</div>;
};

const skills: Record<string, string[]> = {
  Frontend: ["react", "nextjs", "tailwindcss"],
  Backend: ["expressjs", "nestjs", "supabase", "laravel"],
  Databases: ["mysql", "postgresql", "mongodb"],
  Tools: ["docker", "redux", "git", "github"],
  Mobile: ["flutter"],
};

const SkillsSection = () => {
  return (
    <section className="py-8 px-4 max-w-2xl mx-auto">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-6">
          Tech Stack
        </h2>
      </BlurFade>

      <div className="flex flex-col gap-4">
        {Object.entries(skills).map(([category, skillList], catIndex) => (
          <BlurFade key={category} delay={BLUR_FADE_DELAY * (catIndex + 2)}>
            <div className="flex items-center gap-4">
              {/* Category label */}
              <span className="w-20 shrink-0 text-xs text-neutral-400 dark:text-neutral-500 text-right">
                {category}
              </span>

              {/* Divider */}
              <span className="w-px h-5 bg-neutral-300 dark:bg-neutral-700 shrink-0" />

              {/* Skills row */}
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <div
                    key={skill}
                    title={skill}
                    className="
                      flex items-center gap-2 px-3 py-1.5 rounded-lg
                      bg-neutral-100 border border-neutral-200
                      dark:bg-neutral-900 dark:border-neutral-800
                      hover:border-neutral-400 dark:hover:border-neutral-600
                      transition-colors
                    "
                  >
                    <Image
                      src={`https://skillicons.dev/icons?i=${skill}`}
                      alt={skill}
                      width={20}
                      height={20}
                      className="opacity-90"
                    />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300 capitalize">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;