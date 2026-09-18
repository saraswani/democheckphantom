import React, { useState } from 'react';
import { X, Sparkles, BookOpen, HardDrive, MessageSquare, Folder, CheckCircle, RefreshCw, Send, ArrowRight, UserCheck, AlertCircle, Play } from 'lucide-react';

export default function InteractiveSandbox({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('chatbot'); // 'chatbot', 'mcq', 'integrations', 'dashboard'
  const [mastery, setMastery] = useState(38);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi Marcus! I noticed you are working on negative exponent derivatives. Let\'s step back to 8th grade algebra exponent rules for 60 seconds: what does x⁻² mean to you?' }
  ]);
  const [userInput, setUserInput] = useState('');
  
  // MCQ state inside sandbox
  const [selectedMcqOption, setSelectedMcqOption] = useState(null);

  // Integrations state
  const [connectedTools, setConnectedTools] = useState({
    gdrive: true,
    classroom: true,
    teams: true,
    onedrive: true,
  });

  if (!isOpen) return null;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMsgs = [...chatMessages, { sender: 'user', text: userInput }];
    setChatMessages(newMsgs);
    setUserInput('');

    // Simulate AI Evolving Response based on Mastery
    setTimeout(() => {
      let botResp = '';
      if (mastery <= 40) {
        botResp = "Spot on! x⁻² equals 1/x². So when we take d/dx of 3x⁻², we multiply 3 by (-2) to get -6, and decrease -2 by 1 to get x⁻³. Want to write the final term?";
      } else if (mastery <= 70) {
        botResp = "Good reasoning. Now, how does that rule apply when the term is inside an implicit derivative equation like x² + y⁻² = 4?";
      } else {
        botResp = "Excellent synthesis! Since your mastery is 96%, would you be open to helping Elena Vance test this proof in tomorrow's peer session?";
      }
      setChatMessages((prev) => [...prev, { sender: 'bot', text: botResp }]);
    }, 600);
  };

  const toggleTool = (key) => {
    setConnectedTools((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#191919]/60 backdrop-blur-sm animate-fade-in-rise">
      <div className="bg-[#FFFFFF] border border-[#E8E5DF] rounded-2xl w-full max-w-5xl h-[90vh] max-h-[850px] flex flex-col shadow-2xl overflow-hidden relative font-sans">
        
        {/* Top Header Bar */}
        <div className="bg-[#FAF9F7] border-b border-[#E8E5DF] px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#CC785C] text-white font-serif font-bold flex items-center justify-center text-sm">
              L
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-[#191919] text-lg">LEARNOVA Live Sandbox</h3>
                <span className="px-2 py-0.5 rounded-full bg-[#F7ECE8] text-[#CC785C] text-[10px] font-mono font-medium border border-[#CC785C]/30">
                  Instant Demo • 0 Registration Required
                </span>
              </div>
              <p className="text-xs text-[#6B6B68]">Hands-on interactive preview of AI tutor, MCQ generator & LMS integrations</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6B6B68] hover:text-[#191919] hover:bg-[#E8E5DF]/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection Navigation */}
        <div className="bg-[#FFFFFF] border-b border-[#E8E5DF] px-6 py-2 flex items-center gap-2 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('chatbot')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'chatbot'
                ? 'bg-[#191919] text-white shadow-xs'
                : 'text-[#6B6B68] hover:bg-[#FAF9F7]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Evolving AI Tutor</span>
          </button>

          <button
            onClick={() => setActiveTab('mcq')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'mcq'
                ? 'bg-[#191919] text-white shadow-xs'
                : 'text-[#6B6B68] hover:bg-[#FAF9F7]'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Adaptive MCQ Generator</span>
          </button>

          <button
            onClick={() => setActiveTab('integrations')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'integrations'
                ? 'bg-[#191919] text-white shadow-xs'
                : 'text-[#6B6B68] hover:bg-[#FAF9F7]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Data Integrations</span>
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'dashboard'
                ? 'bg-[#191919] text-white shadow-xs'
                : 'text-[#6B6B68] hover:bg-[#FAF9F7]'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Teacher Dashboard</span>
          </button>
        </div>

        {/* Sandbox Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#FAF9F7]">
          
          {/* TAB 1: Evolving AI Tutor */}
          {activeTab === 'chatbot' && (
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* Mastery Slider Simulator */}
              <div className="bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl p-4 shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#191919]">
                  <span>Adjust Student Mastery Level: <strong className="text-[#CC785C]">{mastery}%</strong></span>
                  <span className="text-[#6B6B68]">
                    {mastery <= 40 ? 'Stage 1: Scaffolding' : mastery <= 70 ? 'Stage 2: Socratic' : 'Stage 3: Peer Lead'}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={mastery}
                  onChange={(e) => setMastery(Number(e.target.value))}
                  className="w-full h-2 bg-[#E8E5DF] rounded-lg appearance-none cursor-pointer accent-[#CC785C]"
                />
              </div>

              {/* Live Dialogue Box */}
              <div className="bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl h-[380px] flex flex-col shadow-xs overflow-hidden">
                <div className="p-3 bg-[#F4F2ED] border-b border-[#E8E5DF] text-xs font-mono text-[#6B6B68] flex justify-between">
                  <span>Student Context: Marcus Chen • AP Calculus</span>
                  <span>Active Memory: Ingested Google Drive Syllabus</span>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#191919] text-white rounded-br-none'
                            : 'bg-[#FAF9F7] border border-[#E8E5DF] text-[#191919] rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="p-3 border-t border-[#E8E5DF] flex items-center gap-2 bg-[#FFFFFF]">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your response as Marcus..."
                    className="flex-1 px-3.5 py-2 bg-[#FAF9F7] border border-[#E8E5DF] rounded-lg text-xs text-[#191919] focus:outline-hidden focus:ring-2 focus:ring-[#CC785C]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#CC785C] text-white rounded-lg text-xs font-medium hover:bg-[#B5654A] transition-colors flex items-center gap-1"
                  >
                    <span>Send</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              </div>

            </div>
          )}

          {/* TAB 2: Adaptive MCQ Generator */}
          {activeTab === 'mcq' && (
            <div className="max-w-3xl mx-auto bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl p-6 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-mono text-[#CC785C] uppercase tracking-wider block mb-1">
                  AI-Generated Diagnostic Drill
                </span>
                <h4 className="text-xl font-serif text-[#191919]">
                  What is the derivative of f(x) = -4x⁻³ with respect to x?
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  { id: 'A', text: '12x⁻⁴', correct: true, diag: 'Correct! Power rule (-4) × (-3) = +12 and -3 - 1 = -4.' },
                  { id: 'B', text: '-12x⁻²', correct: false, diag: 'Diagnosed Misconception: Subtracted exponent backwards (-3 + 1).' },
                  { id: 'C', text: '12x⁻²', correct: false, diag: 'Diagnosed Misconception: Missed exponent reduction -3 - 1 = -4.' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedMcqOption(opt.id)}
                    className={`w-full p-3.5 rounded-lg border text-left flex items-start gap-3 transition-colors ${
                      selectedMcqOption === opt.id
                        ? opt.correct
                          ? 'bg-[#FAF9F7] border-[#191919]'
                          : 'bg-[#F7ECE8] border-[#CC785C]'
                        : 'bg-[#FFFFFF] border-[#E8E5DF] hover:border-[#CC785C]/40'
                    }`}
                  >
                    <span className="w-6 h-6 rounded bg-[#F4F2ED] font-mono text-center leading-6 font-bold text-[#191919]">
                      {opt.id}
                    </span>
                    <div>
                      <span className="font-medium text-[#191919] block">{opt.text}</span>
                      {selectedMcqOption === opt.id && (
                        <span className="text-[11px] text-[#6B6B68] mt-1 block">{opt.diag}</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Data Integrations */}
          {activeTab === 'integrations' && (
            <div className="max-w-4xl mx-auto space-y-4">
              <h4 className="text-lg font-serif text-[#191919]">Live Data Sources Connected</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: 'gdrive', name: 'Google Drive', icon: HardDrive, desc: 'Syllabus & Lecture Notes PDF' },
                  { key: 'classroom', name: 'Google Classroom', icon: BookOpen, desc: 'Roster & Assignment Scores' },
                  { key: 'teams', name: 'Microsoft Teams', icon: MessageSquare, desc: 'Class Discussion Channels' },
                  { key: 'onedrive', name: 'Microsoft OneDrive', icon: Folder, desc: 'District Standard Exams' },
                ].map((tool) => {
                  const IconC = tool.icon;
                  const isConn = connectedTools[tool.key];
                  return (
                    <div key={tool.key} className="bg-[#FFFFFF] border border-[#E8E5DF] p-4 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconC className="w-6 h-6 text-[#CC785C]" />
                        <div>
                          <h5 className="font-medium text-xs text-[#191919]">{tool.name}</h5>
                          <span className="text-[11px] text-[#6B6B68]">{tool.desc}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleTool(tool.key)}
                        className={`px-3 py-1 text-xs font-mono rounded-md border ${
                          isConn ? 'bg-[#F7ECE8] text-[#CC785C] border-[#CC785C]/30' : 'bg-[#F4F2ED] text-[#6B6B68]'
                        }`}
                      >
                        {isConn ? 'Connected' : 'Connect'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: Teacher Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#E8E5DF] rounded-xl p-6 shadow-xs space-y-4">
              <h4 className="text-lg font-serif text-[#191919]">Teacher Intelligence Preview</h4>
              <div className="p-4 bg-[#F7ECE8] border border-[#CC785C]/30 rounded-lg text-xs space-y-1">
                <span className="font-semibold text-[#CC785C] block">Flagged Signal: Marcus Chen</span>
                <p className="text-[#191919]">Stuck on negative exponents (attempted 4 times). Suggested peer pair: Elena Vance.</p>
              </div>
            </div>
          )}

        </div>

        {/* Footer Action Bar */}
        <div className="bg-[#FFFFFF] border-t border-[#E8E5DF] px-6 py-4 flex items-center justify-between shrink-0 text-xs">
          <span className="text-[#6B6B68]">
            Instant Interactive Sandbox • Ready for immediate classroom testing
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#CC785C] hover:bg-[#B5654A] text-white font-medium rounded-lg transition-colors"
          >
            Close Sandbox
          </button>
        </div>

      </div>
    </div>
  );
}
