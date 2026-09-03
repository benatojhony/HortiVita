'use client';

import { GraduationCap, House, Utensils } from 'lucide-react';
import { useState } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const data={
  pt:{kicker:'Projetos',title:'Onde a HortiVita já criou raízes.',lead:'Educação, paisagismo e autonomia alimentar: uma mesma tecnologia com propósitos diferentes.',projects:[['Escola','Educação que se cultiva','Instalada como parte de um projeto de educação infantil, aproximando os alunos dos ciclos da natureza e da origem dos alimentos.'],['Restaurante','Paisagismo que alimenta','Uma instalação viva que transforma o ambiente, comunica frescor e integra cultivo à experiência dos clientes.'],['Residência','Autonomia no dia a dia','Produção doméstica de hortaliças frescas, com cuidado prático e acesso confortável para toda a família.']],section:'Cases de uso'},
  en:{kicker:'Projects',title:'Where HortiVita has already taken root.',lead:'Education, landscaping and food autonomy: one technology serving different purposes.',projects:[['School','Education you can grow','Installed as part of an early-years education project, bringing students closer to natural cycles and the origin of food.'],['Restaurant','Landscaping that nourishes','A living installation that transforms the space, communicates freshness and integrates growing into the guest experience.'],['Home','Everyday autonomy','Home-grown fresh greens, with practical care and comfortable access for the entire family.']],section:'Use cases'}
} as const;
const icons=[GraduationCap,Utensils,House];

export default function Projetos(){const[lang,setLang]=useState<'pt'|'en'>('pt');const t=data[lang];return <main><SiteHeader solid lang={lang} onToggle={()=>setLang(lang==='pt'?'en':'pt')}/><section className="sub-hero"><p className="eyebrow"><span/>{t.kicker}</p><h1>{t.title}</h1><p>{t.lead}</p></section><section className="projects-section standalone"><div className="section-heading"><p className="section-index">01 / {t.section}</p><h2>{t.title}</h2></div><div className="project-grid">{t.projects.map(([label,title,text],i)=>{const Icon=icons[i];return <article key={label}><div><Icon/><span>{label}</span></div><h3>{title}</h3><p>{text}</p><span className="project-no">0{i+1}</span></article>})}</div></section><SiteFooter lang={lang}/></main>}
