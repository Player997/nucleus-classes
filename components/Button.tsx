import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 border text-base font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 tracking-wide";
  
  const variants = {
    primary: "border-transparent text-white bg-accent hover:bg-accentHover shadow-md hover:shadow-lg focus:ring-accent transform hover:-translate-y-0.5",
    outline: "border-primary text-primary bg-transparent hover:bg-slate-50 focus:ring-primary",
    white: "border-transparent text-primary bg-white hover:bg-slate-50 shadow-md hover:shadow-lg focus:ring-white transform hover:-translate-y-0.5",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};