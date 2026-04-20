import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-7cap.png";
import { useLang } from "@/i18n/LanguageContext";
import { contacts } from "@/i18n/strings";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 grid gap-8 md:grid-cols-3 md:items-start">
        <div className="flex items-start gap-3">
          <img src={logo} alt="Logotipo Equipe Sete Capitães" className="h-12 w-12 object-contain" />
          <div>
            <div className="text-base font-extrabold">Equipe Sete Capitães</div>
            <p className="mt-1 text-sm text-primary-foreground/75">{t.footer.tagline}</p>
          </div>
        </div>

        <div className="text-sm text-primary-foreground/75">
          <div className="font-semibold text-primary-foreground">IFF — Campus Campos Centro</div>
          <div className="mt-1">{t.footer.location}</div>
        </div>

        <div className="flex md:justify-end items-center gap-3">
          <a
            href={`mailto:${contacts.email}`}
            aria-label="E-mail"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={contacts.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={contacts.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container py-5 text-xs text-primary-foreground/65 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Equipe Sete Capitães. {t.footer.rights}</span>
          <span>Made with ☀️ in Campos dos Goytacazes</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
