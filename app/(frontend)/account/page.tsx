export default function Account() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      <section className="py-16 text-center bg-[var(--color-sand)]">
        <h1 className="font-serif text-4xl text-[var(--color-deepbrown)]">My Account</h1>
      </section>
      <section className="py-16 max-w-lg mx-auto px-4 w-full">
        <div className="bg-white p-8 shadow-sm">
          <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-6 text-center">Sign In</h2>
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email Address" className="p-3 border border-[var(--color-sand)] bg-white w-full focus:outline-none focus:border-[var(--color-terracotta)]" />
            <input type="password" placeholder="Password" className="p-3 border border-[var(--color-sand)] bg-white w-full focus:outline-none focus:border-[var(--color-terracotta)]" />
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-[var(--color-deepbrown)] cursor-pointer">
                <input type="checkbox" className="accent-[var(--color-terracotta)]" />
                Remember me
              </label>
              <a href="#" className="text-[var(--color-terracotta)] hover:underline">Forgot password?</a>
            </div>
            <button type="button" className="mt-4 bg-[var(--color-deepbrown)] text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-terracotta)] transition-colors">
              Sign In
            </button>
          </form>
          <div className="mt-8 text-center border-t border-[var(--color-sand)] pt-6">
            <p className="text-[var(--color-deepbrown)] mb-4 text-sm">Don't have an account?</p>
            <button type="button" className="w-full border border-[var(--color-deepbrown)] text-[var(--color-deepbrown)] px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] hover:text-white transition-colors">
              Create Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
