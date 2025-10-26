import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsletterSchema, type InsertNewsletter } from "@shared/schema";
import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";

export function Footer() {
  const { toast } = useToast();

  const form = useForm<InsertNewsletter>({
    resolver: zodResolver(insertNewsletterSchema),
    defaultValues: {
      email: "",
    },
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
    { Icon: Mail, href: "mailto:sales@mqlexperts.com", label: "Email" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/favicon.png"
                   alt="MQL Experts Logo"
                   className="h-20 w-20"
              />
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
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label={label}
                  data-testid={`link-social-${label.toLowerCase()}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-lg mb-4" data-testid={`text-footer-${title.toLowerCase()}`}>
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                      data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-2" data-testid="text-newsletter-heading">
              Subscribe to our newsletter
            </h3>
            <p className="text-background/70 mb-4">
              Get the latest insights on B2B lead generation and sales intelligence
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
                          data-testid="input-newsletter-email"
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
                  data-testid="button-newsletter-submit"
                >
                  {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <p data-testid="text-copyright">© 2025 MQL Experts. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-background transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-background transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
