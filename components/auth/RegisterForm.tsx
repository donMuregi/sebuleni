"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm({ onToggleForm }: { onToggleForm: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      // Create user
      const createRes = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!createRes.ok) {
        throw new Error("Failed to create account. User may already exist.");
      }

      // Automatically log them in
      const loginRes = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (loginRes.ok) {
        router.refresh();
      } else {
        // If auto-login fails, flip back to login screen
        onToggleForm();
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 shadow-sm max-w-lg mx-auto w-full">
      <h2 className="font-serif text-2xl text-[var(--color-deepbrown)] mb-6 text-center">Create Account</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
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
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="p-3 border border-[var(--color-sand)] bg-white w-full focus:outline-none focus:border-[var(--color-terracotta)]" 
        />
        <button 
          type="submit" 
          disabled={loading}
          className="mt-4 bg-[var(--color-terracotta)] text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] transition-colors disabled:opacity-70"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>
      <div className="mt-8 text-center border-t border-[var(--color-sand)] pt-6">
        <p className="text-[var(--color-deepbrown)] mb-4 text-sm">Already have an account?</p>
        <button 
          type="button" 
          onClick={onToggleForm}
          className="w-full border border-[var(--color-deepbrown)] text-[var(--color-deepbrown)] px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-[var(--color-deepbrown)] hover:text-white transition-colors"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
