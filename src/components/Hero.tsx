import { ShieldCheck, Smartphone, Sparkles, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-base blur-3xl opacity-50" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-brand-rose/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-rose/20 text-brand-rose-dark text-sm font-medium mb-6">
            Consultoria Digital Maquiagem na Cartela
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark leading-tight mb-6 text-balance max-w-4xl mx-auto">
            Descubra quais maquiagens combinam com sua <span className="font-accent text-5xl md:text-7xl lg:text-8xl text-brand-rose-dark font-normal lowercase tracking-tight inline-block translate-y-2">cartela</span> antes de gastar dinheiro comprando errado
          </h1>
          <p className="text-lg md:text-xl text-brand-brown mb-10 max-w-2xl mx-auto leading-relaxed">
            Responda uma avaliação rápida e receba um parecer personalizado com cores, recomendações e orientações de compra para valorizar a sua beleza natural.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-sm mx-auto mb-12"
        >
          <button
            onClick={scrollToPricing}
            className="w-full bg-brand-rose-dark hover:bg-brand-dark text-white font-medium text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Quero minha consultoria por R$37
          </button>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-brand-brown">
            <div className="flex items-center gap-1.5"><Clock size={16} className="text-brand-rose-dark" /> Acesso imediato</div>
            <div className="flex items-center gap-1.5"><Smartphone size={16} className="text-brand-rose-dark" /> Funciona no celular</div>
            <div className="flex items-center gap-1.5"><Sparkles size={16} className="text-brand-rose-dark" /> Parecer personalizado</div>
            <div className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-brand-rose-dark" /> Garantia de 7 dias</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
