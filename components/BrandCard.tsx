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
        "glass-card rounded-[32px] border border-white/70 px-6 py-7 opacity-0 shadow-card transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-cardHover sm:px-8 sm:py-8",
        "animate-fade-up",
        delayClass,
      ].join(" ")}
    >
      <div className="flex flex-col items-center text-center">
        <div className="flex min-h-[88px] w-full max-w-[220px] items-center justify-center rounded-[24px] border border-white/80 bg-white/92 px-5 py-4 shadow-sm shadow-slate-200/40 sm:max-w-[240px]">
          {brand.logoUrl ? (
            <img
              src={brand.logoUrl}
              alt={`${brand.name} logo`}
              className="max-h-12 w-full object-contain sm:max-h-14"
              loading="eager"
            />
          ) : (
            <span className="text-base font-semibold tracking-[0.25em] text-accent">{getInitials(brand.name)}</span>
          )}
        </div>

        <div className="mt-5 flex w-full flex-col items-center">
          <h2 className="max-w-[16ch] text-[2rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[2.15rem]">
            {brand.name}
          </h2>
        </div>
      </div>

      <div className="mx-auto mt-7 h-px w-full max-w-[420px] bg-gradient-to-r from-transparent via-slate-200/95 to-transparent" />

      <div className="mx-auto mt-7 grid w-full max-w-[420px] grid-cols-2 gap-3 sm:gap-4">
        {brand.platforms.map((platform) => (
          <SocialLink key={`${brand.id}-${platform.name}`} brandId={brand.id} platform={platform} />
        ))}
      </div>
    </article>
  );
}
