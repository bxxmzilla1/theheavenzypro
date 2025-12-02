
import React, { useState } from 'react';
import { EstimateSelection } from '../types';
import { SERVICE_DATA } from '../constants';
import { GoldButton } from './ui/GoldButton';
import { CountUp } from './ui/CountUp';
import { X } from 'lucide-react';

interface InvoiceModalProps {
  selection: EstimateSelection;
  totalOneTime: number;
  totalMaintenance: number;
  onClose: () => void;
}

export const InvoiceModal: React.FC<InvoiceModalProps> = ({ 
  selection, totalOneTime, totalMaintenance, onClose 
}) => {
  const [selectedOption, setSelectedOption] = useState<'option1' | 'option2'>('option1');
  const [installmentMonths, setInstallmentMonths] = useState<12 | 18 | 24 | 36>(12);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const getSelectedItems = () => {
    const items: { category: string; name: string; tierName: string; price: number }[] = [];
    
    SERVICE_DATA.forEach(cat => {
      const catSelections = selection[cat.id] || {};
      
      Object.entries(catSelections).forEach(([itemId, tierIndex]) => {
        const item = cat.items.find(i => i.id === itemId);
        if (item && item.tiers[tierIndex as number]) {
          const tier = item.tiers[tierIndex as number];
          items.push({ 
            category: cat.name, 
            name: item.name, 
            tierName: tier.name, 
            price: tier.price 
          });
        }
      });
    });
    return items;
  };

  const selectedItems = getSelectedItems();
  const date = new Date().toLocaleDateString();

  // --- Calculations ---
  
  // Base
  const devFee = totalOneTime;
  const taxRate = 0.05;
  const taxAmountTotal = devFee * taxRate; // Total tax on base fee
  
  // Retainer Calculations
  const annualRetainer = devFee * 0.25;
  const monthlyRetainer = annualRetainer / 12;
  
  // Option 1: Upfront
  const opt1_downpayment = devFee * 0.50;
  const opt1_grandTotal = devFee + taxAmountTotal;

  // Option 2: Installments
  const opt2_downpayment = devFee * 0.30;

  const getFinancingFee = (months: number) => {
    if (months === 12) return 0.20;
    if (months === 18) return 0.25;
    if (months === 24) return 0.30;
    return 0.35; // 36 months
  };

  // Monthly Installment Calculation: 
  // Principal = Development Fee - Downpayment
  // Monthly Payment = (Principal + Financing Fee) / Months
  const calcMonthlyPayment = (months: 12 | 18 | 24 | 36) => {
    const feePercent = getFinancingFee(months);
    const principal = devFee - opt2_downpayment;
    return (principal * (1 + feePercent)) / months;
  };

  // Dynamic values based on selected installment month
  const currentMonthlyInstallment = calcMonthlyPayment(installmentMonths);
  
  // Option 2 Monthly Recurring Total (Installment + Retainer + Tax on Monthly)
  // Assuming tax is applied to the monthly billed amount
  const monthlySubtotal = currentMonthlyInstallment + monthlyRetainer;
  const monthlyTax = monthlySubtotal * taxRate;
  const totalMonthlyBill = monthlySubtotal + monthlyTax;

  // Due Now Calculation for Option 2 (Downpayment + Tax on Downpayment)
  const downpaymentTax = opt2_downpayment * taxRate;
  const totalDueNow = opt2_downpayment + downpaymentTax;
  
  const handleSavePdf = async () => {
    setIsGeneratingPdf(true);
    const element = document.getElementById('invoice-content');
    
    // @ts-ignore
    if (typeof window.html2pdf === 'undefined') {
        console.warn('html2pdf not loaded, falling back to print');
        window.print();
        setIsGeneratingPdf(false);
        return;
    }

    const opt = {
      margin: [0.3, 0.3, 0.3, 0.3],
      filename: `Heavenzy-Estimate-${Math.floor(Math.random() * 10000)}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        backgroundColor: '#000000',
        logging: false
      },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    try {
        // @ts-ignore
        await window.html2pdf().set(opt).from(element).save();
    } catch (e) {
        console.error('PDF Generation Failed:', e);
        window.print();
    } finally {
        setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/90 backdrop-blur-sm pt-10 pb-10">
      <div className="relative w-full max-w-4xl bg-black border border-white/20 rounded-xl shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Modal Controls (Hidden in Print) */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 print:hidden">
          <h2 className="text-xl font-bold text-white">Project Invoice Preview</h2>
          <div className="flex gap-2">
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Area */}
        <div id="invoice-content" className="p-10 bg-black text-white min-h-[800px]">
          {/* Header */}
          <div className="flex justify-between items-start mb-12 border-b border-[#F5C26B] pb-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter mb-1 gold-gradient-text uppercase">Heavenzy</h1>
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">AI Development</p>
            </div>
          </div>

          {/* Line Items */}
          <div className="mb-12">
            <table className="w-full text-left">
              <thead className="border-b border-white/20">
                <tr>
                  <th className="pb-4 text-xs uppercase tracking-wider text-gray-500">Service Feature</th>
                  <th className="pb-4 text-xs uppercase tracking-wider text-gray-500">Tier / Details</th>
                  <th className="pb-4 text-xs uppercase tracking-wider text-gray-500 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {selectedItems.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-4 font-medium">{item.name}</td>
                    <td className="py-4 text-gray-400 text-sm">{item.tierName} <span className="text-gray-600">({item.category})</span></td>
                    <td className="py-4 text-right font-medium">${item.price.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment Options Section */}
          <div className="mt-12">
            <h3 className="text-[#F5C26B] text-sm uppercase tracking-widest mb-6 font-bold border-b border-white/10 pb-2">Select Payment Plan</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Option 1 Card */}
              <div 
                onClick={() => setSelectedOption('option1')}
                className={`
                  glass-panel p-6 rounded-xl border relative cursor-pointer transition-all duration-300
                  ${selectedOption === 'option1' 
                    ? 'border-[#F5C26B] bg-[#F5C26B]/5 shadow-[0_0_20px_rgba(245,194,107,0.1)]' 
                    : 'border-white/10 hover:border-white/30'}
                `}
              >
                <div className={`absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl transition-colors ${selectedOption === 'option1' ? 'bg-[#F5C26B] text-black' : 'bg-white/10 text-gray-400'}`}>
                  OPTION 1 {selectedOption === 'option1' && '(SELECTED)'}
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedOption === 'option1' ? 'border-[#F5C26B]' : 'border-gray-600'}`}>
                    {selectedOption === 'option1' && <div className="w-3 h-3 rounded-full bg-[#F5C26B]" />}
                  </div>
                  <h4 className={`text-xl font-bold ${selectedOption === 'option1' ? 'text-white' : 'text-gray-400'}`}>Upfront Service</h4>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-baseline border-b border-dashed border-gray-800 pb-2">
                    <span className="text-gray-400">Development Fee</span>
                    <span className="text-xl font-bold text-white">
                      $<CountUp value={devFee} />
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-baseline text-[#F5C26B]">
                    <span>Downpayment (50%)</span>
                    <span>$<CountUp value={opt1_downpayment} /></span>
                  </div>
                  
                  <div className="flex justify-between items-baseline text-gray-400">
                    <span>Monthly Retainer Fee</span>
                    <span>$<CountUp value={monthlyRetainer} decimals={2} />/mo</span>
                  </div>
                  
                  <div className="flex justify-between items-baseline text-gray-500 text-xs">
                    <span>Tax (5%)</span>
                    <span>$<CountUp value={taxAmountTotal} decimals={2} /></span>
                  </div>
                </div>
              </div>

              {/* Option 2 Card */}
              <div 
                onClick={() => setSelectedOption('option2')}
                className={`
                  glass-panel p-6 rounded-xl border relative cursor-pointer transition-all duration-300
                  ${selectedOption === 'option2' 
                    ? 'border-[#F5C26B] bg-[#F5C26B]/5 shadow-[0_0_20px_rgba(245,194,107,0.1)]' 
                    : 'border-white/10 hover:border-white/30'}
                `}
              >
                <div className={`absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl transition-colors ${selectedOption === 'option2' ? 'bg-[#F5C26B] text-black' : 'bg-white/10 text-gray-400'}`}>
                  OPTION 2 {selectedOption === 'option2' && '(SELECTED)'}
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedOption === 'option2' ? 'border-[#F5C26B]' : 'border-gray-600'}`}>
                    {selectedOption === 'option2' && <div className="w-3 h-3 rounded-full bg-[#F5C26B]" />}
                  </div>
                  <h4 className={`text-xl font-bold ${selectedOption === 'option2' ? 'text-white' : 'text-gray-400'}`}>Installments Plan</h4>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-baseline border-b border-dashed border-gray-800 pb-2">
                    <span className="text-gray-400">Development Fee</span>
                    <span className="text-xl font-bold text-white">
                       $<CountUp value={devFee} />
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline text-[#F5C26B]">
                    <span>Downpayment (30%)</span>
                    <span>$<CountUp value={opt2_downpayment} /></span>
                  </div>

                  <div className="flex justify-between items-baseline text-gray-400">
                    <span>Monthly Retainer Fee</span>
                    <span>$<CountUp value={monthlyRetainer} decimals={2} />/mo</span>
                  </div>
                  
                  <div className="flex justify-between items-baseline text-gray-500 text-xs">
                    <span>Tax (5%)</span>
                    <span>$<CountUp value={taxAmountTotal} decimals={2} /></span>
                  </div>

                  {/* Installment Selector */}
                  <div className="bg-black/40 border border-white/5 p-3 rounded-lg space-y-2 my-4">
                    {[12, 18, 24, 36].map((months) => {
                       const m = months as 12 | 18 | 24 | 36;
                       const fee = m === 12 ? '20%' : m === 18 ? '25%' : m === 24 ? '30%' : '35%';
                       const monthlyAmt = calcMonthlyPayment(m);
                       const isSelected = installmentMonths === m;
                       
                       return (
                         <div 
                           key={m}
                           onClick={(e) => {
                             e.stopPropagation(); // Prevent parent click
                             setSelectedOption('option2');
                             setInstallmentMonths(m);
                           }}
                           className={`
                             flex justify-between items-center text-xs p-2 rounded cursor-pointer transition-all
                             ${isSelected && selectedOption === 'option2'
                               ? 'bg-[#F5C26B]/20 text-white ring-1 ring-[#F5C26B]/50' 
                               : 'hover:bg-white/5 text-gray-400'}
                           `}
                         >
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${isSelected && selectedOption === 'option2' ? 'border-[#F5C26B]' : 'border-gray-600'}`}>
                                {isSelected && selectedOption === 'option2' && <div className="w-1.5 h-1.5 rounded-full bg-[#F5C26B]" />}
                              </div>
                              <span>{m} Months <span className="text-gray-500">(+{fee} Finance Fee)</span></span>
                            </div>
                            <span className="font-medium">${monthlyAmt.toLocaleString(undefined, {maximumFractionDigits: 0})}/mo</span>
                         </div>
                       );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Dynamic Footer Area */}
          <div className="mt-12 p-6 bg-[#F5C26B]/5 border border-[#F5C26B]/30 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4">
             {selectedOption === 'option1' ? (
                // OPTION 1 FOOTER: Standard Total
                <>
                  <div>
                    <p className="text-[#F5C26B] text-xs uppercase tracking-widest font-bold">Total Upfront Cost</p>
                    <p className="text-gray-400 text-xs mt-1">
                      Development Fee + Tax
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white tracking-tighter">
                      $<CountUp value={opt1_grandTotal} />
                    </div>
                  </div>
                </>
             ) : (
                // OPTION 2 FOOTER: Monthly Breakdown
                <>
                  <div>
                    <p className="text-[#F5C26B] text-xs uppercase tracking-widest font-bold">Monthly Payment</p>
                    <p className="text-gray-400 text-xs mt-1">
                      Installment + Retainer + Tax
                    </p>
                    <p className="text-[#F5C26B] text-[10px] mt-2 bg-[#F5C26B]/10 inline-block px-2 py-1 rounded">
                      Due Now: $<CountUp value={totalDueNow} /> (Downpayment + Tax)
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white tracking-tighter">
                      $<CountUp value={totalMonthlyBill} />
                      <span className="text-lg text-gray-500 font-normal">/mo</span>
                    </div>
                    <p className="text-xs text-[#F5C26B] mt-1">
                      for {installmentMonths} months
                    </p>
                  </div>
                </>
             )}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-600">
            <p>Heavenzy AI Development • San Francisco, CA • hello@heavenzy.ai</p>
          </div>
        </div>

        {/* Footer Actions (Hidden in Print) */}
        <div className="p-6 border-t border-white/10 flex justify-end gap-4 print:hidden bg-black rounded-b-xl">
           <GoldButton variant="ghost" onClick={onClose} disabled={isGeneratingPdf}>Cancel</GoldButton>
           <GoldButton onClick={handleSavePdf} isLoading={isGeneratingPdf}>Save as PDF</GoldButton>
        </div>

        <style>{`
          @media print {
            body * {
              visibility: hidden;
            }
            #invoice-content, #invoice-content * {
              visibility: visible;
            }
            #invoice-content {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              background: black !important;
              color: white !important;
              print-color-adjust: exact;
            }
            .glass-panel {
              border: 1px solid #333;
            }
          }
        `}</style>
      </div>
    </div>
  );
};
