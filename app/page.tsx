'use client';

import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Boxes, FolderKanban, Sprout } from 'lucide-react';
import { useState } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const content = {
  pt: {
    eyebrow: 'Cultivo inteligente. Onde a vida acontece.', titleA: 'Cultive perto.', titleB: 'Colha melhor.',
    lead: 'Um sistema hidropônico que transforma qualquer ambiente em um espaço produtivo — com acesso confortável, irrigação inteligente e luz na medida certa.',
    primary: 'Conheça a HortiVita', secondary: 'Ver modelos', explore: 'Explore', alt: 'Sistema hidropônico HortiVita cultivando hortaliças',
    stats: [['360°', 'rotação programada'], ['Indoor', 'cultivo o ano todo'], ['Ergonômica', 'cuidado sem se abaixar']],
    discover: 'Descubra a HortiVita', discoverTitle: 'Escolha por onde começar.',
    cards: [['Nossa história', 'Conheça a ideia, o propósito e o design por trás da HortiVita.', '/sobre'], ['Como funciona', 'Entenda o ciclo de cultivo, a rotação, a irrigação e a iluminação.', '/como-funciona'], ['Modelos', 'Encontre a configuração certa para sua casa, escola ou negócio.', '/modelos'], ['Projetos', 'Veja como a HortiVita cria valor em ambientes reais.', '/projetos']],
    open: 'Abrir página', ctaTitle: 'Seu ambiente pode ganhar vida.', ctaText: 'Conte onde você quer cultivar. A HortiVita pode ser dimensionada e personalizada para sua casa, escola, restaurante ou projeto.', ctaButton: 'Solicitar orçamento',
  },
  en: {
    eyebrow: 'Smart growing. Wherever life happens.', titleA: 'Grow closer.', titleB: 'Harvest better.',
    lead: 'A hydroponic system that turns any environment into a productive space — with comfortable access, smart irrigation and precisely controlled light.',
    primary: 'Meet HortiVita', secondary: 'View models', explore: 'Explore', alt: 'HortiVita hydroponic system growing leafy greens',
    stats: [['360°', 'scheduled rotation'], ['Indoor', 'year-round growing'], ['Ergonomic', 'care without bending']],
    discover: 'Discover HortiVita', discoverTitle: 'Choose where to begin.',
    cards: [['Our story', 'Discover the idea, purpose and design behind HortiVita.', '/sobre'], ['How it works', 'Understand the growing cycle, rotation, irrigation and lighting.', '/como-funciona'], ['Models', 'Find the right setup for your home, school or business.', '/modelos'], ['Projects', 'See how HortiVita creates value in real environments.', '/projetos']],
    open: 'Open page', ctaTitle: 'Your space can come alive.', ctaText: 'Tell us where you want to grow. HortiVita can be sized and customized for your home, school, restaurant or project.', ctaButton: 'Request a quote',
  },
} as const;

const cardIcons = [Sprout, BookOpen, Boxes, FolderKanban];

export default function Home() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const t = content[lang];
  return <main>
    <SiteHeader lang={lang} onToggle={() => setLang(lang === 'pt' ? 'en' : 'pt')} />
    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow"><span />{t.eyebrow}</p><h1>{t.titleA}<br /><em>{t.titleB}</em></h1><p className="hero-lead">{t.lead}</p><div className="hero-actions"><a className="button primary" href="/sobre">{t.primary}<ArrowDownRight size={19} /></a><a className="button ghost" href="/modelos">{t.secondary}<ArrowUpRight size={18} /></a></div></div>
      <div className="hero-visual"><img src="/hero.webp" alt={t.alt} /><div className="orbit-label"><span>01</span><b>HIDROPONIA<br />EM MOVIMENTO</b></div><span className="hero-number">01</span></div><a href="#explorar" className="scroll-cue"><span>{t.explore}</span><ArrowDownRight /></a>
    </section>
    <section className="stat-bar">{t.stats.map(([value,label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</section>
    <section className="home-directory" id="explorar"><div className="section-heading"><p className="section-index">02 / {t.discover}</p><h2>{t.discoverTitle}</h2></div><div className="directory-grid">{t.cards.map(([title,text,href],i) => { const Icon=cardIcons[i]; return <a href={href} key={title}><div><Icon/><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p><b>{t.open}<ArrowRight size={17}/></b></a>})}</div></section>
    <section className="closing-cta compact"><p>{t.ctaTitle}</p><div><span>{t.ctaText}</span><a href="/contato">{t.ctaButton}<ArrowUpRight/></a></div></section>
    <SiteFooter lang={lang}/>
  </main>;
}
