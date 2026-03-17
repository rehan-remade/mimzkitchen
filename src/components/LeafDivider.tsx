import Image from "next/image";

export default function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-12 bg-gold/40" />
      <Image
        src="/leaf.png"
        alt=""
        width={24}
        height={24}
        quality={100}
        className="w-12 h-12"
        aria-hidden
      />
      <span className="h-px w-12 bg-gold/40" />
    </div>
  );
}
