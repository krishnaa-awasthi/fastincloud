import logo1 from "@assets/generated_images/Tech_company_logo_1_51a2142b.png";
import logo2 from "@assets/generated_images/SaaS_company_logo_2_e85603f2.png";
import logo3 from "@assets/generated_images/Enterprise_software_logo_3_5a611c60.png";

export function TrustedBySection() {
  const logos = [
    { src: logo1, alt: "TechFlow Solutions" },
    { src: logo2, alt: "CloudScale" },
    { src: logo3, alt: "DataSync Enterprise" },
    { src: logo1, alt: "InnovateLab" },
    { src: logo2, alt: "QuantumSoft" },
    { src: logo3, alt: "NexGen Systems" },
  ];

  return (
    <section
      className="py-16 bg-muted/30"
      data-testid="section-trusted-by"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className="text-center text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase"
          data-testid="text-trusted-caption"
        >
          Trusted by leading IT and SaaS companies worldwide
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
              data-testid={`logo-client-${index}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
