import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Landmark, Rocket } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Non-Technical Founders & Businesses",
    description: "Turn your ideas into reality without writing a single line of code. We handle the technical complexity while you focus on growth.",
    features: ["No coding required", "Full project ownership", "Ongoing support"],
  },
  {
    icon: Rocket,
    title: "Startups & Enterprises",
    description: "From MVP to full-scale products, we provide rapid prototyping, scalable architecture, and market-ready solutions.",
    features: ["Rapid prototyping", "Scalable architecture", "Market-ready solutions"],
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    description: "Modernize public services with secure, compliant digital solutions that enhance citizen engagement.",
    features: ["Enterprise security", "Compliance-ready", "Scalable infrastructure"],
  },
];

export const Audience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Who We Serve</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Built for Every Business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We partner with a diverse range of clients — from solo founders to large enterprises and public sector organizations.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl glass card-hover"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {audience.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {audience.description}
              </p>
              <ul className="space-y-2">
                {audience.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
