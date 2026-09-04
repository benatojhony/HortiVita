import { ArrowUpRight } from 'lucide-react';
import { sitePath } from '@/lib/site-path';

export function SiteFooter({ lang }: { lang: 'pt' | 'en' }) {
  return (
    <footer className="footer">
      <div className="footer-top"><div><a className="footer-logo" href={sitePath('/')} aria-label="HortiVita"><img src={sitePath('/brand-logo.webp')} alt="HortiVita" /></a><p>{lang === 'pt' ? 'Cultive perto. Colha fresco.' : 'Grow nearby. Harvest fresh.'}</p></div><a href={sitePath('/contato')}>{lang === 'pt' ? 'Fale sobre seu projeto' : 'Tell us about your project'}<ArrowUpRight /></a></div>
      <div className="footer-bottom"><span>© 2026 HortiVita</span><span>{lang === 'pt' ? 'Verde que gira, vida que cresce.' : 'Green that turns, life that grows.'}</span></div>
    </footer>
  );
}
