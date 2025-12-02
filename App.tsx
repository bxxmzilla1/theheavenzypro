
import React, { useState } from 'react';
import { Estimator } from './components/Estimator';
import { InvoiceModal } from './components/InvoiceModal';
import { LandingPage } from './components/LandingPage';
import { EstimateSelection } from './types';

function App() {
  const [view, setView] = useState<'landing' | 'app'>('landing');
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState<{sel: EstimateSelection, total: number, maint: number} | null>(null);

  const handleShowInvoice = (sel: EstimateSelection, total: number, maint: number) => {
    setInvoiceData({ sel, total, maint });
    setShowInvoice(true);
  };

  // Render Landing Page if view is 'landing'
  if (view === 'landing') {
    return <LandingPage onStart={() => setView('app')} />;
  }

  // Render Main App
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-[#F5C26B] selection:text-black animate-in fade-in duration-700">
      
      {/* Background Ambient Glow */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#F5C26B]/10 to-transparent pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('landing')}>
            <img 
              src="https://github.com/bxxmzilla1/tinder/blob/main/Screenshot%202025-11-30%20183436.png?raw=true" 
              alt="Heavenzy Logo" 
              className="h-8 w-auto object-contain"
            />
            <div>
              <h1 className="text-xl font-bold tracking-wide uppercase">Heavenzy</h1>
              <p className="text-[10px] text-[#F5C26B] tracking-[0.2em] uppercase">AI Estimator</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 min-h-[calc(100vh-80px)]">
        <Estimator 
          onShowInvoice={handleShowInvoice}
        />
      </main>

      {/* Invoice Modal */}
      {showInvoice && invoiceData && (
        <InvoiceModal 
          selection={invoiceData.sel}
          totalOneTime={invoiceData.total}
          totalMaintenance={invoiceData.maint}
          onClose={() => setShowInvoice(false)}
        />
      )}
      
    </div>
  );
}

export default App;
