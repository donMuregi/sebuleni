import { getPayload } from "payload";
import configPromise from "@/payload.config";

export const dynamic = 'force-dynamic';

export default async function Roams() {
  const payload = await getPayload({ config: configPromise });
  
  // Fetch Roams Global
  const roamsConfig = await payload.findGlobal({ slug: "roams", depth: 2 }).catch(() => null);
  
  const getMediaUrl = (field: any) => (field && typeof field === "object" && field.url ? field.url : null);
  const heroUrl = getMediaUrl(roamsConfig?.heroImage);
  const contentUrl = getMediaUrl(roamsConfig?.contentImage);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center bg-[var(--color-deepbrown)] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[var(--color-deepbrown)]">
          {heroUrl ? (
            <img src={heroUrl} alt="Sebuleni Roams Hero" className="w-full h-full object-cover object-center origin-center animate-slow-zoom" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-xl border border-white/10 m-4 border-dashed rounded-xl">
              [Upload Hero Image via CMS]
            </div>
          )}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            How We Experience the World
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-sans max-w-2xl mx-auto italic tracking-wide font-light">
            Go Beyond the Destination.
          </p>
        </div>
      </section>

      {/* Content Section (Split Layout) */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Side */}
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-8 leading-tight">
                Sebuleni Roams
              </h2>
              <div className="text-[var(--color-deepbrown)]/80 text-lg leading-relaxed mb-10 space-y-6">
                <p>
                  Sebuleni Roams is about experiencing places through the stories that make them come alive.
                </p>
                <p>
                  We explore culture, food, fashion, heritage, people and adventure — creating experiences that encourage you to slow down, wander, discover and connect with the world beyond the usual itinerary.
                </p>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="aspect-square lg:aspect-[4/5] bg-[var(--color-sand)] relative flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif overflow-hidden rounded-2xl shadow-md">
              {contentUrl ? (
                <img src={contentUrl} alt="Sebuleni Roams Content" className="w-full h-full object-cover" />
              ) : (
                <span className="px-4 text-center">[Upload Content Image via CMS]</span>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
