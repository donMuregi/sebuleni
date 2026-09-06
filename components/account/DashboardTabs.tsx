"use client";

import { useState } from "react";
import Link from "next/link";
import LogoutButton from "@/components/auth/LogoutButton";
import { ShoppingBag, Heart, User } from "lucide-react";

export default function DashboardTabs({ user }: { user: any }) {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1 flex flex-col gap-2">
        <div className="bg-white p-6 shadow-sm mb-4">
          <p className="text-sm text-[var(--color-deepbrown)]/70 mb-1">Welcome back,</p>
          <p className="font-serif text-xl text-[var(--color-deepbrown)] truncate mb-6">{user?.email}</p>
          <LogoutButton />
        </div>
        <div className="bg-white shadow-sm flex flex-col">
          <button 
            onClick={() => setActiveTab("profile")}
            className={`flex items-center gap-3 p-4 text-left transition-colors font-medium border-b border-[var(--color-sand)] ${activeTab === 'profile' ? 'bg-[var(--color-sand)] text-[var(--color-terracotta)]' : 'hover:bg-[var(--color-sand)] text-[var(--color-deepbrown)]'}`}
          >
            <User size={18} /> Profile
          </button>
          <button 
            onClick={() => setActiveTab("orders")}
            className={`flex items-center gap-3 p-4 text-left transition-colors font-medium border-b border-[var(--color-sand)] ${activeTab === 'orders' ? 'bg-[var(--color-sand)] text-[var(--color-terracotta)]' : 'hover:bg-[var(--color-sand)] text-[var(--color-deepbrown)]'}`}
          >
            <ShoppingBag size={18} /> Orders
          </button>
          <Link 
            href="/wishlist"
            className="flex items-center gap-3 p-4 text-left transition-colors font-medium hover:bg-[var(--color-sand)] text-[var(--color-deepbrown)]"
          >
            <Heart size={18} /> Wishlist
          </Link>
        </div>
      </div>
      
      <div className="md:col-span-3">
        <div className="bg-white p-8 shadow-sm h-full min-h-[400px]">
          
          {activeTab === "profile" && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl text-[var(--color-deepbrown)] mb-6">My Profile</h2>
              <div className="p-6 border border-[var(--color-sand)] rounded-xl bg-[var(--color-cream)]/30">
                <p className="text-[var(--color-deepbrown)] mb-4"><span className="font-semibold">Email:</span> {user?.email}</p>
                <p className="text-[var(--color-deepbrown)]/60 text-sm">More profile settings coming soon.</p>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl text-[var(--color-deepbrown)] mb-6">Recent Activity</h2>
              <div className="flex flex-col items-center justify-center h-[300px] text-center border-2 border-dashed border-[var(--color-sand)] rounded-xl bg-[var(--color-cream)]/30">
                <ShoppingBag size={48} className="text-[var(--color-deepbrown)]/20 mb-4" />
                <p className="text-[var(--color-deepbrown)]/60 text-lg">You haven't placed any orders yet.</p>
                <button className="mt-6 text-[var(--color-terracotta)] font-semibold uppercase tracking-widest text-sm hover:underline hover:text-[var(--color-deepbrown)] transition-colors">
                  Start Shopping
                </button>
              </div>
            </div>
          )}



        </div>
      </div>
    </div>
  );
}
