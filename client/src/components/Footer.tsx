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
} from "lucide-react";

// --- COMMENTED OUT LEGAL DIALOG CONTENT ---
/*
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type LegalKey = "Privacy Policy" | "Terms of Service" | "Cookie Policy" | "Security";

const legalContent: Record<LegalKey, JSX.Element> = {
  "Privacy Policy": ( ... ),
  "Terms of Service": ( ... ),
  "Cookie Policy": ( ... ),
  "Security": ( ... ),
};
*/

export function Footer() {
  const { toast } = useToast();
  // const [openLegal, setOpenLegal] = useState<LegalKey | null>(null);

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
      { name: "Case Studies", href: "#case-studies" },
      { name: "Contact Us", href: "#contact" },
    ],
    Solutions: [
      { name: "Cyber Security", href: "/cybersecurity" },
      { name: "Cloud & Infrastructure", href: "/cloud-infrastructure" },
      { name: "Marketing Automation", href: "/marketing-automation" },
      { name: "CADMATE Solutions", href: "/cadmate" },
    ],
    Resources: [
      { name: "Blog", href: "#blog" },
      { name: "Partner Alliances", href: "#partners" },
      { name: "Support Center", href: "#support" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Security Compliance", href: "#security" },
    ],
  } as const;

  return (
    <>
      <footer
        id="contact"
        className="bg-[#050505] text-slate-300 py-16 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- Top Section: Logo & Links --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/favicon.svg"
                  alt="fic_logo"
                  className="h-10 w-30"></img>
                <span className="text-2xl font-bold text-white tracking-tight">
                  Fast In Cloud
                </span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
                Empowering organizations by eliminating technical overhead, ensuring you can focus on scaling your business securely and efficiently.
              </p>
              
              
            </div>

            {/* Footer Nav Links */}
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-bold text-white tracking-wide mb-6">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* --- Middle Section: Contact & Newsletter --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-white/10 py-12">
            
            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-white tracking-wide mb-6">
                Get In Touch
              </h3>
              <ul className="space-y-5 text-slate-400 text-sm">
                <li className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white/5 rounded-lg border border-white/10">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="leading-relaxed">
                    Registered office: Vision Co-work, <br/>
                    H. IN.KH.NO. - 293, S/F, Western Marg,<br /> 
                    Saidulajab, Near Kher Singh Estate,<br/>
                    New Delhi-110030<br/>
                  </span>
                  <span>
                      Branch: G-01, Ground Floor, <br />
                      TC Co-working Space, A-197, Sector 63,<br/>
                      Noida, Uttar Pradesh 201309
                    </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <a href="tel:+911140500000" className="hover:text-white transition-colors">
                    Support / Sales Hotline
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <a href="mailto:operations@fastincloud.com" className="hover:text-white transition-colors">
                    operations@fastincloud.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-white tracking-wide mb-6">
                Newsletter
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleNewsletterSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            {...field}
                            className="bg-white/5 border-white/10 text-white placeholder:text-slate-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={newsletterMutation.isPending}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                  >
                    {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.166026188919!2d77.26692227495325!3d28.53472898851622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce19645e3ab9d%3A0x89d9d6d36955b5a4!2sFast%20In%20Cloud!5e0!3m2!1sen!2sin!4v1777067476860!5m2!1sen!2sin"
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

          {/* --- Bottom Section --- */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
            <p>© {new Date().getFullYear()} Fast in Cloud Digital Solutions LLP. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- COMMENTED OUT LEGAL DIALOG MODAL --- */}
      {/* <Dialog
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
      */}
    </>
  );
}