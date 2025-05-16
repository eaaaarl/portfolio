import Image from "next/image";
import React from "react";

const BLUR_FADE_DELAY = 0.1;

const BlurFade = ({ children, delay, className = "" }: any) => {
  return (
    <div
      className={`animate-blur-fade ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    "javascript",
    "typescript",
    "php",
    "html",
    "css",
    "react",
    "nextjs",
    "vue",
    "nuxt",
    "nodejs",
    "expressjs",
    "nestjs",
    "laravel",
    "mysql",
    "postgres",
    "docker",
    "redux",
    "firebase",
    "mongodb",
    "prisma",
  ];

  return (
    <section className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <h2 className="text-xl font-bold">My Tech Stacks</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 10}>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {skills.map((skill, index) => (
            <Image
              key={skill}
              src={`https://skillicons.dev/icons?i=${skill}&theme=dark`}
              alt={`${skill} icon`}
              width={48}
              height={48}
              className="h-10 md:h-12 w-auto"
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </BlurFade>
    </section>
  );
};

export default SkillsSection;
