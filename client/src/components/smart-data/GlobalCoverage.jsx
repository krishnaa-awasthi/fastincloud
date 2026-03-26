export default function GlobalCoverage() {
  const regions = [
    "North America (USA, Canada)",
    "Europe (UK, Germany, France, etc.)",
    "APAC (India, UAE, Singapore, Australia)",
    "Middle East & Africa",
  ];

  return (
    <section className="bg-[#0A0A0A] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          🌍 Global Database Coverage
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Expand beyond boundaries with our Global B2B Database, covering key regions:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {regions.map((region, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:scale-105 transition"
            >
              {region}
            </div>
          ))}
        </div>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto">
          Whether you’re targeting local markets or international clients, we provide
          region-specific, compliant, and segmented data.
        </p>

      </div>
    </section>
  );
}