export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="py-16 text-center bg-[var(--color-sand)]">
        <h1 className="font-serif text-4xl text-[var(--color-deepbrown)]">Get in Touch</h1>
      </section>
      <section className="py-12 max-w-5xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl text-[var(--color-deepbrown)] mb-6">Our Location</h2>
            <div className="mb-8">
              <h3 className="font-serif text-xl text-[var(--color-terracotta)] mb-2">Zanta Adedye Store</h3>
              <p className="text-[var(--color-deepbrown)] mb-1">Nairobi, Kenya</p>
            </div>
            <p className="text-[var(--color-deepbrown)]/80 text-sm">
              We look forward to welcoming you to our store. For any specific inquiries, please feel free to drop us a message using the form.
            </p>
          </div>
          <form className="flex flex-col gap-4 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-4">Send a Message</h2>
            <input type="text" placeholder="Name" className="p-3 border border-[var(--color-sand)] bg-white w-full focus:outline-none focus:border-[var(--color-terracotta)]" />
            <input type="email" placeholder="Email" className="p-3 border border-[var(--color-sand)] bg-white w-full focus:outline-none focus:border-[var(--color-terracotta)]" />
            <textarea placeholder="Message" rows={5} className="p-3 border border-[var(--color-sand)] bg-white w-full focus:outline-none focus:border-[var(--color-terracotta)]"></textarea>
            <button type="submit" className="bg-[var(--color-terracotta)] text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
