import Image from "next/image";

export default function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-12 bg-gold/40" />
      <Image
        src="/leaf.png"
        alt=""
        width={48}
        height={48}
        quality={100}
        className="w-12 h-12"
        unoptimized
        aria-hidden
      />
      <span className="h-px w-12 bg-gold/40" />
    </div>
  );
}
