import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { getPayload } from "payload";
import configPromise from "@/payload.config";

export default async function Shop() {
  const payload = await getPayload({ config: configPromise });
  const { docs: products } = await payload.find({
    collection: 'products',
    depth: 1,
  });
  const whatsappNumber = "254700000000";

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-sand)] py-16 text-center">
        <h1 className="font-serif text-4xl text-[var(--color-deepbrown)]">Shop Purposefully. Dress Intentionally.</h1>
      </section>
      <section className="py-12 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(p => {
            const formattedPrice = `KES ${p.price?.toLocaleString() || "0"}`;
            const message = `Hello Sebuleni Collective! I would like to order the ${p.name} (${formattedPrice}).`;
            const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            
            let imageUrl = null;
            if (p.images && p.images.length > 0 && typeof p.images[0].image === 'object' && p.images[0].image.url) {
              imageUrl = p.images[0].image.url;
            }
            
            return (
              <div key={p.id} className="group bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <Link href={`/shop/${p.slug}`} className="block">
                  <div className="aspect-[3/4] bg-[var(--color-sand)] flex items-center justify-center font-serif text-[var(--color-deepbrown)]/40 overflow-hidden relative">
                    {imageUrl ? (
                      <img src={imageUrl} alt={p.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="opacity-50">No Image</span>
                    )}
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <Link href={`/shop/${p.slug}`}>
                    <h3 className="font-serif text-xl text-[var(--color-deepbrown)] hover:text-[var(--color-terracotta)] transition-colors mb-1">{p.name}</h3>
                  </Link>
                  <p className="text-sm text-[var(--color-deepbrown)]/70 mb-1">{p.collectionYear || "Signature"} Collection</p>
                  <p className="text-lg font-bold text-[var(--color-deepbrown)] mb-6">{formattedPrice}</p>
                  <div className="mt-auto flex flex-col gap-3">
                    <Link href={`/shop/${p.slug}`} className="w-full text-center py-3 border border-[var(--color-deepbrown)] text-[var(--color-deepbrown)] text-sm font-semibold uppercase tracking-wide hover:bg-[var(--color-deepbrown)] hover:text-white transition-colors">
                      View Details
                    </Link>
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#128C7E] shadow-sm transition-colors">
                      <MessageCircle size={16} /> Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
