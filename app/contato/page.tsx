'use client';

import { ArrowUpRight, Building2, CheckCircle2, Mail, MapPin, MessageCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const data = {
  pt: { kicker: 'Contato', title: 'Vamos cultivar uma ideia juntos?', lead: 'Conte sobre o seu espaço, objetivo e necessidades. Nossa equipe ajuda a encontrar a configuração ideal da HortiVita.', formTitle: 'Solicite um orçamento', name: 'Nome', email: 'E-mail', phone: 'Telefone / WhatsApp', profile: 'Seu projeto', options: ['Residência', 'Escola', 'Restaurante', 'Empresa ou paisagismo', 'Outro'], message: 'Conte um pouco sobre o ambiente e o que deseja cultivar', submit: 'Enviar por e-mail', success: 'Abrimos uma mensagem no seu aplicativo de e-mail.', direct: 'Contato direto', directText: 'Prefere escrever diretamente? Fale com nossa equipe comercial.', rep: 'Representantes', region: 'Atendimento em todo o Brasil', regionText: 'Projetos, personalizações, instalação e suporte comercial.', location: 'Brasil', response: 'Responderemos assim que possível.' },
  en: { kicker: 'Contact', title: 'Shall we grow an idea together?', lead: 'Tell us about your space, goals and needs. Our team will help define the ideal HortiVita setup.', formTitle: 'Request a quote', name: 'Name', email: 'Email', phone: 'Phone / WhatsApp', profile: 'Your project', options: ['Home', 'School', 'Restaurant', 'Company or landscaping', 'Other'], message: 'Tell us about the space and what you would like to grow', submit: 'Send by email', success: 'We opened a message in your email app.', direct: 'Direct contact', directText: 'Prefer to write directly? Talk to our commercial team.', rep: 'Representatives', region: 'Service throughout Brazil', regionText: 'Projects, customizations, installation and commercial support.', location: 'Brazil', response: 'We will reply as soon as possible.' },
} as const;

export default function Contato() {
  const [lang,setLang]=useState<'pt'|'en'>('pt'); const [sent,setSent]=useState(false); const t=data[lang];
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const f=new FormData(e.currentTarget); const subject=encodeURIComponent(`HortiVita — ${String(f.get('perfil'))}`); const body=encodeURIComponent(`Nome: ${f.get('nome')}\nE-mail: ${f.get('email')}\nTelefone: ${f.get('telefone')}\nProjeto: ${f.get('perfil')}\n\n${f.get('mensagem')}`); window.location.href=`mailto:contato@hortivita.com.br?subject=${subject}&body=${body}`; setSent(true); }
  return <main><SiteHeader solid lang={lang} onToggle={() => setLang(lang==='pt'?'en':'pt')}/>
    <section className="sub-hero contact-hero"><p className="eyebrow"><span/>{t.kicker}</p><h1>{t.title}</h1><p>{t.lead}</p></section>
    <section className="contact-layout"><form className="contact-form" onSubmit={submit}><p className="section-index">01 / {t.formTitle}</p><div className="field-row"><label>{t.name}<input name="nome" required/></label><label>{t.email}<input name="email" type="email" required/></label></div><div className="field-row"><label>{t.phone}<input name="telefone"/></label><label>{t.profile}<select name="perfil">{t.options.map(o=><option key={o}>{o}</option>)}</select></label></div><label>{t.message}<textarea name="mensagem" rows={5} required/></label><button className="button primary" type="submit">{t.submit}<ArrowUpRight size={18}/></button>{sent&&<p className="form-success"><CheckCircle2 size={17}/>{t.success}</p>}</form>
      <div className="contact-info"><article><Mail/><p className="section-index">02 / {t.direct}</p><h3>contato@hortivita.com.br</h3><p>{t.directText}</p><a href="mailto:contato@hortivita.com.br">{t.submit}<ArrowUpRight size={16}/></a></article><article><Building2/><p className="section-index">03 / {t.rep}</p><h3>{t.region}</h3><p>{t.regionText}</p><span><MapPin size={16}/>{t.location}</span><span><MessageCircle size={16}/>{t.response}</span></article></div>
    </section><SiteFooter lang={lang}/></main>;
}
