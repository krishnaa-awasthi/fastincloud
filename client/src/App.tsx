import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import BlogsPage from "@/pages/BlogsPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blogs" component={BlogsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export function WhatsAppButton() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50">
      <a
        href="https://wa.me/919807004640"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <a
        href="mailto:contact@mqlexperts.com"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        aria-label="Send us an Email"
      >
        <FaEnvelope className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;
