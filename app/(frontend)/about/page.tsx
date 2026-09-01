import Link from "next/link";
export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center bg-[var(--color-deepbrown)]">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white z-20">Our Story</h1>
      </section>
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl text-[var(--color-deepbrown)] mb-6">What is Sebuleni?</h2>
            <p className="text-[var(--color-deepbrown)]/80 text-lg">Curated. Connected. Collective. A lifestyle space where stories, souls and fashion meet.</p>
          </div>
          <div className="aspect-square bg-[var(--color-sand)] flex items-center justify-center text-[var(--color-deepbrown)]/40 font-serif">
            [Portrait Image]
          </div>
        </div>
      </section>
      <section className="py-24 bg-[var(--color-terracotta)] text-white text-center">
        <h2 className="font-serif text-3xl md:text-4xl max-w-4xl mx-auto leading-relaxed">&quot;Come as you are. Leave seen, styled, and inspired.&quot;</h2>
      </section>
    </div>
  );
}
