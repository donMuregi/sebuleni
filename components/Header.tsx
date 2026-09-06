"use client";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useCart } from "@/components/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { cartCount, lastAddedItem, clearLastAdded } = useCart();
  
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (lastAddedItem) {
      const timer = setTimeout(() => {
        clearLastAdded();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem, clearLastAdded]);

  let logoSrc = "/logos/11.png";
  let logoAlt = "Sebuleni";
  let logoScaleClass = "scale-100";
  
  if (pathname.startsWith("/conversations")) {
    logoSrc = "/logos/12.png";
    logoAlt = "Sebuleni Conversations";
    logoScaleClass = "scale-100";
  } else if (pathname.startsWith("/shop")) {
    logoSrc = "/logos/sebuleni-duka.png";
    logoAlt = "Sebuleni Duka";
    logoScaleClass = "scale-100";
  } else if (pathname.startsWith("/styledrop")) {
    logoSrc = "/logos/styledrop.png";
    logoAlt = "StyleDrop";
    logoScaleClass = "scale-100";
  } else if (pathname.startsWith("/trendyb")) {
    logoSrc = "/logos/trendyb-logo.png";
    logoAlt = "TrendyB";
    logoScaleClass = "scale-100";
  }

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-[var(--color-deepbrown)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="flex items-center">
            <Image src={logoSrc} alt={logoAlt} width={300} height={100} className={`h-16 sm:h-24 w-auto object-contain ${logoScaleClass}`} priority />
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

        <div className="flex items-center gap-4 sm:gap-5 text-[var(--color-deepbrown)]">
          <button 
            aria-label="Search" 
            onClick={() => setIsSearchOpen(!isSearchOpen)} 
            className="hover:text-[var(--color-terracotta)] transition-colors p-1"
          >
            {isSearchOpen ? <X size={24} /> : <Search size={24} />}
          </button>
          <Link href="/wishlist" aria-label="Wishlist" className="hidden sm:block hover:text-[var(--color-terracotta)] transition-colors p-1">
            <Heart size={24} />
          </Link>
          <div className="relative">
            <Link href="/cart" aria-label="Cart" className="block relative p-2.5 bg-[var(--color-terracotta)] text-[var(--color-cream)] rounded-full hover:bg-[var(--color-deepbrown)] transition-colors shadow-sm">
              <ShoppingCart size={22} />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-deepbrown)] text-[10px] font-bold text-white shadow-sm border border-[var(--color-cream)]">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Added to cart toast */}
            {mounted && lastAddedItem && (
              <div className="absolute top-full right-0 mt-3 w-56 bg-white shadow-xl border border-[var(--color-sand)] p-3 z-50 animate-in fade-in slide-in-from-top-2 rounded-lg pointer-events-none">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                    <ShoppingCart size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-[var(--color-terracotta)] mb-0.5 uppercase tracking-wide">Added to Cart</p>
                    <p className="text-sm font-serif text-[var(--color-deepbrown)] truncate">{lastAddedItem.name}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/account" aria-label="Account" className="hidden sm:flex p-2.5 bg-[var(--color-terracotta)] text-[var(--color-cream)] rounded-full hover:bg-[var(--color-deepbrown)] transition-colors shadow-sm">
            <User size={22} />
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
