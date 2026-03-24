import type { IconName, Platform } from "@/data/brands";

type SocialLinkProps = {
  platform: Platform;
  brandId: string;
};

const iconMap: Record<IconName, JSX.Element> = {
  globe: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.4 4 5.8 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.8-4-9s1.4-6.6 4-9Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.85" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true" fill="currentColor">
      <path d="M13.5 21v-7h2.4l.4-2.7h-2.8V9.6c0-.8.3-1.3 1.4-1.3H16V5.9c-.4-.1-1.2-.2-2.2-.2-2.2 0-3.7 1.3-3.7 3.9v1.7H7.8V14H10v7h3.5Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true" fill="currentColor">
      <path d="M6.4 8.8A1.9 1.9 0 1 0 6.4 5a1.9 1.9 0 0 0 0 3.8ZM4.9 19h3V10h-3v9Zm4.8 0h3v-4.8c0-1.3.2-2.6 1.8-2.6s1.6 1.5 1.6 2.7V19h3v-5.3c0-2.6-.6-4.5-3.6-4.5-1.4 0-2.3.8-2.7 1.5h-.1V10h-3c0 .7 0 9 0 9Z" />
    </svg>
  ),
};

function getStyles(name: string) {
  switch (name.toLowerCase()) {
    case "website":
      return {
        className:
          "border border-slate-200 bg-white/80 text-slate-700 hover:border-slate-300 hover:bg-white hover:text-slate-900",
      };
    case "instagram":
      return {
        className:
          "border border-transparent bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-500 text-white shadow-sm hover:shadow-md",
      };
    case "facebook":
      return {
        className: "border border-transparent bg-[#1877F2] text-white hover:brightness-110",
      };
    case "linkedin":
      return {
        className: "border border-transparent bg-[#0A66C2] text-white hover:brightness-110",
      };
    default:
      return {
        className:
          "border border-slate-200 bg-white/80 text-slate-700 hover:border-slate-300 hover:bg-white hover:text-slate-900",
      };
  }
}

export function SocialLink({ platform, brandId }: SocialLinkProps) {
  const styles = getStyles(platform.name);
  const isPlaceholder = platform.url === "#";
  const baseClassName = [
    "group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition duration-300",
    "focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    isPlaceholder ? "opacity-70" : "hover:-translate-y-0.5 hover:scale-[1.02]",
    styles.className,
    isPlaceholder ? "cursor-not-allowed" : "",
  ].join(" ");

  const content = (
    <>
      <span className="transition-transform duration-300 group-hover:scale-110">{iconMap[platform.icon]}</span>
      <span>{platform.name}</span>
    </>
  );

  if (isPlaceholder) {
    return (
      <span
        aria-label={`${brandId} ${platform.name} coming soon`}
        data-brand={brandId}
        data-platform={platform.name.toLowerCase()}
        title={`${platform.name} link coming soon`}
        aria-disabled="true"
        className={baseClassName}
      >
        {content}
      </span>
    );
  }

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${brandId} ${platform.name}`}
      data-brand={brandId}
      data-platform={platform.name.toLowerCase()}
      title={platform.url}
      className={baseClassName}
    >
      {content}
    </a>
  );
}
