import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import LabourRelations from "./pages/services/LabourRelations";
import ComplianceAdvisory from "./pages/services/ComplianceAdvisory";
import HRStrategy from "./pages/services/HRStrategy";
import TrainingDevelopment from "./pages/services/TrainingDevelopment";
import Recruitment from "./pages/services/Recruitment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/labour-relations" element={<LabourRelations />} />
          <Route path="/services/compliance-advisory" element={<ComplianceAdvisory />} />
          <Route path="/services/hr-strategy" element={<HRStrategy />} />
          <Route path="/services/training-development" element={<TrainingDevelopment />} />
          <Route path="/services/recruitment" element={<Recruitment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
