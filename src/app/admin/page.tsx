"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("admin_token")) {
      router.push("/admin/dashboard");
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/admin-api.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", password }),
      });
      
      const data = await res.json();
      
      if (data.success && data.token) {
        localStorage.setItem("admin_token", data.token);
        router.push("/admin/dashboard");
      } else {
        setError(data.error || "Invalid password");
      }
    } catch (err) {
      setError("Failed to connect to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-sand-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md border border-sand-200">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-normal text-charcoal-900">Admin Login</h1>
          <p className="mt-2 text-sm text-charcoal-500">Enter your password to access leads.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-charcoal-800 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-sand-200 bg-sand-50 p-4 text-charcoal-900 focus:border-olive-500 focus:outline-none focus:ring-1 focus:ring-olive-500"
              required
            />
          </div>

          {error && <div className="text-red-500 text-sm font-medium">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-olive-700 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-olive-800 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
