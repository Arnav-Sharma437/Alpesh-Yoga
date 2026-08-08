"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut, ArrowLeft, Image as ImageIcon, Upload, Trash2, RefreshCw } from "lucide-react";

export default function AdminImages() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploadingHeroDesktop, setUploadingHeroDesktop] = useState(false);
  const [uploadingHeroMobile, setUploadingHeroMobile] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [timestamp, setTimestamp] = useState("");
  const router = useRouter();

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/admin-api.php?action=list_gallery");
      const data = await res.json();
      if (data.success) {
        setImages(data.images || []);
      }
    } catch (err) {
      console.error("Failed to load images");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimestamp(`?v=${Date.now()}`);
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin");
      return;
    }
    fetchImages();
  }, [router]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: string, customFilename?: string) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    if (customFilename) {
      formData.append("filename", customFilename);
    }

    if (type === 'desktop') setUploadingHeroDesktop(true);
    else if (type === 'mobile') setUploadingHeroMobile(true);
    else setUploadingGallery(true);

    try {
      const token = localStorage.getItem("admin_token");
      const res = await fetch("/admin-api.php?action=upload_image", {
        method: "POST",
        headers: { "Authorization": `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        alert("Upload successful!");
        setTimestamp(`?v=${Date.now()}`);
        fetchImages();
      } else {
        alert("Upload failed: " + data.error);
      }
    } catch (err) {
      alert("Error uploading image");
    } finally {
      if (type === 'desktop') setUploadingHeroDesktop(false);
      else if (type === 'mobile') setUploadingHeroMobile(false);
      else setUploadingGallery(false);
      e.target.value = '';
    }
  };

  const handleDelete = async (path: string) => {
    if (!confirm("Are you sure you want to delete this image? This cannot be undone.")) return;
    
    try {
      const token = localStorage.getItem("admin_token");
      const res = await fetch(`/admin-api.php?action=delete_image&path=${encodeURIComponent(path)}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setImages(images.filter(img => img !== path));
      } else {
        alert("Failed to delete: " + data.error);
      }
    } catch (err) {
      alert("Error deleting image");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin");
  };

  const galleryImages = images.filter(img => !img.includes('hero-desktop.jpg') && !img.includes('hero-mobile.jpg'));

  return (
    <div className="min-h-screen bg-sand-50 font-sans pb-24">
      <header className="bg-white border-b border-sand-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.push("/admin/dashboard")}
              className="p-2 text-charcoal-500 hover:bg-sand-100 rounded-full transition-colors"
              title="Back to Dashboard"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="font-serif text-2xl font-normal text-charcoal-900">Image Manager</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={fetchImages}
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

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Homepage Hero Images */}
        <div className="bg-white rounded-[24px] border border-sand-200 shadow-sm overflow-hidden p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-olive-50 text-olive-600 p-3 rounded-xl">
              <ImageIcon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-serif text-charcoal-900">Homepage Hero Banner</h2>
              <p className="text-sm text-charcoal-500 mt-1">Replace the main background images on the homepage.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Desktop Hero */}
            <div className="border border-sand-200 rounded-xl p-5 bg-sand-50/30 flex flex-col items-center">
              <h3 className="font-semibold text-charcoal-900 mb-4">Desktop Banner</h3>
              <div className="w-full aspect-[21/9] bg-charcoal-100 rounded-lg overflow-hidden relative mb-4">
                <img src={`/gallery/hero-desktop.jpg${timestamp}`} alt="Desktop Hero" className="w-full h-full object-cover" />
              </div>
              <label className="relative cursor-pointer bg-olive-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-olive-800 transition-colors w-full text-center">
                {uploadingHeroDesktop ? "Uploading..." : "Replace Desktop Banner"}
                <input 
                  type="file" 
                  accept="image/jpeg, image/png, image/webp" 
                  className="hidden" 
                  disabled={uploadingHeroDesktop}
                  onChange={(e) => handleUpload(e, 'desktop', 'hero-desktop.jpg')} 
                />
              </label>
              <p className="text-xs text-charcoal-500 mt-3 text-center">Recommended: 1920x1080px (Landscape)</p>
            </div>

            {/* Mobile Hero */}
            <div className="border border-sand-200 rounded-xl p-5 bg-sand-50/30 flex flex-col items-center">
              <h3 className="font-semibold text-charcoal-900 mb-4">Mobile Banner</h3>
              <div className="w-[180px] aspect-[9/16] bg-charcoal-100 rounded-lg overflow-hidden relative mb-4">
                <img src={`/gallery/hero-mobile.jpg${timestamp}`} alt="Mobile Hero" className="w-full h-full object-cover" />
              </div>
              <label className="relative cursor-pointer bg-olive-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-olive-800 transition-colors w-full max-w-[280px] text-center">
                {uploadingHeroMobile ? "Uploading..." : "Replace Mobile Banner"}
                <input 
                  type="file" 
                  accept="image/jpeg, image/png, image/webp" 
                  className="hidden" 
                  disabled={uploadingHeroMobile}
                  onChange={(e) => handleUpload(e, 'mobile', 'hero-mobile.jpg')} 
                />
              </label>
              <p className="text-xs text-charcoal-500 mt-3 text-center">Recommended: 1080x1920px (Portrait)</p>
            </div>
          </div>
        </div>

        {/* Gallery Images */}
        <div className="bg-white rounded-[24px] border border-sand-200 shadow-sm overflow-hidden p-8">
          <div className="flex items-center justify-between mb-8 border-b border-sand-200 pb-6">
            <div>
              <h2 className="text-xl font-serif text-charcoal-900">Gallery Page Images</h2>
              <p className="text-sm text-charcoal-500 mt-1">Add or remove images displayed on the Photo Gallery page ({galleryImages.length} images).</p>
            </div>
            <label className="cursor-pointer bg-charcoal-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-charcoal-800 transition-colors flex items-center gap-2">
              <Upload className="w-4 h-4" />
              {uploadingGallery ? "Uploading..." : "Add New Image"}
              <input 
                type="file" 
                accept="image/jpeg, image/png, image/webp" 
                className="hidden" 
                disabled={uploadingGallery}
                onChange={(e) => handleUpload(e, 'gallery')} 
              />
            </label>
          </div>

          {loading ? (
            <div className="text-center py-12 text-charcoal-500">Loading gallery...</div>
          ) : galleryImages.length === 0 ? (
            <div className="text-center py-12 text-charcoal-500 border border-dashed border-sand-300 rounded-xl">
              No gallery images found.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {galleryImages.map((src, idx) => (
                <div key={idx} className="group relative aspect-square bg-charcoal-100 rounded-xl overflow-hidden border border-sand-200 shadow-sm">
                  <img src={`${src}${timestamp}`} className="w-full h-full object-cover" alt="Gallery" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => handleDelete(src)}
                      className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors transform translate-y-4 group-hover:translate-y-0"
                      title="Delete Image"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
