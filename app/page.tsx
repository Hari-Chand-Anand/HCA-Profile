import { BrandCard } from "@/components/BrandCard";
import { brands } from "@/data/brands";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-surface text-ink">
      <div className="pointer-events-none absolute inset-0 bg-radial-soft" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/80" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-14 sm:px-8 sm:py-20 lg:px-12">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted sm:text-sm">
            Scan · Connect · Explore
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Our Brands
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Explore our family of companies and connect across platforms.
          </p>
        </header>

        <div className="mx-auto mt-12 grid w-full max-w-6xl gap-6 sm:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {brands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>

        <footer className="mt-14 pb-2 text-center text-sm text-muted sm:mt-20">
          © 2024 HCA Group · All rights reserved
        </footer>
      </section>
    </main>
  );
}
