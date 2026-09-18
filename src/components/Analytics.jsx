import React, { useState } from 'react';
import { TrendingUp, AlertCircle, CheckCircle2, Clock } from 'lucide-react';

export default function Analytics() {
  const [activeTab, setActiveTab] = useState('student');

  const slippingTopics = [
    { name: 'Matrix Multiplication Dimensions', friction: 'High', attempts: 5, status: 'Prerequisite Gap' },
    { name: 'Logarithmic Base E Transformation', friction: 'Medium', attempts: 3, status: 'Paced Practice Needed' },
    { name: 'Trigonometric Function Inversion', friction: 'Low', attempts: 2, status: 'Review In Progress' },
  ];

  const recommendedActions = [
    {
      title: '5-Minute Micro-Lesson: Matrix Row & Column Dimensions',
      type: 'Targeted Scaffolding',
      duration: '5 min',
      reason: 'Diagnosed from yesterday\'s homework problem #3',
    },
    {
      title: '3 Practice Exercises: Scalar Product Operations',
      type: 'Guided Practice',
      duration: '8 min',
      reason: 'Strengthens foundation before Friday\'s evaluation',
    },
    {
      title: 'Interactive Chatbot Drill: Natural Log Properties',
      type: 'Conversational Review',
      duration: '6 min',
      reason: 'Adapts explanation speed based on historical recall',
    },
  ];

  return (
    <section id="analytics" className="py-28 border-t border-[#E8E5DF] bg-[#FFFFFF] w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#6B6B68] uppercase mb-3">
              Analytics Surface
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight">
              Clear diagnostics for students and administrators
            </h2>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-[#F4F2ED] p-1 rounded-lg border border-[#E8E5DF] self-start md:self-auto">
            <button
              onClick={() => setActiveTab('student')}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'student'
                  ? 'bg-[#FFFFFF] text-[#191919] shadow-xs border border-[#E8E5DF]'
                  : 'text-[#6B6B68] hover:text-[#191919]'
              }`}
            >
              Student Progress View
            </button>
            <button
              onClick={() => setActiveTab('district')}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'district'
                  ? 'bg-[#FFFFFF] text-[#191919] shadow-xs border border-[#E8E5DF]'
                  : 'text-[#6B6B68] hover:text-[#191919]'
              }`}
            >
              District Overview
            </button>
          </div>
        </div>

        {activeTab === 'student' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 columns: Mastery Over Time SVG Line Graph */}
            <div className="lg:col-span-7 bg-[#FAF9F7] border border-[#E8E5DF] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-4">
                <div>
                  <span className="text-xs font-mono text-[#6B6B68] uppercase tracking-wider block mb-1">
                    Learner ID: #4802 • Mathematics
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#191919]">Mastery Progression Over Time</h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#CC785C] bg-[#F7ECE8] px-3 py-1 rounded-md border border-[#CC785C]/20 font-medium">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+18.4% Growth</span>
                </div>
              </div>

              {/* Custom Clean SVG Line Chart */}
              <div className="relative pt-4 pb-2">
                <div className="h-64 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200">
                    <line x1="0" y1="40" x2="500" y2="40" stroke="#E8E5DF" strokeDasharray="3 3" />
                    <line x1="0" y1="90" x2="500" y2="90" stroke="#E8E5DF" strokeDasharray="3 3" />
                    <line x1="0" y1="140" x2="500" y2="140" stroke="#E8E5DF" strokeDasharray="3 3" />

                    <defs>
                      <linearGradient id="clayGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#CC785C" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#CC785C" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M 20 160 Q 100 145, 180 110 T 340 70 T 480 35 L 480 180 L 20 180 Z"
                      fill="url(#clayGradient)"
                    />

                    <path
                      d="M 20 160 Q 100 145, 180 110 T 340 70 T 480 35"
                      fill="none"
                      stroke="#CC785C"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    <circle cx="20" cy="160" r="4" fill="#FFFFFF" stroke="#CC785C" strokeWidth="2" />
                    <circle cx="130" cy="130" r="4" fill="#FFFFFF" stroke="#CC785C" strokeWidth="2" />
                    <circle cx="250" cy="90" r="4" fill="#FFFFFF" stroke="#CC785C" strokeWidth="2" />
                    <circle cx="370" cy="60" r="4" fill="#FFFFFF" stroke="#CC785C" strokeWidth="2" />
                    <circle cx="480" cy="35" r="5" fill="#CC785C" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>

                <div className="flex justify-between text-xs font-mono text-[#6B6B68] pt-3 border-t border-[#E8E5DF]">
                  <span>Week 1 (Baseline)</span>
                  <span>Week 3</span>
                  <span>Week 5</span>
                  <span>Week 7</span>
                  <span className="font-semibold text-[#191919]">Week 9 (Current)</span>
                </div>
              </div>

              <p className="text-xs text-[#6B6B68] bg-[#FFFFFF] p-3.5 rounded-lg border border-[#E8E5DF]">
                <span className="font-semibold text-[#191919]">Diagnostic Insight:</span> Mastery curve accelerated after Week 5 when AI diagnosed and resolved the prior grade factoring gap.
              </p>
            </div>

            {/* Right 5 columns: Slipping Topics & Recommended Actions */}
            <div className="lg:col-span-5 space-y-6">
              {/* Box 1: Topics Slipping */}
              <div className="bg-[#FAF9F7] border border-[#E8E5DF] rounded-2xl p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-3">
                  <h3 className="text-xs font-mono text-[#6B6B68] uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#CC785C]" />
                    Topics Slipping (3)
                  </h3>
                  <span className="text-[11px] font-mono text-[#6B6B68]">Real-time detection</span>
                </div>

                <div className="space-y-2.5">
                  {slippingTopics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#FFFFFF] border border-[#E8E5DF] rounded-lg flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-medium text-[#191919] block mb-0.5">{topic.name}</span>
                        <span className="text-[#6B6B68] text-[11px]">{topic.status}</span>
                      </div>
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded-xs bg-[#F7ECE8] text-[#CC785C] border border-[#CC785C]/20">
                        {topic.friction} Friction
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box 2: Recommended Next Actions */}
              <div className="bg-[#FAF9F7] border border-[#E8E5DF] rounded-2xl p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-3">
                  <h3 className="text-xs font-mono text-[#191919] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#191919]" />
                    Recommended Next Actions
                  </h3>
                </div>

                <div className="space-y-3">
                  {recommendedActions.map((action, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#FFFFFF] border border-[#E8E5DF] rounded-lg space-y-1.5 text-xs hover:border-[#CC785C]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between text-[#6B6B68]">
                        <span className="font-mono text-[10px] text-[#CC785C] uppercase tracking-wider">
                          {action.type}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          <Clock className="w-3 h-3" />
                          {action.duration}
                        </span>
                      </div>
                      <h4 className="font-medium text-[#191919] text-xs leading-snug">{action.title}</h4>
                      <p className="text-[11px] text-[#6B6B68]">{action.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* District View Tab */
          <div className="bg-[#FAF9F7] border border-[#E8E5DF] rounded-2xl p-8 sm:p-12 shadow-xs space-y-8">
            <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-4">
              <div>
                <span className="text-xs font-mono text-[#6B6B68] uppercase tracking-wider block mb-1">
                  District Administrator Dashboard
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#191919]">Oakridge Public Schools — Cohort Analytics</h3>
              </div>
              <span className="text-xs font-mono px-3.5 py-1.5 bg-[#FFFFFF] border border-[#E8E5DF] rounded-lg text-[#191919]">
                12 Schools • 4,820 Active Learners
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans">
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl space-y-2">
                <span className="text-xs font-mono text-[#6B6B68] uppercase">Curriculum Alignment</span>
                <div className="text-3xl sm:text-4xl font-serif font-normal text-[#191919]">94.2%</div>
                <p className="text-xs text-[#6B6B68]">Across state standards pacing guidelines</p>
              </div>
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl space-y-2">
                <span className="text-xs font-mono text-[#6B6B68] uppercase">Teacher Hours Saved</span>
                <div className="text-3xl sm:text-4xl font-serif font-normal text-[#CC785C]">11.4 hrs/wk</div>
                <p className="text-xs text-[#6B6B68]">Per instructor on manual diagnostic grading</p>
              </div>
              <div className="p-6 bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl space-y-2">
                <span className="text-xs font-mono text-[#6B6B68] uppercase">Early Interventions</span>
                <div className="text-3xl sm:text-4xl font-serif font-normal text-[#191919]">1,420</div>
                <p className="text-xs text-[#6B6B68]">Resolved prior to summative exams</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
