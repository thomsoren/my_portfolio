import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-[family-name:var(--font-serif)]"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <div className="max-w-[600px] md:text-xl space-y-1">
                {DATA.description.split('\n').map((line, index) => (
                  <BlurFadeText
                    key={index}
                    className="block"
                    delay={BLUR_FADE_DELAY + index * 0.05}
                    text={line}
                  />
                ))}
              </div>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="text-sm text-muted-foreground max-w-[600px]">
                  {DATA.summary}
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-[center_15%]" />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="projects">
        <ProjectsSection projects={DATA.projects} />
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-serif)] mb-2">Work</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 5 + id * 0.05}
              inView
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-3 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
            <h2 className="text-2xl font-bold font-[family-name:var(--font-serif)] mb-2">Hackathons</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
            <ul className="mb-4 ml-4 border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                  inView
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    image={project.image}
                    win={project.win}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-serif)] mb-2">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              inView
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11} inView>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-serif)] mb-2">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 12 + id * 0.05} inView>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="pb-24">
        <BlurFade delay={BLUR_FADE_DELAY * 15} inView>
          <p className="text-sm text-muted-foreground">
            Reach me on{" "}
            <Link
              href={DATA.contact.social.LinkedIn.url}
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </Link>{" "}
            or at{" "}
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="text-blue-500 hover:underline"
            >
              {DATA.contact.email}
            </Link>
          </p>
        </BlurFade>
      </section>
    </main>
  );
}
