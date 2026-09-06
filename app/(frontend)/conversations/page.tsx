import { getPayload } from "payload";
import configPromise from "@/payload.config";
import { ArrowRight } from "lucide-react";

export default async function Conversations() {
  const payload = await getPayload({ config: configPromise });
  
  // Fetch Conversations Global
  const conversationsConfig = await payload.findGlobal({ slug: "conversations", depth: 2 }).catch(() => null);
  
  const getMediaUrl = (field: any) => (field && typeof field === "object" && field.url ? field.url : null);
  const heroUrl = getMediaUrl(conversationsConfig?.heroImage);
  const contentUrl = getMediaUrl(conversationsConfig?.contentImage);

  // Masonry images
  const gridImages = [
    getMediaUrl(conversationsConfig?.previousEventsImages?.image1),
    getMediaUrl(conversationsConfig?.previousEventsImages?.image2),
    getMediaUrl(conversationsConfig?.previousEventsImages?.image3),
    getMediaUrl(conversationsConfig?.previousEventsImages?.image4),
    getMediaUrl(conversationsConfig?.previousEventsImages?.image5),
    getMediaUrl(conversationsConfig?.previousEventsImages?.image6),
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center bg-[var(--color-deepbrown)] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[var(--color-deepbrown)]">
          {heroUrl ? (
            <img src={heroUrl} alt="Conversations Hero" className="w-full h-full object-cover object-center origin-center animate-slow-zoom" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-serif text-xl border border-white/10 m-4 border-dashed rounded-xl">
              [Upload Hero Image via CMS]
            </div>
          )}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Gather. Reflect. Connect.
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-sans max-w-2xl mx-auto italic tracking-wide font-light">
            Join a conversation space for women finding clarity in community
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
                Join the Next Conversation
              </h2>
              <div className="text-[var(--color-deepbrown)]/80 text-lg leading-relaxed mb-10 space-y-6">
                <p>
                  Sebuleni Conversations are intimate, phone-free gatherings where women meet as strangers and leave as soul sisters. Centered around themed questions, food, and trust, every session is a safe space for meaningful dialogue.
                </p>
                <p>
                  Whether we talk about friendship, ambition, or healing, Sebuleni reminds us that our stories matter.
                </p>
              </div>
              <a href="https://forms.gle/yT9HP59wQE6B5QEy9" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-terracotta)] text-white px-8 py-4 font-semibold uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-[var(--color-deepbrown)] shadow-md hover:shadow-lg transition-all self-start rounded-md">
                JOIN THE CONVERSATION <ArrowRight size={18} />
              </a>
            </div>
            
            {/* Image Side */}
            <div className="aspect-square lg:aspect-[4/5] bg-[var(--color-sand)] relative flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif overflow-hidden rounded-2xl shadow-md">
              {contentUrl ? (
                <img src={contentUrl} alt="Sebuleni Conversations" className="w-full h-full object-cover" />
              ) : (
                <span className="px-4 text-center">[Upload Content Image via CMS]</span>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Previous Events Masonry Grid Section */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-4">Previous Events</h2>
          <p className="text-[var(--color-deepbrown)]/70">A glimpse into our curated spaces.</p>
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
                    <img src={url} alt={`Previous Event ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
