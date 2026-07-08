import { Check, Sparkles, Target, Ban, ListOrdered, ShoppingBag, Smartphone } from 'lucide-react';

const personas = [
  "Você já comprou batom, blush ou base e depois sentiu que a cor não combinava",
  "Você já fez análise de coloração, mas ainda fica perdida na hora de comprar maquiagem",
  "Você tem produtos parados na gaveta porque comprou por impulso",
  "Você sente que algumas maquiagens deixam seu rosto apagado, pesado ou estranho",
  "Você quer montar uma necessaire mais inteligente sem gastar testando várias opções",
  "Você quer entender melhor quais tons valorizam sua beleza natural",
  "Você não quer fazer um curso de maquiagem, só quer uma orientação prática para comprar melhor"
];

const deliverables = [
  {
    icon: <Target className="text-brand-rose-dark mb-4" size={32} />,
    title: "1. Avaliação de Beleza",
    desc: "Um questionário rápido para entender sua cartela, subtom, estilo de maquiagem, dificuldades e objetivo principal.",
    benefit: "A experiência fica mais personalizada e direcionada."
  },
  {
    icon: <Sparkles className="text-brand-rose-dark mb-4" size={32} />,
    title: "2. Parecer Personalizado",
    desc: "Um resultado com orientações sobre as cores que tendem a valorizar sua beleza.",
    benefit: "Mais clareza antes de comprar maquiagem."
  },
  {
    icon: <Check className="text-brand-rose-dark mb-4" size={32} />,
    title: "3. Direcionamento por categoria",
    desc: "Orientações para batom, blush, sombra, iluminador, contorno e base/corretivo.",
    benefit: "Saber o que procurar em cada tipo de produto."
  },
  {
    icon: <Ban className="text-brand-rose-dark mb-4" size={32} />,
    title: "4. Cores que merecem atenção",
    desc: "Uma lista de tons que podem não harmonizar tanto com a sua cartela.",
    benefit: "Evitar compras por impulso que podem ficar paradas."
  },
  {
    icon: <ListOrdered className="text-brand-rose-dark mb-4" size={32} />,
    title: "5. Plano de compra inteligente",
    desc: "Uma ordem prática do que comprar primeiro.",
    benefit: "Montar uma necessaire aos poucos, sem desperdício."
  },
  {
    icon: <ShoppingBag className="text-brand-rose-dark mb-4" size={32} />,
    title: "6. Lista curada de produtos",
    desc: "Sugestões de produtos nacionais e importados compatíveis com a cartela.",
    benefit: "Economizar tempo na hora de escolher."
  }
];

export function ProblemSolution() {
  return (
    <>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-balance">
            Essa consultoria é para <span className="font-accent text-5xl md:text-6xl text-brand-rose-dark font-normal lowercase inline-block translate-y-2">você</span> se...
          </h2>
          <div className="bg-brand-light rounded-3xl p-8 md:p-12 shadow-sm border border-brand-base">
            <ul className="space-y-6">
              {personas.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 bg-brand-rose/20 p-1.5 rounded-full text-brand-rose-dark shrink-0">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="text-brand-dark/90 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-base/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 max-w-2xl mx-auto text-balance">
            O que você recebe dentro da Consultoria Digital <span className="font-accent text-5xl md:text-6xl text-brand-rose-dark font-normal inline-block translate-y-1 block mt-2">Maquiagem na Cartela</span>
          </h2>
          <p className="text-center text-brand-brown mb-16 max-w-xl mx-auto">
            Uma entrega direta, prática e focada em facilitar sua vida na hora de comprar.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-brand-base hover:shadow-md transition-shadow">
                {item.icon}
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-brand-brown mb-4 text-sm leading-relaxed">{item.desc}</p>
                <div className="bg-brand-light p-3 rounded-lg border border-brand-base/50">
                  <p className="text-sm text-brand-rose-dark font-medium">
                    <span className="text-brand-dark">Benefício:</span> {item.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-base text-brand-brown text-sm font-medium mb-6">
              <Smartphone size={16} /> 100% Digital
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
              Sua consultoria sempre com você, direto no <span className="font-accent text-5xl md:text-6xl text-brand-rose-dark font-normal lowercase inline-block translate-y-2">celular</span>
            </h2>
            <p className="text-lg text-brand-brown mb-8 leading-relaxed">
              Depois da compra, você recebe o acesso e pode consultar seu parecer sempre que quiser: em casa, antes de comprar online ou até mesmo dentro da loja de maquiagem para conferir uma cor.
            </p>
            <ul className="space-y-4 text-left inline-block md:block">
              {[
                "Não precisa imprimir nada",
                "Pode acessar quando quiser",
                "Fácil de consultar antes de comprar",
                "Ideal para usar na loja ou comprando online"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-dark/90 font-medium">
                  <Check size={20} className="text-brand-rose-dark shrink-0" strokeWidth={3} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full max-w-sm relative">
            <div className="absolute inset-0 bg-brand-rose/20 rounded-full blur-3xl" />
            <div className="relative mx-auto w-[280px] h-[580px] bg-white rounded-[40px] shadow-2xl border-[8px] border-brand-dark overflow-hidden flex flex-col">
              <div className="w-1/3 h-6 bg-brand-dark absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-10" />
              {/* Phone Content Mockup */}
              <div className="flex-1 bg-brand-light p-6 pt-12 overflow-y-auto hide-scrollbar">
                <h4 className="font-serif font-bold text-xl mb-6">Seu Parecer Personalizado</h4>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-base mb-4">
                  <div className="text-xs text-brand-brown mb-1 uppercase tracking-wider font-semibold">Cores Recomendadas</div>
                  <div className="flex gap-2 mt-3">
                    <div className="w-8 h-8 rounded-full bg-[#D4A373] shadow-inner" />
                    <div className="w-8 h-8 rounded-full bg-[#E5989B] shadow-inner" />
                    <div className="w-8 h-8 rounded-full bg-[#B5838D] shadow-inner" />
                    <div className="w-8 h-8 rounded-full bg-[#6D6875] shadow-inner" />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-base mb-4">
                  <div className="text-xs text-brand-brown mb-3 uppercase tracking-wider font-semibold">Checklist de Compra</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3"><div className="w-4 h-4 rounded-sm border-2 border-brand-rose-dark bg-brand-rose-dark/20" /><div className="h-2 w-24 bg-brand-base rounded-full" /></div>
                    <div className="flex items-center gap-3"><div className="w-4 h-4 rounded-sm border-2 border-brand-base" /><div className="h-2 w-32 bg-brand-base rounded-full" /></div>
                    <div className="flex items-center gap-3"><div className="w-4 h-4 rounded-sm border-2 border-brand-base" /><div className="h-2 w-20 bg-brand-base rounded-full" /></div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-brand-base">
                  <div className="text-xs text-brand-brown mb-3 uppercase tracking-wider font-semibold">Produtos Recomendados</div>
                  <div className="flex gap-3 items-center mb-3">
                    <div className="w-12 h-12 bg-brand-base rounded-lg flex-shrink-0" />
                    <div className="flex-1"><div className="h-2 w-full bg-brand-base rounded-full mb-2" /><div className="h-2 w-1/2 bg-brand-base rounded-full" /></div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-12 h-12 bg-brand-base rounded-lg flex-shrink-0" />
                    <div className="flex-1"><div className="h-2 w-full bg-brand-base rounded-full mb-2" /><div className="h-2 w-2/3 bg-brand-base rounded-full" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
