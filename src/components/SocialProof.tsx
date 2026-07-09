import { ShieldAlert, ShieldCheck } from 'lucide-react';

export function SocialProof() {
  return (
    <>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-balance">
            O que mulheres dizem depois de usar a <span className="font-accent text-5xl md:text-6xl text-brand-rose-dark font-normal lowercase inline-block translate-y-2">consultoria</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-brand-base">
              <img src="https://res.cloudinary.com/dqwkvuubt/image/upload/v1783536453/nova-paigina-de-vendas-10-1-Yyv0OeyKMLiorpDk_ukitfz.avif" alt="Depoimento de cliente" className="w-full h-auto" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-brand-base">
              <img src="https://res.cloudinary.com/dqwkvuubt/image/upload/v1783536452/4-2-AVLaeOWPEJsvpo8k-666x1024_hp5jan.avif" alt="Depoimento de cliente" className="w-full h-auto" />
            </div>
          </div>
          <p className="text-center text-sm text-brand-brown mt-10 opacity-80">
            *Depoimentos reais de usuárias após concluírem suas consultas.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-brand-base/40">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <div className="w-56 md:w-72 aspect-[3/4] rounded-[2rem] md:rounded-[3rem] bg-brand-rose/20 shrink-0 overflow-hidden border-8 border-white shadow-xl relative rotate-3">
            <img src="https://res.cloudinary.com/dqwkvuubt/image/upload/v1783631279/avatar_tqjbny.png" alt="Camila Siqueira" className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Quem está por trás da Consultoria <span className="font-accent text-4xl md:text-5xl text-brand-rose-dark font-normal block mt-1">Maquiagem na Cartela</span></h2>
            <div className="space-y-4 text-brand-dark/80 leading-relaxed text-lg">
              <p>
                Sou <strong>Camila Siqueira</strong>, especialista em coloração pessoal e beleza estratégica. Criei a Consultoria Digital Maquiagem na Cartela para ajudar mulheres que já se sentiram perdidas na hora de comprar maquiagem e querem fazer escolhas mais conscientes, práticas e alinhadas com sua beleza natural.
              </p>
              <p>
                Depois de observar que muitas mulheres até conhecem sua cartela, mas continuam errando na escolha de batom, blush, base e sombras, desenvolvi uma forma simples de transformar a teoria da coloração em orientação prática de compra.
              </p>
              <p>
                Minha missão é ajudar você a comprar maquiagem com mais clareza, menos desperdício e mais segurança.
              </p>
            </div>
            <div className="mt-10 flex justify-center w-full">
              <a href="https://instagram.com/camilasiqueira" target="_blank" rel="noopener noreferrer" className="inline-block transform rotate-[-4deg] hover:rotate-0 hover:scale-105 transition-all duration-500">
                <div className="relative w-[180px] md:w-[220px] bg-white rounded-[2rem] md:rounded-[2.5rem] border-[6px] md:border-[8px] border-zinc-800 shadow-xl overflow-hidden ring-1 ring-zinc-900/10">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-4 md:h-5 bg-zinc-800 rounded-b-xl md:rounded-b-2xl z-10"></div>
                  
                  {/* Screen Content */}
                  <img 
                    src="https://res.cloudinary.com/dqwkvuubt/image/upload/v1783631622/instacamila_uxnt2r.png" 
                    alt="Instagram da Camila Siqueira" 
                    className="w-full h-auto block" 
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white border-y border-brand-base">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-brand-light p-8 md:p-10 rounded-3xl border border-brand-base">
          <div className="w-20 h-20 bg-brand-dark text-white rounded-full flex items-center justify-center shrink-0 shadow-lg">
            <ShieldCheck size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold mb-3">Teste por 7 dias sem risco</h3>
            <p className="text-brand-brown mb-5 leading-relaxed">
              Você tem 7 dias para acessar a consultoria e conhecer o material. Se sentir que o conteúdo não faz sentido para você, pode solicitar o reembolso dentro do prazo de garantia.
            </p>
            <ul className="flex flex-wrap gap-5 text-sm font-semibold text-brand-dark/80">
              <li className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-brand-base shadow-sm"><ShieldAlert size={16} className="text-brand-rose-dark"/> Compra protegida</li>
              <li className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-brand-base shadow-sm"><ShieldAlert size={16} className="text-brand-rose-dark"/> Garantia de 7 dias</li>
              <li className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-brand-base shadow-sm"><ShieldAlert size={16} className="text-brand-rose-dark"/> Mais tranquilidade para testar</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
