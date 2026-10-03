import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductSlider from "@/components/ProductSlider";
import MasonryGallery from "@/components/MasonryGallery";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export const dynamic = 'force-dynamic';

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
  const galleryImages = homepageConfig?.gallery?.map((g: any) => (typeof g.image === "object" ? g.image.url : null)).filter(Boolean) || [];

  // Divisions Images
  const getDivImage = (field: any) => (field && typeof field === "object" && field.url ? field.url : null);
  const convImage = getDivImage(homepageConfig?.divisions?.conversationsImage);
  const trendybImage = getDivImage(homepageConfig?.divisions?.trendybImage);
  const styledropImage = getDivImage(homepageConfig?.divisions?.styledropImage);
  const dukaImage = getDivImage(homepageConfig?.divisions?.dukaImage);
  const roamsImage = getDivImage(homepageConfig?.divisions?.roamsImage);
  const riseImage = getDivImage(homepageConfig?.divisions?.riseImage);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] w-full flex items-center justify-center bg-[var(--color-deepbrown)] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[var(--color-deepbrown)]">
          <img 
            src={heroUrl} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-top origin-top animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-white leading-tight drop-shadow-lg">
            Karibu<br/>Sebuleni<span className="text-[var(--color-terracotta)]">.</span>
          </h1>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm md:text-base font-semibold tracking-[0.2em] text-[var(--color-deepbrown)] uppercase mb-6">
              One ecosystem, different ways to experience life.
            </h2>
            <div className="w-12 h-[1px] bg-[var(--color-terracotta)] mx-auto mb-8"></div>
            <div className="flex justify-center gap-4">
              <Link href="/shop" className="bg-[var(--color-deepbrown)] text-white px-8 py-3 text-sm font-semibold hover:bg-[var(--color-terracotta)] transition-colors inline-flex items-center gap-2">
                Explore <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="border border-[var(--color-deepbrown)]/20 text-[var(--color-deepbrown)] px-8 py-3 text-sm font-semibold hover:bg-[var(--color-deepbrown)]/5 transition-colors inline-flex items-center gap-2">
                What&apos;s On <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {homepageConfig?.ecosystemCards && homepageConfig.ecosystemCards.length > 0 ? (
              homepageConfig.ecosystemCards.map((card: any, index: number) => {
                const imgUrl = card.image && typeof card.image === 'object' ? card.image.url : null;
                return (
                  <Link key={index} href={card.link || '#'} className="group relative w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:flex-1 max-w-[320px] aspect-[4/5] overflow-hidden rounded-sm flex flex-col justify-end">
                    {imgUrl ? (
                      <img src={imgUrl} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="absolute inset-0 bg-gray-200"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    <div className="relative z-20 p-6 flex flex-col items-center justify-end text-white">
                      <span className="text-sm font-bold tracking-widest uppercase mb-4 text-center">{card.title}</span>
                      <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              /* Fallback if empty in Payload */
              [...Array(7)].map((_, i) => (
                <div key={i} className="group relative w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] lg:flex-1 max-w-[320px] aspect-[4/5] bg-gray-200 overflow-hidden rounded-sm flex flex-col justify-end">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div className="relative z-20 p-6 flex flex-col items-center justify-end text-white">
                    <span className="text-sm font-bold tracking-widest uppercase mb-4 text-center">CARD {i+1}</span>
                    <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Featured Products Slider */}
      <ProductSlider />

      {/* The Essence */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[var(--color-deepbrown)]/80 text-lg mb-8 leading-relaxed font-sans mt-4">
                Welcome to Sebuleni. We are rooted in Kenyan heritage, dedicated to personal power dressing, and passionate about creating spaces where people can gather, reflect, and connect.
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



      {/* Six Pillars / Ecosystem Deep Dive */}
      <section className="py-24 bg-[var(--color-sand)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sebuleni Conversations", subtitle: "How We Connect", link: "/conversations", tagline: "Come for the conversation. Stay for the connection.", desc: "Sebuleni Conversations creates intimate spaces for people to gather, share stories, exchange perspectives and have the conversations we often don't make enough room for. Around a table, on a walk or through a shared experience, we bring people together to listen, learn and connect — meaningfully.", image: convImage },
              { title: "TrendyB Fashion House", subtitle: "What We Wear", link: "/trendyb", tagline: "Wear Your Story.", desc: "TrendyB Fashion House creates distinctive pieces for women who want what they wear to feel like an expression of who they are. Rooted in individuality, craftsmanship and bold personal expression, every piece is designed to become part of your story — at work, at play and everywhere life takes you.", image: trendybImage },
              { title: "Sebuleni Duka", subtitle: "What We Discover", link: "/shop", tagline: "A place to discover something worth taking home.", desc: "Sebuleni Duka is our curated marketplace for discovering products, makers and independent brands with stories worth knowing. More than a shop, Duka creates a meeting point between entrepreneurs and customers — giving good products a home and great brands a community in which to grow.", image: dukaImage },
              { title: "StyleDrop", subtitle: "How We Show Up", link: "/styledrop", tagline: "Show Up as You.", desc: "StyleDrop is about helping you make your wardrobe work for the life you actually live. Through personal styling, wardrobe consultations and personal shopping, we help you understand what works for you, rediscover what you already own and make more intentional choices about what comes into your closet.", image: styledropImage },
              { title: "Sebuleni Roams", subtitle: "How We Experience the World", link: "/roams", tagline: "Go Beyond the Destination.", desc: "Sebuleni Roams is about experiencing places through the stories that make them come alive. We explore culture, food, fashion, heritage, people and adventure — creating experiences that encourage you to slow down, wander, discover and connect with the world beyond the usual itinerary.", image: roamsImage },
              { title: "Sebuleni Rise", subtitle: "How We Create Impact", link: "/rise", tagline: "When One Rises, We Rise Together.", desc: "Sebuleni Rise is where community meets opportunity. Through mentorship, entrepreneurship, knowledge-sharing and meaningful partnerships, we create spaces for women and young people to learn, build, grow and create opportunities for themselves and others.", image: riseImage }
            ].map((pillar) => (
              <Link key={pillar.title} href={pillar.link} className="group flex flex-col bg-[var(--color-cream)] shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-[var(--color-deepbrown)]/10 relative overflow-hidden group-hover:bg-[var(--color-deepbrown)]/20 transition-colors">
                  {pillar.image ? (
                    <img src={pillar.image} alt={pillar.title} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif transition-transform duration-700 group-hover:scale-105">
                      [Image]
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                </div>
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[var(--color-terracotta)] uppercase mb-2 block">{pillar.subtitle}</span>
                    <h3 className="font-serif text-3xl text-[var(--color-deepbrown)] mb-3">{pillar.title}</h3>
                    <p className="text-base font-semibold text-[var(--color-deepbrown)]/90 mb-4">{pillar.tagline}</p>
                    <p className="text-sm text-[var(--color-deepbrown)]/70 leading-relaxed mb-8">{pillar.desc}</p>
                  </div>
                  <span className="text-[var(--color-deepbrown)] uppercase tracking-wide text-xs font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={14} />
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
