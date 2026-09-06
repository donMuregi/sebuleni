import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export default async function StyleDrop() {
  const payload = await getPayload({ config: configPromise });
  
  // Fetch StyleDrop Global
  const styleDropConfig = await payload.findGlobal({ slug: "style_drop", depth: 2 }).catch(() => null);
  
  // Fetch Latest Blog Post
  const { docs: blogs } = await payload.find({
    collection: "blogs",
    sort: "-publishedDate",
    limit: 1,
    depth: 2,
  }).catch(() => ({ docs: [] }));
  
  const latestPost = blogs[0];

  const getMediaUrl = (field: any) => (field && typeof field === "object" && field.url ? field.url : null);
  const heroUrl = getMediaUrl(styleDropConfig?.heroImage);
  const stylistUrl = getMediaUrl(styleDropConfig?.stylistImage);
  
  // Masonry images
  const gridImages = [
    getMediaUrl(styleDropConfig?.manyStylesImages?.image1),
    getMediaUrl(styleDropConfig?.manyStylesImages?.image2),
    getMediaUrl(styleDropConfig?.manyStylesImages?.image3),
    getMediaUrl(styleDropConfig?.manyStylesImages?.image4),
    getMediaUrl(styleDropConfig?.manyStylesImages?.image5),
    getMediaUrl(styleDropConfig?.manyStylesImages?.image6),
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center bg-[var(--color-deepbrown)] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[var(--color-deepbrown)]">
          {heroUrl ? (
            <img src={heroUrl} alt="Style Drop Hero" className="w-full h-full object-cover object-center origin-center animate-slow-zoom" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-xl border border-white/10 m-4 border-dashed rounded-xl">
              [Upload Hero Image via CMS]
            </div>
          )}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Style is Personal.<br/>Let&apos;s Curate Yours.
          </h1>
          <p className="text-white/90 text-xl font-sans max-w-2xl mx-auto italic tracking-wide">
            Think of us as your style partner for reinvention.
          </p>
        </div>
      </section>

      {/* CTA Section (Split Layout) */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Side */}
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-6 leading-tight">
                Personalized Styling by Nakhulo Khamia.
              </h2>
              <div className="text-[var(--color-deepbrown)]/80 text-lg leading-relaxed mb-10 space-y-4">
                <p>
                  Your wardrobe is more than just clothes; it&apos;s your personal brand, your armor, and your unique story told to the world without saying a word.
                </p>
                <p>
                  Work directly with our head stylist, <strong>Nakhulo Khamia</strong>, to embark on a transformative styling journey. Whether you need a complete wardrobe overhaul, styling for a specific event, or guidance on defining your unique aesthetic, Nakhulo provides personalized, one-on-one consultation to help you discover a look that truly reflects who you are.
                </p>
              </div>
              <a href="https://wa.me/254700000000?text=Hello%20Nakhulo!%20I%20would%20like%20to%20schedule%20a%20personal%20styling%20consultation." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 font-semibold uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-[#128C7E] shadow-md hover:shadow-lg transition-all self-start rounded-md">
                <MessageCircle size={18} /> REACH OUT ON WHATSAPP
              </a>
            </div>
            
            {/* Image Side */}
            <div className="aspect-square lg:aspect-[4/5] bg-[var(--color-sand)] relative flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif overflow-hidden">
              {stylistUrl ? (
                <img src={stylistUrl} alt="Nakhulo Khamia Styling" className="w-full h-full object-cover" />
              ) : (
                "[Upload Stylist Image via CMS]"
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Preview Section */}
      {latestPost && (
        <section className="py-24 bg-[var(--color-sand)]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 flex flex-col justify-center">
                <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-deepbrown)] mb-6 leading-tight">
                  {latestPost.title}
                </h2>
                <div className="text-[var(--color-terracotta)] font-semibold text-sm uppercase tracking-widest mb-6 flex items-center gap-4">
                  <span>{new Date(latestPost.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="text-[var(--color-deepbrown)]/40">&bull;</span>
                  <span className="text-[var(--color-deepbrown)]/70">No Comments</span>
                </div>
                <p className="text-[var(--color-deepbrown)]/80 leading-relaxed text-lg mb-8">
                  {latestPost.excerpt}
                </p>
                <Link href={`/blog/${latestPost.slug}`} className="text-[var(--color-terracotta)] font-semibold hover:text-[var(--color-deepbrown)] transition-colors inline-flex items-center gap-2 self-start uppercase tracking-widest text-sm border-b-2 border-transparent hover:border-[var(--color-deepbrown)] pb-1">
                  Read More &raquo;
                </Link>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="aspect-square bg-[var(--color-sand)] relative overflow-hidden rounded-2xl shadow-md border border-[var(--color-cream)]">
                  {getMediaUrl(latestPost.image) ? (
                    <img src={getMediaUrl(latestPost.image)} alt={latestPost.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif">
                      [No Article Image]
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Many Styles Masonry Grid Section */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-4">Many Styles to Choose From</h2>
          <p className="text-[var(--color-deepbrown)]/70 text-lg italic font-serif">There are so Many Ways Style Drop can Style You</p>
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
                    <img src={url} alt={`Style ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <span className="group-hover:scale-110 transition-transform duration-500 text-center">[Upload Grid Image {index + 1}]</span>
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
