interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center, light }: Props) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl`}>
      {eyebrow && (
        <p className={`eyebrow ${light ? "text-gold-soft" : ""}`}>
          <span className="gold-rule mr-3 align-middle" />
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-display mt-4 text-3xl md:text-4xl lg:text-5xl ${light ? "text-ivory" : "text-foreground"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${light ? "text-ivory/75" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
