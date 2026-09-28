export default function BrandStudio() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="bg-[var(--color-sand)] py-20 text-center px-4">
        <h1 className="font-serif text-5xl text-[var(--color-deepbrown)] mb-6">Sebuleni Brand Studio</h1>
        <p className="text-lg text-[var(--color-deepbrown)]/80 max-w-3xl mx-auto">
          Personal branding and business services tailored to help you stand out. Let us tell your story with intention and elegance.
        </p>
      </section>
      <section className="py-20 px-4 text-center flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-[var(--color-deepbrown)]/70 italic font-serif">
            Our creative services menu will be available here soon. Stay tuned.
          </p>
        </div>
      </section>
    </div>
  );
}
