import React, { useState } from 'react';
import { Check, RefreshCw, HardDrive, BookOpen, MessageSquare, Folder, ExternalLink, ShieldCheck } from 'lucide-react';

export default function IntegrationsSection() {
  const [integrations, setIntegrations] = useState([
    {
      id: 'classroom',
      name: 'Google Classroom',
      category: 'LMS & Roster Sync',
      icon: BookOpen,
      color: '#0F9D58',
      connected: true,
      syncCount: '3 Classes • 94 Students',
      lastSynced: '2 mins ago',
      details: 'Syncs student rosters, assignment deadlines, and historical coursework scores.',
    },
    {
      id: 'gdrive',
      name: 'Google Drive',
      category: 'Document Ingestion',
      icon: HardDrive,
      color: '#4285F4',
      connected: true,
      syncCount: '48 PDFs & Syllabi',
      lastSynced: 'Just now',
      details: 'Ingests teacher lecture slides, problem sets, and textbook reference PDFs into AI memory.',
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      category: 'Communication Sync',
      icon: MessageSquare,
      color: '#6264A7',
      connected: true,
      syncCount: '4 Class Channels',
      lastSynced: '15 mins ago',
      details: 'Surfaces AI intervention alerts directly to teacher channels and handles peer chat prompts.',
    },
    {
      id: 'onedrive',
      name: 'Microsoft OneDrive',
      category: 'District Repositories',
      icon: Folder,
      color: '#0078D4',
      connected: true,
      syncCount: '12 District Curriculum Folders',
      lastSynced: '1 hour ago',
      details: 'Indexes state standard exam archives and historical prerequisite diagnostic benchmarks.',
    },
  ]);

  const [syncingId, setSyncingId] = useState(null);

  const toggleConnection = (id) => {
    setIntegrations((prev) =>
      prev.map((item) => (item.id === id ? { ...item, connected: !item.connected } : item))
    );
  };

  const handleManualSync = (id) => {
    setSyncingId(id);
    setTimeout(() => {
      setSyncingId(null);
      setIntegrations((prev) =>
        prev.map((item) => (item.id === id ? { ...item, lastSynced: 'Just now' } : item))
      );
    }, 1000);
  };

  return (
    <section className="py-24 border-t border-[#E8E5DF] bg-[#FAF9F7] w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#CC785C] uppercase">
              <ShieldCheck className="w-4 h-4" />
              Unified Ecosystem Connectivity
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal leading-tight">
              Connect your existing tools in two clicks. Zero migration friction.
            </h2>
          </div>
          <p className="text-[#6B6B68] text-base max-w-md leading-relaxed">
            Learnova seamlessly indexes your current Google, Microsoft, and LMS content so your tutoring AI operates on your exact district curriculum.
          </p>
        </div>

        {/* Integrations Grid - Edge to Edge 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((item) => {
            const IconComponent = item.icon;
            const isSyncing = syncingId === item.id;

            return (
              <div
                key={item.id}
                className={`bg-[#FFFFFF] border rounded-xl p-6 flex flex-col justify-between space-y-6 transition-all shadow-xs hover:border-[#CC785C]/40 ${
                  item.connected ? 'border-[#E8E5DF]' : 'border-[#E8E5DF] opacity-75'
                }`}
              >
                <div className="space-y-4">
                  {/* Icon & Status Pill */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF9F7] border border-[#E8E5DF] flex items-center justify-center">
                      <IconComponent className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <button
                      onClick={() => toggleConnection(item.id)}
                      className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-colors ${
                        item.connected
                          ? 'bg-[#F7ECE8] text-[#CC785C] border border-[#CC785C]/30'
                          : 'bg-[#F4F2ED] text-[#6B6B68] border border-[#E8E5DF]'
                      }`}
                    >
                      {item.connected ? 'Connected' : 'Disconnected'}
                    </button>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <span className="text-[11px] font-mono text-[#6B6B68] uppercase tracking-wider block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-serif text-[#191919] font-medium">{item.name}</h3>
                  </div>

                  <p className="text-xs text-[#6B6B68] leading-relaxed">{item.details}</p>
                </div>

                {/* Footer Sync Stats & Action */}
                <div className="pt-4 border-t border-[#E8E5DF] space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#6B6B68]">
                    <span>{item.syncCount}</span>
                    <span className="text-[11px]">Synced {item.lastSynced}</span>
                  </div>

                  {item.connected && (
                    <button
                      onClick={() => handleManualSync(item.id)}
                      disabled={isSyncing}
                      className="w-full py-2 bg-[#FAF9F7] hover:bg-[#F4F2ED] border border-[#E8E5DF] rounded-lg text-xs text-[#191919] font-medium transition-colors flex items-center justify-center gap-1.5"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 text-[#CC785C] ${isSyncing ? 'animate-spin' : ''}`} />
                      <span>{isSyncing ? 'Syncing files...' : 'Re-sync data source'}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
