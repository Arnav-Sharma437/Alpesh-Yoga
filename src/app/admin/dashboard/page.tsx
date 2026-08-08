"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Trash2, MapPin, Calendar, Clock, RefreshCw, Settings } from "lucide-react";

export default function AdminDashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        router.push("/admin");
        return;
      }

      const res = await fetch("/admin-api.php?action=get_leads", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await res.json();
      
      if (data.success) {
        setLeads(data.leads || []);
      } else {
        if (res.status === 401) {
          localStorage.removeItem("admin_token");
          router.push("/admin");
        } else {
          setError(data.error || "Failed to fetch leads");
        }
      }
    } catch (err) {
      setError("Failed to connect to backend");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this application lead?")) return;
    
    try {
      const token = localStorage.getItem("admin_token");
      const res = await fetch(`/admin-api.php?action=delete_lead&id=${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      const data = await res.json();
      if (data.success) {
        setLeads(leads.filter(l => l.id !== id));
      } else {
        alert(data.error || "Failed to delete lead");
      }
    } catch (err) {
      alert("Failed to delete lead");
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
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="font-serif text-2xl font-normal text-charcoal-900">Admissions Dashboard</h1>
            <span className="bg-olive-100 text-olive-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Admin
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.push("/admin/images")}
              className="p-2 text-charcoal-500 hover:bg-sand-100 rounded-full transition-colors flex items-center gap-2 px-4 font-semibold"
              title="Image Manager"
            >
              Images
            </button>
            <button 
              onClick={() => router.push("/admin/settings")}
              className="p-2 text-charcoal-500 hover:bg-sand-100 rounded-full transition-colors flex items-center gap-2 px-4 font-semibold"
              title="Settings"
            >
              <Settings className="w-5 h-5" /> Settings
            </button>
            <button 
              onClick={fetchLeads}
              className="p-2 text-charcoal-500 hover:bg-sand-100 rounded-full transition-colors"
              title="Refresh"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
            {error}
          </div>
        )}

        <div className="bg-white rounded-[24px] border border-sand-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-sand-200 flex justify-between items-center bg-sand-50/50">
            <h2 className="text-lg font-semibold text-charcoal-900">Recent Applications ({leads.length})</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead>
                <tr className="bg-sand-50 border-b border-sand-200 text-charcoal-500 text-xs uppercase tracking-wider font-semibold">
                  <th className="p-4 w-12">#</th>
                  <th className="p-4">Applicant</th>
                  <th className="p-4">Program & Location</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Background</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200">
                {loading && leads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-charcoal-500">
                      Loading leads...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-charcoal-500">
                      No applications found.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead, idx) => (
                    <tr key={lead.id} className="hover:bg-sand-50/50 transition-colors">
                      <td className="p-4 text-sm text-charcoal-400 font-mono">
                        {lead.id}
                      </td>
                      
                      <td className="p-4">
                        <div className="font-semibold text-charcoal-900 text-base">{lead.full_name || 'N/A'}</div>
                        <div className="text-sm text-charcoal-500 mt-1 flex items-center gap-1">
                          {lead.age} y/o • {lead.gender} • {lead.nationality}
                        </div>
                        <div className="text-xs text-charcoal-400 mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(lead.created_at).toLocaleString()}
                        </div>
                      </td>
                      
                      <td className="p-4">
                        <div className="inline-flex items-center gap-1 bg-saffron-50 text-saffron-700 px-2 py-1 rounded text-xs font-bold uppercase mb-2">
                          <MapPin className="w-3 h-3" /> {lead.location}
                        </div>
                        <div className="font-semibold text-charcoal-800 text-sm">
                          {lead.program}
                        </div>
                        <div className="text-xs text-charcoal-500 mt-1 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {lead.batch}
                        </div>
                      </td>
                      
                      <td className="p-4">
                        <div className="text-sm text-charcoal-800">
                          <span className="font-medium">E:</span> {lead.email}
                        </div>
                        <div className="text-sm text-charcoal-800 mt-1">
                          <span className="font-medium">P:</span> {lead.phone}
                        </div>
                        <div className="text-sm text-charcoal-800 mt-1">
                          <span className="font-medium">W:</span> {lead.whatsapp}
                        </div>
                      </td>

                      <td className="p-4">
                        <div className="text-xs text-charcoal-600 mb-1">
                          <span className="font-semibold">Practice:</span> {lead.practice_duration || 'None'}
                        </div>
                        <div className="text-xs text-charcoal-600 mb-1">
                          <span className="font-semibold">Injuries:</span> {lead.has_injuries === 'yes' ? (lead.injury_details || 'Yes') : 'No'}
                        </div>
                        <div className="text-xs text-charcoal-600 truncate max-w-[200px]" title={lead.why_join}>
                          <span className="font-semibold">Why:</span> {lead.why_join}
                        </div>
                      </td>

                      <td className="p-4 text-right">
                        <button 
                          onClick={() => handleDelete(lead.id)}
                          className="p-2 text-red-500 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors inline-flex items-center justify-center"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
