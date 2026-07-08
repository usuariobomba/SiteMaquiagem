import { Gift, Check } from 'lucide-react';

export function Offer() {
  return (
    <>
      <section className="py-20 px-4 bg-brand-rose-dark text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Gift className="mx-auto mb-4 text-brand-light opacity-90" size={40} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">
              Além da consultoria, você também recebe 3 bônus para comprar maquiagem com mais segurança
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-balance">
              Escolha como quer receber sua <span className="font-accent text-5xl md:text-7xl text-brand-rose-dark font-normal lowercase inline-block translate-y-2">consultoria</span>
            </h2>
            <p className="text-brand-brown text-lg">Selecione o plano que melhor atende suas necessidades hoje.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
            {/* Basic Plan */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-brand-base shadow-sm mt-4 md:mt-8">
              <h3 className="text-2xl font-serif font-bold mb-2">Plano Básico</h3>
              <div className="text-brand-brown mb-6">O essencial para iniciar</div>
              <div className="mb-8">
                <span className="text-4xl font-bold">R$17</span>
              </div>
              
              <ul className="space-y-4 mb-10 text-brand-dark/90">
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Análise Guiada de Beleza</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Parecer inicial da sua cartela</span></li>
              </ul>

              <a href="https://pay.lowify.com.br/go.php?offer=vipzfqw" className="block text-center w-full py-4 px-6 rounded-full border-2 border-brand-dark text-brand-dark font-medium hover:bg-brand-dark hover:text-white transition-colors">
                Começar com o Plano Básico
              </a>
            </div>

            {/* Complete Plan */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border-2 border-brand-rose-dark shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-rose-dark text-white px-6 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap shadow-md">
                Mais escolhido • Melhor custo-benefício
              </div>
              
              <h3 className="text-2xl font-serif font-bold mb-2">Plano Completo</h3>
              <div className="text-brand-brown mb-6">A experiência e orientação completas</div>
              <div className="mb-8">
                <span className="text-5xl font-bold">R$37</span>
              </div>
              
              <div className="text-sm font-medium mb-6 bg-brand-rose/10 p-3 rounded-xl text-center text-brand-rose-dark">
                Tudo do Plano Básico, mais:
              </div>

              <ul className="space-y-4 mb-10 text-brand-dark/90">
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span className="font-semibold">Parecer Personalizado Completo</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Direcionamento para batom, blush, sombra, base, contorno e iluminador</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Indicação das suas melhores cores</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Alerta de cores que merecem atenção</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Plano de compra inteligente</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span>Lista curada de produtos (nacionais e importados)</span></li>
                <li className="flex gap-3 items-start"><Check className="text-brand-rose-dark mt-1 shrink-0" size={18} /> <span className="font-semibold text-brand-rose-dark">3 Bônus Exclusivos inclusos</span></li>
              </ul>

              <a href="https://pay.lowify.com.br/checkout.php?product_id=fp4rJP" className="block text-center w-full py-4 px-6 rounded-full bg-brand-rose-dark text-white font-medium shadow-lg hover:bg-brand-dark transition-colors transform hover:-translate-y-1 duration-300">
                Quero o Plano Completo
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
