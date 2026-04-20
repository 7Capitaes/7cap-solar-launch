import { Globe2, Leaf, Briefcase, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLang } from "@/i18n/LanguageContext";

const icons = [Globe2, Leaf, Briefcase, Trophy];

const WhySponsor = () => {
  const { t } = useLang();

  return (
    <section id="why" className="relative py-20 md:py-28 bg-primary text-primary-foreground overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(hsl(var(--primary-foreground))_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div className="container relative">
        <SectionHeading
          eyebrow={t.why.eyebrow}
          title={t.why.title}
          lead={t.why.lead}
          align="center"
          light
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.cards.map((c, i) => {
            const Icon = icons[i] ?? Globe2;
            return (
              <div
                key={c.title}
                className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySponsor;
