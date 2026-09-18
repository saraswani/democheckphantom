import React, { useState } from 'react';
import { Sparkles, Brain, Cpu, MessageSquare, ArrowRight, CheckCircle, RefreshCw } from 'lucide-react';

export default function ChatbotEvolution() {
  const [masteryScore, setMasteryScore] = useState(38); // Default struggling student score

  // Determine stage based on slider
  const getStage = (score) => {
    if (score <= 40) {
      return {
        level: 1,
        title: 'Stage 1: Foundation & Prerequisite Scaffolding',
        tone: 'Warm, Supportive & Granular',
        aiBehavior: 'Breaks complex tasks into single micro-steps. Immediately identifies and remediates prerequisite gaps from previous grade levels.',
        botMessage:
          "I noticed you got a negative sign when using the power rule on 3x⁻². Let's pause calculus for 60 seconds: remember how in 8th grade algebra, an exponent like x⁻² means 1/(x²)? When we multiply by -2, the sign turns negative. Want to try just the exponent step together?",
        memoryNote: 'Memory context: Student struggled with fraction exponent inversion 3 weeks ago.',
        mcqPreview: 'Generated Practice: 3-item targeted drill on negative exponent expansion.',
      };
    } else if (score <= 70) {
      return {
        level: 2,
        title: 'Stage 2: Socratic Guided Discovery',
        tone: 'Socratic & Reason-Focused',
        aiBehavior: 'Stops giving direct hints. Asks guiding questions that prompt the student to detect their own algebraic missteps.',
        botMessage:
          "You're almost there! Look closely at line 3 of your implicit differentiation derivative. Notice how the d/dx term is still on the right side of the equals sign. What algebraic operation can we perform to isolate dy/dx on the left?",
        memoryNote: 'Memory context: Student mastered negative exponents yesterday. Now building equation balancing confidence.',
        mcqPreview: 'Generated Practice: Conceptual MCQ on isolating implicit derivative variables.',
      };
    } else if (score <= 90) {
      return {
        level: 3,
        title: 'Stage 3: Advanced Synthesis & Physics Applications',
        tone: 'Challenging & Multi-Disciplinary',
        aiBehavior: 'Pushes student into edge-case analysis, real-world rate of change applications, and multi-step proof challenges.',
        botMessage:
          "Spot on. Now let's push this further: if this derivative represents the rate of heat dissipation in a rocket nozzle over time t, what happens to the dissipation rate as t approaches infinity? Can you prove it using limits?",
        memoryNote: 'Memory context: High mastery velocity (+15% this week). Reduced hint frequency to zero.',
        mcqPreview: 'Generated Practice: Multi-step derivative application problem with limit proofs.',
      };
    } else {
      return {
        level: 4,
        title: 'Stage 4: Peer Leadership & Metacognitive Mastery',
        tone: 'Collaborative & Mentor-Level',
        aiBehavior: 'Prepares student to lead peer learning sessions. Invites the student to explain the concept in their own words to solidify retention.',
        botMessage:
          "Incredible work! You've mastered calculus chain rule with a 96% accuracy rate. Marcus Chen in Period 3 is currently working through exponent signs. Could you explain in 2 sentences how you remember the negative exponent rule?",
        memoryNote: 'Memory context: Qualified as Class Peer Lead. Ready to pair with struggling classmates.',
        mcqPreview: 'Generated Practice: Student-created explanation challenge & peer grading rubrics.',
      };
    }
  };

  const currentStage = getStage(masteryScore);

  return (
    <section className="py-24 border-t border-[#E8E5DF] bg-[#FFFFFF] w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#CC785C] uppercase">
            <Brain className="w-4 h-4" />
            Continuous Developmental AI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight">
            A chatbot that evolves with the student over time.
          </h2>
          <p className="text-[#6B6B68] text-base leading-relaxed">
            Learnova isn't a static answer engine. As a student's mastery increases, the AI's explanation depth, hint frequency, questioning style, and practice questions dynamically transform.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="bg-[#FAF9F7] border border-[#E8E5DF] rounded-2xl p-6 sm:p-10 shadow-xs space-y-10">
          
          {/* Slider Controls */}
          <div className="space-y-4 max-w-2xl bg-[#FFFFFF] p-6 rounded-xl border border-[#E8E5DF]">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-[#191919] uppercase tracking-wider font-semibold">
                Simulate Student Mastery Score: <span className="text-[#CC785C] font-bold text-sm">{masteryScore}%</span>
              </label>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#F7ECE8] text-[#CC785C] border border-[#CC785C]/20 font-medium">
                {currentStage.title.split(':')[1]}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={masteryScore}
              onChange={(e) => setMasteryScore(Number(e.target.value))}
              className="w-full h-2 bg-[#E8E5DF] rounded-lg appearance-none cursor-pointer accent-[#CC785C]"
            />

            <div className="flex justify-between text-[11px] font-mono text-[#6B6B68]">
              <span>0% (Struggling)</span>
              <span>40% (Foundations)</span>
              <span>70% (Competent)</span>
              <span>100% (Peer Lead)</span>
            </div>
          </div>

          {/* Interactive Preview Surface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Cols: Chatbot Dialogue Window */}
            <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#E8E5DF] pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#CC785C] text-white flex items-center justify-center font-serif text-sm font-bold">
                    L
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#191919] block">Learnova Adaptive Tutor</span>
                    <span className="text-[11px] text-[#6B6B68]">Evolving Persona • {currentStage.tone}</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#CC785C] bg-[#F7ECE8] px-2 py-0.5 rounded-sm">
                  Stage {currentStage.level} of 4
                </span>
              </div>

              {/* Bot Dialogue Message */}
              <div className="p-4 bg-[#FAF9F7] border border-[#E8E5DF] rounded-lg space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#CC785C] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Tutor Response:
                </div>
                <p className="text-sm text-[#191919] leading-relaxed font-sans">
                  "{currentStage.botMessage}"
                </p>
              </div>

              {/* Underlying Memory Context Badge */}
              <div className="p-3 bg-[#F4F2ED] rounded-lg text-xs font-mono text-[#6B6B68] flex items-center gap-2 border border-[#E8E5DF]">
                <Cpu className="w-4 h-4 text-[#CC785C] shrink-0" />
                <span>{currentStage.memoryNote}</span>
              </div>
            </div>

            {/* Right 5 Cols: Developmental Stage Breakdown */}
            <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl p-6 shadow-xs space-y-4">
              <div className="border-b border-[#E8E5DF] pb-3">
                <span className="text-[11px] font-mono text-[#6B6B68] uppercase">Active Cognitive Strategy</span>
                <h4 className="text-xl font-serif text-[#191919] font-normal">{currentStage.title}</h4>
              </div>

              <div className="space-y-3 text-xs text-[#191919]">
                <div>
                  <span className="font-semibold text-[#6B6B68] block mb-1">Pedagogical Approach:</span>
                  <p className="text-[#6B6B68] leading-relaxed">{currentStage.aiBehavior}</p>
                </div>

                <div className="p-3 bg-[#FAF9F7] border border-[#E8E5DF] rounded-lg">
                  <span className="font-semibold text-[#CC785C] block mb-1">Automated Practice Generation:</span>
                  <p className="text-[#191919] font-medium">{currentStage.mcqPreview}</p>
                </div>
              </div>

              <div className="pt-2 text-[11px] font-mono text-[#6B6B68]">
                Drag the slider above to see how the AI adapts tone and depth in real time.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
