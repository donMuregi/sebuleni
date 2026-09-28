import { getPayload } from "payload";
import configPromise from "@/payload.config";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function EventDetail({ params }: { params: Promise<{ id: string }> }) {
  const payload = await getPayload({ config: configPromise });
  const { id } = await params;
  
  let event;
  try {
    event = await payload.findByID({
      collection: 'events',
      id: id,
      depth: 2,
    });
  } catch (error) {
    return notFound();
  }

  if (!event) return notFound();

  const imgUrl = event.image && typeof event.image === 'object' && event.image.url ? event.image.url : null;
  const dateObj = new Date(event.date);
  const dateStr = dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const timeStr = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <div className="max-w-4xl mx-auto px-4 py-8 w-full">
        <Link href="/whats-on" className="inline-flex items-center gap-2 text-[var(--color-terracotta)] font-semibold uppercase tracking-wider text-sm hover:text-[var(--color-deepbrown)] transition-colors mb-8">
          <ArrowLeft size={16} /> Back to What's On
        </Link>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {imgUrl && (
            <div className="w-full h-[40vh] md:h-[60vh] relative bg-[var(--color-sand)]">
              <img src={imgUrl} alt={event.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8 pb-8 border-b border-[var(--color-sand)]">
              <div>
                <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-6">{event.title}</h1>
                <div className="flex flex-col gap-3 text-[var(--color-deepbrown)]/80">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-[var(--color-terracotta)]" size={20} />
                    <span className="font-semibold">{dateStr} at {timeStr}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center gap-3">
                      <MapPin className="text-[var(--color-terracotta)]" size={20} />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex-shrink-0">
                {event.link ? (
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-[var(--color-terracotta)] text-white px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-[var(--color-deepbrown)] shadow-md hover:shadow-lg transition-all rounded-md text-center w-full md:w-auto">
                    Book Event
                  </a>
                ) : (
                  <a href={`https://wa.me/254705312074?text=Hello!%20I%20would%20like%20to%20attend%20the%20event:%20${encodeURIComponent(event.title)}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] text-white px-8 py-4 font-semibold uppercase tracking-widest text-sm hover:bg-[#128C7E] shadow-md hover:shadow-lg transition-all rounded-md text-center w-full md:w-auto">
                    Book via WhatsApp
                  </a>
                )}
              </div>
            </div>

            <div className="prose prose-stone max-w-none text-[var(--color-deepbrown)]/90 text-lg leading-relaxed">
              {event.description.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
