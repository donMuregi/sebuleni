import { getPayload } from "payload";
import configPromise from "@/payload.config";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function WhatsOn() {
  const payload = await getPayload({ config: configPromise });
  
  const { docs: events } = await payload.find({
    collection: 'events',
    sort: 'date',
    limit: 100,
    depth: 2,
  }).catch(() => ({ docs: [] }));

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-sand)] py-20 text-center">
        <h1 className="font-serif text-5xl text-[var(--color-deepbrown)] mb-6">What's On</h1>
        <p className="text-lg text-[var(--color-deepbrown)]/80 max-w-2xl mx-auto px-4">
          Discover our upcoming events, gatherings, and experiences designed to connect, inspire, and elevate our community.
        </p>
      </section>

      <section className="py-20 px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => {
                const imgUrl = event.image && typeof event.image === 'object' && event.image.url ? event.image.url : null;
                const dateObj = new Date(event.date);
                const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                
                return (
                  <Link key={event.id} href={`/whats-on/${event.id}`} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
                    <div className="h-48 bg-[var(--color-sand)] relative">
                      {imgUrl ? (
                        <img src={imgUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-deepbrown)]/30 font-serif">No Image</div>
                      )}
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-terracotta)] rounded-sm shadow-sm">
                        {dateStr}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-2 group-hover:text-[var(--color-terracotta)] transition-colors">{event.title}</h3>
                      {event.location && (
                        <p className="text-sm font-semibold text-[var(--color-deepbrown)]/60 uppercase tracking-wide mb-3">{event.location}</p>
                      )}
                      <p className="text-[var(--color-deepbrown)]/80 mb-6 line-clamp-3 flex-grow">{event.description}</p>
                      
                      <div className="inline-block border border-[var(--color-terracotta)] text-[var(--color-terracotta)] group-hover:bg-[var(--color-terracotta)] group-hover:text-white px-6 py-2 text-sm font-semibold uppercase tracking-wider text-center transition-colors self-start">
                        View Details
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex items-center justify-center py-10">
              <p className="text-xl text-[var(--color-deepbrown)]/70 italic font-serif text-center">
                Check back soon for our calendar of upcoming events. We are crafting something special.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
