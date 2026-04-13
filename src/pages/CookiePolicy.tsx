import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="sticky top-4 z-10 mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/95 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all duration-300" />
            <span className="text-sm font-medium text-foreground">Back to Home</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Cookie Policy
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. What Are Cookies
              </h2>
              <p className="text-muted-foreground">
                [Add information about what cookies are and how they work]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. How We Use Cookies
              </h2>
              <p className="text-muted-foreground">
                [Add information about how your website uses cookies]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. Types of Cookies We Use
              </h2>
              <p className="text-muted-foreground">
                [Add information about different types of cookies used]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Managing Cookies
              </h2>
              <p className="text-muted-foreground">
                [Add information about how users can manage cookie preferences]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Third-Party Cookies
              </h2>
              <p className="text-muted-foreground">
                [Add information about third-party cookies if applicable]
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
