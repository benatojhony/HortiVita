import type { Metadata } from 'next';
import { Archivo, Manrope } from 'next/font/google';
import './globals.css';

const archivo = Archivo({ variable: '--font-display', subsets: ['latin'] });
const manrope = Manrope({ variable: '--font-body', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HortiVita | Cultive perto. Colha melhor.',
  description: 'Sistema hidropônico inteligente para cultivar alimentos frescos em qualquer ambiente.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${archivo.variable} ${manrope.variable}`}>{children}</body></html>;
}
