import React, { useState } from 'react';
import { ArrowRight, Check, Play } from 'lucide-react';

export default function CtaSection({ onRequestDemo, onOpenSandbox }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        onRequestDemo();
      }, 800);
    }
  };

  return (
    <section className="py-28 border-t border-[#E8E5DF] bg-[#FAF9F7] w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-[#FFFFFF] border border-[#E8E5DF] rounded-2xl p-10 sm:p-16 text-left shadow-xs relative">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs font-mono tracking-widest text-[#6B6B68] uppercase">
              Deploy Learnova
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-normal text-[#191919] leading-tight">
              Bring real-time adaptive tutoring to your classroom today.
            </h2>

            <p className="text-base sm:text-lg text-[#6B6B68] leading-relaxed">
              Test Learnova instantly in your browser with zero registration, or schedule a custom guided demonstration for your district team.
            </p>

            {/* Dual CTA Options */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenSandbox}
                className="px-6 py-3.5 bg-[#CC785C] hover:bg-[#B5654A] text-white font-medium text-sm rounded-lg transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Try Instant Sandbox (0 Reg)</span>
              </button>

              <button
                onClick={onRequestDemo}
                className="px-6 py-3.5 bg-[#FAF9F7] hover:bg-[#F4F2ED] border border-[#E8E5DF] text-[#191919] font-medium text-sm rounded-lg transition-all flex items-center justify-center gap-1.5"
              >
                <span>Schedule District Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#6B6B68] pt-4 border-t border-[#E8E5DF]">
              <span>• FERPA & COPPA Compliant</span>
              <span>• Google Drive & Classroom 2-Click Sync</span>
              <span>• Microsoft Teams & OneDrive Connector</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
