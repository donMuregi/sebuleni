import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-deepbrown)] text-[var(--color-cream)] py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-serif text-2xl font-bold mb-4">Sebuleni</h2>
            <p className="font-serif italic text-lg opacity-80">Curated. Connected. Collective.</p>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wide mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2 opacity-80">
              <li><Link href="/about" className="hover:text-[var(--color-terracotta)] transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-terracotta)] transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-terracotta)] transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-terracotta)] transition-colors">Refunds & Returns</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-terracotta)] transition-colors">Shipping</Link></li>
              <li><Link href="#" className="hover:text-[var(--color-terracotta)] transition-colors">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wide mb-4">Explore</h3>
            <ul className="flex flex-col gap-2 opacity-80">
              <li><Link href="/conversations" className="hover:text-[var(--color-terracotta)] transition-colors">Conversations</Link></li>
              <li><Link href="/shop" className="hover:text-[var(--color-terracotta)] transition-colors">Sebuleni Duka</Link></li>
              <li><Link href="/trendyb" className="hover:text-[var(--color-terracotta)] transition-colors">TrendyB Fashion House</Link></li>
              <li><Link href="/styledrop" className="hover:text-[var(--color-terracotta)] transition-colors">StyleDrop</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold uppercase tracking-wide mb-4">Contact</h3>
            <ul className="flex flex-col gap-2 opacity-80 mb-6">
              <li>info@sebuleni.co.ke</li>
              <li>Nairobi, Kilimani</li>
              <li>+254 700 000 000</li>
            </ul>
            <h3 className="font-semibold uppercase tracking-wide mb-4">Newsletter</h3>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-[var(--color-cream)] text-[var(--color-deepbrown)] px-3 py-2 w-full focus:outline-none" />
              <button className="bg-[var(--color-terracotta)] text-white px-4 py-2 font-semibold uppercase text-sm tracking-wide hover:bg-opacity-90 transition-opacity">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
