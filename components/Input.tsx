import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  textarea?: boolean;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  textarea = false, 
  error, 
  className = '', 
  id,
  ...props 
}) => {
  const inputId = id || props.name || label.toLowerCase().replace(/\s+/g, '-');
  
  const baseStyles = `
    w-full px-4 py-3 
    bg-white border-2 
    text-gray-900 placeholder-gray-500
    rounded-md shadow-sm
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent
  `;

  const borderStyle = error ? 'border-red-500' : 'border-gray-300';

  return (
    <div className="mb-6">
      <label 
        htmlFor={inputId} 
        className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide"
      >
        {label}
      </label>
      
      {textarea ? (
        <textarea
          id={inputId}
          className={`${baseStyles} ${borderStyle} min-h-[120px] ${className}`}
          {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
        />
      ) : (
        <input
          id={inputId}
          className={`${baseStyles} ${borderStyle} ${className}`}
          {...props as React.InputHTMLAttributes<HTMLInputElement>}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};