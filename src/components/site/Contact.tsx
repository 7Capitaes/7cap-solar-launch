import { Mail, MessageCircle, Instagram, LinkIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLang } from "@/i18n/LanguageContext";
import { contacts } from "@/i18n/strings";

const Contact = () => {
  const { t } = useLang();

  const items = [
    {
      label: t.contact.email,
      value: contacts.email,
      href: `mailto:${contacts.email}`,
      Icon: Mail,
      featured: true,
    },
    {
      label: t.contact.whatsapp,
      value: contacts.whatsappDisplay,
      href: contacts.whatsappLink,
      Icon: MessageCircle,
      featured: true,
    },
    {
      label: t.contact.instagram,
      value: contacts.instagramHandle,
      href: contacts.instagramLink,
      Icon: Instagram,
      featured: false,
    },
    {
      label: t.contact.linktree,
      value: contacts.linktree.replace("https://", ""),
      href: contacts.linktree,
      Icon: LinkIcon,
      featured: false,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          lead={t.contact.lead}
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
          {items.map(({ label, value, href, Icon, featured }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={
                "group flex items-center gap-4 rounded-xl border p-5 transition-all hover:-translate-y-0.5 hover:shadow-elegant " +
                (featured
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-accent")
              }
            >
              <div
                className={
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg " +
                  (featured
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-primary")
                }
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold">{label}</div>
                <div
                  className={
                    "text-xs truncate " +
                    (featured ? "text-primary-foreground/80" : "text-muted-foreground")
                  }
                >
                  {value}
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">{t.contact.placeholderNote}</p>
      </div>
    </section>
  );
};

export default Contact;
