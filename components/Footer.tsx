import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-umbi-bg border-t border-umbi-dark/10 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="relative w-32 h-10 block mb-8">
            <Image 
              src="/input_file_3.png" 
              alt="Umbi Logo" 
              fill 
              className="object-contain object-left"
            />
          </Link>
          <p className="text-umbi-dark/60 max-w-xs text-sm leading-relaxed">
            Skandinavisk design møter biologi. Dyrk din egen gourmetsopp hjemme på kjøkkenbenken.
          </p>
        </div>
        
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 opacity-40">Navigasjon</h3>
          <ul className="space-y-4 text-sm">
            <li><Link href="/#slik-fungerer-det" className="hover:underline">Slik fungerer det</Link></li>
            <li><Link href="/reise" className="hover:underline">Vår reise</Link></li>
            <li><Link href="/design" className="hover:underline">Design din Umbi</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8 opacity-40">Kontakt</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="mailto:hei@umbi.no" className="hover:underline">hei@umbi.no</a></li>
            <li><p className="text-umbi-dark/60">Trondheim, Norge</p></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-umbi-dark/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.2em] text-umbi-dark/40 font-bold">
        <p>© {new Date().getFullYear()} Umbi AS. Alle rettigheter reservert.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <Link href="#" className="hover:text-umbi-dark transition-colors">Personvern</Link>
          <Link href="#" className="hover:text-umbi-dark transition-colors">Vilkår</Link>
        </div>
      </div>
    </footer>
  );
}
