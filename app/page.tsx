'use client';

import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Download, Droplets, GraduationCap, House, Leaf, Lightbulb, RotateCw, Utensils } from 'lucide-react';
import { useState } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const content = {
  pt: {
    eyebrow: 'Cultivo inteligente. Onde a vida acontece.', titleA: 'Cultive perto.', titleB: 'Colha melhor.',
    lead: 'Um sistema hidropônico que transforma qualquer ambiente em um espaço produtivo — com acesso confortável, irrigação inteligente e luz na medida certa.',
    primary: 'Conheça a HortiVita', secondary: 'Ver modelos', explore: 'Explore', alt: 'Sistema hidropônico HortiVita cultivando hortaliças',
    stats: [['360°', 'rotação programada'], ['Indoor', 'cultivo o ano todo'], ['Ergonômica', 'cuidado sem se abaixar']],
    aboutKicker: 'Tecnologia que aproxima', aboutTitle: 'Alimento fresco não precisa estar longe.',
    aboutText: 'A HortiVita nasceu para tornar o cultivo hidropônico mais simples, acessível e integrado à vida cotidiana. Seu formato circular distribui as plantas em prateleiras móveis, aproxima cada vaso das mãos e equilibra a exposição à luz e à água.',
    historyTitle: 'Uma ideia guiada por autonomia, conforto e natureza.',
    history: ['O projeto surgiu da vontade de aproximar as pessoas do alimento que consomem, mesmo em locais sem quintal ou luz natural suficiente.', 'A estrutura elevada elimina a necessidade de se abaixar para plantar, acompanhar e colher. O movimento das prateleiras torna cada planta acessível e ajuda a distribuir os recursos de cultivo.'],
    howKicker: 'Como funciona', howTitle: 'Um ciclo simples, preciso e contínuo.',
    steps: [['01', 'Cultive', 'As mudas crescem em potes individuais, com raízes nutridas diretamente pela solução hidropônica.'], ['02', 'Rotacione', 'As prateleiras se movimentam ao longo do tempo, levando as plantas ao ponto de irrigação e alternando a exposição luminosa.'], ['03', 'Ilumine', 'Em ambientes fechados, a iluminação artificial complementa ou substitui a luz solar conforme a necessidade.'], ['04', 'Colha', 'A altura e o movimento do sistema mantêm as hortaliças ao alcance, facilitando o cuidado diário.']],
    detailAlt: 'Detalhe dos potes e da irrigação da HortiVita', components: 'Componentes integrados', componentList: ['Estrutura rotativa e prateleiras', 'Potes de cultivo individuais', 'Reservatório e circuito de irrigação', 'Controle de movimento e temporização', 'Iluminação suplementar opcional'],
    modelsKicker: 'Configurações', modelsTitle: 'Uma HortiVita para cada ambiente.', modelsNote: 'Capacidades e dimensões finais são definidas conforme o projeto.',
    models: [['CASA', 'HortiVita Casa', 'Para varandas, cozinhas, áreas gourmet e ambientes internos.', ['Estrutura compacta', 'Cultivo para consumo próprio', 'Iluminação opcional']], ['EDUCAÇÃO', 'HortiVita Educa', 'Uma plataforma viva para escolas, oficinas e projetos de ciência.', ['Configuração didática', 'Acesso facilitado aos alunos', 'Apoio a projetos pedagógicos']], ['PRO', 'HortiVita Pro', 'Para restaurantes, empresas e projetos paisagísticos de impacto.', ['Capacidade ampliada', 'Acabamentos personalizados', 'Integração ao ambiente']]],
    quote: 'Não é apenas uma horta. É uma nova forma de conviver com o alimento.',
    projectsKicker: 'Projetos', projectsTitle: 'Onde a HortiVita já criou raízes.',
    projects: [['Escola', 'Educação que se cultiva', 'Instalada como parte de um projeto de educação infantil, aproximando os alunos dos ciclos da natureza e da origem dos alimentos.'], ['Restaurante', 'Paisagismo que alimenta', 'Uma instalação viva que transforma o ambiente, comunica frescor e integra cultivo à experiência dos clientes.'], ['Residência', 'Autonomia no dia a dia', 'Produção doméstica de hortaliças frescas, com cuidado prático e acesso confortável para toda a família.']],
    resourcesKicker: 'Conhecimento aberto', resourcesTitle: 'Tudo para cultivar com confiança.', resourcesText: 'Manuais, guias de nutrientes, ajuste dos parâmetros da água e materiais para identificar pragas, doenças e deficiências.', resourcesButton: 'Acessar recursos',
    ctaTitle: 'Seu ambiente pode ganhar vida.', ctaText: 'Conte onde você quer cultivar. A HortiVita pode ser dimensionada e personalizada para sua casa, escola, restaurante ou projeto.', ctaButton: 'Solicitar orçamento',
  },
  en: {
    eyebrow: 'Smart growing. Wherever life happens.', titleA: 'Grow closer.', titleB: 'Harvest better.',
    lead: 'A hydroponic system that turns any environment into a productive space — with comfortable access, smart irrigation and precisely controlled light.',
    primary: 'Meet HortiVita', secondary: 'View models', explore: 'Explore', alt: 'HortiVita hydroponic system growing leafy greens',
    stats: [['360°', 'scheduled rotation'], ['Indoor', 'year-round growing'], ['Ergonomic', 'care without bending']],
    aboutKicker: 'Technology that brings us closer', aboutTitle: 'Fresh food does not need to be far away.',
    aboutText: 'HortiVita was born to make hydroponic growing simpler, more accessible and part of everyday life. Its circular shape arranges plants on moving shelves, brings every pot within reach and balances exposure to light and water.',
    historyTitle: 'An idea guided by autonomy, comfort and nature.',
    history: ['The project grew from a desire to reconnect people with the food they eat, even in places without a garden or enough natural light.', 'Its elevated structure removes the need to bend down to plant, monitor or harvest. Moving shelves bring every plant within reach and help distribute growing resources.'],
    howKicker: 'How it works', howTitle: 'A simple, precise and continuous cycle.',
    steps: [['01', 'Grow', 'Seedlings grow in individual pots, their roots fed directly by the hydroponic nutrient solution.'], ['02', 'Rotate', 'Shelves move over time, carrying plants to the irrigation point and alternating their light exposure.'], ['03', 'Light', 'Indoors, artificial lighting complements or replaces sunlight according to plant needs.'], ['04', 'Harvest', 'The system height and movement keep greens within reach, making daily care comfortable.']],
    detailAlt: 'Detail of HortiVita pots and irrigation system', components: 'Integrated components', componentList: ['Rotating frame and shelves', 'Individual growing pots', 'Reservoir and irrigation circuit', 'Motion and timing control', 'Optional supplemental lighting'],
    modelsKicker: 'Configurations', modelsTitle: 'A HortiVita for every environment.', modelsNote: 'Final capacities and dimensions are defined for each project.',
    models: [['HOME', 'HortiVita Home', 'For balconies, kitchens, entertainment areas and indoor spaces.', ['Compact structure', 'Growing for personal use', 'Optional lighting']], ['EDUCATION', 'HortiVita Edu', 'A living platform for schools, workshops and science projects.', ['Learning-oriented setup', 'Easy access for students', 'Support for school projects']], ['PRO', 'HortiVita Pro', 'For restaurants, companies and high-impact landscape projects.', ['Expanded capacity', 'Custom finishes', 'Integration with the space']]],
    quote: 'It is more than a garden. It is a new way to live with our food.',
    projectsKicker: 'Projects', projectsTitle: 'Where HortiVita has already taken root.',
    projects: [['School', 'Education you can grow', 'Installed as part of an early-years education project, bringing students closer to natural cycles and the origin of food.'], ['Restaurant', 'Landscaping that nourishes', 'A living installation that transforms the space, communicates freshness and integrates growing into the guest experience.'], ['Home', 'Everyday autonomy', 'Home-grown fresh greens, with practical care and comfortable access for the entire family.']],
    resourcesKicker: 'Open knowledge', resourcesTitle: 'Everything you need to grow with confidence.', resourcesText: 'Manuals, nutrient guides, water parameter adjustment and materials to identify pests, diseases and nutrient deficiencies.', resourcesButton: 'Browse resources',
    ctaTitle: 'Your space can come alive.', ctaText: 'Tell us where you want to grow. HortiVita can be sized and customized for your home, school, restaurant or project.', ctaButton: 'Request a quote',
  },
} as const;

