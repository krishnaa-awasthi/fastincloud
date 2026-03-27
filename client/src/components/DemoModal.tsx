// client/src/components/DemoModal.tsx
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
import { Rocket, Send, Sparkles } from "lucide-react";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const { toast } = useToast();

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

  const demoMutation = useMutation({
    mutationFn: async (data: InsertDemoRequest) => {
      return await apiRequest("POST", "/api/demo-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Demo Request Submitted! 🎉",
        description: "Our team will contact you within 24 hours.",
      });
      form.reset();
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
    demoMutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-[550px] p-0 overflow-hidden border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl bg-white dark:bg-[#0B1120]" 
        data-testid="dialog-demo"
      >
        
        {/* === CUSTOM HEADER AREA === */}
        <div className="relative bg-slate-50 dark:bg-slate-900/50 px-8 py-8 border-b border-slate-100 dark:border-slate-800 overflow-hidden">
          {/* Decorative Background Blob */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <DialogHeader className="relative z-10 text-left">
            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm border border-slate-200 dark:border-slate-700 mb-4">
              <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <DialogTitle 
              className="text-2xl font-bold text-slate-900 dark:text-white"
              data-testid="text-demo-title"
            >
              Book a Free Demo
            </DialogTitle>
            <DialogDescription 
              className="text-slate-600 dark:text-slate-400 mt-2"
              data-testid="text-demo-description"
            >
              Fill out the form below and our team will reach out to schedule a personalized walkthrough of MQL Experts.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* === FORM AREA === */}
        <div className="px-8 py-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              
              {/* Grid Layout for Name & Company to save space */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wider">Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus-visible:ring-blue-500 rounded-xl h-12"
                          {...field}
                          data-testid="input-demo-name"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wider">Company *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Acme Corp"
                          className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus-visible:ring-blue-500 rounded-xl h-12"
                          {...field}
                          data-testid="input-demo-company"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wider">Work Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus-visible:ring-blue-500 rounded-xl h-12"
                        {...field}
                        data-testid="input-demo-email"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wider">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus-visible:ring-blue-500 rounded-xl h-12"
                        {...field}
                        data-testid="input-demo-phone"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wider">How can we help? (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your lead generation goals..."
                        className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus-visible:ring-blue-500 rounded-xl resize-none p-4"
                        rows={3}
                        {...field}
                        data-testid="input-demo-message"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              <div className="pt-4 pb-2">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-full h-14 text-lg font-bold shadow-lg shadow-blue-500/20 transition-all group"
                  disabled={demoMutation.isPending}
                  data-testid="button-demo-submit"
                >
                  {demoMutation.isPending ? (
                    "Submitting Request..."
                  ) : (
                    <>
                      Request Demo 
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4 flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3 text-teal-500"/> No credit card required. Fast response guaranteed.
                </p>
              </div>

            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}