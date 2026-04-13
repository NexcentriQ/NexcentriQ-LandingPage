import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const TermsOfService = () => {
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
            Terms of Service
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground">
                [Add information about accepting these terms]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                2. Use of Services
              </h2>
              <p className="text-muted-foreground">
                [Add information about how users can use your services]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                3. User Responsibilities
              </h2>
              <p className="text-muted-foreground">
                [Add information about user responsibilities]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                4. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                [Add information about intellectual property rights]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                [Add information about liability limitations]
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                6. Changes to Terms
              </h2>
              <p className="text-muted-foreground">
                [Add information about how terms may be updated]
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
