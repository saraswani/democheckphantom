import React from 'react';
import { Users, FileSearch, EyeOff } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: Users,
      title: "One teacher can't reach 40 students.",
      description:
        "In a mixed-ability classroom, instructional pace is always a compromise. Top performers stall while struggling students fall further behind.",
    },
    {
      icon: FileSearch,
      title: "Existing EdTech delivers content, not diagnosis.",
      description:
        "Standard educational software assigns practice problems and scores right or wrong. It cannot identify the prerequisite gap from two years ago causing today's mistake.",
    },
    {
      icon: EyeOff,
      title: "Struggling students go invisible until the exam.",
      description:
        "Quiet confusion compounds silently. By the time a mid-term exam reveals that a student missed fundamental concepts, weeks of learning momentum are lost.",
    },
  ];

  return (
    <section id="problem" className="py-28 border-t border-[#E8E5DF] bg-[#FAF9F7] w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Eyebrow Label */}
        <div className="text-xs font-mono tracking-widest text-[#6B6B68] uppercase mb-4">
          The Classroom Gap
        </div>

        {/* Main Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] max-w-3xl font-normal leading-tight mb-16">
          Traditional software automates grading. It does not scale human understanding.
        </h2>

        {/* 3 Short Columns - Edge to Edge */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl p-8 space-y-4 hover:border-[#CC785C]/40 transition-colors shadow-xs"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F4F2ED] border border-[#E8E5DF] flex items-center justify-center text-[#191919]">
                  <Icon className="w-5 h-5 text-[#CC785C]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-[#191919] font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-[#6B6B68] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
