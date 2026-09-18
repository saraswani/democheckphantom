import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Knows your background",
      subtitle: "Continuous historical memory",
      description:
        "Learnova connects with past coursework, assessment records, Google Drive PDFs, and prior session logs. Before a student asks a single question, the AI understands their prerequisite mastery, recurring friction points, and preferred explanation models.",
      detailCard: {
        tag: "Historical Profile",
        line1: "Algebra II Foundations: 98% Mastered",
        line2: "Exponent Rules (Gr. 8): Flagged Friction Point",
        line3: "Preferred Modality: Visual & Worked Step-by-Step",
      },
    },
    {
      number: "02",
      title: "Adapts the course",
      subtitle: "Dynamic real-time scaffolding",
      description:
        "As the student works through core curriculum, the chatbot adjusts explanation depth on the fly. If a calculus problem fails due to an algebraic misconception, Learnova pauses the calculus task, resolves the algebra gap, and seamlessly returns.",
      detailCard: {
        tag: "Real-Time Adaptation",
        line1: "Detects misstep: Negative sign distribution in step 2",
        line2: "Action: Inserted 90-second targeted micro-refresher",
        line3: "Outcome: Student solved target problem independently",
      },
    },
    {
      number: "03",
      title: "Shows you exactly where you slip",
      subtitle: "Teacher visibility & peer pairings",
      description:
        "Instead of generating generic reports, Learnova notifies teachers of exact conceptual friction across the room. It automatically identifies which students are struggling with identical topics and suggests optimal peer tutoring pairs.",
      detailCard: {
        tag: "Teacher Intelligence",
        line1: "Alert: 4 students stuck on Implicit Differentiation",
        line2: "Suggested Grouping: Elena V. (Lead) + Marcus C. & Lucas T.",
        line3: "Recommended Action: Spend 8 mins on chain rule step 3",
      },
    },
  ];

  return (
    <section id="how-it-works" className="py-28 border-t border-[#E8E5DF] bg-[#FFFFFF] w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-xs font-mono tracking-widest text-[#6B6B68] uppercase mb-4">
            How Learnova Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight">
            A continuous feedback loop between student history, AI adaptation, and teacher insight.
          </h2>
        </div>

        {/* 3 Numbered Steps with generous vertical rhythm */}
        <div className="space-y-24">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start py-8 border-b border-[#E8E5DF] last:border-b-0"
            >
              {/* Left Number & Copy */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-[#CC785C]">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono tracking-wider text-[#6B6B68] uppercase border-l border-[#E8E5DF] pl-4">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#191919] font-normal leading-snug">
                  {step.title}
                </h3>

                <p className="text-base sm:text-lg text-[#6B6B68] leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>

              {/* Right Diagnostic Surface Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#FAF9F7] border border-[#E8E5DF] rounded-xl p-6 shadow-xs space-y-3 font-sans">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E8E5DF]">
                    <span className="text-xs font-mono text-[#CC785C] uppercase tracking-wider font-medium">
                      {step.detailCard.tag}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#CC785C]"></span>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-[#191919]">
                    <div className="p-3 bg-[#FFFFFF] border border-[#E8E5DF] rounded-md text-[#6B6B68]">
                      • {step.detailCard.line1}
                    </div>
                    <div className="p-3 bg-[#FFFFFF] border border-[#E8E5DF] rounded-md text-[#191919] font-medium">
                      • {step.detailCard.line2}
                    </div>
                    <div className="p-3 bg-[#FFFFFF] border border-[#E8E5DF] rounded-md text-[#6B6B68]">
                      • {step.detailCard.line3}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
