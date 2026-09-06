import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export default async function TrendyB() {
  const payload = await getPayload({ config: configPromise });
  const trendyBConfig = await payload.findGlobal({ slug: "trendy_b", depth: 2 }).catch(() => null);

  const getMediaUrl = (field: any) => (field && typeof field === "object" && field.url ? field.url : null);

  const heroUrl = getMediaUrl(trendyBConfig?.heroImage);
  const img1 = getMediaUrl(trendyBConfig?.brandOverviewImages?.image1);
  const img2 = getMediaUrl(trendyBConfig?.brandOverviewImages?.image2);
  const img3 = getMediaUrl(trendyBConfig?.visionImages?.image1);
  const img4 = getMediaUrl(trendyBConfig?.visionImages?.image2);
  const img5 = getMediaUrl(trendyBConfig?.standForImages?.image1);
  const img6 = getMediaUrl(trendyBConfig?.standForImages?.image2);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center bg-[var(--color-deepbrown)] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[var(--color-deepbrown)]">
          {heroUrl ? (
            <img src={heroUrl} alt="TrendyB Hero" className="w-full h-full object-cover object-top origin-top animate-slow-zoom" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-xl border border-white/10 m-4 border-dashed rounded-xl">
              [Upload Hero Image via CMS]
            </div>
          )}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            TRENDY B FASHION HOUSE
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-sans max-w-2xl mx-auto italic">
            Bold Looks. Kenyan Roots. Fashion that walks boldly with you through every season of life.
          </p>
        </div>
      </section>

      {/* Section 1: Brand Overview (Images Left, Text Right) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 2 Images Layout */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm">
                {img1 ? (
                  <img src={img1} alt="Brand Overview 1" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif">[Upload Image 1]</div>
                )}
              </div>
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm translate-y-8">
                {img2 ? (
                  <img src={img2} alt="Brand Overview 2" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif">[Upload Image 2]</div>
                )}
              </div>
            </div>
            
            {/* Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center pt-8 lg:pt-0">
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-deepbrown)] mb-6">Brand Overview</h2>
              <div className="prose prose-stone text-[var(--color-deepbrown)]/80 leading-relaxed text-lg">
                <p className="mb-4">
                  TrendyB Fashion House is a Kenyan-born womenswear brand that empowers modern women to dress boldly, confidently, and intentionally without compromising professionalism at the same time look powerful, polished and unapologetically stylish.
                </p>
                <p className="mb-4">
                  Founded in 2014, the brand was created to fill a gap in the fashion market: where corporate wear meets expressive style.
                </p>
                <p>
                  We’re here for the woman who walks into a room and commands presence, not just with her voice, but with her wardrobe. We design pieces that transition seamlessly from boardrooms to after-hours, infusing timeless silhouettes with vibrant colors, cultural influences, and confident tailoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Vision (Text Left, Images Right) */}
      <section className="py-24 bg-[var(--color-sand)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-deepbrown)] mb-6">Our Vision</h2>
              <p className="text-[var(--color-deepbrown)]/80 leading-relaxed text-lg mb-8">
                Our vision is to become East Africa’s leading women’s fashion brand, championing authenticity, self-expression, and homegrown elegance. We envision a future where Kenyan fashion stands tall globally, and TrendyB leads the charge.
              </p>
              <Link href="/shop" className="bg-[var(--color-terracotta)] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors inline-flex items-center gap-2 self-start rounded-md">
                Shop the Collection <ArrowRight size={16} />
              </Link>
            </div>

            {/* 2 Images Layout */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 order-1 lg:order-2">
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm -translate-y-8">
                {img3 ? (
                  <img src={img3} alt="Vision 1" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif">[Upload Image 3]</div>
                )}
              </div>
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm">
                {img4 ? (
                  <img src={img4} alt="Vision 2" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif">[Upload Image 4]</div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: What We Stand For (Images Left, Text Right) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 2 Images Layout */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm">
                {img5 ? (
                  <img src={img5} alt="Stand For 1" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif">[Upload Image 5]</div>
                )}
              </div>
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm translate-y-8">
                {img6 ? (
                  <img src={img6} alt="Stand For 2" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif">[Upload Image 6]</div>
                )}
              </div>
            </div>
            
            {/* Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center pt-8 lg:pt-0">
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-deepbrown)] mb-8">What We Stand For</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-terracotta)] uppercase tracking-wide mb-2">Modern Corporate Elegance</h3>
                  <p className="text-[var(--color-deepbrown)]/80 text-lg">Think sleek, standout, yet office-appropriate.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-terracotta)] uppercase tracking-wide mb-2">African-Inspired Detailing</h3>
                  <p className="text-[var(--color-deepbrown)]/80 text-lg">We blend contemporary design with traditional flair.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-terracotta)] uppercase tracking-wide mb-2">Personal Power Dressing</h3>
                  <p className="text-[var(--color-deepbrown)]/80 text-lg">For the woman who’s going places and wants to dress like it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Where to Find Us */}
      <section className="py-24 bg-[var(--color-deepbrown)] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <MapPin size={48} className="mx-auto mb-6 text-[var(--color-terracotta)]" />
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Where to Find Us</h2>
          <h3 className="text-xl font-semibold uppercase tracking-widest mb-4 text-[var(--color-sand)]">Zanta Adedye Store at Village Market</h3>
          <p className="text-lg opacity-80 mb-8">
            You can visit our store at Village Market Mall. Welcome to Zanta Adedye Store at Village Market.
          </p>
          <Link href="/contact" className="bg-white text-[var(--color-deepbrown)] px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-terracotta)] hover:text-white transition-colors inline-block rounded-md">
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
}
