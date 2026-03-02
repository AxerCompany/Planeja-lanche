/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Smartphone, 
  Clock, 
  Apple, 
  ShoppingBag, 
  Calendar, 
  RefreshCw, 
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  Zap,
  Refrigerator,
  UserCircle,
  Wand2,
  Check,
  Gift,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Player from '@vimeo/player';

const handleRedirect = (baseUrl: string) => {
  const search = window.location.search;
  if (!search) {
    window.location.href = baseUrl;
    return;
  }
  
  // Remove leading '?' from search
  const cleanSearch = search.startsWith('?') ? search.substring(1) : search;
  // Determine separator
  const separator = baseUrl.includes('?') ? '&' : '?';
  
  window.location.href = `${baseUrl}${separator}${cleanSearch}`;
};

const ImageCarousel = () => {
  const images = [
    "https://picsum.photos/seed/app1/400/800",
    "https://picsum.photos/seed/app2/400/800",
    "https://picsum.photos/seed/app3/400/800",
    "https://picsum.photos/seed/app4/400/800",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-[280px] h-[500px] bg-text-primary rounded-[3rem] border-[8px] border-text-primary/10 shadow-2xl overflow-hidden mb-6 mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-text-primary/10 rounded-b-2xl z-20"></div>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-20">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-white w-4' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

const VideoVSL = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const playerRef = React.useRef<Player | null>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      playerRef.current = player;
      
      player.on('play', () => setIsPlaying(true));
      player.on('pause', () => setIsPlaying(false));
      player.on('ended', () => {
        player.setCurrentTime(0);
        player.pause();
        setIsPlaying(false);
      });

      return () => {
        player.destroy();
      };
    }
  }, []);

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mb-10 w-full max-w-[320px] mx-auto">
      <div className="relative group w-full cursor-pointer" onClick={handlePlay}>
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-primary-green/30 rounded-[2.6rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        
        <div className="relative w-full aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-4 border-white/10">
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1168686523?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Mini VSL Planeja Lanche"
          ></iframe>

          {/* Play Overlay / Thumbnail */}
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 transition-opacity duration-500">
              {/* Thumbnail Image */}
              <img 
                src="https://i.postimg.cc/h4Jtt9bY/Whats_App_Image_2026_02_25_at_12_13_17.webp" 
                alt="Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
              
              <div className="relative z-30 flex flex-col items-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center shadow-2xl shadow-primary-green/50"
                >
                  <Play size={40} fill="white" className="text-white ml-2" />
                </motion.div>
                <p className="mt-6 text-white font-black text-lg uppercase tracking-widest drop-shadow-lg text-center px-4">
                  Clique para Assistir
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Call to action below video */}
      <div className="flex items-center gap-2 text-text-secondary font-bold text-[10px] md:text-xs uppercase tracking-widest opacity-70">
        <Zap size={12} fill="currentColor" className="text-primary-green" />
        <span>Assista o vídeo de 1 min acima e entenda como funciona o app</span>
      </div>
    </div>
  );
};

