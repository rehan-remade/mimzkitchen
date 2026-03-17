"use client";

import { motion } from "framer-motion";
import LeafDivider from "@/components/LeafDivider";

const faqs = [
  {
    question: "What are your cinnamon rolls made with?",
    answer:
      "Our cinnamon rolls are made with real butter, free-range eggs, cinnamon, and a cream cheese frosting. Every roll is handmade in small batches and baked fresh to order. We never use preservatives or artificial flavourings.",
  },
  {
    question: "What is a Basque cheesecake?",
    answer:
      "A Basque cheesecake is a crustless, custard-style cheesecake baked at a high temperature. The top caramelises deeply during baking, creating a rich toffee-like crust while the centre stays impossibly creamy. Ours is inspired by the original recipe from Northern Spain.",
  },
  {
    question: "How far in advance do I need to order?",
    answer:
      "We recommend ordering at least 24 to 48 hours in advance so we can bake everything fresh for you. For whole cheesecakes or large orders, please give us 3 to 5 days notice. You can order via WhatsApp, Instagram, or email through our order page.",
  },
  {
    question: "Do you offer delivery or collection only?",
    answer:
      "We offer both pickup and local delivery in the Windsor and Slough area. You can choose your preference when placing an order. For delivery, just provide your address and preferred time and we will do our best to accommodate.",
  },
  {
    question: "Do your products contain allergens?",
    answer:
      "Yes. Our cinnamon rolls contain gluten (wheat), dairy (butter, cream cheese), and eggs. Our Basque cheesecake contains dairy (cream cheese, cream) and eggs. All products are made in a kitchen that handles gluten, dairy, eggs, and nuts. Please contact us at askmimz@mimzskitchen.com if you have specific allergen concerns.",
  },
  {
    question: "Are any of your products gluten-free or vegan?",
    answer:
      "Our Basque cheesecake uses minimal flour and may suit some with mild gluten sensitivity, but it is not certified gluten-free. Currently we do not offer vegan options as our recipes use real butter, eggs, and cream cheese. We are exploring plant-based alternatives for the future.",
  },
  {
    question: "How long do cinnamon rolls stay fresh?",
    answer:
      "Cinnamon rolls are best enjoyed on the day of baking, ideally served warm. They will keep for up to 2 days at room temperature in an airtight container, or up to 5 days in the fridge. To reheat, warm in the oven at 150\u00b0C for 10 minutes covered in foil, or microwave for 20 to 30 seconds.",
  },
  {
    question: "How should I store Basque cheesecake?",
    answer:
      "Store your Basque cheesecake in the fridge and consume within 5 to 7 days. For best flavour, bring it to room temperature about 30 minutes before serving. You can also freeze it for up to one month \u2014 defrost overnight in the fridge before serving.",
  },
  {
    question: "Can I order for a special occasion or event?",
    answer:
      "Absolutely. We cater for birthdays, gatherings, and corporate events. For larger orders please message us on WhatsApp or email askmimz@mimzskitchen.com with the date, number of guests, and what you would like. We will put together a custom quote for you.",
  },
  {
    question: "What sauces do you offer with the cheesecake?",
    answer:
      "We offer three sauce pots sold separately: salted butterscotch, chocolate ganache, and raspberry coulis. Each is handmade and pairs beautifully with our Basque cheesecake. Pot sizes and pricing are available on our order page.",
  },
  {
    question: "Where are you based?",
    answer:
      "Mimz\u2019s Kitchen is based near Windsor and Slough in Berkshire. We offer local delivery and pickup. You can reach us on WhatsApp at +44 7404 697364 or by email at askmimz@mimzskitchen.com.",
  },
  {
    question: "Are your cinnamon rolls and cheesecakes baked fresh?",
    answer:
      "Yes, everything is baked fresh to order in small batches. We do not pre-make or freeze our products. When you place an order, your cinnamon rolls and cheesecakes are made from scratch specifically for you.",
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="pt-28 md:pt-36 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-sans text-[0.75rem] uppercase tracking-[0.25em] text-amber font-medium">
              Common Questions
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-espresso mt-2 mb-4">
              Things People Ask Mimz
            </h1>
            <LeafDivider />
            <p className="font-serif italic text-espresso/65 mt-4 max-w-md mx-auto">
              Everything you need to know about our cinnamon rolls, Basque
              cheesecakes, ordering, and delivery.
            </p>
          </div>

          {/* FAQ items */}
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group border-b border-gold/20 pb-6"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h2 className="font-serif text-lg md:text-xl text-espresso group-open:text-oak transition-colors">
                    {faq.question}
                  </h2>
                  <span className="mt-1 text-gold shrink-0 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="font-serif text-espresso/75 leading-relaxed mt-4 max-w-2xl">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>

          {/* Last updated */}
          <p className="text-center font-sans text-[0.75rem] text-espresso/50 mt-16">
            Last updated: March 2026
          </p>
        </div>
      </section>
    </>
  );
}
