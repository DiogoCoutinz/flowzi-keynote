interface PlaceholderBoxProps {
  label: string;
  className?: string;
}

export const PlaceholderBox = ({ label, className = '' }: PlaceholderBoxProps) => (
  <div
    className={`relative flex items-center justify-center overflow-hidden rounded-lg ${className}`}
    style={{
      background: 'linear-gradient(135deg, rgba(26,111,255,0.04), rgba(123,47,255,0.04))',
      border: '1px solid rgba(26,111,255,0.2)',
      boxShadow: 'inset 0 0 40px rgba(26,111,255,0.03)',
    }}
  >
    {/* Corner brackets */}
    <div className="absolute top-2 left-2 w-3 h-3 border-l border-t" style={{ borderColor: 'rgba(26,111,255,0.4)' }} />
    <div className="absolute top-2 right-2 w-3 h-3 border-r border-t" style={{ borderColor: 'rgba(26,111,255,0.4)' }} />
    <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b" style={{ borderColor: 'rgba(26,111,255,0.4)' }} />
    <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b" style={{ borderColor: 'rgba(26,111,255,0.4)' }} />

    <span
      className="text-xs text-center px-4 font-light"
      style={{ color: 'rgba(26,111,255,0.4)', fontSize: '10px', letterSpacing: '0.1em' }}
    >
      {label}
    </span>
  </div>
);
