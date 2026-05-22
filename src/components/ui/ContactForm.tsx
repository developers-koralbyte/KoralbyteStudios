import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { handleFirestoreError, OperationType } from '../../lib/firebase-errors';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    socials: "",
    service: "",
    message: ""
  });

  const sanitizeInput = (str: string) => {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      website: sanitizeInput(formData.website),
      phone: sanitizeInput(formData.phone),
      socials: sanitizeInput(formData.socials),
      service: sanitizeInput(formData.service),
      message: sanitizeInput(formData.message),
      createdAt: serverTimestamp()
    };
    
    try {
      setError(null);
      await addDoc(collection(db, 'inquiries'), sanitizedData);
      setSubmitted(true);
      setFormData({ name: "", email: "", website: "", phone: "", socials: "", service: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setError("Failed to send message. Please try again.");
      try {
        handleFirestoreError(error, OperationType.CREATE, 'inquiries');
      } catch (e) {}
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {error && (
        <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono text-center">
          {error}
        </div>
      )}

      {submitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="border border-bauble-blue/50 bg-bauble-blue/5 p-8 md:p-16 text-center space-y-8 relative overflow-hidden backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-bauble-blue/5 animate-pulse" />
          <CheckCircle2 className="w-16 h-16 text-bauble-blue mx-auto relative z-10" />
          <div className="space-y-4 relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Message Received</h2>
            <p className="text-white font-sans text-sm md:text-lg leading-relaxed max-w-md mx-auto">
              Our strategy team will review it and get back to you within 24 hours.
            </p>
          </div>
          <button 
            onClick={() => setSubmitted(false)}
            className="relative z-10 mt-8 px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold bg-[#111111] text-[#fcfcfc] hover:bg-bauble-blue hover:text-white transition-all duration-500"
          >
            Send Another
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 bg-black border border-white/40 p-6 md:p-10 hover:border-bauble-blue/20 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-[10px] tracking-[0.2em] font-bold text-white/80 uppercase">Name</label>
              <input 
                required
                maxLength={100}
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black border border-white/30 px-4 py-3 text-white font-mono text-sm focus:border-bauble-blue focus:outline-none transition-colors placeholder:text-white/20"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">Email</label>
              <input 
                required
                maxLength={150}
                type="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-bauble-blue focus:outline-none transition-colors placeholder:text-white/20"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">Website URL (Optional)</label>
              <input 
                type="url"
                maxLength={200}
                value={formData.website}
                onChange={e => setFormData({...formData, website: e.target.value})}
                className="w-full bg-black border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-bauble-blue focus:outline-none transition-colors placeholder:text-white/20"
                placeholder="https://yourbrand.com"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">Phone Number (Optional)</label>
              <input 
                type="tel"
                maxLength={50}
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-black border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-bauble-blue focus:outline-none transition-colors placeholder:text-white/20"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">Social Media (Optional)</label>
            <input 
              type="text"
              maxLength={200}
              value={formData.socials}
              onChange={e => setFormData({...formData, socials: e.target.value})}
              className="w-full bg-black border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-bauble-blue focus:outline-none transition-colors placeholder:text-white/20"
              placeholder="@yourbrand"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">Service Required</label>
            <div className="relative">
              <select 
                required
                value={formData.service}
                onChange={e => setFormData({...formData, service: e.target.value})}
                className="w-full bg-bauble-bg border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-bauble-blue focus:outline-none transition-colors appearance-none"
              >
                <option value="" disabled>Select a service...</option>
                <option value="Launchpad">The Launchpad</option>
                <option value="Identity Builder">The Identity Builder</option>
                <option value="Strategy Accelerator">The Strategy Accelerator</option>
                <option value="Growth Engine">The Growth Engine</option>
                <option value="Brand Voice">The Brand Voice</option>
                <option value="Creative Engine">The Creative Engine</option>
                <option value="Complete Brand Launch">The Complete Brand Launch System</option>
                <option value="Other">Other Inquiry</option>
              </select>
              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-white/50 font-mono text-xs">▼</div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">Inquiry</label>
            <textarea 
              required
              maxLength={2000}
              rows={4}
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              className="w-full bg-black border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-bauble-blue focus:outline-none transition-colors resize-none placeholder:text-white/20"
              placeholder="Tell us about your next project..."
            />
          </div>

          <button type="submit" disabled={loading} className="group w-full flex justify-center items-center gap-3 bg-bauble-blue px-6 py-4 text-[11px] font-bold tracking-[0.2em] text-[#fcfcfc] hover:bg-[#111111] hover:text-[#fcfcfc] transition-all duration-300 disabled:opacity-50 border border-transparent hover:border-bauble-blue/50">
            {loading ? "SENDING..." : "SEND MESSAGE"} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
}
