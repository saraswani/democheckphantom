import React, { useState } from 'react';
import { Sparkles, CheckCircle2, XCircle, RefreshCw, HelpCircle, ArrowRight } from 'lucide-react';

export default function McqGenerator() {
  const [selectedStudent, setSelectedStudent] = useState('Marcus Chen');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    {
      student: 'Marcus Chen',
      topic: 'Negative Exponent Power Rule',
      historyNote: 'Attempted derivative problem 4 times. Struggled with sign inversion.',
      question: 'What is the derivative of f(x) = -4x⁻³ with respect to x?',
      options: [
        { id: 'A', text: '12x⁻⁴', isCorrect: true, explanation: 'Correct! (-4) × (-3) = +12, and -3 - 1 = -4. Power rule applied flawlessly.' },
        { id: 'B', text: '-12x⁻²', isCorrect: false, explanation: 'Misconception detected: Subtracted exponents in reverse (-3 + 1 = -2) and forgot double negative sign multiplication.' },
        { id: 'C', text: '12x⁻²', isCorrect: false, explanation: 'Misconception detected: Correct sign (+12), but subtracted -3 - 1 to get -2 instead of -4.' },
        { id: 'D', text: '-12x⁻⁴', isCorrect: false, explanation: 'Misconception detected: Handled exponent reduction (-4) correctly, but missed (-4) × (-3) = +12 sign multiplication.' },
      ],
    },
    {
      student: 'Marcus Chen',
      topic: 'Fractional Exponents & Roots',
      historyNote: 'Ingested from Google Drive homework PDF #2.',
      question: 'Simplify and differentiate g(x) = x^(1/2) + 5x⁻¹:',
      options: [
        { id: 'A', text: '(1/2)x⁻¹/² - 5x⁻²', isCorrect: true, explanation: 'Correct! Power rule applied independently to both fractional and negative terms.' },
        { id: 'B', text: '(1/2)x¹/² - 5x⁰', isCorrect: false, explanation: 'Misconception: Did not decrease exponents by 1 during differentiation.' },
        { id: 'C', text: 'x⁻¹/² + 5x⁻²', isCorrect: false, explanation: 'Misconception: Omitted coefficient multiplication (1/2).' },
        { id: 'D', text: '(1/2)x⁻¹/² + 5x⁻²', isCorrect: false, explanation: 'Misconception: Forgot that d/dx of +5x⁻¹ becomes -5x⁻² due to negative exponent.' },
      ],
    },
  ];

  const currentQ = questions[questionIndex];

  const handleNextQuestion = () => {
    setIsGenerating(true);
    setSelectedOption(null);
    setTimeout(() => {
      setQuestionIndex((prev) => (prev + 1) % questions.length);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <section className="py-24 border-t border-[#E8E5DF] bg-[#FAF9F7] w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#CC785C] uppercase">
              <Sparkles className="w-4 h-4" />
              Dynamic Diagnostic Engine
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight">
              Generates targeted MCQs based on individual student missteps.
            </h2>
          </div>
          <p className="text-[#6B6B68] text-base max-w-md leading-relaxed">
            Every distractor option in Learnova's generated questions corresponds to a specific diagnosed misconception, giving teachers instant diagnostic depth.
          </p>
        </div>

        {/* Generator Card Surface */}
        <div className="bg-[#FFFFFF] border border-[#E8E5DF] rounded-2xl p-6 sm:p-10 shadow-xs space-y-8">
          
          {/* Top Bar: Student Selection & Topic context */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E8E5DF]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F7ECE8] text-[#CC785C] flex items-center justify-center font-serif font-bold">
                MC
              </div>
              <div>
                <h3 className="text-base font-serif text-[#191919] font-semibold">{currentQ.student}</h3>
                <span className="text-xs text-[#6B6B68]">Target Friction: {currentQ.topic}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#6B6B68] hidden sm:inline">
                History context ingested from Google Classroom
              </span>
              <button
                onClick={handleNextQuestion}
                disabled={isGenerating}
                className="px-4 py-2 bg-[#CC785C] hover:bg-[#B5654A] text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-2 shadow-xs"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
                <span>{isGenerating ? 'Synthesizing MCQ...' : 'Generate Next Adaptive MCQ'}</span>
              </button>
            </div>
          </div>

          {/* Question Display */}
          {isGenerating ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-8 h-8 rounded-full border-2 border-[#CC785C] border-t-transparent animate-spin mx-auto"></div>
              <p className="text-xs font-mono text-[#6B6B68]">
                Analyzing {currentQ.student}'s historical error log & drafting diagnostic distractor choices...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left 7 Cols: Question & Interactive Options */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-[#CC785C] uppercase tracking-wider">
                    Auto-Generated Diagnostic Question
                  </span>
                  <h4 className="text-xl sm:text-2xl font-serif text-[#191919] font-normal leading-snug">
                    {currentQ.question}
                  </h4>
                </div>

                {/* Options List */}
                <div className="space-y-3">
                  {currentQ.options.map((opt) => {
                    const isSelected = selectedOption === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedOption(opt.id)}
                        className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-4 ${
                          isSelected
                            ? opt.isCorrect
                              ? 'bg-[#FAF9F7] border-[#191919] ring-1 ring-[#191919]'
                              : 'bg-[#F7ECE8] border-[#CC785C] ring-1 ring-[#CC785C]'
                            : 'bg-[#FFFFFF] border-[#E8E5DF] hover:border-[#CC785C]/40'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                            isSelected
                              ? opt.isCorrect
                                ? 'bg-[#191919] text-white'
                                : 'bg-[#CC785C] text-white'
                              : 'bg-[#F4F2ED] text-[#191919]'
                          }`}
                        >
                          {opt.id}
                        </span>
                        <span className="text-sm font-sans font-medium text-[#191919] pt-0.5">
                          {opt.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right 5 Cols: Diagnostic Feedback Card */}
              <div className="lg:col-span-5 bg-[#FAF9F7] border border-[#E8E5DF] rounded-xl p-6 space-y-4">
                <div className="border-b border-[#E8E5DF] pb-3">
                  <span className="text-[11px] font-mono text-[#6B6B68] uppercase">
                    AI Diagnostic Analysis
                  </span>
                  <h5 className="text-base font-serif text-[#191919]">Distractor Mapping</h5>
                </div>

                {selectedOption ? (
                  (() => {
                    const opt = currentQ.options.find((o) => o.id === selectedOption);
                    return (
                      <div className="space-y-3 text-xs animate-fade-in-rise">
                        <div className={`p-3 rounded-lg flex items-center gap-2 font-medium ${
                          opt.isCorrect ? 'bg-[#F4F2ED] text-[#191919]' : 'bg-[#F7ECE8] text-[#CC785C]'
                        }`}>
                          {opt.isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-[#191919]" />
                          ) : (
                            <XCircle className="w-4 h-4 text-[#CC785C]" />
                          )}
                          <span>Option {opt.id} Selected: {opt.isCorrect ? 'Concept Mastered' : 'Misconception Detected'}</span>
                        </div>

                        <p className="text-[#6B6B68] leading-relaxed p-3 bg-[#FFFFFF] border border-[#E8E5DF] rounded-lg">
                          {opt.explanation}
                        </p>

                        <div className="pt-2 text-[11px] font-mono text-[#6B6B68]">
                          {opt.isCorrect
                            ? 'Student mastery score updated +16%. Ready for next topic.'
                            : 'AI Chatbot automatically queues a 90-second targeted review hint.'}
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <div className="p-4 bg-[#FFFFFF] border border-[#E8E5DF] rounded-lg text-xs text-[#6B6B68] space-y-2">
                    <HelpCircle className="w-4 h-4 text-[#CC785C]" />
                    <p>
                      Click any multiple choice option on the left to inspect Learnova's automated misconception diagnosis for that choice.
                    </p>
                  </div>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
