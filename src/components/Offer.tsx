import { useState, useEffect } from 'react';
import { Gift, Check, Clock, Flame } from 'lucide-react';

export function Offer() {
  const [timeLeft, setTimeLeft] = useState(899); // 14m 59s
  const [spotsLeft, setSpotsLeft] = useState(7);

  useEffect(() => {
    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 30) {
          return 899; // reset to keep the loop of urgency active
        }
        return prev - 1;
      });
    }, 1000);

    // Dynamic spots countdown to make it feel real
    const spotsTimer = setTimeout(() => {
      setSpotsLeft(6);
    }, 18000);

    const spotsTimer2 = setTimeout(() => {
      setSpotsLeft(4);
    }, 42000);

    const spotsTimer3 = setTimeout(() => {
      setSpotsLeft(3);
    }, 95000);

    return () => {
      clearInterval(timer);
      clearTimeout(spotsTimer);
      clearTimeout(spotsTimer2);
      clearTimeout(spotsTimer3);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <section className="py-20 px-4 bg-brand-rose-dark text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Gift className="mx-auto mb-4 text-brand-light opacity-90" size={40} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">
              Além do guia, você também recebe 3 bônus para comprar maquiagem com mais segurança
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Bônus 1: Checklist da Necessaire Inteligente</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Um checklist simples para você saber quais itens priorizar e evitar compras desnecessárias.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Bônus 2: Guia Rápido de Bases e Subtons</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Um material prático para ajudar a entender base, corretivo, subtom frio, quente, neutro e oliva.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Bônus 3: Inspirações de Makes por Cartela</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Sugestões de combinações para dia a dia, trabalho, festa e fotos, respeitando a direção de cor da cartela.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="planos" className="py-24 px-4 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-balance">
              Garanta seu acesso ao <span className="font-accent text-5xl md:text-7xl text-brand-rose-dark font-normal lowercase inline-block translate-y-2">guia</span>
            </h2>
            <p className="text-brand-brown text-lg">Receba seu parecer personalizado e comece a comprar maquiagem com segurança.</p>
          </div>

          <div className="max-w-lg mx-auto">
            {/* Dynamic Scarcity Widget */}
            <div className="bg-[#FAF0ED] border border-brand-rose-dark/25 rounded-3xl p-5 mb-6 shadow-sm flex flex-col items-center text-center">
              <div className="flex items-center gap-1.5 text-brand-rose-dark font-semibold text-xs uppercase tracking-wider mb-2">
                <Flame className="w-4 h-4 animate-pulse text-brand-rose-dark" fill="currentColor" />
                <span>Oferta Especial por Tempo Limitado</span>
              </div>
              <p className="text-brand-brown text-xs md:text-sm mb-3.5 leading-relaxed max-w-sm">
                Garanta o preço promocional e todos os 3 bônus exclusivos antes que encerrem as vagas deste lote.
              </p>
              
              <div className="flex items-center gap-6 justify-center w-full border-t border-brand-rose-dark/10 pt-3">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-brand-brown/70 font-bold uppercase tracking-wider mb-0.5">O tempo está acabando</span>
                  <div className="flex items-center gap-1 text-brand-rose-dark font-mono font-bold text-base">
                    <Clock size={14} className="animate-spin-slow" />
                    <span>{formatTime(timeLeft)}</span>
                  </div>
                </div>
                
                <div className="h-8 w-[1px] bg-brand-rose-dark/15"></div>
                
                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-brand-brown/70 font-bold uppercase tracking-wider mb-0.5">Vagas com os Bônus</span>
                  <span className="text-brand-rose-dark font-bold text-base flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    Apenas {spotsLeft} restantes
                  </span>
                </div>
              </div>
            </div>

            {/* Complete Plan (The Only Plan Now) */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-brand-rose-dark shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-rose-dark text-white px-6 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap shadow-md">
                Acesso Completo Vitalício
              </div>
              
              <h3 className="text-2xl font-serif font-bold mb-2 mt-2 text-center">Guia Maquiagem na Cartela</h3>
              <div className="text-brand-brown mb-6 text-center">A experiência e orientação completas</div>
              
              <div className="mb-8 text-center">
                <span className="text-brand-brown/60 text-sm line-through block mb-1">De R$ 97 por apenas</span>
                <span className="text-5xl font-bold text-brand-rose-dark">R$ 37</span>
              </div>

              <ul className="space-y-4 mb-10 text-brand-dark/90">
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span className="font-semibold">Parecer Personalizado Completo</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Análise Guiada de Beleza baseada em fotos</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Direcionamento para batom, blush, sombra, base, contorno e iluminador</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Indicação das suas melhores cores</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Alerta de cores que merecem atenção</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Plano de compra inteligente</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Lista curada de produtos (nacionais e importados)</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span className="font-semibold text-brand-rose-dark">3 Bônus Exclusivos inclusos</span></li>
              </ul>

              <a href="https://pay.lowify.com.br/checkout.php?product_id=fp4rJP" className="block text-center w-full py-4 px-6 rounded-full bg-brand-rose-dark text-white font-medium shadow-lg hover:bg-brand-dark transition-colors transform hover:-translate-y-1 duration-300">
                Quero o Acesso Completo
              </a>
            </div>
          </div>
          
          <p className="text-center text-brand-brown mt-12 max-w-lg mx-auto italic font-serif">
            "Menos do que um batom comprado por impulso — e com orientação para ajudar em várias próximas compras."
          </p>
        </div>
      </section>
    </>
  );
}
