import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E5DF] bg-[#FAF9F7] py-16 text-sm text-[#6B6B68] w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Wordmark & Tagline */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#191919]">
                LEARNOVA
              </span>
              <span className="w-2 h-2 rounded-full bg-[#CC785C]"></span>
            </a>
            <p className="text-xs text-[#6B6B68] leading-relaxed max-w-sm">
              Continuous adaptive tutoring, dynamic MCQ generation, and real-time classroom diagnostic intelligence integrated with Google & Microsoft ecosystems.
            </p>
            <div className="text-xs font-mono text-[#6B6B68]">
              © {new Date().getFullYear()} Learnova Inc. All rights reserved.
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#191919] uppercase tracking-wider font-semibold">
              Product Surface
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#product" className="hover:text-[#191919] transition-colors">Adaptive AI Tutor</a></li>
              <li><a href="#integrations" className="hover:text-[#191919] transition-colors">Google & Teams Sync</a></li>
              <li><a href="#chatbot-evolution" className="hover:text-[#191919] transition-colors">Evolving Persona</a></li>
              <li><a href="#mcq-generator" className="hover:text-[#191919] transition-colors">Adaptive MCQ Generator</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#191919] uppercase tracking-wider font-semibold">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#191919] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#191919] transition-colors">Research & Methodology</a></li>
              <li><a href="#" className="hover:text-[#191919] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#191919] transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Col 4 & 5: Legal & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[#191919] uppercase tracking-wider font-semibold">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#191919] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#191919] transition-colors">Student Data Security</a></li>
              <li><a href="#" className="hover:text-[#191919] transition-colors">FERPA Statement</a></li>
              <li><a href="mailto:contact@learnova.ai" className="hover:text-[#CC785C] transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
