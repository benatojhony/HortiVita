'use client';

import { ArrowDownToLine, BookOpen, Droplets, FileText, Leaf, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const data = {
  pt: {
    kicker: 'Biblioteca HortiVita', title: 'Conhecimento para um cultivo saudável.', lead: 'Materiais práticos para instalar, manter e aproveitar melhor o seu sistema. Esta biblioteca continuará crescendo com novos guias e manuais.',
    featured: 'Guia em destaque', featuredTitle: 'Identificação de deficiências nutricionais', featuredText: 'Um material visual para reconhecer sinais nas folhas e agir antes que o desenvolvimento das plantas seja comprometido.', download: 'Baixar PDF',
    title2: 'Materiais disponíveis',
    cards: [
      ['Parâmetros da água', 'Guia visual de condutividade elétrica (EC) para apoiar a leitura da solução nutritiva.', 'Abrir guia', '/recursos/guia-condutividade-eletrica.jpg'],
      ['Mapa de deficiências', 'Referência rápida para comparar sintomas visuais de desequilíbrio nutricional.', 'Abrir mapa', '/recursos/mapa-deficiencias-nutricionais.jpg'],
      ['Manual HortiVita', 'Instalação, operação, limpeza e manutenção preventiva do equipamento.', 'Em preparação', '#'],
      ['Pragas e doenças', 'Como observar sinais, registrar ocorrências e escolher as primeiras medidas de manejo.', 'Em preparação', '#'],
    ],
    noteTitle: 'Dica de rotina', note: 'Registre pH e EC sempre no mesmo horário. Uma sequência de medições é mais útil do que um valor isolado para entender o comportamento do sistema.', disclaimer: 'Os materiais têm caráter orientativo. Recomendações específicas podem variar conforme cultura, clima, fase de desenvolvimento e composição da água.',
  },
  en: {
    kicker: 'HortiVita library', title: 'Knowledge for healthy growing.', lead: 'Practical materials to install, maintain and get more from your system. This library will continue to grow with new guides and manuals.',
    featured: 'Featured guide', featuredTitle: 'Identifying nutrient deficiencies', featuredText: 'A visual reference to recognize signs on leaves and act before plant development is compromised.', download: 'Download PDF',
    title2: 'Available materials',
    cards: [
      ['Water parameters', 'A visual electrical conductivity (EC) guide to support nutrient solution readings.', 'Open guide', '/recursos/guia-condutividade-eletrica.jpg'],
      ['Deficiency map', 'A quick reference for comparing visible symptoms of nutrient imbalance.', 'Open map', '/recursos/mapa-deficiencias-nutricionais.jpg'],
      ['HortiVita manual', 'Equipment installation, operation, cleaning and preventive maintenance.', 'In preparation', '#'],
      ['Pests and diseases', 'How to spot signs, record occurrences and choose the first management steps.', 'In preparation', '#'],
    ],
    noteTitle: 'Routine tip', note: 'Record pH and EC at the same time every day. A sequence of readings is more useful than an isolated value when understanding system behavior.', disclaimer: 'These materials provide general guidance. Specific recommendations vary according to crop, climate, growth stage and water composition.',
  },
} as const;

const icons = [Droplets, Leaf, BookOpen, ShieldCheck];

export default function Recursos() {
  const [lang,setLang] = useState<'pt'|'en'>('pt'); const t=data[lang];
  return <main><SiteHeader solid lang={lang} onToggle={() => setLang(lang==='pt'?'en':'pt')}/>
    <section className="sub-hero"><p className="eyebrow"><span/>{t.kicker}</p><h1>{t.title}</h1><p>{t.lead}</p></section>
    <section className="featured-resource"><div className="featured-art"><FileText/><span>NUTRIÇÃO<br/>VEGETAL</span><b>01</b></div><div><p className="section-index">01 / {t.featured}</p><h2>{t.featuredTitle}</h2><p>{t.featuredText}</p><a className="button primary" href="/recursos/guia-deficiencias-nutricionais.pdf" download>{t.download}<ArrowDownToLine size={18}/></a></div></section>
    <section className="library"><div className="section-heading"><p className="section-index">02 / DOWNLOADS</p><h2>{t.title2}</h2></div><div className="library-grid">{t.cards.map(([title,text,label,href],i) => { const Icon=icons[i]; const pending=href==='#'; return <article className={pending?'pending':''} key={title}><div><Icon/><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p>{pending?<span className="resource-link disabled">{label}</span>:<a className="resource-link" href={href} target="_blank">{label}<ArrowDownToLine size={16}/></a>}</article>})}</div></section>
    <aside className="knowledge-note"><div><Droplets/><h3>{t.noteTitle}</h3></div><p>{t.note}</p><small>{t.disclaimer}</small></aside><SiteFooter lang={lang}/></main>;
}
