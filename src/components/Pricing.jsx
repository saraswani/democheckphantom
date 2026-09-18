import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Pricing({ onRequestDemo, onOpenSandbox }) {
  const plans = [
    {
      name: 'Classroom Pilot',
      audience: 'Individual teachers',
      price: '$12',
      period: 'per student / year',
      description: 'Full AI tutoring chatbot continuity for up to 40 students in one classroom.',
      features: [
        'Real-time student diagnostic history',
        'Automated peer-pairing recommendations',
        'Teacher friction alerts',
        'Google Classroom & Drive ingestion',
      ],
      popular: false,
      cta: 'Try Instant Pilot Demo',
      isSandbox: true,
    },
    {
      name: 'School Department',
      audience: 'Math & STEM Departments',
      price: '$9',
      period: 'per student / year',
      description: 'Department-wide deployment with unified pacing standards and co-teacher access.',
      features: [
        'Everything in Classroom Pilot',
        'Department chair diagnostic dashboard',
        'Microsoft Teams & OneDrive connectors',
        'Adaptive MCQ question generator',
        'Dedicated onboarding session',
      ],
      popular: true,
      cta: 'Request Department Demo',
      isSandbox: false,
    },
    {
      name: 'District Partnership',
      audience: 'K-12 Districts & Charter Networks',
      price: 'Custom',
      period: 'volume license',
      description: 'Full administrative reporting, single sign-on, and enterprise compliance.',
      features: [
        'Everything in Department plan',
        'District-wide outcome tracking',
        'Clever & ClassLink SSO integration',
        'FERPA & COPPA legal guarantee',
        'Custom AI model fine-tuning',
      ],
      popular: false,
      cta: 'Contact District Team',
      isSandbox: false,
    },
  ];

  return (
    <section id="pricing" className="py-28 border-t border-[#E8E5DF] bg-[#FFFFFF] w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono tracking-widest text-[#6B6B68] uppercase">
            Predictable Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight">
            Simple per-student licensing. No surprise usage fees.
          </h2>
        </div>

        {/* 3 Pricing Cards - Edge to Edge */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-[#FAF9F7] border rounded-2xl p-8 sm:p-10 flex flex-col justify-between space-y-8 transition-all ${
                plan.popular
                  ? 'border-[#CC785C] ring-1 ring-[#CC785C] shadow-xs relative bg-[#FFFFFF]'
                  : 'border-[#E8E5DF] hover:border-[#CC785C]/40'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 px-3 py-0.5 bg-[#CC785C] text-white font-mono text-[10px] uppercase tracking-wider rounded-sm">
                  Most Selected
                </span>
              )}

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-[#6B6B68] uppercase">{plan.audience}</span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#191919] font-normal">{plan.name}</h3>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-serif font-semibold text-[#191919]">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono text-[#6B6B68]">{plan.period}</span>
                </div>

                <p className="text-xs text-[#6B6B68] leading-relaxed border-b border-[#E8E5DF] pb-4">
                  {plan.description}
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-[#191919]">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#CC785C] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={plan.isSandbox ? onOpenSandbox : onRequestDemo}
                className={`w-full py-3.5 text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                  plan.popular
                    ? 'bg-[#CC785C] hover:bg-[#B5654A] text-white shadow-xs'
                    : 'bg-[#FFFFFF] border border-[#E8E5DF] hover:bg-[#F4F2ED] text-[#191919]'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
