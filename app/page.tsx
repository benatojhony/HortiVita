'use client';

import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Boxes, FolderKanban, Sprout } from 'lucide-react';
import { useState } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const content = {
  pt: {
    eyebrow: 'Verde que gira, vida que cresce.', titleA: 'Cultive mais.', titleB: 'Ocupe menos espaço.',
    lead: 'A HortiVita é uma horta hidropônica compacta e giratória. Ela aproxima as plantas, reaproveita a água e cabe onde uma horta comum não caberia.',
    primary: 'Veja como funciona', secondary: 'Ver soluções', explore: 'Explore', alt: 'Sistema hidropônico HortiVita cultivando hortaliças',
    stats: [['Vertical', 'mais plantas em pouco espaço'], ['Água no ciclo', 'solução reaproveitada na base'], ['Ao alcance', 'mais conforto para cuidar e colher']],
    discover: 'Descubra a HortiVita', discoverTitle: 'Escolha por onde começar.',
    cards: [['Nossa história', 'Conheça a ideia familiar que juntou prática, criatividade e conhecimento agronômico.', '/sobre'], ['Como funciona', 'Veja como as prateleiras, a água com nutrientes e a luz trabalham juntas.', '/como-funciona'], ['Soluções', 'Descubra possibilidades para casas, escolas, restaurantes e outros projetos.', '/modelos'], ['Projetos', 'Conheça o uso da HortiVita na escola e em outros espaços.', '/projetos']],
    open: 'Abrir página', ctaTitle: 'Quer cultivar no seu espaço?', ctaText: 'Conte onde pretende instalar a HortiVita e o que deseja plantar. A equipe ajuda a avaliar a melhor configuração para o seu projeto.', ctaButton: 'Pedir informações',
  },
  en: {
    eyebrow: 'Green that turns, life that grows.', titleA: 'Grow more.', titleB: 'Use less space.',
    lead: 'HortiVita is a compact rotating hydroponic garden. It brings plants within reach, reuses water and fits where a conventional garden would not.',
    primary: 'See how it works', secondary: 'View solutions', explore: 'Explore', alt: 'HortiVita hydroponic system growing leafy greens',
    stats: [['Vertical', 'more plants in less space'], ['Water cycle', 'solution reused at the base'], ['Within reach', 'easier care and harvesting']],
    discover: 'Discover HortiVita', discoverTitle: 'Choose where to begin.',
    cards: [['Our story', 'Meet the family idea that combines hands-on experience, creativity and agronomy.', '/sobre'], ['How it works', 'See how the shelves, nutrient solution and light work together.', '/como-funciona'], ['Solutions', 'Explore possibilities for homes, schools, restaurants and other projects.', '/modelos'], ['Projects', 'See HortiVita at school and in other settings.', '/projetos']],
    open: 'Open page', ctaTitle: 'Want to grow in your space?', ctaText: 'Tell us where you plan to install HortiVita and what you would like to grow. Our team will help assess the best setup.', ctaButton: 'Request information',
  },
} as const;

const cardIcons = [Sprout, BookOpen, Boxes, FolderKanban];

export default function Home() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const t = content[lang];
  return <main>
    <SiteHeader lang={lang} onToggle={() => setLang(lang === 'pt' ? 'en' : 'pt')} />
    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow"><span />{t.eyebrow}</p><h1>{t.titleA}<br /><em>{t.titleB}</em></h1><p className="hero-lead">{t.lead}</p><div className="hero-actions"><a className="button primary" href="/como-funciona">{t.primary}<ArrowDownRight size={19} /></a><a className="button ghost" href="/modelos">{t.secondary}<ArrowUpRight size={18} /></a></div></div>
      <div className="hero-visual"><img src="/hero.webp" alt={t.alt} /><div className="orbit-label"><span>01</span><b>HIDROPONIA<br />EM MOVIMENTO</b></div><span className="hero-number">01</span></div><a href="#explorar" className="scroll-cue"><span>{t.explore}</span><ArrowDownRight /></a>
    </section>
    <section className="stat-bar">{t.stats.map(([value,label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</section>
    <section className="home-showcase">
      <a className="showcase-main" href="/como-funciona"><img src="/product-installation.webp" alt={lang === 'pt' ? 'Sistemas HortiVita com prateleiras e vasos de cultivo' : 'HortiVita systems with shelves and growing pots'} /><span>{lang === 'pt' ? 'Veja a máquina de perto' : 'See the machine up close'}<ArrowUpRight /></span></a>
      <a className="showcase-side" href="/sobre"><img src="/brand-post.webp" alt={lang === 'pt' ? 'Publicação da marca HortiVita' : 'HortiVita brand post'} /><span>{lang === 'pt' ? 'Verde que gira. Vida que cresce.' : 'Green that turns. Life that grows.'}</span></a>
    </section>
    <section className="home-directory" id="explorar"><div className="section-heading"><p className="section-index">02 / {t.discover}</p><h2>{t.discoverTitle}</h2></div><div className="directory-grid">{t.cards.map(([title,text,href],i) => { const Icon=cardIcons[i]; return <a href={href} key={title}><div><Icon/><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p><b>{t.open}<ArrowRight size={17}/></b></a>})}</div></section>
    <section className="closing-cta compact"><p>{t.ctaTitle}</p><div><span>{t.ctaText}</span><a href="/contato">{t.ctaButton}<ArrowUpRight/></a></div></section>
    <SiteFooter lang={lang}/>
  </main>;
}
