import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const modalControlBase = cn(
  "w-full rounded-xl border shadow-sm",
  "border-border/45 bg-white/80 backdrop-blur-sm",
  "text-foreground placeholder:text-muted-foreground/55",
  "transition-all duration-200 ease-out",
  "hover:border-border/70 hover:bg-white hover:shadow-md",
  "focus-visible:border-primary/45 focus-visible:bg-white",
  "focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-card",
  "dark:border-border/50 dark:bg-card/70 dark:hover:bg-card/90 dark:focus-visible:ring-offset-card",
);

/** Modal-only inputs (light fill + primary focus ring). */
const modalInputClass = cn(modalControlBase, "h-11");

const modalTextareaClass = cn(
  modalControlBase,
  "min-h-[120px] resize-none py-3.5 leading-relaxed",
);

const formContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.055, delayChildren: 0.06 },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 420, damping: 28 },
  },
};

function FieldShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-transparent bg-transparent p-[2px]",
        "transition-[background-color,box-shadow,border-color] duration-300 ease-out",
        "hover:border-border/25",
        "focus-within:border-primary/20 focus-within:bg-primary/[0.04]",
        "focus-within:shadow-[0_0_0_1px_hsl(var(--primary)/0.12),0_12px_40px_-16px_hsl(var(--primary)/0.18)]",
        "dark:focus-within:bg-primary/[0.07]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
    onClose();
  };

  const labelClass =
    "text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/90";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="contact-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          aria-modal="true"
          role="dialog"
          aria-labelledby="contact-modal-title"
        >
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm pointer-events-auto"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="pointer-events-auto relative z-10 w-full max-w-lg min-h-0 max-h-[min(90dvh,calc(100vh-2rem))] overflow-y-auto overscroll-contain rounded-[1.35rem] shadow-2xl shadow-black/10 dark:shadow-black/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={cn(
                "glass-strong relative overflow-hidden rounded-[1.35rem]",
                "ring-1 ring-black/[0.06] dark:ring-white/[0.08]",
                "p-6 sm:p-8 sm:pb-9",
                "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px",
                "before:bg-gradient-to-r before:from-transparent before:via-primary/35 before:to-transparent",
              )}
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative mb-8 pr-10">
                <motion.p
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05, duration: 0.25 }}
                  className="mb-2 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary"
                >
                  <Sparkles className="h-3.5 w-3.5 opacity-80" aria-hidden />
                  Get in touch
                </motion.p>
                <h2 id="contact-modal-title" className="text-2xl font-bold tracking-tight text-foreground sm:text-[1.65rem]">
                  Book a Strategy Call
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <motion.form
                variants={formContainerVariants}
                initial="hidden"
                animate="show"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <motion.div variants={formItemVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FieldShell className="space-y-2">
                    <Label htmlFor="name" className={cn(labelClass, "px-1")}>
                      Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className={modalInputClass}
                    />
                  </FieldShell>
                  <FieldShell className="space-y-2">
                    <Label htmlFor="email" className={cn(labelClass, "px-1")}>
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className={modalInputClass}
                    />
                  </FieldShell>
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <FieldShell className="space-y-2">
                    <Label htmlFor="company" className={cn(labelClass, "px-1")}>
                      Company <span className="font-normal normal-case tracking-normal text-muted-foreground/70">(optional)</span>
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company"
                      className={modalInputClass}
                    />
                  </FieldShell>
                </motion.div>

                <motion.div variants={formItemVariants}>
                  <FieldShell className="space-y-2">
                    <Label htmlFor="message" className={cn(labelClass, "px-1")}>
                      Message <span className="text-primary">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Goals, timeline, stack—anything that helps us prepare…"
                      rows={4}
                      className={modalTextareaClass}
                    />
                  </FieldShell>
                </motion.div>

                <motion.div variants={formItemVariants} className="pt-1">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "h-12 w-full rounded-xl text-base font-semibold tracking-tight",
                      "bg-primary text-primary-foreground shadow-lg shadow-primary/25",
                      "transition-all duration-200 hover:bg-primary/92 hover:shadow-xl hover:shadow-primary/30",
                      "focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                    )}
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Send message
                        <Send className="ml-2 h-4 w-4 opacity-90" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
