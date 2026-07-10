import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: "Preciso saber minha cartela para usar?",
    a: "O ideal é que você já saiba ou tenha uma noção da sua cartela para receber um parecer mais preciso. Se ainda tiver dúvida, o guia também pode te ajudar com uma orientação inicial, mas ele não substitui uma análise completa de coloração pessoal."
  },
  {
    q: "Vou receber maquiagens em casa?",
    a: "Não. O guia é 100% digital. Você recebe acesso ao aplicativo, parecer personalizado, orientações de cores, checklist e sugestões de produtos. Nenhum produto físico está incluso."
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a confirmação da compra, você recebe as instruções de acesso no e-mail informado no pagamento. O material pode ser acessado pelo celular, direto pelo navegador."
  },
  {
    q: "Funciona para qualquer cartela?",
    a: "Sim, o guia foi pensado para orientar mulheres de diferentes cartelas e subcartelas. As recomendações mudam de acordo com as respostas preenchidas na avaliação."
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Você tem acesso vitalício para consultar seu parecer sempre que quiser, direto pelo celular."
  }
];

export function Closing() {
  const scrollToPricing = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="py-24 px-4 bg-brand-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white p-6 rounded-2xl border border-brand-base cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <summary className="flex justify-between items-center font-semibold text-lg list-none">
                  {faq.q}
                  <span className="transition-transform duration-300 group-open:-rotate-180 text-brand-rose-dark">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="text-brand-brown mt-4 leading-relaxed pr-8 border-t border-brand-base/50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-brand-dark text-white text-center relative overflow-hidden">
        {/* Soft decorative glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-rose-dark/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-rose-dark/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-balance leading-tight">
            Pronta para comprar maquiagem com mais <span className="font-accent text-5xl md:text-7xl text-brand-rose font-normal lowercase inline-block translate-y-2">segurança</span>?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Com o Guia Digital Maquiagem na Cartela, você responde uma análise guiada e recebe um parecer personalizado com cores, orientações e sugestões para escolher maquiagens mais alinhadas com sua cartela e sua beleza natural.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-12 text-left max-w-3xl mx-auto backdrop-blur-sm">
            <h3 className="font-bold text-xl mb-6 text-center text-brand-rose">Você recebe:</h3>
            <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8 text-white/90 font-medium">
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose-dark" /> Análise Guiada de Beleza</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose-dark" /> Parecer Personalizado</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose-dark" /> Direcionamento para batom, blush, sombra, base, contorno e iluminador</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose-dark" /> Cores recomendadas</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose-dark" /> Cores que merecem atenção</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose-dark" /> Plano de compra inteligente</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose-dark" /> Lista curada de produtos</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose-dark" /> Checklist da necessaire</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose-dark" /> Guia rápido de bases e subtons</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose-dark" /> Inspirações de makes por cartela</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose-dark" /> Acesso pelo celular</li>
              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-rose-dark" /> Garantia de 7 dias</li>
            </ul>
          </div>

          <button 
            onClick={scrollToPricing}
            className="bg-brand-rose-dark hover:bg-white hover:text-brand-dark text-white font-semibold text-xl py-5 px-10 rounded-full shadow-[0_0_40px_rgba(181,127,119,0.3)] transition-all duration-300 transform hover:-translate-y-1 mb-6 flex items-center gap-3 mx-auto"
          >
            Quero meu Guia agora <ArrowRight size={24} />
          </button>
          <p className="text-brand-rose font-medium">Acesso completo por apenas R$37</p>
        </div>
      </section>

      <footer className="bg-white py-12 px-4 border-t border-brand-base">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="font-serif font-bold text-2xl text-brand-dark mb-8">Maquiagem na Cartela</div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-brand-brown font-semibold">
            <a href="#" className="hover:text-brand-rose-dark transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-brand-rose-dark transition-colors">Política de privacidade</a>
            <a href="#" className="hover:text-brand-rose-dark transition-colors">Suporte</a>
            <a href="#" className="hover:text-brand-rose-dark transition-colors">Contato</a>
          </div>

          <p className="text-xs text-brand-brown/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Aviso Legal: Este produto é uma orientação digital baseada nas respostas da usuária e não substitui uma consultoria individual completa de coloração pessoal. A compra não inclui produtos físicos de maquiagem.
          </p>

          <p className="text-xs text-brand-brown font-medium">
            © 2026 Maquiagem na Cartela. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
