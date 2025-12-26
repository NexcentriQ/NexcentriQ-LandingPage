import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Services } from "@/components/landing/Services";
import { Audience } from "@/components/landing/Audience";
import { Products } from "@/components/landing/Products";
import { WhyUs } from "@/components/landing/WhyUs";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { ContactFormModal } from "@/components/landing/ContactFormModal";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenContact={openContact} />
      <Hero onOpenContact={openContact} />
      <Stats />
      <Services />
      <Audience />
      <Products />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTASection onOpenContact={openContact} />
      <Footer />
      <ContactFormModal isOpen={isContactOpen} onClose={closeContact} />
    </div>
  );
};

export default Index;
