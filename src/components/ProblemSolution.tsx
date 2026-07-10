import { Check, Sparkles, Target, Ban, ListOrdered, ShoppingBag, Smartphone } from 'lucide-react';

const personas = [
  "Você já comprou uma maquiagem linda na embalagem, mas que em você ficou estranha",
  "Você tem batons, blushes ou bases parados porque quase nunca consegue usar",
  "Você já fez análise de coloração, mas ainda trava na hora de comprar maquiagem",
  "Você sente que alguns tons deixam seu rosto apagado, pesado ou amarelado",
  "Você compra por impulso e depois percebe que a cor não combina com sua beleza",
  "Você quer montar uma necessaire mais inteligente, com produtos que realmente fazem sentido",
  "Você não quer fazer um curso de maquiagem — só quer uma orientação prática para comprar melhor"
];

const deliverables = [
  {
    icon: <Target className="text-brand-rose-dark mb-4" size={32} />,
    title: "1. Análise Guiada de Beleza",
    desc: "Um mapeamento rápido para entender sua cartela, subtom e dificuldades. Suas respostas moldam o seu resultado.",
    benefit: "A experiência é personalizada com base nas suas respostas."
  },
  {
    icon: <Sparkles className="text-brand-rose-dark mb-4" size={32} />,
    title: "2. Parecer Digital Personalizado",
    desc: "Um parecer exclusivo, liberado no seu aplicativo, revelando quais cores e tons harmonizam com você.",
    benefit: "Mais clareza e segurança na hora de escolher a maquiagem."
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
    title: "6. Lista Curada de Produtos Compatíveis com seu Perfil",
    desc: "Sugestões de produtos nacionais e importados alinhados às respostas da sua análise, para facilitar sua escolha na hora de comprar.",
    benefit: "Você economiza tempo pesquisando e consegue comparar opções com mais clareza antes de comprar."
  }
];

export function ProblemSolution() {
  return (
    <>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-balance">
            Esse guia é para <span className="font-accent text-5xl md:text-6xl text-brand-rose-dark font-normal lowercase inline-block translate-y-2">você</span> se...
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
            O que você destrava dentro do aplicativo <span className="font-accent text-5xl md:text-6xl text-brand-rose-dark font-normal inline-block translate-y-1 block mt-2">Maquiagem na Cartela</span>
          </h2>
          <p className="text-center text-brand-brown mb-16 max-w-xl mx-auto">
            Uma entrega 100% digital, prática e ultra-personalizada baseada nas suas respostas.
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
              <Smartphone size={16} /> Aplicativo Web Exclusivo
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">
              Seu parecer sempre com você, direto no <span className="font-accent text-5xl md:text-6xl text-brand-rose-dark font-normal lowercase inline-block translate-y-2">celular</span>
            </h2>
            <p className="text-lg text-brand-brown mb-8 leading-relaxed">
              Depois da compra, você recebe acesso ao aplicativo web do guia. Seu parecer fica salvo para consultar em casa, antes de comprar online ou até na loja.
            </p>
            <ul className="space-y-4 text-left inline-block md:block">
              {[
                "Acesse pelo navegador, sem precisar baixar aplicativo",
                "Consulte suas cores recomendadas quando quiser",
                "Veja o que observar antes de comprar batom, blush, base ou sombra",
                "Use seu checklist para evitar compras por impulso"
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
