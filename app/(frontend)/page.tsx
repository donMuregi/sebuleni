import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductSlider from "@/components/ProductSlider";
import MasonryGallery from "@/components/MasonryGallery";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export default async function Home() {
  const payload = await getPayload({ config: configPromise });
  const homepageConfig = await payload.findGlobal({ slug: "homepage", depth: 2 }).catch(() => null);

  // Fallback hero image logic
  let heroUrl = "/images/heropic.webp";
  if (homepageConfig?.heroImage && typeof homepageConfig.heroImage === "object" && homepageConfig.heroImage.url) {
    heroUrl = homepageConfig.heroImage.url;
  }
  
  // Fallback essence image logic
  let essenceUrl = "";
  if (homepageConfig?.essenceImage && typeof homepageConfig.essenceImage === "object" && homepageConfig.essenceImage.url) {
    essenceUrl = homepageConfig.essenceImage.url;
  }

  // Gallery array
  const galleryImages = homepageConfig?.gallery?.map(g => (typeof g.image === "object" ? g.image.url : null)).filter(Boolean) || [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center bg-[var(--color-deepbrown)] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[var(--color-deepbrown)]">
          <img 
            src={heroUrl} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-top origin-top animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Curated. Connected.<br/>Collective.
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 font-sans max-w-2xl mx-auto">
            A lifestyle space where stories, souls and fashion meet.
          </p>
          <Link href="/shop" className="bg-[var(--color-terracotta)] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-[var(--color-terracotta)] transition-colors inline-flex items-center gap-2">
            Explore the Collective <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Featured Products Slider */}
      <ProductSlider />

      {/* The Essence */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-6 leading-tight">
                More than fashion.<br/>More than conversation.
              </h2>
              <p className="text-[var(--color-deepbrown)]/80 text-lg mb-8 leading-relaxed font-sans">
                Welcome to Sebuleni. We are rooted in Kenyan heritage, dedicated to personal power dressing, and passionate about creating spaces where women can gather, reflect, and connect.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[var(--color-terracotta)] font-semibold uppercase tracking-wide hover:gap-4 transition-all">
                Discover <ArrowRight size={16} />
              </Link>
            </div>
            <div className="aspect-[4/5] bg-[var(--color-sand)] relative overflow-hidden">
               {essenceUrl ? (
                 <img src={essenceUrl} alt="The Essence" className="w-full h-full object-cover" />
               ) : (
                 <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif">
                   [Lifestyle Image]
                 </div>
               )}
            </div>
          </div>
        </div>
      </section>



      {/* Four Pillars */}
      <section className="py-24 bg-[var(--color-sand)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Conversations", link: "/conversations", desc: "Gather. Reflect. Connect." },
              { title: "TrendyB", link: "/trendyb", desc: "Bold Looks. Kenyan Roots." },
              { title: "StyleDrop", link: "/styledrop", desc: "Style is Personal. Let's Curate Yours." },
              { title: "Sebuleni Duka", link: "/shop", desc: "Shop Purposefully. Dress Intentionally." }
            ].map((pillar) => (
              <Link key={pillar.title} href={pillar.link} className="group flex flex-col bg-[var(--color-cream)] shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-[var(--color-deepbrown)]/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif group-hover:scale-105 transition-transform duration-500">
                    [Image]
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-2">{pillar.title}</h3>
                    <p className="text-sm text-[var(--color-deepbrown)]/70 mb-4">{pillar.desc}</p>
                  </div>
                  <span className="text-[var(--color-terracotta)] uppercase tracking-wide text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <MasonryGallery images={galleryImages} />

      {/* The Why (Moved to second last) */}
      <section className="py-32 bg-[var(--color-sand)] flex items-center justify-center text-center px-4">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-deepbrown)] italic max-w-4xl mx-auto leading-relaxed">
          &quot;We believe style is a story.&quot;
        </h2>
      </section>

      {/* Invitation / CTA */}
      <section className="py-24 bg-[var(--color-deepbrown)] text-[var(--color-cream)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Step in. Take a seat.</h2>
          <p className="text-lg mb-10 opacity-80">Join the movement and be the first to know about new collections, gatherings, and styling tips.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Email Address" className="px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 flex-grow" />
            <button type="submit" className="bg-[var(--color-terracotta)] text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-[var(--color-terracotta)] transition-colors whitespace-nowrap">
              Join
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
