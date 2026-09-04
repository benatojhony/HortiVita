'use client';

import { ArrowDownToLine, BookOpen, Droplets, FileText, Leaf, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const data = {
  pt: {
    kicker: 'Biblioteca HortiVita', title: 'Guias para cuidar melhor das plantas.', lead: 'Aqui você encontra materiais simples para observar as plantas, medir a água e manter o sistema. Novos manuais serão adicionados aos poucos.',
    featured: 'Guia em destaque', featuredTitle: 'Como reconhecer falta de nutrientes', featuredText: 'Este manual mostra, com fotos, como algumas deficiências aparecem nas folhas. Ele ajuda a observar os sinais e buscar a correção certa.', download: 'Baixar manual completo',
    examplesKicker: 'Exemplos do manual', examplesTitle: 'Veja lado a lado.', examplesText: 'As imagens comparam plantas de milho saudáveis e plantas com falta de nutrientes. Clique para ampliar e observar os detalhes.', exampleNames: ['Falta de cálcio', 'Falta de ferro', 'Falta de potássio', 'Falta de magnésio', 'Falta de nitrogênio', 'Falta de fósforo'], openExample: 'Ver maior',
    title2: 'Materiais disponíveis',
    cards: [
      ['Condutividade da água', 'Um guia visual para entender a leitura da solução nutritiva e acompanhar as mudanças ao longo do tempo.', 'Abrir guia', '/recursos/guia-condutividade-eletrica.jpg'],
      ['Mapa de deficiências', 'Uma referência rápida para comparar sinais visíveis nas folhas.', 'Abrir mapa', '/recursos/mapa-deficiencias-nutricionais.jpg'],
      ['Manual HortiVita', 'Instalação, operação, limpeza e manutenção preventiva do equipamento.', 'Em preparação', '#'],
      ['Pragas e doenças', 'Como observar sinais, registrar ocorrências e escolher as primeiras medidas de manejo.', 'Em preparação', '#'],
    ],
    noteTitle: 'Uma dica simples', note: 'Meça o pH e a condutividade elétrica sempre em horários parecidos e anote os resultados. Comparar vários dias ajuda mais do que olhar apenas uma medição.', disclaimer: 'Os valores ideais mudam conforme a planta, a fase de crescimento e a composição da água. Use os materiais como orientação e siga o manual do sistema.',
  },
  en: {
    kicker: 'HortiVita library', title: 'Guides for better plant care.', lead: 'Find simple materials for observing plants, checking water and maintaining the system. More manuals will be added over time.',
    featured: 'Featured guide', featuredTitle: 'How to spot nutrient deficiencies', featuredText: 'This manual uses photos to show how some deficiencies appear on leaves. It helps you notice signs and look for the right correction.', download: 'Download full manual',
    examplesKicker: 'Manual examples', examplesTitle: 'See them side by side.', examplesText: 'The images compare healthy maize plants with plants lacking key nutrients. Click to see the details.', exampleNames: ['Calcium deficiency', 'Iron deficiency', 'Potassium deficiency', 'Magnesium deficiency', 'Nitrogen deficiency', 'Phosphorus deficiency'], openExample: 'View larger',
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
    <section className="deficiency-showcase"><div className="deficiency-heading"><p className="section-index">02 / {t.examplesKicker}</p><h2>{t.examplesTitle}</h2><p>{t.examplesText}</p></div><div className="deficiency-gallery">{t.exampleNames.map((name,i)=><a key={name} href={`/deficiencias/deficiencia-${87+i}.webp`} target="_blank"><img src={`/deficiencias/deficiencia-${87+i}.webp`} alt={`${t.examplesKicker}: ${name}`}/><span><b>{name}</b><small>{t.openExample}</small></span></a>)}</div></section>
    <section className="library"><div className="section-heading"><p className="section-index">03 / DOWNLOADS</p><h2>{t.title2}</h2></div><div className="library-grid">{t.cards.map(([title,text,label,href],i) => { const Icon=icons[i]; const pending=href==='#'; return <article className={pending?'pending':''} key={title}><div><Icon/><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p>{pending?<span className="resource-link disabled">{label}</span>:<a className="resource-link" href={href} target="_blank">{label}<ArrowDownToLine size={16}/></a>}</article>})}</div></section>
    <aside className="knowledge-note"><div><Droplets/><h3>{t.noteTitle}</h3></div><p>{t.note}</p><small>{t.disclaimer}</small></aside><SiteFooter lang={lang}/></main>;
}