const stepIcons = [Leaf, RotateCw, Lightbulb, Droplets];
const projectIcons = [GraduationCap, Utensils, House];

export default function Home() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const t = content[lang];
  return <main>
    <SiteHeader lang={lang} onToggle={() => setLang(lang === 'pt' ? 'en' : 'pt')} />
    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow"><span />{t.eyebrow}</p><h1>{t.titleA}<br /><em>{t.titleB}</em></h1><p className="hero-lead">{t.lead}</p><div className="hero-actions"><a className="button primary" href="#sobre">{t.primary}<ArrowDownRight size={19} /></a><a className="button ghost" href="#modelos">{t.secondary}<ArrowUpRight size={18} /></a></div></div>
      <div className="hero-visual"><img src="/hero.webp" alt={t.alt} /><div className="orbit-label"><span>01</span><b>HIDROPONIA<br />EM MOVIMENTO</b></div><span className="hero-number">01</span></div><a href="#sobre" className="scroll-cue"><span>{t.explore}</span><ArrowDownRight /></a>
    </section>
    <section className="stat-bar">{t.stats.map(([value,label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</section>

    <section className="about-intro" id="sobre"><div><p className="section-index">02 / {t.aboutKicker}</p><h2>{t.aboutTitle}</h2></div><p>{t.aboutText}</p></section>
    <section className="history-grid"><div className="history-visual"><img src="/roots.webp" alt={lang === 'pt' ? 'Raízes saudáveis de uma hortaliça cultivada na HortiVita' : 'Healthy roots of a plant grown in HortiVita'} /><span>DESIGN<br />+ VIDA</span></div><div className="history-copy"><span className="big-index">03</span><h3>{t.historyTitle}</h3>{t.history.map(p => <p key={p}>{p}</p>)}</div></section>

    <section className="how-section" id="funcionamento"><div className="section-heading light"><p className="section-index">04 / {t.howKicker}</p><h2>{t.howTitle}</h2></div><div className="steps">{t.steps.map(([n,title,text],i) => { const Icon=stepIcons[i]; return <article key={n}><div className="step-top"><span>{n}</span><Icon /></div><h3>{title}</h3><p>{text}</p></article>; })}</div><div className="components-panel"><div className="component-image"><img src="/detail.webp" alt={t.detailAlt} /></div><div><p className="section-index">05 / {t.components}</p><h3>{t.components}</h3><ul>{t.componentList.map(item => <li key={item}><Check size={17}/>{item}</li>)}</ul></div></div></section>

    <section className="models-section" id="modelos"><div className="section-heading"><p className="section-index">06 / {t.modelsKicker}</p><h2>{t.modelsTitle}</h2><p>{t.modelsNote}</p></div><div className="model-grid">{t.models.map(([label,title,text,items],i) => <article className={i===1 ? 'featured' : ''} key={title}><div className="model-top"><span>{label}</span><b>0{i+1}</b></div><h3>{title}</h3><p>{text}</p><ul>{items.map(item => <li key={item}><Check size={15}/>{item}</li>)}</ul><a href="/contato">{lang === 'pt' ? 'Personalizar projeto' : 'Customize project'}<ArrowRight size={17}/></a></article>)}</div></section>
    <blockquote className="manifesto"><span>“</span><p>{t.quote}</p></blockquote>

    <section className="projects-section" id="projetos"><div className="section-heading"><p className="section-index">07 / {t.projectsKicker}</p><h2>{t.projectsTitle}</h2></div><div className="project-grid">{t.projects.map(([label,title,text],i) => { const Icon=projectIcons[i]; return <article key={label}><div><Icon/><span>{label}</span></div><h3>{title}</h3><p>{text}</p><span className="project-no">0{i+1}</span></article>; })}</div></section>

    <section className="resources-teaser" id="recursos"><div><p className="section-index">08 / {t.resourcesKicker}</p><h2>{t.resourcesTitle}</h2><p>{t.resourcesText}</p><a className="button primary" href="/recursos">{t.resourcesButton}<Download size={18}/></a></div><div className="resource-stack"><span>pH</span><span>EC</span><span>NPK</span><span>H₂O</span></div></section>
    <section className="closing-cta"><p>{t.ctaTitle}</p><div><span>{t.ctaText}</span><a href="/contato">{t.ctaButton}<ArrowUpRight/></a></div></section>
    <SiteFooter lang={lang}/>
  </main>;
}
