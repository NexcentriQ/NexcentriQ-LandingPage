import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Brain, 
  Heart, 
  Lock, 
  Palette, 
  Target 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-First Architecture",
    description: "Every product is built with artificial intelligence at its core, not as an afterthought.",
  },
  {
    icon: Heart,
    title: "Human-Centered Design",
    description: "Beautiful, intuitive interfaces that users love, designed with empathy and purpose.",
  },
  {
    icon: Lock,
    title: "Scalable & Secure Systems",
    description: "Enterprise-grade security with infrastructure that grows with your business.",
  },
  {
    icon: Palette,
    title: "White-Label & Customizable",
    description: "Fully brandable platforms that become uniquely yours with your identity.",
  },
  {
    icon: Target,
    title: "Built for Real-World Problems",
    description: "We solve actual business challenges, not theoretical ones. Practical solutions that work.",
  },
];

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" ref={ref} className="py-24 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Why NexcentriQ?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We're not just another software company. We're your strategic partner in digital transformation, 
              combining cutting-edge technology with deep business understanding.
            </p>
            
            {/* Feature List */}
            <div className="space-y-6">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-xl glass card-hover gradient-border"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats Box */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Custom Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">∞</div>
                  <div className="text-sm text-muted-foreground">Scalability</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
