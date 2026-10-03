import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getPayload } from "payload";
import configPromise from "@/payload.config";

export const dynamic = 'force-dynamic';

export default async function Shop() {
  const payload = await getPayload({ config: configPromise });
  // 1. Get the Shop settings for pinned/ordered products
  const shopConfig = await payload.findGlobal({ slug: "shop", depth: 2 }).catch(() => null);
  const orderedProducts = (shopConfig?.orderedProducts?.filter((p: any) => typeof p === 'object') || []) as any[];
  const orderedProductIds = new Set(orderedProducts.map(p => p.id));

  // 2. Fetch all products
  const { docs: allProducts } = await payload.find({
    collection: 'products',
    depth: 2,
    limit: 100,
    sort: '-createdAt'
  });

  // 3. Filter out the ones that are already in the ordered list
  const remainingProducts = allProducts.filter(p => !orderedProductIds.has(p.id));

  // 4. Combine them: Ordered first, then the rest
  const products = [...orderedProducts, ...remainingProducts];
  const whatsappNumber = "254705312074";

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-sand)] py-16 text-center">
        <h1 className="font-serif text-4xl text-[var(--color-deepbrown)]">Shop Purposefully. Dress Intentionally.</h1>
      </section>
      <section className="py-12 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
