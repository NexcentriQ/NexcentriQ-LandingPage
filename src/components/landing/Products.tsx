import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Store, Bot, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    icon: Store,
    name: "PayAtCounter",
    tagline: "Restaurant & Retail App",
    description: "A white-label restaurant & retail app that allows businesses to launch their own branded ordering and payment experience with custom logos, designs, and branding.",
    features: ["Custom branding", "Payment integration", "Order management", "Multi-location support"],
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Bot,
    name: "HireMeBot",
    tagline: "Job Application Automation",
    description: "An intelligent automation platform that applies to jobs on behalf of students and professionals, saving time and effort without manual intervention.",
    features: ["AI-powered matching", "Auto-apply system", "Resume optimization", "Application tracking"],
    gradient: "from-accent to-purple-500",
  },
  {
    icon: ShoppingBag,
    name: "OneStop",
    tagline: "Fashion Commerce Platform",
    description: "A white-label fashion commerce platform that enables designers and startups to launch fully branded online clothing stores effortlessly.",
    features: ["Storefront builder", "Inventory management", "Payment processing", "Shipping integration"],
    gradient: "from-pink-500 to-rose-400",
  },
];

export const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" ref={ref} className="py-24 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Products — Coming Soon
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative SaaS solutions designed to transform how businesses operate.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl glass card-hover"
            >
              {/* Gradient Top Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`} />
              
              <div className="p-8">
                {/* Badge */}
                <Badge variant="outline" className="mb-6 border-primary/50 text-primary bg-primary/10">
                  Coming Soon
                </Badge>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {product.tagline}
                </p>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${product.gradient} pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
