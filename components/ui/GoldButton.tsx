import React from 'react';
import { Loader2 } from 'lucide-react';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  isLoading?: boolean;
}

export const GoldButton: React.FC<GoldButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  isLoading,
  ...props 
}) => {
  const baseStyles = "relative px-6 py-3 rounded-lg font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#F5C26B] to-[#D8891C] text-black hover:shadow-[0_0_20px_rgba(245,194,107,0.4)] hover:scale-[1.02]",
    outline: "border border-[#F5C26B] text-[#F5C26B] hover:bg-[#F5C26B]/10",
    ghost: "text-white/60 hover:text-[#F5C26B] hover:bg-white/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
};
