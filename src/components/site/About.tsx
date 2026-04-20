import { Leaf, Cog, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLang } from "@/i18n/LanguageContext";
import solarImg from "@/assets/solar-panels.jpg";

const icons = [Leaf, Cog, GraduationCap];

const About = () => {
  const { t } = useLang();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} lead={t.about.lead} />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <ul className="grid gap-5 sm:grid-cols-1">
              {t.about.values.map((v, i) => {
                const Icon = icons[i] ?? Leaf;
                return (
                  <li
                    key={v.title}
                    className="flex gap-4 rounded-lg border bg-card p-5 shadow-card"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{v.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <p className="mt-8 rounded-lg border-l-4 border-highlight bg-secondary/60 p-5 text-sm md:text-base text-foreground">
              {t.about.dsbBlurb}
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-elegant">
              <img
                src={solarImg}
                alt="Painéis solares sob céu azul — referência ao sistema fotovoltaico do barco"
                width={1280}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                <p className="text-primary-foreground text-sm font-semibold uppercase tracking-widest">
                  100% Solar
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 rounded-xl border bg-card p-6 md:p-8 shadow-card">
          {t.about.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-5xl font-extrabold text-primary">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
