
import React, { useState, useMemo } from 'react';
import { SERVICE_DATA } from '../constants';
import { EstimateSelection } from '../types';
import { GlassCard } from './ui/GlassCard';
import { GoldButton } from './ui/GoldButton';
import { CountUp } from './ui/CountUp';
import { Calculator, FileText, Check } from 'lucide-react';

interface EstimatorProps {
  onShowInvoice: (selection: EstimateSelection, total: number, maintenance: number) => void;
}

export const Estimator: React.FC<EstimatorProps> = ({ onShowInvoice }) => {
  const [activeCategory, setActiveCategory] = useState(SERVICE_DATA[0].id);
  // Store selections as: { [categoryId]: { [itemId]: tierIndex } }
  const [selections, setSelections] = useState<EstimateSelection>({});
  
  // Select a tier for an item (toggle if already selected)
  const selectTier = (categoryId: string, itemId: string, tierIndex: number) => {
    const category = SERVICE_DATA.find(c => c.id === categoryId);
    const isSingleMode = category?.selectionMode === 'single';

    setSelections(prev => {
      const catSelections = prev[categoryId] || {};
      const currentTier = catSelections[itemId];

      // If clicking the same tier, deselect it
      if (currentTier === tierIndex) {
        const newCatSelections = { ...catSelections };
        delete newCatSelections[itemId];
        return { ...prev, [categoryId]: newCatSelections };
      }

      // If single mode, replace entire category selection with this new item
      if (isSingleMode) {
        return {
          ...prev,
          [categoryId]: {
            [itemId]: tierIndex
          }
        };
      }

      // Otherwise select the new tier (replacing existing tier for this item if any)
      return {
        ...prev,
        [categoryId]: {
          ...catSelections,
          [itemId]: tierIndex
        }
      };
    });
  };

  // Calculations
  const { totalOneTime, totalMaintenance, selectedItemsCount } = useMemo(() => {
    let oneTime = 0;
    let count = 0;

    SERVICE_DATA.forEach(cat => {
      const catSelections = selections[cat.id] || {};
      Object.entries(catSelections).forEach(([itemId, tierIndex]) => {
        const item = cat.items.find(i => i.id === itemId);
        if (item && item.tiers[tierIndex as number]) {
          oneTime += item.tiers[tierIndex as number].price;
          count++;
        }
      });
    });

    return {
      totalOneTime: oneTime,
      totalMaintenance: oneTime * 0.25,
      selectedItemsCount: count
    };
  }, [selections]);

  const activeCategoryData = SERVICE_DATA.find(c => c.id === activeCategory);

  return (
    <div className="max-w-[1800px] mx-auto px-4 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* LEFT COLUMN: Categories */}
      <div className="lg:col-span-2 space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-[#F5C26B] to-[#D8891C] rounded-full"></span>
            Categories
          </h2>
          <div className="space-y-2 sticky top-24">
            {SERVICE_DATA.map(cat => {
               const catSel = selections[cat.id] || {};
               const count = Object.keys(catSel).length;
               const isActive = activeCategory === cat.id;
               
               return (
                 <button
                   key={cat.id}
                   onClick={() => setActiveCategory(cat.id)}
                   className={`
                     w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex justify-between items-center group
                     ${isActive 
                       ? 'bg-gradient-to-r from-[#F5C26B]/20 to-transparent border-l-2 border-[#F5C26B]' 
                       : 'hover:bg-white/5 border-l-2 border-transparent text-gray-400 hover:text-white'}
                   `}
                 >
                   <span className={`font-medium text-sm ${isActive ? 'text-[#F5C26B]' : ''}`}>{cat.name}</span>
                   {count > 0 && (
                     <span className="bg-[#D8891C] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                       {count}
                     </span>
                   )}
                 </button>
               );
            })}
          </div>
        </div>
      </div>

      {/* MIDDLE COLUMN: Features Table */}
      <div className="lg:col-span-7 space-y-6">
        <div className="mb-6">
           <div className="flex items-center gap-3">
             <h2 className="text-3xl font-bold text-white mb-1">
               {activeCategoryData?.name}
             </h2>
             {activeCategoryData?.selectionMode === 'single' && (
                <span className="bg-white/10 text-xs px-2 py-1 rounded border border-white/20 text-gray-300">
                  Single Selection Only
                </span>
             )}
           </div>
           <p className="text-gray-400">
             {activeCategoryData?.description}
           </p>
        </div>

        {/* Desktop Header for Tiers */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 text-xs uppercase tracking-widest text-[#F5C26B] font-bold opacity-70 mb-2">
          <div className="col-span-3">Feature</div>
          <div className="col-span-3">Minimum (Basic)</div>
          <div className="col-span-3">Medium (Enhanced)</div>
          <div className="col-span-3">Maximum (Enterprise)</div>
        </div>

        <div className="space-y-4 pb-20">
          {activeCategoryData?.items.map((item) => {
            const selectedTierIndex = selections[activeCategory]?.[item.id];
            
            // Check if another item in this category is selected (for dimming effect in single mode)
            const isSingleMode = activeCategoryData.selectionMode === 'single';
            const categorySelections = selections[activeCategory] || {};
            const hasSelectionInCat = Object.keys(categorySelections).length > 0;
            const isOtherItemSelected = isSingleMode && hasSelectionInCat && selectedTierIndex === undefined;

            return (
              <GlassCard 
                key={item.id} 
                className={`
                  p-0 overflow-hidden border-white/5 hover:border-white/10 transition-all duration-300
                  ${isOtherItemSelected ? 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0' : 'opacity-100'}
                `}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x divide-white/10">
                  {/* Feature Name */}
                  <div className="md:col-span-3 p-6 flex flex-col justify-center bg-white/5 md:bg-transparent">
                    <h3 className="text-lg font-medium text-white mb-1">{item.name}</h3>
                    {selectedTierIndex !== undefined && (
                      <div className="text-xs text-[#F5C26B] flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        {item.tiers[selectedTierIndex].name}
                      </div>
                    )}
                  </div>

                  {/* Tiers */}
                  {item.tiers.map((tier, index) => {
                    const isSelected = selectedTierIndex === index;
                    const isOtherSelected = selectedTierIndex !== undefined && !isSelected;

                    return (
                      <div 
                        key={index}
                        onClick={() => selectTier(activeCategory, item.id, index)}
                        className={`
                          md:col-span-3 p-6 cursor-pointer transition-all duration-300 relative group
                          ${isSelected ? 'bg-[#F5C26B]/20' : 'hover:bg-white/5'}
                          ${isOtherSelected ? 'opacity-50 hover:opacity-100' : 'opacity-100'}
                        `}
                      >
                        {/* Mobile Label */}
                        <div className="md:hidden text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                          {index === 0 ? 'Basic' : index === 1 ? 'Enhanced' : 'Enterprise'}
                        </div>

                        <div className={`text-lg font-bold mb-1 transition-colors ${isSelected ? 'text-[#F5C26B]' : 'text-white'}`}>
                          $<CountUp value={tier.price} duration={400} />
                        </div>
                        <div className={`text-xs mb-2 transition-colors ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                          {tier.name}
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {tier.description}
                        </p>

                        {isSelected && (
                          <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#F5C26B] flex items-center justify-center">
                            <Check className="w-3 h-3 text-black" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* RIGHT COLUMN: Sticky Estimate */}
      <div className="lg:col-span-3">
        <div className="sticky top-24 space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-[#F5C26B]/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-[#F5C26B]" />
              <span className="text-sm font-bold uppercase tracking-widest text-[#F5C26B]">Estimate Summary</span>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Total Development</p>
                <div className="text-4xl font-bold text-white tracking-tight flex items-baseline gap-1">
                  <span className="text-2xl text-gray-500">$</span>
                  <span className="gold-gradient-text">
                    <CountUp value={totalOneTime} />
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-1">Annual Maintenance (25%)</p>
                <div className="text-xl font-medium text-white flex items-baseline gap-1">
                  <span className="text-sm text-gray-500">$</span>
                  <CountUp value={totalMaintenance} decimals={totalMaintenance % 1 !== 0 ? 2 : 0} />
                  <span className="text-xs text-gray-500">/year</span>
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <GoldButton 
                  onClick={() => onShowInvoice(selections, totalOneTime, totalMaintenance)}
                  disabled={selectedItemsCount === 0}
                  className="w-full"
                >
                  <FileText className="w-4 h-4" />
                  Review & Book
                </GoldButton>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-4 rounded-xl">
             <h4 className="text-[#F5C26B] text-xs font-bold uppercase mb-2">Selected Features ({selectedItemsCount})</h4>
             <div className="space-y-1">
               {selectedItemsCount === 0 ? (
                 <p className="text-xs text-gray-500 italic">No features selected</p>
               ) : (
                 <div className="flex flex-wrap gap-1">
                   {Object.entries(selections).map(([catId, items]) => 
                      Object.keys(items).map(itemId => {
                        return (
                          <div key={itemId} className="w-2 h-2 rounded-full bg-[#F5C26B] opacity-80" />
                        )
                      })
                   )}
                 </div>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
