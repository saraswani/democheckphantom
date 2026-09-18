import React from 'react';

export default function Testimonial() {
  return (
    <section className="py-28 border-t border-[#E8E5DF] bg-[#FAF9F7] w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-[#FFFFFF] border border-[#E8E5DF] rounded-2xl p-10 sm:p-16 shadow-xs relative overflow-hidden">
          {/* Subtle accent border top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#CC785C]"></div>

          <div className="max-w-4xl space-y-8">
            <div className="text-xs font-mono tracking-widest text-[#6B6B68] uppercase">
              Teacher Perspective
            </div>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#191919] font-normal leading-[1.25] tracking-tight">
              "For the first time in eleven years of teaching AP Calculus, I know before second period starts which five students need help with the chain rule—and who can tutor them."
            </blockquote>

            <div className="pt-6 border-t border-[#E8E5DF] flex items-center justify-between">
              <div>
                <div className="font-semibold text-[#191919] text-lg font-sans">
                  Dr. Sarah Jenkins
                </div>
                <div className="text-sm text-[#6B6B68] font-sans">
                  Chair of Mathematics, Oakridge High School
                </div>
              </div>

              <div className="hidden sm:block text-xs font-mono text-[#6B6B68] bg-[#FAF9F7] px-3.5 py-1.5 rounded-lg border border-[#E8E5DF]">
                AP Calculus AB & BC
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