const Hero = () => (
  <section className="pt-16 pb-12 px-4 overflow-hidden bg-card-white">
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green px-3 py-1 rounded-full text-[10px] md:text-xs font-bold mb-6 tracking-wider">
          <Zap size={12} />
          <span>INTELIGÊNCIA APLICADA À MATERNIDADE</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight mb-4 max-w-2xl">
          Transforme o que tem na sua geladeira em lanches rápidos, práticos e saudáveis para o seu filho.
        </h1>
        <div className="flex flex-col items-center gap-6 w-full">
          <p className="text-base md:text-lg text-text-secondary max-w-xl font-medium leading-relaxed mb-6">
            Receba ideias rápidas, inteligentes e divertidas usando apenas os ingredientes que você já tem em casa.
          </p>
          
          <VideoVSL />
        </div>
      </motion.div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: <Refrigerator size={32} />,
      title: "1. Abra sua geladeira e veja o que você tem",
      desc: "Olhe os ingredientes disponíveis naquele momento. Pode ser pão, ovo, banana, queijo, frutas… o que tiver aí. Nada de sair comprando coisas novas.",
      color: "bg-primary-green"
    },
    {
      icon: <Smartphone size={32} />,
      title: "2. Digite os ingredientes no app",
      desc: "Você informa o que tem na geladeira. Em segundos, o app entende sua necessidade e começa a gerar sugestões inteligentes.",
      color: "bg-dark-green"
    },
    {
      icon: <Wand2 size={32} />,
      title: "3. Gere o lanche ideal em segundos",
      desc: "Com um clique, o app cria ideias práticas usando apenas o que você tem. Você escolhe a receita que mais gostou e segue o passo a passo simples para preparar. Rápido. Prático. Pensado para crianças.",
      color: "bg-primary-green"
    }
  ];

  return (
    <section className="py-20 bg-bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
            veja como funciona o <span className="text-primary-green">planeja lanche</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-3xl bg-white border border-border-soft shadow-sm flex flex-col items-start text-left transition-all duration-300"
            >
              <div className={`w-14 h-14 ${step.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-md`}>
                <div className="w-7 h-7 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-black text-text-primary mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-text-secondary font-medium text-base leading-relaxed opacity-90">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HorizontalCarousel = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const images = [
    "https://i.postimg.cc/h4Jtt9bY/Whats_App_Image_2026_02_25_at_12_13_17.webp",
    "https://i.postimg.cc/DfWwwqdM/Whats_App_Image_2026_02_25_at_12_13_17_(1).webp",
    "https://i.postimg.cc/DfWwwqdj/Whats_App_Image_2026_02_25_at_12_13_17_(2).webp",
    "https://i.postimg.cc/J7yzzbcP/Whats_App_Image_2026_02_25_at_12_13_18.webp",
    "https://i.postimg.cc/W4PkM5SJ/Whats-App-Image-2026-02-25-at-12-10-54-(3).webp",
    "https://i.postimg.cc/zDLGGnS7/Whats_App_Image_2026_02_25_at_12_10_54_(1).webp",
    "https://i.postimg.cc/1Rg33pcH/Whats_App_Image_2026_02_25_at_12_10_54_(2).webp",
    "https://i.postimg.cc/23pJkpFn/Whats_App_Image_2026_02_25_at_12_10_55_(1).webp",
    "https://i.postimg.cc/jCV9xVQN/Whats_App_Image_2026_02_25_at_12_10_55_(2).webp",
    "https://i.postimg.cc/gr95z9qL/Whats_App_Image_2026_02_25_at_12_10_55_(3).webp",
    "https://i.postimg.cc/Jnpr7CxG/Whats-App-Image-2026-02-25-at-12-15-34.webp",
    "https://i.postimg.cc/23pJkpF1/Whats_App_Image_2026_02_25_at_12_10_55_(5).webp",
    "https://i.postimg.cc/7hX2yRGM/Whats-App-Image-2026-02-25-at-12-10-55-(6).webp"
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstItem = container.firstElementChild as HTMLElement;
      if (firstItem) {
        const itemWidth = firstItem.offsetWidth;
        const gap = 24; // gap-6 is 24px
        const scrollStep = itemWidth + gap;
        const { scrollLeft } = container;
        const scrollTo = direction === 'left' ? scrollLeft - scrollStep : scrollLeft + scrollStep;
        container.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full mb-16 relative group">
      {/* Navigation Arrows */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-4 text-primary-green/50 hover:text-primary-green transition-all hidden md:flex cursor-pointer"
        aria-label="Anterior"
      >
        <ChevronLeft size={48} strokeWidth={1.5} />
      </button>
      
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-4 text-primary-green/50 hover:text-primary-green transition-all hidden md:flex cursor-pointer"
        aria-label="Próximo"
      >
        <ChevronRight size={48} strokeWidth={1.5} />
      </button>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar px-6 md:px-[25%] lg:px-[35%]"
      >
        {images.map((img, i) => (
          <div 
            key={i} 
            className="w-[80vw] sm:w-[300px] md:w-[350px] h-auto aspect-[9/19] rounded-2xl overflow-hidden border border-border-soft shadow-xl shrink-0 snap-center bg-white"
          >
            <img src={img} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        <div className="flex items-center gap-1 text-text-secondary/40 text-[10px] font-black uppercase tracking-widest">
          <span>Deslize para ver mais</span>
          <div className="w-8 h-1 bg-text-secondary/10 rounded-full overflow-hidden">
            <motion.div 
              animate={{ x: [-32, 32] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-primary-green/40"
            />
          </div>
        </div>
      </div>
    </div>
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
    <section className="py-24 bg-card-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4 leading-tight max-w-3xl">
            Um assistente inteligente para os lanches do seu filho
          </h2>
          
          <p className="text-dark-green font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mb-12 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-dark-green/20"></span>
            Passe para o lado e conheça o app por dentro
            <span className="w-8 h-[1px] bg-dark-green/20"></span>
          </p>
          
          <HorizontalCarousel />
          
          <div className="grid sm:grid-cols-2 gap-4 w-full max-w-4xl">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center justify-start gap-4 p-5 px-8 bg-bg-beige rounded-2xl border border-border-soft">
                <div className="w-8 h-8 bg-dark-green text-white rounded-full flex items-center justify-center shrink-0">
                  <Check size={18} strokeWidth={3} />
                </div>
                <span className="font-bold text-text-secondary text-sm md:text-base text-left">{item}</span>
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
      text: "Eu sempre ficava perdida na hora de montar uma lancheira que o Matheus comesse sempre, depois que comecei a usar esse app não fico mais sem ideia e nem ele sem comer rsrs adorei super recomendo!",
      role: "Mãe do Matheus",
      image: "https://i.postimg.cc/0NCnC7tX/image_14_300x300.webp"
    },
    {
      text: "Meu filho é alérgico a ovo, sempre foi uma luta com a alimentação dele. Confesso que esse app tem sido uma mão na roda aqui em casa, ele gera certinho várias receitas deliciosas que não vai ovo, estou amando o app.",
      role: "Mãe do Pedro",
      image: "https://i.postimg.cc/CKwHdzFq/image_13_229x300.webp"
    },
    {
      text: "Sempre achei difícil organizar a semana de lanches do meu filho por falta de criatividade e tempo pois trabalho fora. Essa opção de gerar o lanche com o que tem disponível na geladeira é simplesmente incrível, me ajuda muito sendo mãe solo e tendo que cuidar de tudo.",
      role: "Mãe do Lucas",
      image: "https://i.postimg.cc/0QQZ1rBw/download_(18).jpg"
    }
  ];

  return (
    <section className="py-24 bg-bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4">
            Mães que transformaram sua rotina
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-border-soft/30 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex gap-0.5 mb-4 text-primary-green/60">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <p className="text-text-secondary font-medium text-base mb-8 leading-relaxed flex-grow">“{review.text}”</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden grayscale-[0.5] hover:grayscale-0 transition-all shrink-0">
                  <img src={review.image} alt={review.role} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <p className="font-bold text-text-primary text-xs uppercase tracking-wider">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Bonus = () => {
  const bonus = {
    title: "Guia Prático para Crianças Seletivas",
    subtitle: "Como Fazer Seu Filho Comer Melhor Sem Briga",
    desc: "Estratégias práticas para acabar com as brigas na hora da refeição e incentivar seu filho a provar novos alimentos de forma leve.",
    value: "R$ 67,00",
    icon: <UserCircle size={32} />
  };

  return (
    <section className="py-24 bg-card-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4">
            Bônus Exclusivo para Você
          </h2>
          <p className="text-text-secondary font-medium">Garantindo seu acesso hoje, você leva esse presente de graça.</p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-xl p-10 rounded-[3rem] relative overflow-hidden shadow-2xl transition-all hover:scale-[1.02] bg-primary-green text-white shadow-primary-green/20">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Gift size={100} />
            </div>
            <div className="relative z-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Bônus Exclusivo</div>
              <div className="mb-6 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                {bonus.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-2 leading-tight">{bonus.title}</h3>
              <p className="text-sm font-bold opacity-80 mb-4 italic">{bonus.subtitle}</p>
              <p className="text-white/70 text-sm font-medium mb-8 leading-relaxed">{bonus.desc}</p>
              <div className="pt-6 border-t border-white/10 text-white font-black text-lg uppercase italic">
                Valor: <span className="line-through opacity-50">{bonus.value}</span> <span className="text-light-green ml-2">Grátis</span>
              </div>
            </div>
          </div>
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
    <section className="py-24 bg-card-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-12 text-center">Dúvidas frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-bg-beige rounded-3xl border border-border-soft overflow-hidden">
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-black text-text-primary text-lg">
                {faq.q}
                <ChevronDown className="group-open:rotate-180 transition-transform text-primary-green" />
              </summary>
              <div className="px-8 pb-8 text-text-secondary font-medium leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-24 px-4 bg-bg-beige">
    <div className="max-w-4xl mx-auto">
      {/* Extreme Scarcity Banner */}
      <div className="bg-dark-green text-white py-3 px-6 rounded-t-[2.5rem] flex items-center justify-center gap-3 animate-pulse">
        <Clock size={18} />
        <span className="text-xs md:text-sm font-black uppercase tracking-widest">
          Oferta por tempo limitado: Restam apenas <span className="text-light-green">7 vagas</span> com este valor
        </span>
      </div>

      <div className="bg-card-white rounded-b-[3.5rem] rounded-t-none shadow-2xl border border-border-soft overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Side: Offer Details */}
          <div className="p-10 md:p-16 text-center flex flex-col justify-center border-r border-border-soft">
            <div className="max-w-md mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary-green/5 text-primary-green px-4 py-1.5 rounded-full text-[10px] font-black mb-8 uppercase tracking-widest border border-primary-green/10">
                <Zap size={12} fill="currentColor" />
                <span>Acesso Vitalício</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-black text-text-primary mb-6 leading-tight tracking-tight">
                Lanches deliciosos, rápidos e econômicos.
              </h2>
              
              <p className="text-sm md:text-base text-text-secondary font-medium mb-12 leading-relaxed">
                Tudo o que você precisa para criar o cardápio perfeito, 100% personalizado para o perfil do seu filho, com apenas um clique.
              </p>
              
              <ul className="space-y-5 inline-block text-left">
                {[
                  { text: "Gerador de receitas inteligente", isBonus: false },
                  { text: "Plano semanal em 1 clique", isBonus: false },
                  { text: "Lista de compras automática", isBonus: false },
                  { text: "Guia: Crianças Seletivas", isBonus: true }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-bold">
                    <div className={`w-6 h-6 ${item.isBonus ? 'bg-dark-green/20 text-dark-green' : 'bg-dark-green/20 text-dark-green'} rounded-full flex items-center justify-center shrink-0`}>
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className={`text-base ${item.isBonus ? 'text-dark-green' : 'text-text-secondary'}`}>
                      {item.text} {item.isBonus && <span className="text-[10px] bg-dark-green/10 px-2 py-0.5 rounded ml-1 uppercase">Bônus</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Price & Action */}
          <div className="bg-bg-beige/30 p-10 md:p-16 flex flex-col justify-center items-center text-center">
            <div className="w-full max-w-sm flex flex-col items-center">
              {/* 1. Promoção */}
              <div className="flex flex-col items-center mb-6">
                <span className="text-dark-green font-black text-xs uppercase tracking-widest mb-1">Promoção Hoje</span>
                <div className="h-1 w-12 bg-primary-green rounded-full"></div>
              </div>
              
              {/* 2. Preço antigo */}
              <span className="text-text-secondary/50 line-through font-bold text-sm mb-1">De R$ 97,00</span>
              
              {/* 3. Preço novo */}
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl md:text-7xl font-black text-text-primary tracking-tighter">R$ 19,90</span>
              </div>
              
              {/* 4. Pagamento único */}
              <span className="text-text-secondary font-bold text-xs uppercase tracking-widest mb-10">pagamento único • acesso imediato</span>
              
              {/* 5. Botão de CTA */}
              <button 
                onClick={() => handleRedirect("https://pay.cakto.com.br/gzd66uu_788005")}
                className="w-full bg-primary-green hover:bg-dark-green text-white px-8 py-7 rounded-3xl text-xl font-black shadow-2xl shadow-primary-green/30 transition-all transform hover:scale-105 active:scale-95 mb-10 group flex items-center justify-center gap-2 cursor-pointer"
              >
                LIBERAR MEU ACESSO
                <Zap size={20} className="group-hover:animate-bounce" />
              </button>
              
              {/* Guarantee Highlight - More Prominent */}
              <div className="bg-card-white p-8 rounded-[2.5rem] border-2 border-primary-green/30 shadow-xl w-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-green/5 rounded-full -mr-12 -mt-12"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-green text-white rounded-full flex items-center justify-center mb-4 shadow-lg shadow-primary-green/20">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-lg font-black text-text-primary mb-2 uppercase tracking-tight">Garantia Blindada</h3>
                  <p className="text-text-secondary text-xs font-bold leading-relaxed mb-4">
                    Você tem <span className="text-dark-green font-black">7 dias inteiros</span> para testar tudo. Se não amar, devolvemos cada centavo.
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-black text-dark-green uppercase tracking-widest bg-primary-green/10 px-3 py-1 rounded-full">
                    <CheckCircle2 size={12} />
                    <span>Risco Zero Garantido</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

const Footer = () => (
  <footer className="py-16 bg-card-white border-t border-border-soft text-center">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-8 h-8 bg-primary-green rounded-xl flex items-center justify-center text-white font-black text-lg">P</div>
        <span className="font-black text-2xl text-text-primary tracking-tighter">Planeja Lanche</span>
      </div>
      <p className="text-text-secondary font-bold mb-8">Inteligência aplicada à maternidade.</p>
      <div className="flex justify-center gap-8 text-text-secondary font-bold text-sm">
        <a href="#" className="hover:text-primary-green transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-primary-green transition-colors">Privacidade</a>
        <a href="#" className="hover:text-primary-green transition-colors">Suporte</a>
      </div>
      <p className="mt-12 text-text-secondary/30 text-xs font-bold">© 2024 Planeja Lanche. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary-green/20">
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Bonus />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
