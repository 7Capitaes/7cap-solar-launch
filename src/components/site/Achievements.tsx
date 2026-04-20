import { Trophy, Medal, Sparkles, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLang } from "@/i18n/LanguageContext";

const icons = [Trophy, Medal, Sparkles, Award];

const Achievements = () => {
  const { t } = useLang();

  return (
    <section id="achievements" className="py-20 md:py-28 bg-secondary/40">
      <div className="container">
        <SectionHeading
          eyebrow={t.achievements.eyebrow}
          title={t.achievements.title}
          lead={t.achievements.lead}
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.achievements.items.map((item, i) => {
            const Icon = icons[i] ?? Trophy;
            const isFeatured = i === 0;
            return (
              <article
                key={item.title}
                className={
                  "group relative flex flex-col rounded-xl border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant " +
                  (isFeatured ? "ring-2 ring-accent" : "")
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-muted-foreground">
                    {item.year}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                {isFeatured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground shadow-card">
                    Destaque
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
