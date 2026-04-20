import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  light?: boolean;
};

const SectionHeading = ({ eyebrow, title, lead, align = "left", light = false }: Props) => (
  <div
    className={cn(
      "max-w-3xl",
      align === "center" && "mx-auto text-center",
    )}
  >
    <div
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest",
        light ? "text-accent" : "text-highlight",
      )}
    >
      <span className={cn("h-px w-6", light ? "bg-accent" : "bg-highlight")} />
      {eyebrow}
    </div>
    <h2
      className={cn(
        "mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight",
        light ? "text-primary-foreground" : "text-foreground",
      )}
    >
      {title}
    </h2>
    {lead && (
      <p className={cn("mt-4 text-base md:text-lg", light ? "text-primary-foreground/80" : "text-muted-foreground")}>
        {lead}
      </p>
    )}
  </div>
);

export default SectionHeading;
