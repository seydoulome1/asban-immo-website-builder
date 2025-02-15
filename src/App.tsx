
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Annonces from "./pages/Annonces";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Formalites from "./pages/Formalites";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/annonces" element={<Annonces />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/prestations" element={<Services />} />
          <Route path="/formalites" element={<Formalites />} />
          <Route path="/qui-sommes-nous" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
