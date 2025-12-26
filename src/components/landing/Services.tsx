import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Cpu, 
  Code2, 
  Workflow, 
  Building2, 
  MessageSquareCode, 
  CreditCard 
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI-Powered SaaS Platforms",
    description: "Intelligent solutions that automate complex business processes with machine learning.",
  },
  {
    icon: Code2,
    title: "Custom-Built Applications",
    description: "Tailored software solutions designed specifically for your unique business needs.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline operations with smart workflows that reduce manual intervention.",
  },
  {
    icon: Building2,
    title: "Enterprise Tools",
    description: "Scalable, secure tools built for large organizations and complex requirements.",
  },
  {
    icon: MessageSquareCode,
    title: "AI Chatbots",
    description: "Conversational AI that handles customer interactions 24/7 with human-like responses.",
  },
  {
    icon: CreditCard,
    title: "Subscription Products",
    description: "Recurring revenue models with seamless billing and customer management.",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            What NexcentriQ Does
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We build intelligent digital products that solve real business problems with cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group relative"
            >
              {/* Glow effect behind card */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500" />
              
              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-border/50 group-hover:border-primary/50 transition-all duration-500 h-full overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-transparent rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent to-transparent rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />
                </div>
                
                {/* Icon container with animated ring */}
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-500" />
                  <div className="absolute inset-[2px] rounded-[10px] bg-card flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-500 group-hover:scale-110 transform" />
                  </div>
                  {/* Animated ring */}
                  <div className="absolute -inset-1 rounded-xl border border-primary/20 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
