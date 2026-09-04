import type { Metadata } from 'next';
import { Archivo, Manrope } from 'next/font/google';
import './globals.css';

const archivo = Archivo({ variable: '--font-display', subsets: ['latin'] });
const manrope = Manrope({ variable: '--font-body', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HortiVita | Horta hidropônica giratória',
  description: 'Conheça a HortiVita, sistema hidropônico compacto e giratório para cultivar hortaliças e temperos com água reaproveitada em diferentes espaços.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${archivo.variable} ${manrope.variable}`}>{children}</body></html>;
}
