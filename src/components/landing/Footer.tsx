import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    products: [{
      label: "PayAtCounter",
      href: "#products"
    }, {
      label: "HireMeBot",
      href: "#products"
    }, {
      label: "OneStop",
      href: "#products"
    }],
    company: [{
      label: "About Us",
      href: "#why-us"
    }, {
      label: "Services",
      href: "#services"
    }, {
      label: "Contact",
      href: "#cta"
    }],
    legal: [{
      label: "Privacy Policy",
      href: "#"
    }, {
      label: "Terms of Service",
      href: "#"
    }, {
      label: "Cookie Policy",
      href: "#"
    }]
  };
  return <footer className="py-16 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-foreground">NexcentriQ</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              AI-powered SaaS solutions that transform business challenges into intelligent digital products.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map(link => <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} NexcentriQ. All rights reserved.
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">All products launching soon</span>
          </div>
        </div>
      </div>
    </footer>;
};