import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Play, Sparkles } from 'lucide-react';

export default function DemoModal({ isOpen, onClose, onOpenSandbox }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    role: 'Teacher',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#191919]/50 backdrop-blur-xs animate-fade-in-rise">
      <div className="bg-[#FFFFFF] border border-[#E8E5DF] rounded-2xl w-full max-w-lg overflow-hidden shadow-xl relative font-sans">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6B6B68] hover:text-[#191919] hover:bg-[#FAF9F7] rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="p-8 space-y-6">
            {/* Top Quick Action Banner: 0 Registration Sandbox */}
            <div className="p-4 bg-[#F7ECE8] border border-[#CC785C]/30 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#CC785C] uppercase tracking-wider font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Instant Access Option
                </span>
                <span className="text-[10px] font-mono bg-[#CC785C] text-white px-2 py-0.5 rounded-sm">0 Reg</span>
              </div>
              <p className="text-xs text-[#191919]">
                Want to test Learnova immediately without registering? Try our live browser sandbox right now.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenSandbox();
                }}
                className="w-full py-2 bg-[#CC785C] hover:bg-[#B5654A] text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Launch Live Sandbox Instantly</span>
              </button>
            </div>

            <div className="relative text-center">
              <span className="bg-[#FFFFFF] px-3 text-[11px] font-mono text-[#6B6B68] uppercase">
                Or Schedule District Guided Demo
              </span>
              <div className="absolute inset-0 top-1.5 -z-10 border-t border-[#E8E5DF]"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-[#191919] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F7] border border-[#E8E5DF] rounded-lg text-sm text-[#191919] focus:outline-hidden focus:ring-2 focus:ring-[#CC785C]"
                />
              </div>

              <div>
                <label className="block font-medium text-[#191919] mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="sarah.jenkins@oakridge.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F7] border border-[#E8E5DF] rounded-lg text-sm text-[#191919] focus:outline-hidden focus:ring-2 focus:ring-[#CC785C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-[#191919] mb-1">School / District</label>
                  <input
                    type="text"
                    required
                    placeholder="Oakridge High School"
                    value={formData.school}
                    onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F7] border border-[#E8E5DF] rounded-lg text-sm text-[#191919] focus:outline-hidden focus:ring-2 focus:ring-[#CC785C]"
                  />
                </div>
                <div>
                  <label className="block font-medium text-[#191919] mb-1">Your Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F7] border border-[#E8E5DF] rounded-lg text-sm text-[#191919] focus:outline-hidden focus:ring-2 focus:ring-[#CC785C]"
                  >
                    <option value="Teacher">Classroom Teacher</option>
                    <option value="Department Chair">Department Chair</option>
                    <option value="School Principal">School Principal</option>
                    <option value="District Administrator">District Administrator</option>
                    <option value="Tech Coordinator">IT / EdTech Coordinator</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#191919] hover:bg-[#333333] text-white font-medium text-xs rounded-lg transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Submit Guided Demo Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#F7ECE8] text-[#CC785C] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif text-[#191919]">Request Received</h3>
            <p className="text-sm text-[#6B6B68] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#191919]">{formData.name}</span>. An educational specialist will contact you at <span className="font-mono text-[#191919]">{formData.email}</span> within 1 business day.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-[#191919] text-white font-medium text-xs rounded-lg hover:bg-[#333333] transition-colors"
            >
              Back to Learnova
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
