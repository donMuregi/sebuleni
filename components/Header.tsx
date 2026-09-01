"use client";
import Link from "next/link";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { cartCount } = useCart();
  
  useEffect(() => setMounted(true), []);

  const navLinks = [
    { label: "Sebuleni Duka", href: "/shop" },
    { label: "Conversations", href: "/conversations" },
    { label: "TrendyB", href: "/trendyb" },
    { label: "StyleDrop", href: "/styledrop" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-cream)] shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-[var(--color-deepbrown)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="font-serif text-2xl font-bold text-[var(--color-deepbrown)]">
            Sebuleni
          </Link>
        </div>

        <nav className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-[var(--color-deepbrown)] hover:text-[var(--color-terracotta)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-[var(--color-deepbrown)]">
          <button 
            aria-label="Search" 
            onClick={() => setIsSearchOpen(!isSearchOpen)} 
            className="hover:text-[var(--color-terracotta)] transition-colors"
          >
            {isSearchOpen ? <X size={20} /> : <Search size={20} />}
          </button>
          <Link href="/wishlist" aria-label="Wishlist" className="hidden sm:block hover:text-[var(--color-terracotta)] transition-colors">
            <Heart size={20} />
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative hover:text-[var(--color-terracotta)] transition-colors">
            <ShoppingCart size={20} />
            {mounted && cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-terracotta)] text-[10px] text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/account" aria-label="Account" className="hidden sm:block hover:text-[var(--color-terracotta)] transition-colors">
            <User size={20} />
          </Link>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-[var(--color-sand)] p-4 shadow-md animate-in slide-in-from-top-2">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto flex gap-2">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow p-3 border border-[var(--color-sand)] focus:outline-none focus:border-[var(--color-terracotta)]"
              autoFocus
            />
            <button type="submit" className="bg-[var(--color-terracotta)] text-white px-6 uppercase text-sm font-semibold tracking-wider hover:bg-[var(--color-deepbrown)] transition-colors">
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[var(--color-cream)] border-t border-[var(--color-sand)] shadow-lg">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-[var(--color-deepbrown)] hover:text-[var(--color-terracotta)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
