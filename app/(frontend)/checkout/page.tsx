"use client";

import { useCart } from "@/components/CartContext";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function CheckoutPage() {
  const { items, cartCount, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch logged in user to associate with order
  useEffect(() => {
    fetch('/api/users/me')
      .then(res => res.json())
      .then(data => {
        if (data && data.user && data.user.id) {
          setUserId(data.user.id);
        }
      })
      .catch(() => {});
  }, []);

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const priceNum = parseFloat(item.price.replace(/[^\d.]/g, ''));
      return total + (priceNum * item.quantity);
    }, 0);
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    
    const orderData = {
      user: userId, // Optional, links order to user if logged in
      total: calculateTotal() + 500, // including shipping
      status: 'pending',
      contactInfo: {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
      },
      shippingAddress: {
        street: formData.get('street'),
        city: formData.get('city'),
        postalCode: formData.get('postalCode'),
      },
      items: items.map(item => ({
        product: !isNaN(Number(item.id)) ? Number(item.id) : item.id,
        productName: item.name,
        quantity: item.quantity,
        priceAtPurchase: item.price,
      }))
    };

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        clearCart();
        setOrderPlaced(true);
      } else {
        alert("There was an error placing your order. Please try again.");
      }
    } catch (err) {
      alert("There was an error placing your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="flex flex-col min-h-[80vh] items-center justify-center bg-[var(--color-cream)] px-4">
        <CheckCircle2 size={80} className="text-green-600 mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-4 text-center">Order Confirmed!</h1>
        <p className="text-[var(--color-deepbrown)]/80 text-lg mb-8 max-w-lg text-center leading-relaxed">
          Thank you for shopping with Sebuleni Collective. We have received your order and will begin processing it right away.
        </p>
        <Link href="/shop" className="bg-[var(--color-terracotta)] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-[70vh] items-center justify-center bg-[var(--color-cream)] px-4">
        <h1 className="font-serif text-4xl text-[var(--color-deepbrown)] mb-4">Your Cart is Empty</h1>
        <Link href="/shop" className="bg-[var(--color-terracotta)] text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 py-12 w-full">
        <Link href="/cart" className="inline-flex items-center gap-2 text-[var(--color-deepbrown)]/70 hover:text-[var(--color-terracotta)] transition-colors text-sm font-semibold uppercase tracking-wide mb-8">
          <ArrowLeft size={16} /> Back to Cart
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-deepbrown)] mb-12">Checkout</h1>
        
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="flex flex-col gap-10">
              
              {/* Contact Information */}
              <div className="bg-white p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-deepbrown)]/80 uppercase tracking-wide">First Name</label>
                    <input required type="text" name="firstName" className="p-3 border border-[var(--color-sand)] bg-white focus:outline-none focus:border-[var(--color-terracotta)]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-deepbrown)]/80 uppercase tracking-wide">Last Name</label>
                    <input required type="text" name="lastName" className="p-3 border border-[var(--color-sand)] bg-white focus:outline-none focus:border-[var(--color-terracotta)]" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-semibold text-[var(--color-deepbrown)]/80 uppercase tracking-wide">Email</label>
                    <input required type="email" name="email" className="p-3 border border-[var(--color-sand)] bg-white focus:outline-none focus:border-[var(--color-terracotta)]" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-semibold text-[var(--color-deepbrown)]/80 uppercase tracking-wide">Phone Number</label>
                    <input required type="tel" name="phone" className="p-3 border border-[var(--color-sand)] bg-white focus:outline-none focus:border-[var(--color-terracotta)]" />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-6">Delivery Address</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[var(--color-deepbrown)]/80 uppercase tracking-wide">Street Address</label>
                    <input required type="text" name="street" className="p-3 border border-[var(--color-sand)] bg-white focus:outline-none focus:border-[var(--color-terracotta)]" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[var(--color-deepbrown)]/80 uppercase tracking-wide">City</label>
                      <input required type="text" name="city" className="p-3 border border-[var(--color-sand)] bg-white focus:outline-none focus:border-[var(--color-terracotta)]" defaultValue="Nairobi" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[var(--color-deepbrown)]/80 uppercase tracking-wide">Postal Code</label>
                      <input required type="text" name="postalCode" className="p-3 border border-[var(--color-sand)] bg-white focus:outline-none focus:border-[var(--color-terracotta)]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-white p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-6">Payment</h2>
                <div className="p-4 border border-[var(--color-sand)] bg-gray-50 flex items-center justify-between rounded-md cursor-pointer hover:border-[var(--color-terracotta)] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-4 border-[var(--color-terracotta)] bg-white flex-shrink-0"></div>
                    <span className="font-semibold text-[var(--color-deepbrown)]">Payment on Delivery</span>
                  </div>
                  <span className="text-[var(--color-deepbrown)]/60 text-sm">Pay when you receive your order</span>
                </div>
              </div>
              
            </form>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white p-8 shadow-sm sticky top-32">
              <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] border-b border-[var(--color-sand)] pb-4 mb-6">Order Summary</h2>
              
              <div className="flex flex-col gap-4 mb-8">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-16 h-20 bg-[var(--color-sand)] flex-shrink-0 relative overflow-hidden rounded-sm">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : null}
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h4 className="font-serif text-[var(--color-deepbrown)] leading-tight">{item.name}</h4>
                      <p className="text-sm text-[var(--color-deepbrown)]/60">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-[var(--color-deepbrown)] font-semibold text-sm">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[var(--color-sand)] pt-4 flex flex-col gap-3 mb-6">
                <div className="flex justify-between text-[var(--color-deepbrown)]/80">
                  <span>Subtotal</span>
                  <span>KES {calculateTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[var(--color-deepbrown)]/80">
                  <span>Shipping</span>
                  <span>KES 500</span>
                </div>
                <div className="flex justify-between text-xl font-serif text-[var(--color-deepbrown)] mt-2 pt-4 border-t border-[var(--color-sand)]">
                  <span>Total</span>
                  <span>KES {(calculateTotal() + 500).toLocaleString()}</span>
                </div>
              </div>
              
              <button form="checkout-form" type="submit" className="w-full bg-[var(--color-terracotta)] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
