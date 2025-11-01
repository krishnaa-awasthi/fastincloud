import React from "react";

// ✅ Trusted By Section — Production Ready
export function TrustedBySection() {
  // Logos (you can swap these imports for CDN/image URLs later)
  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d4/SafeNet_logo.svg",
      alt: "Safenet Logo",
    },
    {
      src: "https://content.jdmagicbox.com/comp/pune/m3/020pxx20.xx20.100415190824.l1m3/catalogue/sakri-it-solutions-pvt-ltd-kharadi-pune-corporate-companies-for-it-f64kk16cp0-250.jpg",
      alt: "Sakri Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/81/Logo_motorola_solutions.png",
      alt: "Motorola solutions logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Trend_Micro_logo.svg/1200px-Trend_Micro_logo.svg.png",
      alt: "Trend Logo",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/C511BAQEotathWzwOjA/company-background_10000/company-background_10000/0/1583923079073/solvate_laboratories_pvtltd_cover?e=2147483647&v=beta&t=yITxzX1ID8OExiZIjhGVeFVEa0SfZi9CZcOet6b8qTs",
      alt: "solvate logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/REDINGTON_LOGO.gif?20150608080419",
      alt: "redingto logo",
    },
    {
      src: "https://i.ibb.co/hR3YgJMZ/Screenshot-2025-10-28-103658.png",
      alt: "cloudway logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Ingram_Micro_logo_new.svg",
      alt: "ingram Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hitachi_logo.svg/1200px-Hitachi_logo.svg.png?20240210051816",
      alt: "Hitachi Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Gemalto.svg/1200px-Gemalto.svg.png",
      alt: "Gemalto Logo",
    },
    {
      src: "https://i.ibb.co/gM6mrkP6/Screenshot-2025-10-26-200149.png",
      alt: "impact logo",
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const scrollingLogos = [...logos, ...logos];

  return (
    <section
      id="trusted-by"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden"
      aria-labelledby="trusted-by-heading"
    >
      {/* Heading + Description */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2
          id="trusted-by-heading"
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        >
          Trusted by Industry Leaders
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We partner with innovative global brands to accelerate growth,
          increase conversions, and amplify outreach performance. Here’s a
          glimpse of some of the companies that trust us to deliver measurable
          results every day.
        </p>
      </div>

      {/* Logo Marquee */}
      <div className="marquee-container relative w-full overflow-hidden select-none">
        <div className="marquee-track flex whitespace-nowrap items-center">
          {scrollingLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex items-center justify-center min-w-[180px] px-8 opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
              title={logo.alt}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBySection;
