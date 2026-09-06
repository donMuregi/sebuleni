import Link from "next/link";
import { MessageCircle } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductCard({ product }: { product: any }) {
  const formattedPrice = `KES ${product.price?.toLocaleString() || "0"}`;
  const whatsappNumber = "254700000000";
  const message = `Hello Sebuleni Collective! I would like to order the ${product.name} (${formattedPrice}).`;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  let imageUrl = null;
  if (product.images && product.images.length > 0 && typeof product.images[0].image === 'object' && product.images[0].image.url) {
    imageUrl = product.images[0].image.url;
  }

  return (
    <div className="group bg-white rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="aspect-[3/4] bg-[var(--color-sand)] flex items-center justify-center font-serif text-[var(--color-deepbrown)]/40 overflow-hidden relative">
          {imageUrl ? (
            <img src={imageUrl} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <span className="opacity-50">No Image</span>
          )}
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-serif text-xl text-[var(--color-deepbrown)] hover:text-[var(--color-terracotta)] transition-colors mb-1">{product.name}</h3>
        </Link>
        <p className="text-sm text-[var(--color-deepbrown)]/70 mb-1">{product.collectionYear || "Signature"} Collection</p>
        <p className="text-lg font-bold text-[var(--color-deepbrown)] mb-6">{formattedPrice}</p>
        <div className="mt-auto flex flex-row gap-1.5">
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wide hover:bg-[#128C7E] shadow-sm transition-colors whitespace-nowrap">
            <MessageCircle size={16} className="shrink-0" /> <span className="truncate">Order on WhatsApp</span>
          </a>
          <AddToCartButton product={{ id: String(product.id), name: product.name, price: formattedPrice }} iconOnly={true} />
        </div>
      </div>
    </div>
  );
}
