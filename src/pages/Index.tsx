import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Exemplos from "@/components/Exemplos";
import ProvaSocial from "@/components/ProvaSocial";
import UseCases from "@/components/UseCases";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Exemplos />
      <ProvaSocial />
      <UseCases />
      <Benefits />
      <Pricing />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}