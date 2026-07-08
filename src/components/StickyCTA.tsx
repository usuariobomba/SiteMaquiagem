import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function StickyCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    let isPlanosVisible = false;
    const planosElement = document.getElementById('planos');
    
    if (planosElement) {
      const rect = planosElement.getBoundingClientRect();
      // Adjust this condition based on when you want it to hide.
      // Hiding when the top of the planos section comes into the lower part of the viewport.
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        isPlanosVisible = true;
      }
    }

    if (latest > 600 && !isPlanosVisible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const scrollToPricing = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <button
        onClick={scrollToPricing}
        className="pointer-events-auto bg-brand-dark hover:bg-brand-rose-dark text-white font-medium text-lg py-3 px-8 rounded-full shadow-[0_10px_40px_rgba(58,46,43,0.4)] transition-colors flex items-center gap-2 border border-white/10 backdrop-blur-md"
      >
        Quero minha consultoria <ArrowRight size={20} />
      </button>
    </motion.div>
  );
}
