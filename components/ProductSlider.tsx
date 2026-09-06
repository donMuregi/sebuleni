import Link from "next/link";
import ProductCard from "@/components/ProductCard";

import { getPayload } from "payload";
import configPromise from "@/payload.config";

export default async function ProductGrid() {
  const payload = await getPayload({ config: configPromise });
  const { docs: products } = await payload.find({
    collection: 'products',
    where: { featured: { equals: true } },
    depth: 1,
    limit: 8
  });
  const whatsappNumber = "254700000000";

  return (
    <section className="py-16 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-between items-end">
         <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-deepbrown)]">Our Collection</h2>
         <Link href="/shop" className="text-sm font-semibold uppercase tracking-wide text-[var(--color-terracotta)] hover:underline">
           View All
         </Link>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
