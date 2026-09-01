import Link from "next/link";
export default function TrendyB() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="relative h-[60vh] flex flex-col items-center justify-center bg-[var(--color-deepbrown)] text-white text-center">
        <h1 className="font-serif text-5xl font-bold mb-4">TrendyB Fashion House</h1>
        <p className="font-sans text-xl italic">Bold Looks. Kenyan Roots. (Est. 2014)</p>
      </section>
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl text-[var(--color-deepbrown)] mb-6">Modern Corporate Elegance</h2>
        <p className="text-[var(--color-deepbrown)]/80 text-lg mb-8">African-Inspired Detailing, Personal Power Dressing.</p>
        <Link href="/shop" className="bg-[var(--color-terracotta)] text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors inline-block">Shop the Collection</Link>
      </section>
    </div>
  );
}
