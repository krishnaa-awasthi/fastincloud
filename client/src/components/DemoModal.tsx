import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { insertDemoRequestSchema, type InsertDemoRequest } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Send, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const { toast } = useToast();

  // --- OTP Verification State ---
  const [otpStep, setOtpStep] = useState<"idle" | "sending" | "sent" | "verified">("idle");
  const [otpValue, setOtpValue] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState("");

  const form = useForm<InsertDemoRequest>({
    resolver: zodResolver(insertDemoRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  // Watch email to reset OTP state if user changes the email after verifying
  const currentEmail = form.watch("email");
  useEffect(() => {
    if (otpStep === "verified" && currentEmail !== verifiedEmail) {
      setOtpStep("idle");
      setOtpValue("");
    }
  }, [currentEmail, verifiedEmail, otpStep]);

  // --- Mock OTP Functions (Replace with your actual API calls) ---
  const handleSendOtp = async (e: React.MouseEvent) => {
    e.preventDefault();
    const email = form.getValues("email");
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      form.setError("email", { message: "Please enter a valid email first." });
      return;
    }

    setOtpStep("sending");
    
    // Simulate API Call
    setTimeout(() => {
      setOtpStep("sent");
      toast({
        title: "OTP Sent",
        description: "Please check your inbox for the verification code.",
      });
    }, 1500);
  };

  const handleVerifyOtp = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Replace "123456" with your actual backend verification logic
    if (otpValue === "123456") {
      setOtpStep("verified");
      setVerifiedEmail(form.getValues("email"));
      toast({
        title: "Email Verified",
        description: "Your email has been successfully verified.",
      });
    } else {
      toast({
        title: "Invalid OTP",
        description: "The code you entered is incorrect. Please try again.",
        variant: "destructive",
      });
    }
  };

  // --- Main Form Submission ---
  const demoMutation = useMutation({
    mutationFn: async (data: InsertDemoRequest) => {
      return await apiRequest("POST", "/api/demo-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted Successfully",
        description: "Our enterprise team will contact you shortly.",
      });
      form.reset();
      setOtpStep("idle");
      setOtpValue("");
      onOpenChange(false);
    },
    onError: (error: any) => {
      toast({
        title: "Submission Error",
        description: error.message || "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertDemoRequest) => {
    if (otpStep !== "verified") {
      toast({
        title: "Verification Required",
        description: "Please verify your email address before submitting.",
        variant: "destructive",
      });
      return;
    }
    demoMutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
      if (!val) {
        setOtpStep("idle");
        setOtpValue("");
      }
      onOpenChange(val);
    }}>
      <DialogContent 
        className="sm:max-w-[550px] p-0 max-h-[90vh] overflow-y-auto overflow-x-hidden border-white/10 rounded-2xl shadow-2xl bg-[#0A0A0A] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
        data-testid="dialog-demo"
      >
        
        {/* === CUSTOM HEADER AREA === */}
        <div className="relative bg-[#050505] px-6 py-6 sm:px-8 sm:py-8 border-b border-white/10 overflow-hidden shrink-0">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <DialogHeader className="relative z-10 text-left">
            <img src="/loader_img.png" alt="fic_logo" className="h-8 w-20" />
            <DialogTitle 
              className="text-2xl font-bold text-white tracking-tight"
            >
              Request an IT & Security Audit
            </DialogTitle>
            <DialogDescription 
              className="text-slate-400 mt-2 font-medium leading-relaxed text-sm"
            >
              Fill out the form below and our team will reach out to schedule a personalized walkthrough of Fast In Cloud's enterprise solutions.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* === FORM AREA === */}
        <div className="px-6 py-6 sm:px-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300 font-bold text-[10px] uppercase tracking-widest">Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          className="bg-[#050505] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-cyan-500 rounded-lg h-11 transition-all"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300 font-bold text-[10px] uppercase tracking-widest">Company *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Acme Corp"
                          className="bg-[#050505] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-cyan-500 rounded-lg h-11 transition-all"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />
              </div>

              {/* --- EMAIL VERIFICATION SECTION --- */}
              <div className="space-y-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300 font-bold text-[10px] uppercase tracking-widest">Work Email *</FormLabel>
                      <div className="flex gap-2">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            className="bg-[#050505] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-cyan-500 rounded-lg h-11 transition-all flex-1"
                            disabled={otpStep === "verified"}
                            {...field}
                          />
                        </FormControl>
                        
                        {otpStep === "verified" ? (
                          <div className="h-11 px-4 flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg font-medium gap-2">
                            <CheckCircle2 className="w-4 h-4" /> Verified
                          </div>
                        ) : (
                          <Button 
                            onClick={handleSendOtp}
                            disabled={otpStep === "sending" || otpStep === "sent"}
                            variant="secondary"
                            className="h-11 px-4 bg-[#1a1a1a] hover:bg-white/10 text-white border border-white/10 transition-all"
                          >
                            {otpStep === "sending" ? <Loader2 className="w-4 h-4 animate-spin" /> : otpStep === "sent" ? "Resend OTP" : "Send OTP"}
                          </Button>
                        )}
                      </div>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />

                {/* OTP Input Field - Only shows after sending OTP */}
                {otpStep === "sent" && (
                  <div className="flex gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <Input
                      type="text"
                      maxLength={6}
                      placeholder="Enter 6-digit OTP (Try 123456)"
                      value={otpValue}
                      onChange={(e) => setOtpValue(e.target.value)}
                      className="bg-[#050505] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-cyan-500 rounded-lg h-11 transition-all flex-1 text-center tracking-widest font-mono"
                    />
                    <Button 
                      onClick={handleVerifyOtp}
                      className="h-11 px-6 bg-cyan-500 hover:bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    >
                      Verify
                    </Button>
                  </div>
                )}
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-300 font-bold text-[10px] uppercase tracking-widest">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+91 90000 00000"
                        className="bg-[#050505] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-cyan-500 rounded-lg h-11 transition-all"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-300 font-bold text-[10px] uppercase tracking-widest">How can we help? (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your cloud, security, or infrastructure needs..."
                        className="bg-[#050505] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-cyan-500 rounded-lg resize-none p-4 transition-all"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-400" />
                  </FormItem>
                )}
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg h-12 text-base font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={demoMutation.isPending || otpStep !== "verified"}
                >
                  {demoMutation.isPending ? (
                    "Submitting Request..."
                  ) : (
                    <>
                      Submit Request 
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
                
                {otpStep !== "verified" && (
                  <p className="text-center text-xs text-red-400 mt-3 font-medium">
                    * Please verify your email before submitting.
                  </p>
                )}

                <p className="text-center text-[11px] sm:text-xs text-slate-500 mt-4 flex items-center justify-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-500"/> 100% Secure & Confidential. Fast response guaranteed.
                </p>
              </div>

            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}