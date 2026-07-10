import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Sparkles } from 'lucide-react';

interface NotificationItem {
  id: number;
  name: string;
  city: string;
  state: string;
  time: string;
  action: string;
}

const notifications: NotificationItem[] = [
  { id: 1, name: "Letícia S.", city: "Campinas", state: "SP", time: "agora mesmo", action: "adquiriu o Guia" },
  { id: 2, name: "Cláudia M.", city: "Belo Horizonte", state: "MG", time: "há 2 minutos", action: "adquiriu o Guia" },
  { id: 3, name: "Gabriela R.", city: "São Paulo", state: "SP", time: "há 5 minutos", action: "garantiu o Guia + Bônus" },
  { id: 4, name: "Amanda K.", city: "Curitiba", state: "PR", time: "há 7 minutos", action: "adquiriu o Guia" },
  { id: 5, name: "Isabela N.", city: "Salvador", state: "BA", time: "há 10 minutos", action: "garantiu o Guia + Bônus" },
  { id: 6, name: "Paula V.", city: "Porto Alegre", state: "RS", time: "há 12 minutos", action: "adquiriu o Guia" },
  { id: 7, name: "Tatiane C.", city: "Fortaleza", state: "CE", time: "há 15 minutos", action: "adquiriu o Guia" },
  { id: 8, name: "Juliana M.", city: "Rio de Janeiro", state: "RJ", time: "há 19 minutos", action: "garantiu o Guia + Bônus" },
  { id: 9, name: "Priscila O.", city: "Brasília", state: "DF", time: "há 24 minutos", action: "adquiriu o Guia" },
  { id: 10, name: "Fernanda B.", city: "Recife", state: "PE", time: "há 28 minutos", action: "garantiu o Guia + Bônus" },
];

export function PurchaseNotifications() {
  const [currentNotification, setCurrentNotification] = useState<NotificationItem | null>(null);

  useEffect(() => {
    let index = 0;
    let timeoutId: any;

    const cycle = () => {
      // 1. Show the current notification
      setCurrentNotification(notifications[index]);

      // 2. Hide it after 5 seconds
      timeoutId = setTimeout(() => {
        setCurrentNotification(null);

        // 3. Increment index for the next cycle
        index = (index + 1) % notifications.length;

        // 4. Wait for a random silence period (8 to 15 seconds) before showing the next one
        const nextDelay = 8000 + Math.random() * 7000;
        timeoutId = setTimeout(cycle, nextDelay);
      }, 5000);
    };

    // Start the first notification after 4 seconds
    timeoutId = setTimeout(cycle, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="fixed bottom-24 left-4 z-40 md:bottom-6 md:left-6 w-full max-w-[280px] sm:max-w-[320px] pointer-events-none">
      <AnimatePresence>
        {currentNotification && (
          <motion.div
            key={currentNotification.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand-base/70 flex items-center gap-3"
            id={`purchase-notification-${currentNotification.id}`}
          >
            <div className="w-9 h-9 rounded-full bg-brand-rose/20 flex items-center justify-center text-brand-rose-dark shrink-0">
              <ShoppingBag size={18} className="animate-pulse" />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-xs text-brand-dark leading-snug">
                <span className="font-semibold block text-brand-dark/95">
                  {currentNotification.name} <span className="font-normal text-brand-brown/80">({currentNotification.city} - {currentNotification.state})</span>
                </span>
                <span className="text-brand-brown text-[11px] block mt-0.5 font-medium">
                  {currentNotification.action}
                </span>
              </p>
              
              <div className="flex items-center gap-1 mt-1 text-[10px] text-brand-brown/60 font-medium">
                <Sparkles size={10} className="text-brand-rose-dark/70" />
                <span>{currentNotification.time}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
