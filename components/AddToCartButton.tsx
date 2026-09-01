"use client";

import { useCart } from "./CartContext";
import { useState } from "react";

type AddToCartButtonProps = {
  product: { id: string; name: string; price: string; };
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({ ...product, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

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
