import Link from "next/link";
import Image from "next/image";

export default function StyleAndShop() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-sand)] py-20 text-center px-4">
        <h1 className="font-serif text-5xl text-[var(--color-deepbrown)] mb-6">Style & Shop</h1>
        <p className="text-lg text-[var(--color-deepbrown)]/80 max-w-2xl mx-auto">
          Express yourself, receive styling support and shop
        </p>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <Link href="/shop" className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="h-64 bg-[var(--color-deepbrown)]/5 relative flex items-center justify-center p-8">
              <Image src="/logos/sebuleni-duka.png" alt="Sebuleni Duka" width={200} height={100} className="max-h-32 w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 text-center border-t border-[var(--color-sand)] flex flex-col h-full">
              <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-3">Sebuleni Duka</h2>
              <p className="text-[var(--color-deepbrown)]/70 mb-6 line-clamp-2">Our signature collection of intentional pieces, crafted for the conscious consumer.</p>
              <div className="mt-auto">
                <span className="inline-block text-[var(--color-terracotta)] font-semibold uppercase tracking-wider text-sm group-hover:underline">Explore Duka</span>
              </div>
            </div>
          </Link>

          <Link href="/styledrop" className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="h-64 bg-[var(--color-deepbrown)]/5 relative flex items-center justify-center p-8">
              <Image src="/logos/styledrop.png" alt="StyleDrop" width={200} height={100} className="max-h-32 w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 text-center border-t border-[var(--color-sand)] flex flex-col h-full">
              <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-3">StyleDrop</h2>
              <p className="text-[var(--color-deepbrown)]/70 mb-6 line-clamp-2">Exclusive limited-edition drops and curated fashion pieces for the modern wardrobe.</p>
              <div className="mt-auto">
                <span className="inline-block text-[var(--color-terracotta)] font-semibold uppercase tracking-wider text-sm group-hover:underline">Explore StyleDrop</span>
              </div>
            </div>
          </Link>

          <Link href="/trendyb" className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="h-64 bg-[var(--color-deepbrown)]/5 relative flex items-center justify-center p-8">
              <Image src="/logos/trendyb-logo.png" alt="TrendyB Fashion House" width={200} height={100} className="max-h-32 w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 text-center border-t border-[var(--color-sand)] flex flex-col h-full">
              <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-3">TrendyB</h2>
              <p className="text-[var(--color-deepbrown)]/70 mb-6 line-clamp-2">A fashion house dedicated to bold, contemporary styles and premium apparel.</p>
              <div className="mt-auto">
                <span className="inline-block text-[var(--color-terracotta)] font-semibold uppercase tracking-wider text-sm group-hover:underline">Explore TrendyB</span>
              </div>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}
