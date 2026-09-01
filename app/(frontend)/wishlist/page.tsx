import Link from "next/link";
import { Heart } from "lucide-react";

export default function Wishlist() {
  return (
    <div className="flex flex-col min-h-[70vh] items-center justify-center bg-[var(--color-cream)] px-4">
      <Heart size={64} className="text-[var(--color-sand)] mb-6" />
      <h1 className="font-serif text-4xl text-[var(--color-deepbrown)] mb-4">Your Wishlist</h1>
      <p className="text-[var(--color-deepbrown)]/70 mb-8 max-w-md text-center">
        You haven't saved any items yet. Start exploring our collections and save your favorite pieces.
      </p>
      <Link href="/shop" className="bg-[var(--color-terracotta)] text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors">
        Discover Products
      </Link>
    </div>
  );
}
