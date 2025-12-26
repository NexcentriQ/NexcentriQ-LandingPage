import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of businesses can benefit from NexcentriQ?",
    answer: "NexcentriQ serves a wide range of clients including non-technical founders, startups, enterprises, government agencies, restaurants, and retail businesses. Whether you're launching your first digital product or scaling an existing operation, our AI-powered solutions can be tailored to your specific needs.",
  },
  {
    question: "How does the white-label customization work?",
    answer: "Our white-label platforms are fully customizable to match your brand identity. You can apply your own logo, colors, typography, and design elements. The end product appears as if it was built exclusively for your business, with no visible ties to NexcentriQ.",
  },
  {
    question: "What is your pricing model?",
    answer: "We operate on a subscription-based SaaS model with tiered pricing based on features and scale. Each product has its own pricing structure. Contact us for a personalized quote based on your specific requirements and expected usage.",
  },
  {
    question: "How long does it take to launch a product?",
    answer: "Timeline varies based on project complexity. White-label solutions can be customized and deployed within 2-4 weeks. Custom-built applications typically take 2-4 months from concept to launch, depending on scope and requirements.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, all our products come with comprehensive support packages. This includes 24/7 technical support, regular updates, security patches, and feature enhancements. We also offer dedicated account managers for enterprise clients.",
  },
  {
    question: "Is my data secure with NexcentriQ?",
    answer: "Absolutely. Security is fundamental to everything we build. We implement enterprise-grade encryption, regular security audits, GDPR compliance, and follow industry best practices. Your data is stored in secure, redundant cloud infrastructure.",
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about NexcentriQ.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-xl glass border border-border/50 px-6 data-[state=open]:glow-subtle"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
