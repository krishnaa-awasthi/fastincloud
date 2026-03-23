import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsletterSchema, type InsertNewsletter } from "@shared/schema";
import {
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Instagram,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type LegalKey = "Privacy Policy" | "Terms of Service" | "Cookie Policy" | "Security";

const legalContent: Record<LegalKey, JSX.Element> = {
  "Privacy Policy": (
    <div className="space-y-4 text-sm leading-relaxed text-gray-200">
      <p>
        At <span className="font-semibold">MQL Experts</span>, we take your
        privacy seriously. When you use our website and services, we collect
        information you provide (such as name, email, company, and job title)
        and data collected automatically (e.g., IP address, device information,
        usage statistics).
      </p>
      <p>We use this data to:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Provide, operate, and improve our Smart B2B Data Portal and other services</li>
        <li>Communicate with you (e.g., sales, marketing, support)</li>
        <li>Analyze how our product is used, for product development</li>
        <li>Ensure compliance and security</li>
      </ul>
      <p>
        We handle data in line with all applicable laws (e.g., GDPR, where
        relevant) and provide you with rights to access, correct, or delete your
        personal information. We share data only with trusted third parties
        (such as cloud providers, analytics tools, and service partners) who
        help us deliver our services.
      </p>
      <p>
        We store personal data securely and only for as long as needed for
        business or legal purposes. If our Privacy Policy changes, we will
        notify you of any material updates.
      </p>
    </div>
  ),

  "Terms of Service": (
    <div className="space-y-4 text-sm leading-relaxed text-gray-200">
      <p>
        These Terms of Service (“Terms”) govern your access to and use of{" "}
        <span className="font-semibold">MQL Experts’</span> website and
        services, including our B2B Data Portal.
      </p>
      <p>By using our services, you agree to:</p>
      <ol className="list-decimal list-inside space-y-1">
        <li>Use our services in compliance with all applicable laws and regulations.</li>
        <li>Provide accurate, complete, and current information when you sign up or submit data.</li>
        <li>Be responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</li>
        <li>Not use our services for any illegal or unauthorized purpose, or to send spam or malicious content.</li>
        <li>Pay for any applicable usage, subscription, or transaction fees in a timely manner, if your use of the platform involves chargeable plans.</li>
        <li>Accept all liability for how you use our data, including data you export from our portal.</li>
      </ol>
      <p>
        We may suspend or terminate access if you violate these Terms. MQL
        Experts disclaims warranties to the fullest extent permitted by law and
        limits liability for indirect, incidental, or consequential damages.
      </p>
    </div>
  ),

  "Cookie Policy": (
    <div className="space-y-4 text-sm leading-relaxed text-gray-200">
      <p>
        Our website uses cookies and similar tracking technologies to enhance
        your experience, analyze usage patterns, and deliver relevant content.
      </p>
      <p>Cookies may include:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <span className="font-semibold">Strictly necessary cookies:</span>{" "}
          Required for our site to operate (login, security, navigation)
        </li>
        <li>
          <span className="font-semibold">Performance cookies:</span> Collect
          information on how you use the site (pages visited, time spent) to
          help us improve
        </li>
        <li>
          <span className="font-semibold">Functional cookies:</span> Remember
          your preferences (language, region, display settings)
        </li>
        <li>
          <span className="font-semibold">Analytics cookies:</span> Help us
          understand which parts of our site are most popular, how you found us,
          etc.
        </li>
      </ul>
      <p>
        When you first visit our website, you’ll be asked to consent to our
        cookie use. You can control or delete cookies via your browser
        settings; however, disabling some cookies may prevent parts of the site
        from working correctly.
      </p>
    </div>
  ),

  "Security": (
    <div className="space-y-4 text-sm leading-relaxed text-gray-200">
      <p>
        <span className="font-semibold">MQL Experts</span> is committed to
        maintaining the highest level of security to protect your data.
      </p>
      <p>Key security practices we use include:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <span className="font-semibold">Data Encryption:</span> All sensitive
          data in transit is encrypted using industry-standard TLS (HTTPS)
          protocols.
        </li>
        <li>
          <span className="font-semibold">Access Controls:</span> User access to
          our portal is restricted through role-based permissions and strong
          password policies.
        </li>
        <li>
          <span className="font-semibold">Regular Audits:</span> We perform
          routine security audits and vulnerability assessments to identify and
          mitigate risks.
        </li>
        <li>
          <span className="font-semibold">Data Backup:</span> We maintain
          regular backups to prevent data loss and ensure business continuity.
        </li>
        <li>
          <span className="font-semibold">Third-Party Security:</span> Our cloud
          and service partners follow strict security practices; we vet their
          compliance before onboarding.
        </li>
        <li>
          <span className="font-semibold">Incident Response:</span> We have a
          documented incident response plan to manage and respond to any data
          breaches or security incidents promptly.
        </li>
      </ul>
    </div>
  ),
};

export function Footer() {
  const { toast } = useToast();
  const [openLegal, setOpenLegal] = useState<LegalKey | null>(null);

  const form = useForm<InsertNewsletter>({
    resolver: zodResolver(insertNewsletterSchema),
    defaultValues: { email: "" },
  });

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) =>
      await apiRequest("POST", "/api/newsletter", data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description:
          error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (data: InsertNewsletter) =>
    newsletterMutation.mutate(data);

  const footerSections = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    Solutions: [
      { name: "Smart Corporate Database", href: "#solutions" },
      { name: "Customer Outreach for Events & Leads", href: "#solutions" },
      { name: "Appointment Setting", href: "#solutions" },
      { name: "Surveys & Feedback Campaigns", href: "#solutions" },
    ],
    Resources: [
      { name: "Blog", href: "#resources" },
      { name: "Testimonials", href: "#testimonials" },
    ],
    Legal: [
      { name: "Privacy Policy" },
      { name: "Terms of Service" },
      { name: "Cookie Policy" },
      { name: "Security" },
    ],
  } as const;

  return (
    <>
      <footer
        id="contact"
        className="bg-[#0a0a0a] text-gray-300 py-16 border-t border-gray-800"
        style={{ colorScheme: "light" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* --- Top Section: Logo & Links --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/favicon.png"
                  alt="MQL Experts Logo"
                  className="h-16 w-16"
                />
                <span className="text-xl font-bold text-white">
                  MQL Experts
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering B2B teams with intelligent data that drives real
                results.
              </p>

              
            </div>

            {/* Footer Nav Links */}
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-semibold text-lg mb-4 text-white">
                  {title}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      {title === "Legal" ? (
                        <button
                          type="button"
                          onClick={() =>
                            setOpenLegal(link.name as LegalKey)
                          }
                          className="text-gray-400 hover:text-white transition-colors text-left w-full"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* --- Contact & Map --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">
                Contact
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <span>
                    TS-1418, Galaxy Blue Sapphire Plaza, <br />
                    95-5, Greater Noida W Rd, Haibatpur, <br />
                    Sector 4, Greater Noida, Uttar Pradesh – 201309, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <a
                    href="tel:+919044899929"
                    className="hover:text-white underline transition-colors"
                  >
                    +91 90448 99929
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sales@mqlexperts.in"
                    className="flex items-center gap-3 hover:text-white underline transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span>contact@mqlexperts.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.750918444208!2d77.43286367495584!3d28.607248285229385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce557777b7b45%3A0x69870f8fa7e1f92e!2sGalaxy%20Blue%20Sapphire%20Plaza!5e0!3m2!1sen!2sin!4v1761545563070!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* --- Newsletter --- */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="max-w-md">
              <h3 className="font-semibold text-lg mb-2 text-white">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-400 mb-4">
                Get the latest insights on B2B lead generation and sales
                intelligence.
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleNewsletterSubmit)}
                  className="flex gap-2"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                            className="bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={newsletterMutation.isPending}
                    className="bg-blue-600 hover:bg-blue-500 text-white"
                  >
                    {newsletterMutation.isPending
                      ? "Subscribing..."
                      : "Subscribe"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* --- Bottom Section --- */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} MQL Experts. All rights reserved.</p>
            <div className="flex gap-6">
              <button
                type="button"
                onClick={() => setOpenLegal("Privacy Policy")}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setOpenLegal("Terms of Service")}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <Dialog
        open={!!openLegal}
        onOpenChange={(open) => {
          if (!open) setOpenLegal(null);
        }}
      >
        <DialogContent className="max-h-[80vh] overflow-y-auto bg-gray-900 text-gray-200 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">
              {openLegal}
            </DialogTitle>
          </DialogHeader>
          {openLegal && (
            <div className="mt-4">{legalContent[openLegal]}</div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
