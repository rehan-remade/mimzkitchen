const items = [
  "Cinnamon Rolls",
  "Basque Cheesecake",
  "Baked Fresh",
  "Small Batch",
  "Rustic Homemade Treats",
  "Made with Love",
];

function Dot() {
  return (
    <span className="w-1.5 h-1.5 rounded-full bg-gold mx-5 inline-block" />
  );
}

export default function Marquee() {
  return (
    <section className="bg-espresso overflow-hidden py-4">
      <div className="animate-marquee whitespace-nowrap flex">
        {[0, 1, 2, 3].map((copy) =>
          items.map((item, i) => (
            <span key={`${copy}-${i}`} className="inline-flex items-center">
              <span className="font-serif italic text-cream text-lg md:text-xl tracking-wide">
                {item}
              </span>
              <Dot />
            </span>
          ))
        )}
      </div>
    </section>
  );
}
