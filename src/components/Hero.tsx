import { useState } from 'react';
import { ShieldCheck, Smartphone, Sparkles, Clock, BookOpen, Sun, Star, Play } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const [playVideo, setPlayVideo] = useState(false);

  const scrollToPricing = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-10 pb-12 md:pt-32 md:pb-24 px-4 overflow-hidden">
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-dark leading-[1.1] mb-4 md:mb-6 text-balance max-w-4xl mx-auto tracking-tight">
            Pare de gastar dinheiro com produto errado! Descubra quais maquiagens valorizam sua <span className="font-accent text-5xl md:text-7xl lg:text-8xl text-brand-rose-dark font-normal lowercase tracking-tighter inline-block translate-y-1 md:translate-y-2">cartela</span>
          </h1>
          <p className="text-[16px] md:text-xl text-brand-brown mb-8 max-w-2xl mx-auto leading-relaxed">
            Responda uma análise rápida e receba um <strong>parecer digital personalizado</strong> direto no celular. Descubra suas melhores cores, categorias e indicações de produtos para comprar maquiagem com total segurança.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-[240px] md:max-w-[280px] mx-auto mb-10 md:mb-12 rounded-2xl overflow-hidden shadow-2xl border-[4px] md:border-[6px] border-white/60 bg-brand-base"
        >
          {/* Wistia Video Embed */}
          <div className="wistia_responsive_padding" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
            <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
              {playVideo ? (
                <iframe 
                  src="https://fast.wistia.net/embed/iframe/gj8ep6i6sg?web_component=true&seo=true&autoplay=true" 
                  title="demo Video" 
                  allow="autoplay; fullscreen" 
                  allowtransparency="true" 
                  frameBorder="0" 
                  scrolling="no" 
                  className="wistia_embed" 
                  name="wistia_embed" 
                  width="100%" 
                  height="100%"
                ></iframe>
              ) : (
                <button 
                  onClick={() => setPlayVideo(true)}
                  className="absolute inset-0 w-full h-full bg-gradient-to-tr from-brand-dark to-brand-rose-dark/95 flex flex-col items-center justify-center p-4 text-white group cursor-pointer transition-colors duration-300 select-none"
                  aria-label="Assistir demonstração"
                >
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  {/* Pulsating Play Button */}
                  <div className="w-14 h-14 rounded-full bg-white text-brand-rose-dark flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-brand-rose group-hover:text-white transition-all duration-300 relative z-10">
                    <Play size={24} className="fill-current translate-x-0.5" />
                    <span className="absolute inset-0 rounded-full bg-white/30 animate-ping"></span>
                  </div>
                  
                  <span className="mt-3 font-semibold text-sm tracking-wide relative z-10 text-brand-base group-hover:text-white transition-colors">
                    Assistir Demonstração
                  </span>
                  <span className="text-[11px] text-white/60 mt-0.5 relative z-10">
                    Vídeo rápido de 1 minuto
                  </span>
                </button>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-sm mx-auto mb-10 md:mb-16"
        >
          <button
            onClick={scrollToPricing}
            className="w-full bg-brand-rose-dark hover:bg-brand-dark text-white font-medium text-[17px] md:text-lg py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Quero minha consultoria por R$17
          </button>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-4 mt-5 text-[13px] md:text-sm text-brand-brown">
            <div className="flex items-center gap-1.5"><Clock size={14} className="text-brand-rose-dark md:w-4 md:h-4" /> Acesso imediato</div>
            <div className="flex items-center gap-1.5"><Smartphone size={14} className="text-brand-rose-dark md:w-4 md:h-4" /> Funciona no celular</div>
            <div className="flex items-center gap-1.5"><Sparkles size={14} className="text-brand-rose-dark md:w-4 md:h-4" /> Parecer baseado nas suas respostas</div>
            <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-brand-rose-dark md:w-4 md:h-4" /> Garantia de 7 dias</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto text-left sm:text-center">
            <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 bg-white/60 p-4 rounded-2xl border border-brand-base">
              <div className="w-12 h-12 rounded-full bg-brand-rose/20 flex items-center justify-center text-brand-rose-dark shrink-0 shadow-sm">
                <BookOpen size={22} />
              </div>
              <div>
                <strong className="block text-brand-dark font-serif text-lg mb-0.5">Seu Guia de Bolso</strong>
                <span className="text-sm text-brand-brown leading-snug block">Consulte as cores pelo celular antes de qualquer compra.</span>
              </div>
            </div>
            <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 bg-white/60 p-4 rounded-2xl border border-brand-base">
              <div className="w-12 h-12 rounded-full bg-brand-rose/20 flex items-center justify-center text-brand-rose-dark shrink-0 shadow-sm">
                <Sun size={22} />
              </div>
              <div>
                <strong className="block text-brand-dark font-serif text-lg mb-0.5">Make do Dia a Dia</strong>
                <span className="text-sm text-brand-brown leading-snug block">Monte uma necessaire inteligente sem desperdícios.</span>
              </div>
            </div>
            <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 bg-white/60 p-4 rounded-2xl border border-brand-base">
              <div className="w-12 h-12 rounded-full bg-brand-rose/20 flex items-center justify-center text-brand-rose-dark shrink-0 shadow-sm">
                <Star size={22} />
              </div>
              <div>
                <strong className="block text-brand-dark font-serif text-lg mb-0.5">Ocasiões Especiais</strong>
                <span className="text-sm text-brand-brown leading-snug block">Saiba exatamente quais tons usar para brilhar.</span>
              </div>
            </div>
          </div>
        </motion.div>



      </div>
    </section>
  );
}
