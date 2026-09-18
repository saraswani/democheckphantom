import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] text-[#191919] font-sans selection:bg-[#CC785C]/20 selection:text-[#CC785C]">
      {/* Minimal Header */}
      <header className="border-b border-[#EBE8E0] px-8 py-5 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#191919] flex items-center justify-center text-white font-serif italic font-bold">L</div>
          <span className="font-semibold tracking-tight text-lg">Learnova</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-[#191919] transition-colors">Platform</a>
          <a href="#" className="hover:text-[#191919] transition-colors">Verification</a>
          <a href="#" className="hover:text-[#191919] transition-colors">Security</a>
        </nav>
        <button className="bg-[#191919] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#333] transition-colors">
          Admin Console
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        
        {/* Page Title section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#F2EFE8] text-[#CC785C] text-sm font-medium mb-2 border border-[#EBE8E0]">
            Ground Truth: 20 PII Targets
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#191919] leading-tight">
            Verification & <span className="italic text-[#CC785C]">Compliance</span>
          </h1>
          <p className="text-lg text-gray-600">
            A comprehensive suite for verifying candidate identities, financial records, and contact details securely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form & Tabular Data */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Application Form */}
            <section className="bg-white p-8 rounded-2xl border border-[#EBE8E0] shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-serif mb-2">Candidate Registration</h2>
                <p className="text-sm text-gray-500">Action Executor & Autofill Target for onboarding.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" placeholder="Enter Full Name" className="w-full bg-[#FAF9F7] border border-[#EBE8E0] rounded-lg px-4 py-2.5 text-[#191919] focus:outline-none focus:border-[#CC785C] focus:ring-1 focus:ring-[#CC785C] transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" placeholder="name@domain.com" className="w-full bg-[#FAF9F7] border border-[#EBE8E0] rounded-lg px-4 py-2.5 text-[#191919] focus:outline-none focus:border-[#CC785C] focus:ring-1 focus:ring-[#CC785C] transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" placeholder="+91 9876543210" className="w-full bg-[#FAF9F7] border border-[#EBE8E0] rounded-lg px-4 py-2.5 text-[#191919] focus:outline-none focus:border-[#CC785C] focus:ring-1 focus:ring-[#CC785C] transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">Aadhaar Number</label>
                  <input type="text" placeholder="12-digit Aadhaar" className="w-full bg-[#FAF9F7] border border-[#EBE8E0] rounded-lg px-4 py-2.5 text-[#191919] focus:outline-none focus:border-[#CC785C] focus:ring-1 focus:ring-[#CC785C] transition-colors" />
                </div>
                <div className="col-span-1 md:col-span-2 space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">Residential Address</label>
                  <input type="text" placeholder="Flat, Street, City" className="w-full bg-[#FAF9F7] border border-[#EBE8E0] rounded-lg px-4 py-2.5 text-[#191919] focus:outline-none focus:border-[#CC785C] focus:ring-1 focus:ring-[#CC785C] transition-colors" />
                </div>
                <div className="col-span-1 md:col-span-2 mt-4 pt-4 border-t border-[#EBE8E0]">
                  <button className="bg-[#191919] hover:bg-[#333] text-white rounded-lg px-6 py-3 font-medium transition-colors w-full sm:w-auto">
                    Submit Application
                  </button>
                </div>
              </div>
            </section>

            {/* Tabular Data */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif px-2">Recent Verification Records</h2>
              <div className="bg-white rounded-2xl border border-[#EBE8E0] shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#FAF9F7] border-b border-[#EBE8E0]">
                    <tr>
                      <th className="px-6 py-4 font-medium text-gray-600">Record ID</th>
                      <th className="px-6 py-4 font-medium text-gray-600">Candidate Name</th>
                      <th className="px-6 py-4 font-medium text-gray-600">Department</th>
                      <th className="px-6 py-4 font-medium text-gray-600">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE8E0]">
                    <tr className="hover:bg-[#FAF9F7] transition-colors">
                      <td className="px-6 py-4 font-medium">#ISRO-001</td>
                      <td className="px-6 py-4">Dr. Vikram Sarabhai</td>
                      <td className="px-6 py-4 text-gray-600">Space Applications</td>
                      <td className="px-6 py-4 text-[#191919]">vikram.s@isro.gov.in</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F7] transition-colors">
                      <td className="px-6 py-4 font-medium">#ISRO-002</td>
                      <td className="px-6 py-4">Dr. APJ Abdul Kalam</td>
                      <td className="px-6 py-4 text-gray-600">Launch Vehicles</td>
                      <td className="px-6 py-4 text-[#191919]">apj.kalam@isro.gov.in</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F7] transition-colors">
                      <td className="px-6 py-4 font-medium">#ISRO-003</td>
                      <td className="px-6 py-4">Prof. Satish Dhawan</td>
                      <td className="px-6 py-4 text-gray-600">Satellite Systems</td>
                      <td className="px-6 py-4 text-[#191919]">s.dhawan@isro.gov.in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Right Column: Cards, IDs, Faces */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Visual Faces */}
            <section className="bg-white p-6 rounded-2xl border border-[#EBE8E0] shadow-sm">
              <h2 className="text-lg font-serif mb-4 flex items-center justify-between">
                <span>Identity Verification</span>
                <span className="text-xs bg-[#F2EFE8] text-gray-600 px-2 py-1 rounded">2 Targets</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center bg-[#FAF9F7] p-2.5 rounded-xl border border-[#EBE8E0]">
                  <div className="w-full aspect-square overflow-hidden rounded-lg border border-[#EBE8E0] bg-gray-100 flex items-center justify-center">
                    <img 
                      src="/images/candidate_face_alpha.jpg" 
                      alt="Alpha" 
                      className="w-full h-full object-cover object-center" 
                    />
                  </div>
                  <p className="mt-2.5 text-xs text-gray-600 font-medium text-center">Candidate Face Alpha</p>
                </div>
                <div className="flex flex-col items-center bg-[#FAF9F7] p-2.5 rounded-xl border border-[#EBE8E0]">
                  <div className="w-full aspect-square overflow-hidden rounded-lg border border-[#EBE8E0] bg-gray-100 flex items-center justify-center">
                    <img 
                      src="/images/candidate_face_beta.jpg" 
                      alt="Beta" 
                      className="w-full h-full object-cover object-center" 
                    />
                  </div>
                  <p className="mt-2.5 text-xs text-gray-600 font-medium text-center">Candidate Face Beta</p>
                </div>
              </div>
            </section>

            {/* Passport OCR Document */}
            <section className="bg-white p-6 rounded-2xl border border-[#EBE8E0] shadow-sm">
              <h2 className="text-lg font-serif mb-4 flex items-center justify-between">
                <span>OCR Verification</span>
                <span className="text-xs bg-[#F2EFE8] text-gray-600 px-2 py-1 rounded">Passport</span>
              </h2>
              
              {/* Code-Rendered Passport Card */}
              <div className="w-full max-w-[480px] mx-auto rounded-xl border border-[#cbd5e1] bg-[#FAF8F3] p-4 sm:p-5 shadow-sm select-text text-[#1E293B]">
                {/* Passport Header */}
                <div className="flex items-center justify-between border-b border-[#8E9CAE]/70 pb-2 mb-3.5">
                  <div className="font-bold text-[11px] sm:text-xs tracking-wider uppercase text-[#1E293B]">
                    REPUBLIC OF INDIA / भारत गणराज्य
                  </div>
                  <div className="font-bold text-[11px] sm:text-xs tracking-widest uppercase text-[#1E293B]">
                    PASSPORT
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex gap-4 sm:gap-5 items-start">
                  {/* Left Column: Photo & Signature */}
                  <div className="w-24 sm:w-28 flex-shrink-0 flex flex-col items-center">
                    {/* Passport Photo */}
                    <div className="w-full h-32 sm:h-36 bg-[#243342] rounded-lg overflow-hidden border border-[#cbd5e1] shadow-inner relative">
                      <img 
                        src="/images/passport_portrait.png" 
                        alt="Passport Portrait" 
                        className="w-full h-full object-cover object-top block" 
                      />
                    </div>

                    {/* Signature Directly Below Photo */}
                    <div className="w-full mt-2.5 text-center">
                      <div className="text-[7.5px] sm:text-[8.5px] font-bold text-[#627D98] tracking-wider uppercase leading-none mb-1">
                        SIGNATURE
                      </div>
                      <div className="border-b border-[#1E293B]/70 pb-0.5 w-full flex justify-center">
                        <span 
                          className="text-xs sm:text-sm text-[#102A43] font-semibold italic tracking-wide block"
                          style={{ fontFamily: "'Caveat', 'Cedarville Cursive', cursive, 'Brush Script MT', sans-serif" }}
                        >
                          DEMO USER
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Passport Details Grid (5 Balanced Rows) */}
                  <div className="flex-1 grid grid-cols-2 gap-x-3 gap-y-2 w-full pt-0.5">
                    <div>
                      <div className="text-[8px] sm:text-[9px] font-bold text-[#627D98] tracking-wider uppercase leading-none mb-0.5">
                        TYPE / COUNTRY CODE
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-[#102A43] tracking-wide uppercase leading-tight">
                        P IND
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] sm:text-[9px] font-bold text-[#627D98] tracking-wider uppercase leading-none mb-0.5">
                        SEX
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-[#102A43] tracking-wide uppercase leading-tight">
                        M
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] sm:text-[9px] font-bold text-[#627D98] tracking-wider uppercase leading-none mb-0.5">
                        PASSPORT NO
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-[#102A43] tracking-wide uppercase leading-tight">
                        K1234567
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] sm:text-[9px] font-bold text-[#627D98] tracking-wider uppercase leading-none mb-0.5">
                        DATE OF BIRTH
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-[#102A43] tracking-wide uppercase leading-tight">
                        01/01/1999
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] sm:text-[9px] font-bold text-[#627D98] tracking-wider uppercase leading-none mb-0.5">
                        SURNAME
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-[#102A43] tracking-wide uppercase leading-tight">
                        DEMO
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] sm:text-[9px] font-bold text-[#627D98] tracking-wider uppercase leading-none mb-0.5">
                        PLACE OF BIRTH
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-[#102A43] tracking-wide uppercase leading-tight">
                        DEMO CITY
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] sm:text-[9px] font-bold text-[#627D98] tracking-wider uppercase leading-none mb-0.5">
                        GIVEN NAME(S)
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-[#102A43] tracking-wide uppercase leading-tight">
                        USER
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] sm:text-[9px] font-bold text-[#627D98] tracking-wider uppercase leading-none mb-0.5">
                        DATE OF ISSUE
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-[#102A43] tracking-wide uppercase leading-tight">
                        01/01/2025
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] sm:text-[9px] font-bold text-[#627D98] tracking-wider uppercase leading-none mb-0.5">
                        NATIONALITY
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-[#102A43] tracking-wide uppercase leading-tight">
                        INDIAN
                      </div>
                    </div>

                    <div>
                      <div className="text-[8px] sm:text-[9px] font-bold text-[#627D98] tracking-wider uppercase leading-none mb-0.5">
                        DATE OF EXPIRY
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-[#102A43] tracking-wide uppercase leading-tight">
                        01/01/2035
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Financial & Govt IDs */}
            <section className="bg-white p-6 rounded-2xl border border-[#EBE8E0] shadow-sm">
              <h2 className="text-lg font-serif mb-4 flex items-center justify-between">
                <span>Financial & Govt. IDs</span>
                <span className="text-xs bg-[#F2EFE8] text-gray-600 px-2 py-1 rounded">8 Targets</span>
              </h2>
              <div className="space-y-3">
                <InfoCard title="Aadhaar (Valid Verhoeff)" label="Aadhaar UID:" value="4321 8765 0987" />
                <InfoCard title="Aadhaar (Valid Verhoeff)" label="Aadhaar UID:" value="1234 5678 9012" />
                <InfoCard title="Indian PAN Card" label="Permanent Account Number:" value="ABCDE1234F" />
                <InfoCard title="Indian PAN Card" label="Business PAN:" value="XYZAQ9876S" />
                <InfoCard title="Visa Card" label="Card (Valid Luhn):" value="4111 1111 1111 1111" />
                <InfoCard title="MasterCard" label="Card (Valid Luhn):" value="5555 5555 5555 5555" />
                <InfoCard title="Amex Card" label="Card (Valid Luhn):" value="3782 822463 10005" />
                <InfoCard title="RuPay Card" label="Card (Valid Luhn):" value="6081 0000 0000 0000" />
              </div>
            </section>

            {/* Secrets & Contact */}
            <section className="bg-white p-6 rounded-2xl border border-[#EBE8E0] shadow-sm">
              <h2 className="text-lg font-serif mb-4 flex items-center justify-between">
                <span>Contact & Secrets</span>
                <span className="text-xs bg-[#F2EFE8] text-gray-600 px-2 py-1 rounded">7 Targets</span>
              </h2>
              <div className="space-y-3">
                <InfoCard title="Email Address" label="Primary:" value="john.doe@example.com" />
                <InfoCard title="Email Address" label="Secondary:" value="sarah.smith@company.in" />
                <InfoCard title="Indian Phone" label="Mobile:" value="+91 98765 43210" />
                <InfoCard title="International Phone" label="Phone:" value="+1 (415) 555-2671" />
                <InfoCard title="AWS Credentials" label="Access Key ID:" value="AKIAIOSFODNN7EXAMPLE" />
                <InfoCard title="GitHub Access" label="Personal Token:" value="ghp_aBcDEfgHIJkLMnOpqRStUvw" />
                <InfoCard title="Google Cloud" label="API Key:" value="AIzaSyB_dummykey_example" />
              </div>
            </section>

          </div>
        </div>
      </main>
      
      <footer className="border-t border-[#EBE8E0] py-8 text-center text-sm text-gray-500">
        <p>© 2026 Learnova Systems. Internal Benchmark Suite.</p>
      </footer>
    </div>
  );
}

function InfoCard({ title, label, value }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-[#FAF9F7] border border-[#EBE8E0] hover:border-[#CC785C]/30 transition-colors">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-gray-500">{label}</span>
          <span className="text-sm font-medium text-[#191919]">{value}</span>
        </div>
      </div>
    </div>
  );
}



