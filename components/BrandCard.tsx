import { SocialLink } from "@/components/SocialLink";
import type { Brand } from "@/data/brands";

type BrandCardProps = {
  brand: Brand;
  index: number;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function BrandCard({ brand, index }: BrandCardProps) {
  const delayClass = ["animate-delay-0", "animate-delay-1", "animate-delay-2"][index] ?? "animate-delay-0";

  return (
    <article
      className={[
        "glass-card rounded-[28px] border border-white/60 p-6 opacity-0 shadow-card transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-cardHover sm:p-8",
        "animate-fade-up",
        delayClass,
      ].join(" ")}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="flex h-16 w-32 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/90 px-4 shadow-sm sm:h-16 sm:w-36">
            {brand.logoUrl ? (
              <img
                src={brand.logoUrl}
                alt={`${brand.name} logo`}
                className="max-h-9 w-full object-contain sm:max-h-10"
                loading="eager"
              />
            ) : (
              <span className="text-sm font-semibold tracking-[0.25em] text-accent">
                {getInitials(brand.name)}
              </span>
            )}
          </div>

          <div className="pt-1">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">{brand.name}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base">
              {brand.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 h-px w-full bg-gradient-to-r from-slate-200/80 via-white/90 to-slate-200/80" />

      <div className="mt-6 flex flex-wrap gap-3">
        {brand.platforms.map((platform) => (
          <SocialLink key={`${brand.id}-${platform.name}`} brandId={brand.id} platform={platform} />
        ))}
      </div>
    </article>
  );
}