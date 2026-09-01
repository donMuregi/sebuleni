export default function Branches() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="py-16 text-center bg-[var(--color-sand)]">
        <h1 className="font-serif text-4xl text-[var(--color-deepbrown)]">Our Locations</h1>
      </section>
      <section className="py-12 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-2">Zanta Adedye — Village Market</h2>
          <p className="text-[var(--color-deepbrown)]/70 mb-4">Flagship physical store</p>
          <div className="aspect-video bg-[var(--color-sand)] flex items-center justify-center font-serif text-[var(--color-deepbrown)]/40">[Gallery]</div>
        </div>
        <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-2">TrendyB Fashion House</h2>
          <p className="text-[var(--color-deepbrown)]/70 mb-4">Brand studio / showroom</p>
          <div className="aspect-video bg-[var(--color-sand)] flex items-center justify-center font-serif text-[var(--color-deepbrown)]/40">[Gallery]</div>
        </div>
      </section>
    </div>
  );
}
