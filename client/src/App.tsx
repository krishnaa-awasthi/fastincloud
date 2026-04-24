// App.tsx
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

import BlogsPage from "@/pages/BlogsPage";
import CookieConsent from "./components/CookieConsent";
import SmartData from "./pages/SmartData";
import DemandGeneration from "./pages/DemandGeneration";
import EventAudienceOutreach from "./pages/EventAudienceOutreach";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blogs" component={BlogsPage} />
      <Route path="/smart-data" component={SmartData} />
      <Route path="/demand-generation" component={DemandGeneration}/>
      <Route path="/eventAudience-outreach" component={EventAudienceOutreach}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <CookieConsent />
        <Router />
        
      </TooltipProvider>
    </QueryClientProvider>
  );
}


export default App;
