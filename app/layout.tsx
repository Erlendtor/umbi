import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Umbi — Dyrk din egen matsopp',
  description: 'Femstjerners matsopp rett fra kjøkkenbenken. Skandinavisk minimalistisk design.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="no" className={`${inter.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
