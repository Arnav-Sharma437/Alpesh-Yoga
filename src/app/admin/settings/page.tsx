"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Save, ArrowLeft, Settings } from "lucide-react";

export default function AdminSettings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const [settings, setSettings] = useState({
    form_enabled: "true",
    notification_email: ""
  });

  useEffect(() => {
    const fetchSettings = async () => {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        router.push("/admin");
        return;
      }

      try {
        const res = await fetch("/admin-api.php?action=get_settings", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        const data = await res.json();
        if (data.success && data.settings) {
          setSettings(prev => ({ ...prev, ...data.settings }));
        }
      } catch (err) {
        console.error("Failed to load settings");
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, [router]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    
    try {
      const token = localStorage.getItem("admin_token");
      const res = await fetch("/admin-api.php?action=update_settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(settings)
      });
      
      const data = await res.json();
      if (data.success) {
        setMessage("Settings saved successfully!");
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("Error: " + (data.error || "Failed to save settings"));
      }
    } catch (err) {
      setMessage("Error connecting to backend");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-sand-50 font-sans pb-24">
      {/* Top Navbar */}
      <header className="bg-white border-b border-sand-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.push("/admin/dashboard")}
              className="p-2 text-charcoal-500 hover:bg-sand-100 rounded-full transition-colors"
              title="Back to Dashboard"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="font-serif text-2xl font-normal text-charcoal-900">Form Settings</h1>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="bg-white rounded-[24px] border border-sand-200 shadow-sm overflow-hidden p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-olive-50 text-olive-600 p-3 rounded-xl">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-serif text-charcoal-900">Application Form Configuration</h2>
              <p className="text-sm text-charcoal-500 mt-1">Manage how your website collects leads.</p>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-8 text-charcoal-500">Loading settings...</div>
          ) : (
            <form onSubmit={handleSave} className="space-y-8">
              
              <div className="space-y-4">
                <div className="border border-sand-200 rounded-xl p-5 bg-sand-50/30">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div>
                      <h3 className="font-semibold text-charcoal-900">Enable Application Form</h3>
                      <p className="text-sm text-charcoal-500 mt-1">If disabled, users will not be able to submit new applications.</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 rounded-full transition-colors ease-in-out duration-200" style={{ backgroundColor: settings.form_enabled === "true" ? '#4A5D23' : '#cbd5e1' }}>
                      <input 
                        type="checkbox"
                        className="opacity-0 w-0 h-0"
                        checked={settings.form_enabled === "true"}
                        onChange={(e) => setSettings({...settings, form_enabled: e.target.checked ? "true" : "false"})}
                      />
                      <span className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ease-in-out duration-200 ${settings.form_enabled === "true" ? 'transform translate-x-6' : ''}`} />
                    </div>
                  </label>
                </div>

                <div className="border border-sand-200 rounded-xl p-5 bg-sand-50/30">
                  <label className="block mb-2 font-semibold text-charcoal-900">Notification Email (Optional)</label>
                  <p className="text-sm text-charcoal-500 mb-4">Enter an email address to receive alerts when a new lead is submitted. (Requires PHP mail server configuration)</p>
                  <input
                    type="email"
                    value={settings.notification_email}
                    onChange={(e) => setSettings({...settings, notification_email: e.target.value})}
                    placeholder="e.g. alpeshyoga@gmail.com"
                    className="w-full rounded-lg border border-sand-200 p-3 text-charcoal-900 focus:outline-none focus:border-olive-500"
                  />
                </div>
              </div>

              {message && (
                <div className={`p-4 rounded-lg font-medium text-sm ${message.includes("Error") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
                  {message}
                </div>
              )}

              <div className="flex justify-end pt-4 border-t border-sand-200">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 bg-olive-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-olive-800 transition-colors disabled:opacity-50"
                >
                  <Save className="w-5 h-5" />
                  {saving ? "Saving..." : "Save Settings"}
                </button>
              </div>
            </form>
          )}
        </div>
        
        <div className="mt-8 p-6 bg-saffron-50 border border-saffron-200 rounded-2xl">
          <h3 className="font-serif text-lg text-charcoal-900 mb-2">Note about advanced settings</h3>
          <p className="text-sm text-charcoal-700 leading-relaxed">
            Because this website uses a highly optimized Static HTML architecture for maximum speed and SEO performance, complex settings like <strong>Course Dates and Pricing</strong> are built directly into the source code (`src/config/locations.ts`). To update dates or prices, please edit that file in your codebase and let the automatic GitHub Action rebuild your site.
          </p>
        </div>

      </main>
    </div>
  );
}
