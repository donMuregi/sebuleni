import Link from "next/link";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export default async function About() {
  const payload = await getPayload({ config: configPromise });
  const aboutUsConfig = await payload.findGlobal({ slug: "about_us", depth: 2 }).catch(() => null);

  const getMediaUrl = (field: any) => (field && typeof field === "object" && field.url ? field.url : null);

  const heroUrl = getMediaUrl(aboutUsConfig?.heroImage);
  const whatIsImg1 = getMediaUrl(aboutUsConfig?.whatIsSebuleniImages?.image1);
  const whatIsImg2 = getMediaUrl(aboutUsConfig?.whatIsSebuleniImages?.image2);
  const convImg1 = getMediaUrl(aboutUsConfig?.sebuleniConversationsImages?.image1);
  const convImg2 = getMediaUrl(aboutUsConfig?.sebuleniConversationsImages?.image2);
  const trendybImg1 = getMediaUrl(aboutUsConfig?.trendyBFashionHouseImages?.image1);
  const trendybImg2 = getMediaUrl(aboutUsConfig?.trendyBFashionHouseImages?.image2);
  const styleImg1 = getMediaUrl(aboutUsConfig?.styleDropImages?.image1);
  const styleImg2 = getMediaUrl(aboutUsConfig?.styleDropImages?.image2);
  const dukaImg1 = getMediaUrl(aboutUsConfig?.sebuleniDukaImages?.image1);
  const dukaImg2 = getMediaUrl(aboutUsConfig?.sebuleniDukaImages?.image2);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center bg-[var(--color-deepbrown)] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[var(--color-deepbrown)]">
          {heroUrl ? (
            <img src={heroUrl} alt="About Us Hero" className="w-full h-full object-cover object-top origin-top animate-slow-zoom" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-xl border border-white/10 m-4 border-dashed rounded-xl">
              [Upload Hero Image via CMS]
            </div>
          )}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-widest">
            About Us
          </h1>
        </div>
      </section>

      {/* Section 1: What is Sebuleni? (Images Left, Text Right) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 2 Images Layout */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm">
                {whatIsImg1 ? (
                  <img src={whatIsImg1} alt="What is Sebuleni 1" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif text-center px-4">[Upload What is Sebuleni Image 1]</div>
                )}
              </div>
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm translate-y-8">
                {whatIsImg2 ? (
                  <img src={whatIsImg2} alt="What is Sebuleni 2" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif text-center px-4">[Upload What is Sebuleni Image 2]</div>
                )}
              </div>
            </div>
            
            {/* Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center pt-8 lg:pt-0">
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-6">What is Sebuleni?</h2>
              <div className="prose prose-stone text-[var(--color-deepbrown)]/80 leading-relaxed text-lg">
                <p>
                  Sebuleni means &quot;living room&quot; in Kiswahili—a space for gathering, storytelling, and connection. What began as intimate conversations has grown into a collective of self-expression, bringing together style, story, and soul.
                </p>
                <p className="font-semibold mt-4">
                  Sebuleni Collective exists to nurture identity, celebrate African creativity, and inspire bold living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro to Collective */}
      <section className="py-16 bg-[var(--color-terracotta)] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-5xl italic tracking-wide">Sebuleni Collective Is...</h2>
        </div>
      </section>

      {/* Section 2: Sebuleni Conversations (Text Left, Images Right) */}
      <section className="py-24 bg-[var(--color-sand)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-deepbrown)] mb-6">Sebuleni Conversations</h2>
              <p className="text-[var(--color-deepbrown)]/80 leading-relaxed text-lg mb-8">
                A welcoming and intentional conversation space where women come together to share stories, experiences, and insights. Sebuleni fosters clarity, healing, and personal growth through the power of authentic community and supportive dialogue.
              </p>
              <Link href="/conversations" className="text-[var(--color-terracotta)] font-semibold hover:text-[var(--color-deepbrown)] transition-colors inline-flex items-center gap-2 self-start uppercase tracking-widest text-sm">
                Discover Conversations &rarr;
              </Link>
            </div>

            {/* 2 Images Layout */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 order-1 lg:order-2">
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm -translate-y-8">
                {convImg1 ? (
                  <img src={convImg1} alt="Conversations 1" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif text-center px-4">[Upload Conversations Image 1]</div>
                )}
              </div>
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm">
                {convImg2 ? (
                  <img src={convImg2} alt="Conversations 2" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif text-center px-4">[Upload Conversations Image 2]</div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: TrendyB Fashion House (Images Left, Text Right) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 2 Images Layout */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm">
                {trendybImg1 ? (
                  <img src={trendybImg1} alt="TrendyB 1" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif text-center px-4">[Upload TrendyB Image 1]</div>
                )}
              </div>
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm translate-y-8">
                {trendybImg2 ? (
                  <img src={trendybImg2} alt="TrendyB 2" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif text-center px-4">[Upload TrendyB Image 2]</div>
                )}
              </div>
            </div>
            
            {/* Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center pt-8 lg:pt-0">
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-deepbrown)] mb-6">TrendyB Fashion House</h2>
              <p className="text-[var(--color-deepbrown)]/80 leading-relaxed text-lg mb-8">
                A contemporary fashion house dedicated to designing stylish, high-quality clothing that celebrates the strength, elegance, and diversity of the modern African woman. TrendyB blends traditional African aesthetics with global fashion trends to create bold, expressive pieces.
              </p>
              <Link href="/trendyb" className="text-[var(--color-terracotta)] font-semibold hover:text-[var(--color-deepbrown)] transition-colors inline-flex items-center gap-2 self-start uppercase tracking-widest text-sm">
                Explore TrendyB &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Style Drop (Text Left, Images Right) */}
      <section className="py-24 bg-[var(--color-sand)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-deepbrown)] mb-6">Style Drop</h2>
              <p className="text-[var(--color-deepbrown)]/80 leading-relaxed text-lg mb-8">
                A personalized styling platform that guides individuals through transformative wardrobe journeys. StyleDrop connects users with stylists, curated fashion selections, and styling advice to help them redefine their look and express their evolving identity with confidence.
              </p>
              <Link href="/styledrop" className="text-[var(--color-terracotta)] font-semibold hover:text-[var(--color-deepbrown)] transition-colors inline-flex items-center gap-2 self-start uppercase tracking-widest text-sm">
                Discover Style Drop &rarr;
              </Link>
            </div>

            {/* 2 Images Layout */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 order-1 lg:order-2">
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm -translate-y-8">
                {styleImg1 ? (
                  <img src={styleImg1} alt="Style Drop 1" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif text-center px-4">[Upload Style Drop Image 1]</div>
                )}
              </div>
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm">
                {styleImg2 ? (
                  <img src={styleImg2} alt="Style Drop 2" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif text-center px-4">[Upload Style Drop Image 2]</div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 5: Sebuleni Duka (Images Left, Text Right) */}
      <section className="py-24 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 2 Images Layout */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm">
                {dukaImg1 ? (
                  <img src={dukaImg1} alt="Sebuleni Duka 1" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif text-center px-4">[Upload Sebuleni Duka Image 1]</div>
                )}
              </div>
              <div className="aspect-[3/4] bg-[var(--color-sand)] relative overflow-hidden rounded-xl shadow-sm translate-y-8">
                {dukaImg2 ? (
                  <img src={dukaImg2} alt="Sebuleni Duka 2" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif text-center px-4">[Upload Sebuleni Duka Image 2]</div>
                )}
              </div>
            </div>
            
            {/* Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center pt-8 lg:pt-0">
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-deepbrown)] mb-6">Sebuleni Duka</h2>
              <p className="text-[var(--color-deepbrown)]/80 leading-relaxed text-lg mb-8">
                A thoughtfully curated retail experience for individuals who shop with purpose and intention. Sebuleni Duka offers more than just fashion—it’s a space where each purchase reflects a connection to culture, quality, and conscious living. It’s where style meets substance.
              </p>
              <Link href="/shop" className="text-[var(--color-terracotta)] font-semibold hover:text-[var(--color-deepbrown)] transition-colors inline-flex items-center gap-2 self-start uppercase tracking-widest text-sm">
                Shop Sebuleni Duka &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
