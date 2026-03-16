/**
 * MediaSlot — placeholder image component for editorial photography slots.
 * Renders a styled placeholder with label until real images are added.
 */
export default function MediaSlot({
  shotId,
  label,
  className = "",
}: {
  shotId: string;
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full h-full bg-parchment-dark flex flex-col items-center justify-center overflow-hidden ${className}`}
    >
      {/* Decorative background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="#5c3d1e" strokeWidth="0.3" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#5c3d1e" strokeWidth="0.3" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="#5c3d1e" strokeWidth="0.2" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="#5c3d1e" strokeWidth="0.2" />
      </svg>

      {/* Icon */}
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10 text-oak/20 mb-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="6" y="10" width="36" height="28" rx="2" />
        <circle cx="17" cy="21" r="4" />
        <path d="M42 32l-10-10-14 14" />
        <path d="M28 36l-6-6-16 8" />
      </svg>

      {/* Label */}
      <span className="font-serif italic text-sm text-oak/30">{label}</span>
      <span className="font-sans text-[0.6rem] tracking-[0.15em] text-oak/20 mt-1 uppercase">
        Shot {shotId}
      </span>
    </div>
  );
}
