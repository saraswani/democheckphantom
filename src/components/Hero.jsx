import React, { useState } from 'react';
import { ArrowRight, ChevronRight, UserCheck, Sparkles, BookOpen, Play, HardDrive, MessageSquare, Folder } from 'lucide-react';

export default function Hero({ onRequestDemo, onOpenSandbox }) {
  const [activeDot, setActiveDot] = useState(null);

  // Classroom student dots data
  const gridDots = Array.from({ length: 90 }, (_, index) => {
    const isSpecial = [14, 27, 33, 42, 58, 63, 71, 84].includes(index);
    let insight = null;
    if (index === 14) insight = { name: 'Elena V.', topic: 'Chain Rule Scaffolding', status: 'Mastery 96% — Recommended Peer Lead' };
    if (index === 27) insight = { name: 'Marcus C.', topic: 'Negative Exponents', status: 'Needs 5-min prerequisite refresher' };
    if (index === 33) insight = { name: 'Sophia R.', topic: 'Implicit Differentiation', status: 'Adapted speed +15% based on history' };
    if (index === 42) insight = { name: 'Devon K.', topic: 'Logarithmic Functions', status: 'Misconception diagnosed in step 3' };
    if (index === 58) insight = { name: 'Amara L.', topic: 'Integration by Parts', status: 'Mastered concept 2 days ahead of schedule' };
    if (index === 63) insight = { name: 'Lucas T.', topic: 'Limits at Infinity', status: 'Active chatbot dialogue: Graph asymptote' };
    if (index === 71) insight = { name: 'Maya P.', topic: 'Trig Identities', status: 'Paced practice session in progress' };
    if (index === 84) insight = { name: 'Jason B.', topic: 'Matrix Inverse', status: 'Auto-generated diagnostic MCQ sent' };

    return { id: index, isSpecial, insight };
  });

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F2ED] border border-[#E8E5DF] text-xs font-mono tracking-widest text-[#6B6B68] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#CC785C] animate-pulse"></span>
              Real-Time Adaptive AI Learning Platform
            </div>

            {/* Headline - 9 words */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-serif font-normal leading-[1.06] tracking-tight text-[#191919]">
              Every student gets a tutor. <br className="hidden sm:inline" />
              Every teacher sees everything.
            </h1>

            {/* Subhead sentence */}
            <p className="text-lg sm:text-[20px] text-[#6B6B68] leading-relaxed max-w-2xl font-normal">
              Learnova adapts course material to each student's complete academic history while giving teachers real-time visibility into classroom progress.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Instant Demo */}
              <button
                onClick={onOpenSandbox}
                className="px-6 py-3.5 bg-[#CC785C] hover:bg-[#B5654A] text-white font-medium text-[15px] rounded-lg transition-all shadow-xs flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Try Live Demo (Instant Access)</span>
              </button>

              {/* Secondary Request Demo */}
              <button
                onClick={onRequestDemo}
                className="px-6 py-3.5 bg-transparent hover:bg-[#F4F2ED] text-[#191919] font-medium text-[15px] rounded-lg border border-[#E8E5DF] transition-all flex items-center gap-1.5"
              >
                <span>Schedule District Demo</span>
                <ChevronRight className="w-4 h-4 text-[#6B6B68]" />
              </button>
            </div>

            {/* Integrations Fast-Pills */}
            <div className="pt-6 border-t border-[#E8E5DF] space-y-3">
              <span className="text-xs font-mono text-[#6B6B68] uppercase tracking-wider block">
                Seamless 2-Click Integrations Included:
              </span>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#191919]">
                <span className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E8E5DF] flex items-center gap-2 font-medium">
                  <BookOpen className="w-3.5 h-3.5 text-[#0F9D58]" />
                  Google Classroom
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E8E5DF] flex items-center gap-2 font-medium">
                  <HardDrive className="w-3.5 h-3.5 text-[#4285F4]" />
                  Google Drive
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E8E5DF] flex items-center gap-2 font-medium">
                  <MessageSquare className="w-3.5 h-3.5 text-[#6264A7]" />
                  Microsoft Teams
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E8E5DF] flex items-center gap-2 font-medium">
                  <Folder className="w-3.5 h-3.5 text-[#0078D4]" />
                  Microsoft OneDrive
                </span>
              </div>
            </div>

          </div>

          {/* Right Abstract Grid visual */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl p-6 sm:p-8 shadow-xs relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8E5DF]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6B6B68]">
                  <BookOpen className="w-3.5 h-3.5 text-[#CC785C]" />
                  <span>Classroom Roster Map — 35 Students</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-sm bg-[#F4F2ED] text-[#6B6B68]">
                  Live Focus
                </span>
              </div>

              {/* Interactive Dot Grid */}
              <div className="grid grid-cols-10 gap-2.5 sm:gap-3 py-2">
                {gridDots.map((dot) => (
                  <div
                    key={dot.id}
                    onMouseEnter={() => dot.isSpecial && setActiveDot(dot)}
                    onMouseLeave={() => setActiveDot(null)}
                    onClick={() => dot.isSpecial && setActiveDot(activeDot?.id === dot.id ? null : dot)}
                    className="relative group cursor-pointer flex items-center justify-center p-1"
                  >
                    <div
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all duration-200 ${
                        dot.isSpecial
                          ? 'bg-[#CC785C] shadow-xs ring-4 ring-[#CC785C]/15 scale-110 group-hover:scale-125'
                          : 'bg-[#E8E5DF] group-hover:bg-[#6B6B68]/30'
                      }`}
                    />
                    {dot.isSpecial && (
                      <span className="absolute inset-0 rounded-full bg-[#CC785C]/30 animate-ping opacity-75"></span>
                    )}
                  </div>
                ))}
              </div>

              {/* Micro legend */}
              <div className="mt-4 pt-3 border-t border-[#E8E5DF] flex items-center justify-between text-xs text-[#6B6B68]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8E5DF]"></span>
                  <span>Self-Paced Practice</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#CC785C]"></span>
                  <span>Active AI Tutor Intervention</span>
                </div>
              </div>

              {/* Hover Tooltip / Detail Card */}
              {activeDot ? (
                <div className="mt-4 p-3.5 bg-[#FAF9F7] border border-[#CC785C]/40 rounded-lg text-xs animate-fade-in-rise shadow-xs">
                  <div className="flex items-center justify-between text-[#191919] font-medium mb-1">
                    <span className="font-semibold text-[#CC785C] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {activeDot.insight.name}
                    </span>
                    <span className="font-mono text-[11px] text-[#6B6B68]">{activeDot.insight.topic}</span>
                  </div>
                  <p className="text-[#6B6B68] text-[12px]">{activeDot.insight.status}</p>
                </div>
              ) : (
                <div className="mt-4 p-3 bg-[#F4F2ED]/60 border border-[#E8E5DF] rounded-lg text-xs text-[#6B6B68] flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-[#CC785C] shrink-0" />
                  <span>Hover over terracotta nodes to view real-time student diagnostic insights.</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
