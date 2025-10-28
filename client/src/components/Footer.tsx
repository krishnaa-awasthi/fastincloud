import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsletterSchema, type InsertNewsletter } from "@shared/schema";
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const { toast } = useToast();

  const form = useForm<InsertNewsletter>({
    resolver: zodResolver(insertNewsletterSchema),
    defaultValues: { email: "" },
  });

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      return await apiRequest("POST", "/api/newsletter", data);
    },
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
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (data: InsertNewsletter) => {
    newsletterMutation.mutate(data);
  };

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
      { name: "Documentation", href: "#docs" },
      { name: "Case Studies", href: "#resources" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Security", href: "#security" },
    ],
  };

  const socialLinks = [
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Mail, href: "mailto:sales@mqlexperts.in", label: "Email" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Top Section: Logo & Links --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/favicon.png" alt="MQL Experts Logo" className="h-16 w-16" />
              <span className="text-xl font-bold">MQL Experts</span>
            </div>
            <p className="text-background/80 mb-6">
              Empowering B2B teams with intelligent data that drives real results.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Nav Links */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- Contact & Map Side by Side --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-background/70 mt-1" />
                <span>
                  TS-1418, Galaxy Blue Sapphire Plaza, <br />
                  95-5, Greater Noida W Rd, Haibatpur, <br />
                  Sector 4, Greater Noida, Uttar Pradesh – 201309, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-background/70" />
                <a
                  href="tel:+919044899929"
                  className="hover:text-background underline transition-colors"
                >
                  +91 90448 99929
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@mqlexperts.in"
                  className="flex items-center gap-3 hover:text-background underline transition-colors"
                >
                  <Mail className="w-5 h-5 text-background/70" />
                  <span>sales@mqlexperts.in</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map */}
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
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-2">Subscribe to our newsletter</h3>
            <p className="text-background/70 mb-4">
              Get the latest insights on B2B lead generation and sales intelligence.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleNewsletterSubmit)} className="flex gap-2">
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
                          className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                        />
                      </FormControl>
                      <FormMessage className="text-background/90" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={newsletterMutation.isPending}
                  className="bg-primary hover:bg-primary/90"
                >
                  {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* --- Footer Bottom --- */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <p>© 2025 MQL Experts. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
