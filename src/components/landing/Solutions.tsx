import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Workflow, Building2, Bot, CreditCard, ShieldCheck } from "lucide-react";

const solutions = [
  {
    icon: Code2,
    name: "Custom-Built Applications",
    tagline: "Tailored Software Development",
    description: "Tailored software for any business, optimized for efficiency, security, and scalability. Built around your exact requirements — from startup MVPs to enterprise platforms.",
    features: ["Business-specific logic", "Scalable architecture", "Secure by design", "Startup to enterprise"],
    gradient: "from-primary to-orange-300",
  },
  {
    icon: Workflow,
    name: "Process Automation",
    tagline: "AI-Driven Workflow Engine",
    description: "Streamline operations with AI-driven workflows, reducing manual effort and improving productivity. Connect your tools and let intelligent automation handle the rest.",
    features: ["AI-powered workflows", "Reduced manual effort", "Seamless integrations", "Real-time monitoring"],
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Building2,
    name: "Enterprise Tools",
    tagline: "Large-Scale Solutions",
    description: "Scalable solutions for large organizations with complex requirements — built for security, compliance, and performance at scale.",
    features: ["Complex requirements", "Scalable infrastructure", "Role-based access", "Custom dashboards"],
    gradient: "from-blue-500 to-sky-400",
  },
  {
    icon: Bot,
    name: "AI Integration",
    tagline: "Intelligent Systems",
    description: "Build and integrate advanced AI systems — from ML models to autonomous agent workflows — to drive smarter decisions, operational efficiency, and scalable growth.",
    features: ["Custom ML models & fine-tuning", "Autonomous agent development", "AI orchestration & system workflows", "End-to-end AI deployment", "Scalable, enterprise-grade infrastructure"],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: CreditCard,
    name: "Recurring Revenue Model",
    tagline: "Subscription-First Growth Engine",
    description: "Recurring revenue models with seamless billing and customer management. Launch, manage, and grow subscription-based products with confidence.",
    features: ["Seamless billing", "Customer management", "Usage analytics", "White-label ready"],
    gradient: "from-pink-500 to-rose-400",
  },
  {
    icon: ShieldCheck,
    name: "Enterprise-Grade Security",
    tagline: "Security at the Core",
    description: "Protect business and customer data with AI-powered platforms built for security, compliance, and safe operations.",
    features: ["End-to-end data encryption", "Role-based access control", "Compliance-ready (GDPR, HIPAA, etc.)", "Threat monitoring & risk management", "Secure cloud infrastructure"],
    gradient: "from-indigo-600 to-violet-500",
  },
];

export const Solutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Deliver</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Capabilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Intelligent SaaS platforms and applications designed to solve real-world problems across every stage of your business.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl glass card-hover"
            >
              {/* Gradient Top Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.gradient}`} />

              <div className="p-8">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {solution.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {solution.tagline}
                </p>
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient}`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${solution.gradient} pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
