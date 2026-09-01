export default function StyleDrop() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="relative h-[50vh] flex flex-col items-center justify-center bg-[var(--color-deepbrown)] text-white text-center px-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Style is Personal.<br/>Let&apos;s Curate Yours.</h1>
      </section>
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl text-[var(--color-deepbrown)] mb-6">Our Services</h2>
        <p className="text-[var(--color-deepbrown)]/80 text-lg mb-8">Wardrobe makeovers, personal shopping, and styling tips.</p>
        <button className="bg-[var(--color-terracotta)] text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors">Get Styled by Drop (WhatsApp)</button>
      </section>
    </div>
  );
}
