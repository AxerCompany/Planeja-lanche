/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  CheckCircle2, 
  Smartphone, 
  Clock, 
  Apple, 
  ShoppingBag, 
  Calendar, 
  RefreshCw, 
  ChevronDown,
  Star,
  ShieldCheck,
  Zap,
  Refrigerator,
  UserCircle,
  Wand2,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

const Hero = () => (
  <section className="pt-16 pb-20 px-4 overflow-hidden bg-white">
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 bg-emerald-green/10 text-emerald-green px-3 py-1 rounded-full text-[10px] md:text-xs font-bold mb-6 tracking-wider">
          <Zap size={12} />
          <span>INTELIGÊNCIA APLICADA À MATERNIDADE</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6 max-w-3xl">
          Transforme o que tem na sua geladeira em lanches rápidos, práticos e saudáveis.
        </h1>
        <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl font-medium">
          Com um clique, o app gera receitas inteligentes, adapta para restrições alimentares e ainda monta a semana inteira com lista de compras pronta.
        </p>
        
        <div className="flex flex-col items-center w-full">
          <div className="relative w-[280px] h-[500px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden mb-6">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-10"></div>
            <div className="h-full bg-slate-800 flex items-center justify-center relative group cursor-pointer">
              <img 
                src="https://picsum.photos/seed/vsl/400/800" 
                alt="VSL Video" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black tracking-widest">
            <ShieldCheck size={14} className="text-emerald-green" />
            <span>GARANTIA 7 DIAS</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    {
      number: "1️⃣",
      icon: <Refrigerator className="text-royal-blue" />,
      title: "Digite o que você tem na geladeira",
      desc: "O app cria receitas inteligentes com os ingredientes disponíveis no seu momento."
    },
    {
      number: "2️⃣",
      icon: <UserCircle className="text-emerald-green" />,
      title: "Defina o perfil do seu filho",
      desc: "Sem lactose? Sem glúten? Seletivo? Foco em ganho de peso? O app adapta tudo."
    },
    {
      number: "3️⃣",
      icon: <Wand2 className="text-vibrant-coral" />,
      title: "Gere a semana inteira com 1 clique",
      desc: "O app cria um plano completo + lista de compras automática para você não perder tempo."
    }
  ];

  return (
    <section className="py-24 bg-neutral-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Veja como funciona em 3 passos
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-4xl opacity-10 font-black">
                {idx + 1}
              </div>
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
                {step.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">{step.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    "Gera lanches rápidos com o que tem em casa",
    "Adapta receitas para restrições alimentares",
    "Cria cardápio semanal automático",
    "Monta lista de compras inteligente",
    "Sugere opções equilibradas",
    "Economiza tempo e reduz desperdício"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 leading-tight max-w-3xl">
            Um assistente inteligente para os lanches do seu filho
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 w-full max-w-4xl">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center justify-center gap-4 p-5 bg-neutral-gray rounded-2xl border border-slate-100">
                <div className="w-8 h-8 bg-emerald-green text-white rounded-full flex items-center justify-center shrink-0">
                  <Check size={18} strokeWidth={3} />
                </div>
                <span className="font-bold text-slate-700 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "Eu não fico mais perdida na hora do lanche. Abro o app e ele já me diz o que fazer com o que tenho.",
      role: "Mãe do Theo"
    },
    {
      text: "Meu filho tem restrição e agora ficou muito mais fácil. O app adapta tudo automaticamente.",
      role: "Mãe da Alice"
    },
    {
      text: "Em 1 clique eu já tenho a semana pronta. Economizei tempo e dinheiro no mercado.",
      role: "Mãe do Lucas"
    }
  ];

  return (
    <section className="py-24 bg-neutral-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Mães que transformaram sua rotina
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-lg">
              <div className="flex gap-1 mb-6 text-warm-yellow">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 font-bold text-lg mb-6 leading-relaxed">“{review.text}”</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-royal-blue/10 rounded-full flex items-center justify-center font-black text-royal-blue">
                  {review.role[7]}
                </div>
                <p className="font-black text-slate-900">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Preciso saber cozinhar?",
      a: "Não. As receitas são simples, práticas e explicadas passo a passo para qualquer pessoa conseguir fazer."
    },
    {
      q: "Meu filho tem restrição alimentar. Funciona?",
      a: "Sim! O app permite configurar o perfil do seu filho e adapta todas as receitas automaticamente para as restrições dele."
    },
    {
      q: "Preciso comprar ingredientes caros?",
      a: "Não. O grande diferencial do app é priorizar o que você já tem na geladeira, evitando desperdício e gastos extras."
    },
    {
      q: "Não tenho tempo.",
      a: "O app foi feito para você. O plano semanal e a lista de compras ficam prontos em segundos com apenas 1 clique."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">Dúvidas frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-neutral-gray rounded-3xl border border-slate-100 overflow-hidden">
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-black text-slate-800 text-lg">
                {faq.q}
                <ChevronDown className="group-open:rotate-180 transition-transform text-royal-blue" />
              </summary>
              <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section className="py-24 px-4 bg-neutral-gray">
    <div className="max-w-5xl mx-auto bg-white rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 shadow-2xl border border-slate-100 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-royal-blue via-vibrant-coral to-emerald-green"></div>
      
      <div className="inline-flex items-center gap-2 bg-vibrant-coral/10 text-vibrant-coral px-4 py-2 rounded-full text-xs font-black mb-8 animate-pulse">
        <Zap size={14} />
        <span>OFERTA POR TEMPO LIMITADO - RESTAM APENAS 7 VAGAS</span>
      </div>

      <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-12 leading-tight">
        Organize os lanches do seu filho em minutos
      </h2>
      
      <div className="flex flex-col items-center gap-12 mb-16">
        <div className="space-y-4 text-left w-full max-w-md mx-auto">
          {[
            "Acesso completo ao app",
            "Gerador de receitas inteligente",
            "Plano semanal automático",
            "Lista de compras inteligente",
            "Atualizações constantes"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 font-bold text-slate-700 text-base md:text-lg">
              <div className="w-6 h-6 bg-emerald-green text-white rounded-full flex items-center justify-center shrink-0">
                <Check size={14} strokeWidth={4} />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-neutral-gray rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 border border-slate-100 w-full max-w-lg">
          <p className="text-slate-400 line-through font-bold text-lg md:text-xl mb-2">De R$ 97,00</p>
          <div className="flex flex-col items-center mb-6">
            <span className="text-slate-900 font-black text-lg md:text-xl">Por apenas</span>
            <span className="text-6xl md:text-7xl font-black text-royal-blue tracking-tighter">R$ 19,90</span>
          </div>
          <p className="text-vibrant-coral font-black mb-8 text-sm md:text-base uppercase tracking-widest">PAGAMENTO ÚNICO - ACESSO VITALÍCIO</p>
          <button className="w-full bg-vibrant-coral hover:bg-vibrant-coral/90 text-white px-8 py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] text-xl md:text-2xl font-black shadow-2xl shadow-vibrant-coral/30 transition-all transform hover:scale-105 active:scale-95">
            QUERO MEU ACESSO AGORA
          </button>
          <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
            * Atenção: O preço voltará para R$ 97,00 assim que as 7 vagas forem preenchidas.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] md:text-xs text-slate-400 font-black uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-emerald-green" />
          <span>Garantia 7 dias</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-emerald-green" />
          <span>Compra 100% segura</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 bg-white border-t border-slate-100 text-center">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-8 h-8 bg-royal-blue rounded-xl flex items-center justify-center text-white font-black text-lg">P</div>
        <span className="font-black text-2xl text-slate-900 tracking-tighter">Planeja Lanche</span>
      </div>
      <p className="text-slate-400 font-bold mb-8">Inteligência aplicada à maternidade.</p>
      <div className="flex justify-center gap-8 text-slate-400 font-bold text-sm">
        <a href="#" className="hover:text-royal-blue transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-royal-blue transition-colors">Privacidade</a>
        <a href="#" className="hover:text-royal-blue transition-colors">Suporte</a>
      </div>
      <p className="mt-12 text-slate-300 text-xs font-bold">© 2024 Planeja Lanche. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-royal-blue/20">
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
