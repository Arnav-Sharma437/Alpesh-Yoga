"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CheckCircle2, AlertCircle, Calendar, Send, HelpCircle, PhoneCall } from "lucide-react";
import { locationsConfig } from "@/config/locations";

const COUNTRY_CODES = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA / Canada" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+34", country: "Spain" },
  { code: "+972", country: "Israel" },
  { code: "+31", country: "Netherlands" },
  { code: "+41", country: "Switzerland" },
  { code: "+39", country: "Italy" },
  { code: "+7", country: "Russia" },
  { code: "+81", country: "Japan" },
  { code: "+65", country: "Singapore" },
];

function ApplyFormContent() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    location: "",
    program: "",
    batch: "",
    fullName: "",
    gender: "",
    dob: "",
    age: "",
    nationality: "",
    address: "",
    phoneCode: "+91",
    phoneNumber: "",
    whatsappCode: "+91",
    whatsappNumber: "",
    whatsappSame: false,
    email: "",
    occupation: "",
    practiceDuration: "",
    hasHathaAlignment: "",
    hasPhilosophy: "",
    hasTeaching: "",
    teachingDetails: "",
    hasInjuries: "",
    injuryDetails: "",
    whyJoin: "",
    howHeard: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [step, setStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prefill location and program choice from query params
  useEffect(() => {
    const locParam = searchParams.get("location");
    if (locParam) {
      const lower = locParam.toLowerCase();
      if (lower.includes("dharamshala")) {
        setFormData((prev) => ({ ...prev, location: "dharamshala" }));
      } else if (lower.includes("goa")) {
        setFormData((prev) => ({ ...prev, location: "goa" }));
      }
    }

    const programParam = searchParams.get("program");
    if (programParam) {
      let mapped = programParam;
      const lower = programParam.toLowerCase();
      if (lower.includes("8-day") || lower.includes("intensive")) {
        mapped = "8-Day Intensive Alignment Course";
      } else if (lower.includes("100-hour") || lower.includes("100h")) {
        mapped = "100-Hour TTC";
      } else if (lower.includes("200-hour") || lower.includes("200h")) {
        mapped = "200-Hour YTTC";
      } else if (lower.includes("therapeutic") || lower.includes("therapy")) {
        mapped = "Therapeutic Yoga Program";
      } else if (lower.includes("daily") || lower.includes("drop-in")) {
        mapped = "Daily Drop-In Classes (Enquiry only)";
      }
      setFormData((prev) => ({ ...prev, program: mapped }));
    }
  }, [searchParams]);

  // Sync WhatsApp number if checkbox is checked
  useEffect(() => {
    if (formData.whatsappSame) {
      setFormData((prev) => ({
        ...prev,
        whatsappCode: prev.phoneCode,
        whatsappNumber: prev.phoneNumber,
      }));
    }
  }, [formData.whatsappSame, formData.phoneCode, formData.phoneNumber]);

  // Handle Date of Birth change and calculate Age
  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dob = e.target.value;
    setFormData((prev) => {
      const updated = { ...prev, dob };
      if (dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          calculatedAge--;
        }
        updated.age = calculatedAge > 0 ? calculatedAge.toString() : "";
      } else {
        updated.age = "";
      }
      return updated;
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));

    // Clear inline error if field becomes valid
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateStep = (stepNumber: number) => {
    const newErrors: Record<string, string> = {};

    if (stepNumber === 1) {
      if (!formData.location) newErrors.location = "Please select a preferred location";
      if (!formData.program) newErrors.program = "Please select a program";
      if (!formData.batch) newErrors.batch = "Please select a batch start date";
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.gender) newErrors.gender = "Please select your gender";
      if (!formData.dob) newErrors.dob = "Date of birth is required";
      if (!formData.age) newErrors.age = "Age is required";
      if (!formData.nationality.trim()) newErrors.nationality = "Nationality is required";
      if (!formData.address.trim()) newErrors.address = "Full address is required";
    }

    if (stepNumber === 2) {
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = "Phone number is required";
      } else if (!/^\d{7,15}$/.test(formData.phoneNumber.trim())) {
        newErrors.phoneNumber = "Please enter a valid phone number (digits only, 7-15 characters)";
      }

      if (!formData.whatsappSame && !formData.whatsappNumber.trim()) {
        newErrors.whatsappNumber = "WhatsApp number is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email address is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }

      if (!formData.occupation.trim()) newErrors.occupation = "Occupation details required";
      if (!formData.practiceDuration.trim()) newErrors.practiceDuration = "Please specify practice duration";
      if (!formData.hasHathaAlignment) newErrors.hasHathaAlignment = "This field is required";
      if (!formData.hasPhilosophy) newErrors.hasPhilosophy = "This field is required";
      
      if (!formData.hasTeaching) {
        newErrors.hasTeaching = "This field is required";
      } else if (formData.hasTeaching === "Yes" && !formData.teachingDetails.trim()) {
        newErrors.teachingDetails = "Please specify details of your teaching experience";
      }
    }

    if (stepNumber === 3) {
      if (!formData.hasInjuries) {
        newErrors.hasInjuries = "This field is required";
      } else if (formData.hasInjuries === "Yes" && !formData.injuryDetails.trim()) {
        newErrors.injuryDetails = "Please specify details of your injuries or health conditions";
      }
      if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
      // Wait for layout update then scroll
      setTimeout(() => {
        const formHeader = document.getElementById("apply-form-header");
        if (formHeader) {
          formHeader.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  const handleBackStep = () => {
    setStep((prev) => prev - 1);
    setTimeout(() => {
      const formHeader = document.getElementById("apply-form-header");
      if (formHeader) {
        formHeader.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.location) newErrors.location = "Please select a preferred location";
    if (!formData.program) newErrors.program = "Please select a program";
    if (!formData.batch) newErrors.batch = "Please select a batch start date";
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.gender) newErrors.gender = "Please select your gender";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.nationality.trim()) newErrors.nationality = "Nationality is required";
    if (!formData.address.trim()) newErrors.address = "Full address is required";
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{7,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Please enter a valid phone number (digits only, 7-15 characters)";
    }

    if (!formData.whatsappSame && !formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.occupation.trim()) newErrors.occupation = "Occupation details required";
    if (!formData.practiceDuration.trim()) newErrors.practiceDuration = "Please specify practice duration";
    if (!formData.hasHathaAlignment) newErrors.hasHathaAlignment = "This field is required";
    if (!formData.hasPhilosophy) newErrors.hasPhilosophy = "This field is required";
    
    if (!formData.hasTeaching) {
      newErrors.hasTeaching = "This field is required";
    } else if (formData.hasTeaching === "Yes" && !formData.teachingDetails.trim()) {
      newErrors.teachingDetails = "Please specify details of your teaching experience";
    }

    if (!formData.hasInjuries) {
      newErrors.hasInjuries = "This field is required";
    } else if (formData.hasInjuries === "Yes" && !formData.injuryDetails.trim()) {
      newErrors.injuryDetails = "Please specify details of your injuries or health conditions";
    }

    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      // Scroll to the first error
      const firstErrorKey = Object.keys(errors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitSuccess(true);
      } else {
        setErrors((prev) => ({
          ...prev,
          submit: result.error || "Failed to process application. Please try again.",
        }));
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setErrors((prev) => ({
        ...prev,
        submit: "Network error. Please check your internet connection and try again.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prefilled WhatsApp link based on form choices
  const getWhatsAppDirectLink = () => {
    const text = `Hi Alpesh, I just submitted my application for the ${formData.program} starting on ${formData.batch}. My name is ${formData.fullName}.`;
    return `https://wa.me/917719878500?text=${encodeURIComponent(text)}`;
  };

  if (submitSuccess) {
    return (
      <>
        {/* Mobile Fullscreen Success Overlay (below 768px) */}
        <div className="md:hidden fixed inset-0 z-50 bg-forest-950 flex items-center justify-center p-6 text-center text-cream-50 animate-in fade-in duration-300">
          <div className="max-w-md w-full bg-forest-900 border border-forest-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 animate-in zoom-in-95 duration-300 flex flex-col justify-between min-h-[65vh]">
            <div className="space-y-6 flex-grow flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center shadow-lg border border-emerald-500/30 animate-pulse">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <div className="space-y-3">
                <h2 className="font-serif text-2xl font-bold text-white">Application Submitted!</h2>
                <p className="font-sans text-xs sm:text-sm text-cream-200/80 leading-relaxed max-w-xs mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. We have received your application for the <strong>{formData.program}</strong> ({formData.batch}).
                </p>
                <p className="font-sans text-[10px] text-[#F7941D] font-bold uppercase tracking-widest pt-2">
                  Responding on WhatsApp within 24 hours
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-6 border-t border-forest-850">
              <p className="font-sans text-[11px] text-cream-200/40 leading-relaxed">
                Ping our Lead Teacher directly on WhatsApp to secure confirmation.
              </p>
              <a
                href={getWhatsAppDirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-tr from-[#E07D0E] to-[#F7941D] hover:from-[#F7941D] hover:to-[#e63037] text-white font-sans text-xs font-bold shadow-lg active:scale-95 transition-all"
              >
                <span>Instant Confirmation on WhatsApp</span>
              </a>
              <a 
                href="/"
                className="block font-sans text-xs text-cream-200/60 hover:text-white underline pt-1"
              >
                Return to Homepage
              </a>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Card Success (768px and above) */}
        <div className="hidden md:block max-w-2xl mx-auto py-16 px-6 text-center space-y-8 bg-white border border-sage-100 rounded-3xl shadow-xl">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          
          <div className="space-y-3">
            <h2 className="font-serif text-3xl font-bold text-forest-600">Application Submitted!</h2>
            <p className="font-sans text-sm text-forest-600/70 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. We have received your application for the <strong>{formData.program}</strong> ({formData.batch}).
            </p>
            <p className="font-sans text-xs text-sage-600">
              We will review your application details and contact you on WhatsApp within 24 hours.
            </p>
          </div>

          <div className="p-6 bg-sage-50 rounded-2xl max-w-md mx-auto border border-sage-100/50 space-y-4">
            <div className="flex items-start gap-3 text-left">
              <HelpCircle className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" />
              <p className="font-sans text-xs text-forest-600/80 leading-relaxed">
                <strong>Want a faster response?</strong> Ping our lead teacher directly on WhatsApp with your name to expedite your booking confirmation.
              </p>
            </div>
            
            <a
              href={getWhatsAppDirectLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-forest-600 hover:bg-forest-700 text-cream-50 font-sans text-sm font-bold shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>Chat on WhatsApp Now</span>
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <div id="apply-form-header" className="max-w-3xl mx-auto bg-white border border-sage-100 rounded-3xl shadow-xl overflow-hidden">
      
      {/* Header Banner */}
      <div className="bg-forest-600 px-4 py-6 sm:px-8 sm:py-8 text-cream-50 text-center relative border-b border-forest-700">
        <h2 className="font-serif text-xl sm:text-2xl font-bold">Alpesh Yoga Enrollment Form</h2>
        <p className="font-sans text-xs text-cream-200/80 mt-1">Please fill in the form carefully. Fields marked with <span className="text-red-500 font-bold">*</span> are required.</p>
      </div>

      {isMobile && (
        <div className="px-6 py-4 space-y-2 border-b border-sage-100 bg-cream-50/40">
          <div className="flex justify-between items-center text-xs font-semibold text-forest-750">
            <span>Step {step} of 3</span>
            <span className="text-[#F7941D] font-bold uppercase tracking-wider">
              {step === 1 ? "Program & Personal" : step === 2 ? "Contact & Background" : "Health & Confirm"}
            </span>
          </div>
          <div className="w-full bg-sage-200 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-[#F7941D] h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-6 text-sm font-sans text-forest-600">
        
        {(!isMobile || step === 1) && (
          <>
            {/* SECTION 1: Program details */}
            <div className="space-y-4">
          <h3 className="font-serif text-lg font-bold text-forest-700 border-b border-sage-50 pb-2">1. Program Selection</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Preferred Location */}
            <div className="space-y-1.5">
              <label className="font-semibold block">Preferred Location <span className="text-red-500">*</span></label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                  errors.location ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                }`}
              >
                <option value="">-- Select Location --</option>
                <option value="dharamshala">Dharamshala (Upper Bhagsu)</option>
                <option value="goa">Goa (Coastal Shala)</option>
              </select>
              {errors.location && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.location}</span>}
            </div>

            {/* Program selection dropdown */}
            <div className="space-y-1.5">
              <label className="font-semibold block">Select Course / Program <span className="text-red-500">*</span></label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                  errors.program ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                }`}
              >
                <option value="">-- Select Option --</option>
                <option value="200-Hour YTTC">200-Hour Yoga Teacher Training Course (YTTC)</option>
                <option value="100-Hour TTC">100-Hour Yoga Teacher Training Course (TTC)</option>
                <option value="8-Day Intensive Alignment Course">8-Day Intensive Alignment Course</option>
                <option value="Therapeutic Yoga Program">Therapeutic Yoga Program (Private Therapy)</option>
                <option value="Daily Drop-In Classes (Enquiry only)">Daily Drop-In Classes (Enquiry only)</option>
              </select>
              {errors.program && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.program}</span>}
            </div>

            {/* Batch Selection */}
            <div className="space-y-1.5">
              <label className="font-semibold block">Preferred Start Date / Batch <span className="text-red-500">*</span></label>
              <select
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                disabled={!formData.location}
                className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all disabled:opacity-50 ${
                  errors.batch ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                }`}
              >
                <option value="">
                  {formData.location ? "-- Select Start Date --" : "-- Select Location First --"}
                </option>
                {formData.location &&
                  (locationsConfig[formData.location]?.batches || []).map((date) => (
                    <option key={date} value={date}>{date}</option>
                  ))
                }
              </select>
              {errors.batch && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.batch}</span>}
            </div>
          </div>
        </div>

        {/* SECTION 2: Personal information */}
        <div className="space-y-4 pt-4 border-t border-sage-50">
          <h3 className="font-serif text-lg font-bold text-forest-700 border-b border-sage-50 pb-2">2. Personal Information</h3>
          
          <div className="space-y-1.5">
            <label className="font-semibold block">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your first and last name"
              className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                errors.fullName ? "border-red-500" : "border-sage-200 hover:border-sage-300"
              }`}
            />
            {errors.fullName && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.fullName}</span>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Gender */}
            <div className="space-y-1.5">
              <label className="font-semibold block">Gender <span className="text-red-500">*</span></label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                  errors.gender ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                }`}
              >
                <option value="">-- Select --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              {errors.gender && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.gender}</span>}
            </div>

            {/* DOB */}
            <div className="space-y-1.5">
              <label className="font-semibold block">Date of Birth <span className="text-red-500">*</span></label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleDobChange}
                className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                  errors.dob ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                }`}
              />
              {errors.dob && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.dob}</span>}
            </div>

            {/* Age (Auto-calculated) */}
            <div className="space-y-1.5">
              <label className="font-semibold block">Age <span className="text-red-500">*</span></label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Auto-calculated"
                className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                  errors.age ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                }`}
              />
              {errors.age && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.age}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nationality */}
            <div className="space-y-1.5">
              <label className="font-semibold block">Nationality / Country <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="e.g. German, French, Indian"
                className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                  errors.nationality ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                }`}
              />
              {errors.nationality && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.nationality}</span>}
            </div>

            {/* Present Occupation */}
            <div className="space-y-1.5">
              <label className="font-semibold block">Present Occupation <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="e.g. Student, Therapist, Engineer"
                className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                  errors.occupation ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                }`}
              />
              {errors.occupation && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.occupation}</span>}
            </div>
          </div>

          {/* Full Address */}
          <div className="space-y-1.5">
            <label className="font-semibold block">Full Residential Address <span className="text-red-500">*</span></label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              placeholder="Enter your complete home country address"
              className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                errors.address ? "border-red-500" : "border-sage-200 hover:border-sage-300"
              }`}
            ></textarea>
            {errors.address && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.address}</span>}
          </div>
        </div>
      </>
    )}

        {(!isMobile || step === 2) && (
          <>
            {/* SECTION 3: Contact details */}
            <div className="space-y-4 pt-4 border-t border-sage-50">
          <h3 className="font-serif text-lg font-bold text-forest-700 border-b border-sage-50 pb-2">3. Contact Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="font-semibold block">Phone / Mobile Number <span className="text-red-500">*</span></label>
              <div className="flex gap-2">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="p-3 rounded-xl border border-sage-200 bg-cream-50/20 focus:outline-none w-28 shrink-0"
                >
                  {COUNTRY_CODES.map((item) => (
                    <option key={item.code} value={item.code}>{item.code} ({item.country.slice(0,4)})</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Number"
                  className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                    errors.phoneNumber ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                  }`}
                />
              </div>
              {errors.phoneNumber && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.phoneNumber}</span>}
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="font-semibold block">Email Address <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="yourname@example.com"
                className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                  errors.email ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                }`}
              />
              {errors.email && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</span>}
            </div>
          </div>

          {/* WhatsApp Same Checkbox */}
          <div className="flex items-center gap-2 bg-cream-50 p-3.5 rounded-xl border border-sage-50 max-w-fit">
            <input
              type="checkbox"
              name="whatsappSame"
              id="whatsappSame"
              checked={formData.whatsappSame}
              onChange={handleChange}
              className="w-4 h-4 text-terracotta-600 focus:ring-terracotta-500 border-sage-300 rounded"
            />
            <label htmlFor="whatsappSame" className="font-medium text-xs text-forest-700 cursor-pointer select-none">
              WhatsApp number is the same as Phone number
            </label>
          </div>

          {/* WhatsApp number field (renders if not same) */}
          {!formData.whatsappSame && (
            <div className="space-y-1.5 max-w-md animate-in fade-in duration-200">
              <label className="font-semibold block">WhatsApp Number <span className="text-red-500">*</span></label>
              <div className="flex gap-2">
                <select
                  name="whatsappCode"
                  value={formData.whatsappCode}
                  onChange={handleChange}
                  className="p-3 rounded-xl border border-sage-200 bg-cream-50/20 w-28 shrink-0 focus:outline-none"
                >
                  {COUNTRY_CODES.map((item) => (
                    <option key={item.code} value={item.code}>{item.code} ({item.country.slice(0,4)})</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  placeholder="WhatsApp Number"
                  className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                    errors.whatsappNumber ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                  }`}
                />
              </div>
              {errors.whatsappNumber && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.whatsappNumber}</span>}
            </div>
          )}
        </div>

        {/* SECTION 4: Practice Experience */}
        <div className="space-y-4 pt-4 border-t border-sage-50">
          <h3 className="font-serif text-lg font-bold text-forest-700 border-b border-sage-50 pb-2">4. Practice & Background</h3>
          
          {/* Practice Duration */}
          <div className="space-y-1.5">
            <label className="font-semibold block">How long have you been practicing yoga? <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="practiceDuration"
              value={formData.practiceDuration}
              onChange={handleChange}
              placeholder="e.g. 6 months, 2 years, self-practice"
              className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all ${
                errors.practiceDuration ? "border-red-500" : "border-sage-200 hover:border-sage-300"
              }`}
            />
            {errors.practiceDuration && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.practiceDuration}</span>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hatha alignment check */}
            <div className="space-y-2">
              <label className="font-semibold block">Have you practiced Hatha alignment-based yoga before? <span className="text-red-500">*</span></label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer font-medium text-xs">
                  <input
                    type="radio"
                    name="hasHathaAlignment"
                    value="Yes"
                    checked={formData.hasHathaAlignment === "Yes"}
                    onChange={handleChange}
                    className="w-4 h-4 text-terracotta-600 focus:ring-terracotta-500 border-sage-300"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-medium text-xs">
                  <input
                    type="radio"
                    name="hasHathaAlignment"
                    value="No"
                    checked={formData.hasHathaAlignment === "No"}
                    onChange={handleChange}
                    className="w-4 h-4 text-terracotta-600 focus:ring-terracotta-500 border-sage-300"
                  />
                  No
                </label>
              </div>
              {errors.hasHathaAlignment && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.hasHathaAlignment}</span>}
            </div>

            {/* Philosophy check */}
            <div className="space-y-2">
              <label className="font-semibold block">Are you familiar with yoga philosophy / Yoga Sutras? <span className="text-red-500">*</span></label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer font-medium text-xs">
                  <input
                    type="radio"
                    name="hasPhilosophy"
                    value="Yes"
                    checked={formData.hasPhilosophy === "Yes"}
                    onChange={handleChange}
                    className="w-4 h-4 text-terracotta-600 focus:ring-terracotta-500 border-sage-300"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-medium text-xs">
                  <input
                    type="radio"
                    name="hasPhilosophy"
                    value="No"
                    checked={formData.hasPhilosophy === "No"}
                    onChange={handleChange}
                    className="w-4 h-4 text-terracotta-600 focus:ring-terracotta-500 border-sage-300"
                  />
                  No
                </label>
              </div>
              {errors.hasPhilosophy && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.hasPhilosophy}</span>}
            </div>
          </div>

          {/* Teaching experience check */}
          <div className="space-y-3">
            <label className="font-semibold block">Do you have any previous yoga teaching experience? <span className="text-red-500">*</span></label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer font-medium text-xs">
                <input
                  type="radio"
                  name="hasTeaching"
                  value="Yes"
                  checked={formData.hasTeaching === "Yes"}
                  onChange={handleChange}
                  className="w-4 h-4 text-terracotta-600 focus:ring-terracotta-500 border-sage-300"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer font-medium text-xs">
                <input
                  type="radio"
                  name="hasTeaching"
                  value="No"
                  checked={formData.hasTeaching === "No"}
                  onChange={handleChange}
                  className="w-4 h-4 text-terracotta-600 focus:ring-terracotta-500 border-sage-300"
                />
                No
              </label>
            </div>
            {errors.hasTeaching && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.hasTeaching}</span>}
            
            {formData.hasTeaching === "Yes" && (
              <textarea
                name="teachingDetails"
                value={formData.teachingDetails}
                onChange={handleChange}
                rows={2}
                placeholder="Please describe your teaching experience briefly"
                className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all animate-in slide-in-from-top-2 duration-200 ${
                  errors.teachingDetails ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                }`}
              ></textarea>
            )}
            {errors.teachingDetails && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.teachingDetails}</span>}
          </div>
        </div>
      </>
    )}

        {(!isMobile || step === 3) && (
          <>
            {/* SECTION 5: Health conditions */}
            <div className="space-y-4 pt-4 border-t border-sage-50">
          <h3 className="font-serif text-lg font-bold text-forest-700 border-b border-sage-50 pb-2">5. Health & Intentions</h3>
          
          {/* Injury check */}
          <div className="space-y-3">
            <label className="font-semibold block">Do you have any injuries, surgeries, or medical conditions? <span className="text-red-500">*</span></label>
            <p className="text-[11px] text-sage-600 -mt-1 leading-normal">This is highly important for alignment classes. We will prepare custom props to accommodate your body.</p>
            
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer font-medium text-xs">
                <input
                  type="radio"
                  name="hasInjuries"
                  value="Yes"
                  checked={formData.hasInjuries === "Yes"}
                  onChange={handleChange}
                  className="w-4 h-4 text-terracotta-600 focus:ring-terracotta-500 border-sage-300"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer font-medium text-xs">
                <input
                  type="radio"
                  name="hasInjuries"
                  value="No"
                  checked={formData.hasInjuries === "No"}
                  onChange={handleChange}
                  className="w-4 h-4 text-terracotta-600 focus:ring-terracotta-500 border-sage-300"
                />
                No
              </label>
            </div>
            {errors.hasInjuries && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.hasInjuries}</span>}
            
            {formData.hasInjuries === "Yes" && (
              <textarea
                name="injuryDetails"
                value={formData.injuryDetails}
                onChange={handleChange}
                rows={3}
                placeholder="e.g. Scoliosis, lower back pain, knee ligament injury, high blood pressure"
                className={`w-full p-3 rounded-xl border bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all animate-in slide-in-from-top-2 duration-200 ${
                  errors.injuryDetails ? "border-red-500" : "border-sage-200 hover:border-sage-300"
                }`}
              ></textarea>
            )}
            {errors.injuryDetails && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.injuryDetails}</span>}
          </div>

          {/* Why join */}
          <div className="space-y-1.5">
            <label className="font-semibold block">Why do you want to join this course? <span className="text-forest-600/50 font-normal">(Optional)</span></label>
            <textarea
              name="whyJoin"
              value={formData.whyJoin}
              onChange={handleChange}
              rows={3}
              placeholder="What are your goals or therapeutic needs from this intensive alignment study?"
              className="w-full p-3 rounded-xl border border-sage-200 hover:border-sage-300 bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all"
            ></textarea>
          </div>

          {/* How heard */}
          <div className="space-y-1.5 max-w-md">
            <label className="font-semibold block">How did you hear about Alpesh Yoga?</label>
            <select
              name="howHeard"
              value={formData.howHeard}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-sage-200 hover:border-sage-300 bg-cream-50/20 focus:ring-1 focus:ring-terracotta-500 focus:outline-none transition-all"
            >
              <option value="">-- Select Option --</option>
              <option value="Instagram">Instagram</option>
              <option value="YouTube">YouTube</option>
              <option value="Google Search">Google Search</option>
              <option value="Friend Referral">Friend Referral</option>
              <option value="Walked In">Walked In</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* SECTION 6: Terms & Agreement */}
        <div className="space-y-4 pt-6 border-t border-sage-100/60">
          
          <div className="flex items-start gap-2.5">
            <input
              type="checkbox"
              name="agreeTerms"
              id="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="w-4.5 h-4.5 text-terracotta-600 focus:ring-terracotta-500 border-sage-300 rounded mt-0.5"
            />
            <label htmlFor="agreeTerms" className="font-medium text-xs leading-relaxed text-forest-700 cursor-pointer select-none">
              I have read and agree to the <a href="/#philosophy" className="text-terracotta-600 hover:underline">Terms and Conditions</a>, including course deposit non-refundability rules. I understand that alignment classes require discipline, effort, and prop work. <span className="text-red-500 font-bold">*</span>
            </label>
          </div>
          {errors.agreeTerms && <span className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.agreeTerms}</span>}

          {errors.submit && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-start gap-2 animate-in fade-in duration-200">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span className="text-xs font-semibold">{errors.submit}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            {isMobile ? (
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBackStep}
                  className="w-1/3 py-4 rounded-full border border-sage-200 bg-cream-50 text-forest-750 font-sans text-xs font-semibold active:scale-95 transition-transform"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-grow py-4 px-6 rounded-full bg-[#F7941D] hover:bg-[#E07D0E] text-cream-50 font-sans text-xs font-bold shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 disabled:bg-sage-300 disabled:shadow-none"
                >
                  {isSubmitting ? "Processing..." : "Submit Application"}
                </button>
              </div>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-full bg-[#F7941D] hover:bg-[#E07D0E] text-cream-50 font-sans text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 disabled:bg-sage-300 disabled:shadow-none disabled:-translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 fill-current" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            )}
          </div>

        </div>
      </>
    )}

    {/* Step Navigation for Step 1 & 2 (mobile only) */}
    {isMobile && step < 3 && (
      <div className="flex gap-4 pt-6">
        {step > 1 && (
          <button
            type="button"
            onClick={handleBackStep}
            className="w-1/3 py-4 rounded-full border border-sage-200 bg-cream-50 text-forest-750 font-sans text-xs font-semibold active:scale-95 transition-transform"
          >
            Back
          </button>
        )}
        <button
          type="button"
          onClick={handleNextStep}
          className="flex-grow py-4 rounded-full bg-[#F7941D] hover:bg-[#E07D0E] text-white font-sans text-xs font-bold shadow-md active:scale-95 transition-transform"
        >
          Next Step
        </button>
      </div>
    )}

      </form>
    </div>
  );
}

export default function ApplyForm() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-20">
        
        {/* Page Hero */}
        <section className="relative py-16 bg-forest-700 text-cream-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200')`,
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-3">
            <nav className="text-xs uppercase tracking-widest text-cream-200/60 flex items-center justify-center gap-2 mb-2 font-sans font-medium">
              <a href="/" className="hover:text-cream-100 hover:underline">Home</a>
              <span>/</span>
              <span className="text-cream-50">Apply</span>
            </nav>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Course Application Form
            </h1>
            <p className="font-sans text-sm text-cream-100/90 max-w-md mx-auto font-light leading-relaxed">
              Apply for our Yoga Alliance Certified Teacher Training or Intensive Programs.
            </p>
          </div>
        </section>

        {/* Form Container Wrapper */}
        <section className="py-20 bg-cream-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={
              <div className="max-w-md mx-auto text-center py-20 font-sans text-sm text-forest-600/70">
                Loading Application Form...
              </div>
            }>
              <ApplyFormContent />
            </Suspense>
          </div>
        </section>

        {/* Location Help / Contact Callout */}
        <section className="py-12 bg-white border-t border-sage-100/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-forest-600 text-sm">
              <div className="space-y-3">
                <h4 className="font-serif text-base font-bold text-forest-700">Need help completing the form?</h4>
                <p className="font-sans text-xs sm:text-sm text-forest-600/70 leading-relaxed font-light">
                  If you encounter issues during registration or want to confirm dates manually, please call or WhatsApp our admin office directly. We are happy to walk you through the options.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <a
                  href="https://wa.me/919736463605?text=Hello%20Alpesh%20Yoga,%20I%20have%20questions%20about%20filling%20out%20the%20registration%20form."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-cream-50 hover:bg-sage-100 text-forest-700 border border-sage-200 font-sans text-xs font-semibold shadow-sm transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Office (+91 97364 63605)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}

