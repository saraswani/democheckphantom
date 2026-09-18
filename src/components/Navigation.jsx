import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Navigation({ onRequestDemo, onOpenSandbox }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Product', href: '#product' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Evolving Chatbot', href: '#chatbot-evolution' },
    { label: 'Adaptive MCQs', href: '#mcq-generator' },
    { label: 'Analytics', href: '#analytics' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF9F7]/95 backdrop-blur-md border-b border-[#E8E5DF] py-3.5 shadow-xs'
          : 'bg-[#FAF9F7]/70 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Wordmark Left */}
        <a href="#" className="flex items-center gap-2.5 group focus:outline-hidden rounded-sm">
          <span className="font-serif text-2xl font-bold tracking-tight text-[#191919] group-hover:text-[#CC785C] transition-colors">
            LEARNOVA
          </span>
          <span className="w-2 h-2 rounded-full bg-[#CC785C]"></span>
        </a>

        {/* Links Center (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#6B6B68]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#191919] transition-colors rounded-xs px-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons Right (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Instant Sandbox Button (0 Registration) */}
          <button
            onClick={onOpenSandbox}
            className="px-3.5 py-2 bg-[#F4F2ED] hover:bg-[#E8E5DF] text-[#191919] font-medium text-[13px] rounded-lg border border-[#E8E5DF] transition-all flex items-center gap-1.5 shadow-2xs"
          >
            <Play className="w-3.5 h-3.5 text-[#CC785C] fill-[#CC785C]" />
            <span>Try Live Sandbox</span>
          </button>

          {/* Request Demo Button */}
          <button
            onClick={onRequestDemo}
            className="px-4 py-2 bg-[#CC785C] hover:bg-[#B5654A] text-white font-medium text-[13px] rounded-lg transition-all duration-150 shadow-xs flex items-center gap-1.5"
          >
            <span>Request a demo</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
          className="lg:hidden p-2 text-[#191919] hover:bg-[#E8E5DF]/50 rounded-lg focus:outline-hidden"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F7] border-b border-[#E8E5DF] px-6 py-6 animate-fade-in-rise shadow-md">
          <div className="flex flex-col gap-4 text-base font-medium text-[#191919]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E8E5DF]/50 hover:text-[#CC785C] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSandbox();
                }}
                className="w-full py-3 bg-[#F4F2ED] text-[#191919] text-center font-medium rounded-lg border border-[#E8E5DF] flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-[#CC785C] fill-[#CC785C]" />
                <span>Try Live Sandbox (Instant)</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo();
                }}
                className="w-full py-3 bg-[#CC785C] text-white text-center font-medium rounded-lg shadow-xs hover:bg-[#B5654A] transition-colors"
              >
                Request a demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
