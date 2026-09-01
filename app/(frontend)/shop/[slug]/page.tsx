import Link from "next/link";
import { MessageCircle, ArrowLeft } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";

import { getPayload } from "payload";
import configPromise from "@/payload.config";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import ProductGallery from "@/components/ProductGallery";
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });
  const { docs } = await payload.find({
    collection: 'products',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  });
  
  const product = docs[0];

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--color-cream)]">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-[var(--color-deepbrown)] mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-[var(--color-terracotta)] flex items-center gap-2 justify-center font-semibold hover:underline"><ArrowLeft size={16} /> Back to Shop</Link>
        </div>
      </div>
    );
  }

  const whatsappNumber = "254700000000";
  const formattedPrice = `KES ${product.price?.toLocaleString() || "0"}`;
  const message = `Hello Sebuleni Collective! I would like to order the ${product.name} (${formattedPrice}).`;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Extract images
  const images = product.images?.map(img => 
    typeof img.image === 'object' ? img.image?.url : null
  ).filter(Boolean) || [];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 py-8 w-full">
        <Link href="/shop" className="inline-flex items-center gap-2 text-[var(--color-deepbrown)]/70 hover:text-[var(--color-terracotta)] transition-colors text-sm font-semibold uppercase tracking-wide mb-8">
          <ArrowLeft size={16} /> Back to Shop
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <ProductGallery images={images} productName={product.name} />
          
          {/* Buy Box & Story */}
          <div className="flex flex-col">
            <div className="sticky top-24">
              <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-2">{product.name}</h1>
              <p className="text-[var(--color-deepbrown)]/70 text-lg mb-1">{product.collectionYear || "Signature"} Collection</p>
              <p className="text-2xl font-bold text-[var(--color-deepbrown)] mb-8">{formattedPrice}</p>
              
              <div className="prose prose-stone text-[var(--color-deepbrown)]/90 leading-relaxed mb-10 whitespace-pre-wrap">
                {product.story && typeof product.story === 'object' ? (
                  <RichText data={product.story as any} />
                ) : (
                  product.story || "A beautiful piece from our collection."
                )}
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                 <AddToCartButton product={{ id: String(product.id), name: product.name, price: formattedPrice }} />
                 <a href={waUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[#128C7E] shadow-md hover:shadow-lg transition-all">
                    <MessageCircle size={20} /> Order via WhatsApp
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
