"use client";
import Link from "next/link";
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-[70vh] items-center justify-center bg-[var(--color-cream)] px-4">
        <ShoppingBag size={64} className="text-[var(--color-sand)] mb-6" />
        <h1 className="font-serif text-4xl text-[var(--color-deepbrown)] mb-4">Your Cart is Empty</h1>
        <p className="text-[var(--color-deepbrown)]/70 mb-8 max-w-md text-center">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link href="/shop" className="bg-[var(--color-terracotta)] text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 py-12 w-full">
        <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {items.map((item) => (
              <div key={item.id} className="flex gap-6 p-6 bg-white shadow-sm items-center">
                <div className="w-24 h-32 bg-[var(--color-sand)] flex-shrink-0"></div>
                <div className="flex-grow flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-xl text-[var(--color-deepbrown)]">{item.name}</h3>
                    <p className="text-[var(--color-deepbrown)] font-semibold">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="flex items-center border border-[var(--color-sand)]">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-[var(--color-sand)] text-[var(--color-deepbrown)] transition-colors"><Minus size={14} /></button>
                      <span className="px-4 text-sm font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-[var(--color-sand)] text-[var(--color-deepbrown)] transition-colors"><Plus size={14} /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-sm uppercase tracking-wider text-[var(--color-deepbrown)]/60 hover:text-[var(--color-terracotta)] flex items-center gap-1 transition-colors">
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white p-8 shadow-sm flex flex-col gap-6 sticky top-32">
              <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] border-b border-[var(--color-sand)] pb-4">Order Summary</h2>
              <div className="flex justify-between text-[var(--color-deepbrown)]">
                <span>Subtotal ({cartCount} items)</span>
                <span>Calculated at checkout</span>
              </div>
              <p className="text-xs text-[var(--color-deepbrown)]/60 -mt-2">Shipping & taxes calculated at checkout</p>
              <button onClick={() => alert("Checkout flow coming soon!")} className="w-full bg-[var(--color-terracotta)] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors mt-4">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
