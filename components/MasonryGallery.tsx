export default function MasonryGallery({ images = [] }: { images?: string[] }) {
  const items = [
    { id: 1, aspect: 'aspect-[3/4]' },
    { id: 2, aspect: 'aspect-square' },
    { id: 3, aspect: 'aspect-[4/5]' },
    { id: 4, aspect: 'aspect-[3/4]' },
    { id: 5, aspect: 'aspect-square' },
    { id: 6, aspect: 'aspect-[3/4]' },
    { id: 7, aspect: 'aspect-[4/5]' },
    { id: 8, aspect: 'aspect-square' },
  ];

  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="font-serif text-4xl text-[var(--color-deepbrown)] mb-4">Sebuleni Moments</h2>
        <p className="text-[var(--color-deepbrown)]/70">A glimpse into our curated spaces.</p>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {items.map((item) => (
            <div key={item.id} className={`w-full ${item.aspect} bg-[var(--color-sand)] flex items-center justify-center font-serif text-[var(--color-deepbrown)]/40 break-inside-avoid overflow-hidden group rounded-sm relative shadow-sm hover:shadow-md transition-shadow cursor-pointer`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
              {images[item.id - 1] ? (
                <img src={images[item.id - 1]} alt={`Gallery ${item.id}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              ) : (
                <span className="group-hover:scale-110 transition-transform duration-500">[Gallery {item.id}]</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
