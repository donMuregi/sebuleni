import { getPayload } from "payload";
import configPromise from "@/payload.config";

export const dynamic = 'force-dynamic';

export default async function BrandStudio() {
  const payload = await getPayload({ config: configPromise });
  const brandStudioConfig = await payload.findGlobal({ slug: "brand_studio", depth: 2 }).catch(() => null);

  const getMediaUrl = (field: any) => (field && typeof field === "object" && field.url ? field.url : null);
  const heroUrl = getMediaUrl(brandStudioConfig?.heroImage);
  
  const gridImages = [
    getMediaUrl(brandStudioConfig?.masonryImages?.image1),
    getMediaUrl(brandStudioConfig?.masonryImages?.image2),
    getMediaUrl(brandStudioConfig?.masonryImages?.image3),
    getMediaUrl(brandStudioConfig?.masonryImages?.image4),
    getMediaUrl(brandStudioConfig?.masonryImages?.image5),
    getMediaUrl(brandStudioConfig?.masonryImages?.image6),
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center bg-[var(--color-deepbrown)] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[var(--color-deepbrown)]">
          {heroUrl ? (
            <img src={heroUrl} alt="Brand Studio Hero" className="w-full h-full object-cover object-center origin-center animate-slow-zoom" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-xl border border-white/10 m-4 border-dashed rounded-xl">
              [Upload Hero Image via CMS]
            </div>
          )}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Brand Studio
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-6 leading-tight">
            Case Study: Personal Branding — What We Wear
          </h2>
          <div className="text-[var(--color-deepbrown)]/80 text-lg leading-relaxed mb-10 space-y-6 max-w-3xl mx-auto">
            <p>
              Sebuleni Collective partnered with Positive Circles to deliver an interactive personal-branding experience exploring how clothing shapes identity, confidence and perception.
            </p>
            <p>
              Using the Identity–Intention–Expression framework, participants reflected on how they currently present themselves, how they want to be perceived and whether their wardrobes support that intention. The session combined guided conversation, practical styling exercises and personal reflection.
            </p>
            <p>
              The experience demonstrated how Sebuleni Brand Studio uses fashion, storytelling and facilitated engagement to help individuals and organisations strengthen personal presence, confidence and authentic expression.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Grid Section */}
      <section className="py-24 bg-[var(--color-sand)]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-4">Our Visual Story</h2>
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {gridImages.map((url, index) => {
              const aspects = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-square', 'aspect-[4/5]'];
              const aspect = aspects[index % 6];
              return (
                <div key={index} className={`w-full ${aspect} bg-[var(--color-sand)] flex items-center justify-center font-serif text-[var(--color-deepbrown)]/40 break-inside-avoid overflow-hidden group rounded-sm relative shadow-sm hover:shadow-md transition-shadow cursor-pointer`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                  {url ? (
                    <img src={url} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <span className="group-hover:scale-110 transition-transform duration-500 text-center px-2">[Upload Image {index + 1}]</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
