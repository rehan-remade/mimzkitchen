export default function Marquee() {
  const text =
    "Cinnamon Buns \u2726 Basque Cheesecake \u2726 Baked Fresh Daily \u2726 Small Batch \u2726 Rustic Homemade Treats \u2726 Made with Love \u2726 ";

  return (
    <section className="bg-oak overflow-hidden py-4">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-serif italic text-cream text-lg md:text-xl tracking-wide mx-0"
          >
            {text.split("\u2726").map((segment, j) => (
              <span key={j}>
                {segment}
                {j < text.split("\u2726").length - 1 && (
                  <span className="text-gold">{"\u2726"}</span>
                )}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}
