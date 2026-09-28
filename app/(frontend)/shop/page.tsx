import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export const dynamic = 'force-dynamic';

export default async function Shop() {
  const payload = await getPayload({ config: configPromise });
  const { docs: products } = await payload.find({
    collection: 'products',
    depth: 2,
    limit: 100,
    sort: '-createdAt'
  });
  const whatsappNumber = "254705312074";

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-sand)] py-16 text-center">
        <h1 className="font-serif text-4xl text-[var(--color-deepbrown)]">Shop Purposefully. Dress Intentionally.</h1>
      </section>
      <section className="py-12 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
