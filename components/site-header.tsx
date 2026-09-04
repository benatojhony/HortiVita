'use client';

import { ArrowUpRight, Globe2, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Props = { lang: 'pt' | 'en'; onToggle: () => void; solid?: boolean };

export function SiteHeader({ lang, onToggle, solid = false }: Props) {
  const [open, setOpen] = useState(false);
  const labels = lang === 'pt'
    ? ['Início', 'Sobre', 'Como funciona', 'Modelos', 'Projetos', 'Recursos']
    : ['Home', 'About', 'How it works', 'Models', 'Projects', 'Resources'];
  const links = ['/', '/sobre', '/como-funciona', '/modelos', '/projetos', '/recursos'];
  return (
    <header className={`site-header ${solid ? 'solid' : ''}`}>
      <a className="brand brand-official" href="/" aria-label="HortiVita"><img src="/brand-logo.webp" alt="HortiVita" /></a>
      <nav className={open ? 'nav open' : 'nav'} aria-label={lang === 'pt' ? 'Principal' : 'Main'}>
        {labels.map((item, i) => <a key={item} href={links[i]} onClick={() => setOpen(false)}>{item}</a>)}
      </nav>
      <div className="header-actions">
        <button className="language" onClick={onToggle} aria-label={lang === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'}><Globe2 size={16} /> {lang === 'pt' ? 'EN' : 'PT'}</button>
        <a className="contact-pill" href="/contato">{lang === 'pt' ? 'Fale conosco' : 'Talk to us'}<ArrowUpRight size={16} /></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={lang === 'pt' ? 'Abrir menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
