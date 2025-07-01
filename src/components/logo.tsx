import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17L12 12L2 17Z" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7V17" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 7V17" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V22" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
