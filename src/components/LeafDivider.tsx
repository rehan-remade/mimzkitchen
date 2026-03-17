export default function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-12 bg-gold/40" />
      <svg
        viewBox="0 0 20 20"
        className="w-4 h-4 text-gold"
        fill="currentColor"
      >
        <path d="M10 3C10 3 4 8 4 12c0 3.3 2.7 5 6 5s6-1.7 6-5c0-4-6-9-6-9z" />
        <path d="M10 8v9" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="h-px w-12 bg-gold/40" />
    </div>
  );
}
