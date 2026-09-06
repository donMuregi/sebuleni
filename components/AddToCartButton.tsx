"use client";

import { useCart } from "@/components/CartContext";
import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";

type AddToCartButtonProps = {
  product: { id: string; name: string; price: string; };
  iconOnly?: boolean;
};

export default function AddToCartButton({ product, iconOnly }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ ...product, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (iconOnly) {
    return (
      <button 
        onClick={handleAdd}
        className={`flex items-center justify-center px-4 py-3 transition-colors shadow-sm shrink-0 ${
          added 
          ? "bg-[var(--color-deepbrown)] text-white"
          : "bg-[var(--color-terracotta)] text-white hover:bg-[var(--color-deepbrown)]"
        }`}
        aria-label="Add to Cart"
      >
        {added ? <Check size={20} /> : <ShoppingCart size={20} />}
      </button>
    );
  }

  return (
    <button 
      onClick={handleAdd}
      className={`w-full py-2 border-2 font-semibold uppercase tracking-widest text-sm transition-colors ${
        added 
        ? "bg-[var(--color-deepbrown)] border-[var(--color-deepbrown)] text-white"
        : "border-[var(--color-deepbrown)] text-[var(--color-deepbrown)] hover:bg-[var(--color-deepbrown)] hover:text-white"
      }`}
    >
      {added ? "Added to Cart ✓" : "Add to Cart"}
    </button>
  );
}
