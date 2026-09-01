export default function Conversations() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="relative h-[50vh] flex items-center justify-center bg-[var(--color-deepbrown)] text-white text-center">
        <h1 className="font-serif text-5xl font-bold mb-4">Gather. Reflect. Connect.</h1>
        <p className="font-sans text-lg">Phone-free, themed, women-only gatherings.</p>
      </section>
      <section className="py-24 max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl text-[var(--color-deepbrown)] mb-6">Join the Next Conversation</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-3 border border-[var(--color-sand)] bg-white w-full" />
          <input type="email" placeholder="Email" className="p-3 border border-[var(--color-sand)] bg-white w-full" />
          <button className="bg-[var(--color-terracotta)] text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors">RSVP Now</button>
        </form>
      </section>
    </div>
  );
}
