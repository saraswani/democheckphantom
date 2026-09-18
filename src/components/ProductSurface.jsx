import React, { useState } from 'react';
import { AlertCircle, UserCheck, ChevronDown, BookOpen, Sparkles, HardDrive, MessageSquare, Folder } from 'lucide-react';

export default function ProductSurface() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('AP Calculus AB — Period 3');

  const students = [
    {
      id: 1,
      name: 'Marcus Chen',
      status: 'flagged',
      topic: 'Negative Exponents in Derivatives',
      mastery: 42,
      lastActive: '3 mins ago',
      issue: 'Attempted problem #4 four times. Missing 8th-grade exponent rules.',
      recommendedAction: 'Assign peer practice with Elena Vance',
    },
    {
      id: 2,
      name: 'Elena Vance',
      status: 'mastered',
      topic: 'Implicit Differentiation & Chain Rule',
      mastery: 96,
      lastActive: 'Just now',
      issue: 'None. Mastered prerequisite concept 2 days early.',
      recommendedAction: 'Can lead peer tutoring session',
    },
    {
      id: 3,
      name: 'Sophia Rodriguez',
      status: 'progressing',
      topic: 'Logarithmic Differentiation',
      mastery: 84,
      lastActive: '8 mins ago',
      issue: 'Minor friction on base-e conversion.',
      recommendedAction: 'AI assigned 2 practice problems',
    },
    {
      id: 4,
      name: 'Lucas Takahashi',
      status: 'flagged',
      topic: 'Limits at Infinity & Asymptotes',
      mastery: 51,
      lastActive: '12 mins ago',
      issue: 'Confusing rational function degree tests.',
      recommendedAction: 'Direct teacher intervention recommended',
    },
    {
      id: 5,
      name: 'Amara Lawal',
      status: 'mastered',
      topic: 'Integration by Parts',
      mastery: 92,
      lastActive: '15 mins ago',
      issue: 'None. Steady progress.',
      recommendedAction: 'Ready for Unit 5 advancement',
    },
    {
      id: 6,
      name: 'Devon Miller',
      status: 'progressing',
      topic: 'Trigonometric Substitution',
      mastery: 78,
      lastActive: '22 mins ago',
      issue: 'Slight delay on secant substitution steps.',
      recommendedAction: 'Reviewing worked solution video',
    },
  ];

  const filteredStudents = students.filter((student) => {
    if (activeFilter === 'flagged') return student.status === 'flagged';
    if (activeFilter === 'mastered') return student.status === 'mastered';
    return true;
  });

  return (
    <section id="product" className="py-28 border-t border-[#E8E5DF] bg-[#FAF9F7] w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#6B6B68] uppercase mb-3">
              Product Surface
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight">
              Classroom intelligence dashboard
            </h2>
          </div>
          <p className="text-[#6B6B68] text-base max-w-md leading-relaxed">
            Calm, data-dense overview. Real-time diagnosis of student friction synced with Google Classroom & Teams.
          </p>
        </div>

        {/* Mocked Dashboard Surface Frame */}
        <div className="bg-[#FFFFFF] border border-[#E8E5DF] rounded-2xl shadow-xs overflow-hidden">
          {/* Top Control Header Bar */}
          <div className="bg-[#FAF9F7] border-b border-[#E8E5DF] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-[#FFFFFF] border border-[#E8E5DF] px-3.5 py-2 rounded-lg text-xs font-medium text-[#191919]">
                <BookOpen className="w-4 h-4 text-[#CC785C]" />
                <span>{selectedSubject}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#6B6B68]" />
              </div>
              <span className="text-xs font-mono text-[#6B6B68] hidden sm:inline">
                Synced with Google Classroom & Drive • 32 Active Students
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 bg-[#F4F2ED] p-1 rounded-lg border border-[#E8E5DF]">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeFilter === 'all'
                    ? 'bg-[#FFFFFF] text-[#191919] shadow-xs border border-[#E8E5DF]'
                    : 'text-[#6B6B68] hover:text-[#191919]'
                }`}
              >
                All Students (32)
              </button>
              <button
                onClick={() => setActiveFilter('flagged')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1 ${
                  activeFilter === 'flagged'
                    ? 'bg-[#FFFFFF] text-[#CC785C] shadow-xs border border-[#E8E5DF]'
                    : 'text-[#6B6B68] hover:text-[#191919]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC785C]"></span>
                Needs Attention (2)
              </button>
              <button
                onClick={() => setActiveFilter('mastered')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeFilter === 'mastered'
                    ? 'bg-[#FFFFFF] text-[#191919] shadow-xs border border-[#E8E5DF]'
                    : 'text-[#6B6B68] hover:text-[#191919]'
                }`}
              >
                Mastered Topics (18)
              </button>
            </div>
          </div>

          {/* Dashboard Main Grid: Left Roster Table + Right Spotlight Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E8E5DF]">
            
            {/* Left Column: Class Roster Table */}
            <div className="lg:col-span-8 p-6 sm:p-8 overflow-x-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-mono text-[#6B6B68] uppercase tracking-wider">
                  Current Learning State
                </h3>
                <span className="text-xs text-[#6B6B68] font-mono">
                  Auto-synced with Google Drive syllabi
                </span>
              </div>

              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E8E5DF] text-[#6B6B68] font-mono text-[11px] uppercase tracking-wider">
                    <th className="pb-3 font-normal">Student Name</th>
                    <th className="pb-3 font-normal">Active Topic</th>
                    <th className="pb-3 font-normal text-right">Mastery</th>
                    <th className="pb-3 font-normal text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E5DF]">
                  {filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      className={`hover:bg-[#FAF9F7] transition-colors ${
                        student.status === 'flagged' ? 'bg-[#F7ECE8]/40' : ''
                      }`}
                    >
                      <td className="py-4 pr-4 font-medium text-[#191919] whitespace-nowrap">
                        {student.name}
                      </td>
                      <td className="py-4 px-4 text-[#6B6B68] text-xs sm:text-sm">
                        {student.topic}
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <span className="font-mono text-xs font-medium text-[#191919]">
                            {student.mastery}%
                          </span>
                          <div className="w-16 h-1.5 rounded-full bg-[#E8E5DF] overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                student.status === 'flagged'
                                  ? 'bg-[#CC785C]'
                                  : student.status === 'mastered'
                                  ? 'bg-[#191919]'
                                  : 'bg-[#6B6B68]'
                              }`}
                              style={{ width: `${student.mastery}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 pl-4 text-right whitespace-nowrap">
                        {student.status === 'flagged' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F7ECE8] text-[#CC785C] border border-[#CC785C]/30 text-xs font-medium">
                            <AlertCircle className="w-3 h-3" />
                            Struggling
                          </span>
                        ) : student.status === 'mastered' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F4F2ED] text-[#191919] border border-[#E8E5DF] text-xs font-medium">
                            Mastered
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF9F7] text-[#6B6B68] border border-[#E8E5DF] text-xs font-medium">
                            Active
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right Column: Flagged Student Spotlight & Suggested Peer Grouping */}
            <div className="lg:col-span-4 p-6 sm:p-8 space-y-6 bg-[#FAF9F7]/50">
              
              {/* Spotlight 1: Flagged Student Diagnostic */}
              <div className="bg-[#FFFFFF] border border-[#CC785C]/40 rounded-xl p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#CC785C] uppercase tracking-wider font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Flagged Student Signal
                  </span>
                  <span className="text-[11px] font-mono text-[#6B6B68]">High Priority</span>
                </div>
                <div>
                  <h4 className="text-base font-serif text-[#191919] font-medium">Marcus Chen</h4>
                  <p className="text-xs text-[#6B6B68] mt-1">
                    Stuck on: <span className="text-[#191919] font-medium">Negative Exponent Rules</span>
                  </p>
                </div>
                <div className="p-3 bg-[#F7ECE8]/60 border border-[#CC785C]/20 rounded-lg text-xs text-[#191919] leading-relaxed">
                  <span className="font-semibold block mb-0.5 text-[#CC785C]">Root Misconception:</span>
                  Attempted 4 problems on derivative power rule. Misstep originates from 8th-grade fraction exponent inversion logic.
                </div>
              </div>

              {/* Spotlight 2: AI Suggested Peer Grouping */}
              <div className="bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#191919] uppercase tracking-wider font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#CC785C]" />
                    Suggested Peer Pairing
                  </span>
                  <span className="text-[11px] font-mono text-[#6B6B68]">Optimal Match</span>
                </div>
                <div className="text-xs space-y-2 text-[#191919]">
                  <div className="flex items-center justify-between p-2 bg-[#F4F2ED] rounded-md border border-[#E8E5DF]">
                    <div>
                      <span className="font-medium text-[#191919]">Elena Vance</span>
                      <span className="block text-[11px] text-[#6B6B68]">Mastered Exponents today</span>
                    </div>
                    <span className="font-mono text-xs text-[#191919] font-semibold">96%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-[#F7ECE8] rounded-md border border-[#CC785C]/20">
                    <div>
                      <span className="font-medium text-[#CC785C]">Marcus Chen</span>
                      <span className="block text-[11px] text-[#6B6B68]">Needs exponent practice</span>
                    </div>
                    <span className="font-mono text-xs text-[#CC785C] font-semibold">42%</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-[#191919] hover:bg-[#333333] text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs">
                  <UserCheck className="w-3.5 h-3.5" />
                  Assign Peer Practice Session
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
