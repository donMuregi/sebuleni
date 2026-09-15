import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="py-20 text-center bg-[var(--color-deepbrown)]">
        <h1 className="font-serif text-5xl text-white tracking-wide">Get in Touch</h1>
        <p className="text-white/80 mt-4 text-lg max-w-2xl mx-auto font-sans">
          We'd love to hear from you. Whether you have a question about our collections, events, or just want to connect, our doors and inbox are always open.
        </p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-serif text-4xl text-[var(--color-deepbrown)] mb-8">Reach Out</h2>
              
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-sand)] p-3 rounded-full text-[var(--color-terracotta)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[var(--color-deepbrown)] mb-1">Zanta Adedye Store</h3>
                    <p className="text-[var(--color-deepbrown)]/80 text-lg">Village Market, Nairobi, Kenya</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-sand)] p-3 rounded-full text-[var(--color-terracotta)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[var(--color-deepbrown)] mb-1">Email Us</h3>
                    <a href="mailto:sebuleni@sebuleni.co.ke" className="text-[var(--color-deepbrown)]/80 hover:text-[var(--color-terracotta)] transition-colors text-lg">
                      sebuleni@sebuleni.co.ke
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-sand)] p-3 rounded-full text-[var(--color-terracotta)]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[var(--color-deepbrown)] mb-1">Call Us</h3>
                    <a href="tel:+254700000000" className="text-[var(--color-deepbrown)]/80 hover:text-[var(--color-terracotta)] transition-colors text-lg">
                      [Your Phone Number]
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden shadow-sm mt-4">
              <iframe 
                src="https://maps.google.com/maps?q=Village%20Market,%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Sebuleni Location Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center">
            <form className="flex flex-col gap-6 bg-white p-10 rounded-2xl shadow-sm border border-[var(--color-sand)]">
              <h2 className="font-serif text-3xl text-[var(--color-deepbrown)] mb-2">Send a Message</h2>
              <p className="text-[var(--color-deepbrown)]/70 mb-4">
                Fill out the form below and our team will get back to you shortly.
              </p>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[var(--color-deepbrown)]/80 uppercase tracking-wide">Name</label>
                <input type="text" placeholder="Your Name" className="p-4 rounded-md border border-[var(--color-sand)] bg-white w-full focus:outline-none focus:border-[var(--color-terracotta)] focus:ring-1 focus:ring-[var(--color-terracotta)] transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[var(--color-deepbrown)]/80 uppercase tracking-wide">Email</label>
                <input type="email" placeholder="Your Email Address" className="p-4 rounded-md border border-[var(--color-sand)] bg-white w-full focus:outline-none focus:border-[var(--color-terracotta)] focus:ring-1 focus:ring-[var(--color-terracotta)] transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[var(--color-deepbrown)]/80 uppercase tracking-wide">Message</label>
                <textarea placeholder="How can we help you?" rows={6} className="p-4 rounded-md border border-[var(--color-sand)] bg-white w-full focus:outline-none focus:border-[var(--color-terracotta)] focus:ring-1 focus:ring-[var(--color-terracotta)] transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="mt-4 bg-[var(--color-terracotta)] text-white px-8 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] hover:shadow-md transition-all">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
