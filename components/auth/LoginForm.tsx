"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm({ onToggleForm }: { onToggleForm: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid email or password");
      }

      router.refresh(); // Refresh to trigger the server component to read the cookie
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 shadow-sm max-w-lg mx-auto w-full">
      <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-6 text-center">Sign In</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        {error && <div className="text-red-500 text-sm text-center bg-red-50 p-2">{error}</div>}
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 border border-[var(--color-sand)] bg-white w-full focus:outline-none focus:border-[var(--color-terracotta)]" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-3 border border-[var(--color-sand)] bg-white w-full focus:outline-none focus:border-[var(--color-terracotta)]" 
        />
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 text-[var(--color-deepbrown)] cursor-pointer">
            <input type="checkbox" className="accent-[var(--color-terracotta)]" />
            Remember me
          </label>
          <a href="#" className="text-[var(--color-terracotta)] hover:underline">Forgot password?</a>
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="mt-4 bg-[var(--color-terracotta)] text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors disabled:opacity-70"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
      <div className="mt-8 text-center border-t border-[var(--color-sand)] pt-6">
        <p className="text-[var(--color-deepbrown)] mb-4 text-sm">Don't have an account?</p>
        <button 
          type="button" 
          onClick={onToggleForm}
          className="w-full border border-[var(--color-deepbrown)] text-[var(--color-deepbrown)] px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] hover:text-white transition-colors"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
