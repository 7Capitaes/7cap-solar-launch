import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-water.jpg";
import logo from "@/assets/logo-7cap.png";

const Hero = () => {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] flex items-center overflow-hidden"
    >
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" aria-hidden="true" />

      <div className="container pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl text-primary-foreground animate-fade-in-up">
          <div className="mb-6 flex items-center gap-3">
            <img
              src={logo}
              alt="Logotipo Equipe Sete Capitães"
              className="h-14 w-14 md:h-16 md:w-16 object-contain drop-shadow-lg"
            />
            <span className="inline-flex items-center rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur ring-1 ring-primary-foreground/20">
              {t.hero.eyebrow}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
            {t.hero.title}
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/85">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-elegant">
              <a href="#contact">
                {t.hero.ctaPrimary}
                <ArrowRight />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#about">
                <Users />
                {t.hero.ctaSecondary}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
