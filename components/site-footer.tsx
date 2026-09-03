import { ArrowUpRight } from 'lucide-react';

export function SiteFooter({ lang }: { lang: 'pt' | 'en' }) {
  return (
    <footer className="footer">
      <div className="footer-top"><div><div className="brand"><span className="brand-mark"><i /></span><span>HORTI<span>VITA</span></span></div><p>{lang === 'pt' ? 'Tecnologia para cultivar perto do que importa.' : 'Technology to grow close to what matters.'}</p></div><a href="/contato">{lang === 'pt' ? 'Vamos cultivar juntos' : 'Let\'s grow together'}<ArrowUpRight /></a></div>
      <div className="footer-bottom"><span>© 2026 HortiVita</span><span>{lang === 'pt' ? 'Cultivo inteligente · Design humano' : 'Smart growing · Human-centered design'}</span></div>
    </footer>
  );
}
