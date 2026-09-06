"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/users/logout", {
      method: "POST",
    });
    router.refresh();
  };

  return (
    <button 
      onClick={handleLogout}
      className="bg-[var(--color-deepbrown)] text-white px-6 py-2 uppercase tracking-widest text-xs font-semibold hover:bg-[var(--color-terracotta)] transition-colors"
    >
      Sign Out
    </button>
  );
}
