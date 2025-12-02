import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick, hoverEffect = false }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        glass-panel rounded-xl p-6 transition-all duration-300
        ${hoverEffect ? 'hover:border-[#F5C26B]/50 hover:shadow-[0_0_15px_rgba(245,194,107,0.1)] cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
