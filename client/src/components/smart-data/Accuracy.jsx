export default function Accuracy() {
  const points = [
    "Regular validation processes",
    "Email & phone verification",
    "Continuous database refresh",
  ];

  return (
    <section className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          ⭐ 90%+ Data Accuracy Commitment
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We maintain high data accuracy through continuous validation and verification processes.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
          {points.map((point, i) => (
            <div
              key={i}
              className="px-6 py-4 rounded-xl bg-white/5 border border-white/10"
            >
              {point}
            </div>
          ))}
        </div>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto">
          This ensures your campaigns reach real, active, and relevant contacts,
          reducing bounce rates and improving ROI.
        </p>

      </div>
    </section>
  );
}