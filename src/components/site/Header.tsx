import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-7cap.png";
import { useLang } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#achievements", label: t.nav.achievements },
    { href: "#why", label: t.nav.whySponsor },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-card" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-3" aria-label="Sete Capitães — Início">
          <img src={logo} alt="Logotipo Equipe Sete Capitães" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <div className="leading-tight">
            <div
              className={cn(
                "text-sm md:text-base font-extrabold tracking-tight",
                scrolled ? "text-primary" : "text-primary-foreground",
              )}
            >
              Sete Capitães
            </div>
            <div
              className={cn(
                "text-[10px] md:text-xs uppercase tracking-widest",
                scrolled ? "text-muted-foreground" : "text-primary-foreground/80",
              )}
            >
              Solar Boat · IFF
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                scrolled ? "text-foreground" : "text-primary-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className={cn(
              "hidden sm:flex items-center rounded-full border p-0.5 text-xs font-semibold",
              scrolled ? "border-border" : "border-primary-foreground/40",
            )}
          >
            <button
              onClick={() => setLang("pt")}
              className={cn(
                "px-2.5 py-1 rounded-full transition-colors",
                lang === "pt"
                  ? "bg-accent text-accent-foreground"
                  : scrolled
                    ? "text-muted-foreground"
                    : "text-primary-foreground/80",
              )}
              aria-pressed={lang === "pt"}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={cn(
                "px-2.5 py-1 rounded-full transition-colors",
                lang === "en"
                  ? "bg-accent text-accent-foreground"
                  : scrolled
                    ? "text-muted-foreground"
                    : "text-primary-foreground/80",
              )}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md",
              scrolled ? "text-foreground" : "text-primary-foreground",
            )}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background shadow-card animate-fade-in-up">
          <nav className="container flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground border-b last:border-b-0"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-4 sm:hidden">
              <Button
                variant={lang === "pt" ? "default" : "outline"}
                size="sm"
                onClick={() => setLang("pt")}
              >
                Português
              </Button>
              <Button
                variant={lang === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => setLang("en")}
              >
                English
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
