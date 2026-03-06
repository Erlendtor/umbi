import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const imgHellaSopperi = 'https://www.figma.com/api/mcp/asset/4fe0c70d-37f1-43d9-b208-867972c50b64';

export default function Footer() {
  return (
    <footer className="bg-umbi-bg pt-[var(--footer-pt)] pb-[var(--footer-pb)] px-6 md:px-[var(--footer-px-md)]">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-8">
        <Link href="/" className="relative w-[177px] h-[51px] block shrink-0">
          <Image
            src="/Umbi logo brun.png"
            alt="Umbi"
            fill
            className="object-contain object-left"
          />
        </Link>
        <div className="flex items-end gap-[22px]">
          <p className="font-serif text-ui text-umbi-dark">I samarbeid med hella sopperi</p>
          <div className="relative w-[145px] h-[133px] shrink-0">
            <Image
              src={imgHellaSopperi}
              alt="Hella Sopperi"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      <hr className="border-umbi-dark/20 mb-8" />

      <div className="flex flex-col md:flex-row justify-between gap-8 font-serif text-ui text-umbi-dark leading-relaxed">
        <div>
          <p>Umbi AS</p>
          <p>Skrankerud veien 64b</p>
          <p>7014, Trondheim</p>
        </div>
        <div className="flex flex-col gap-1">
          <Link href="/#slik-fungerer-det" className="hover:opacity-60 transition-opacity">Slik fungerer det</Link>
          <Link href="/reise" className="hover:opacity-60 transition-opacity">Vår reise</Link>
          <Link href="/design" className="hover:opacity-60 transition-opacity">Design din Umbi Uno</Link>
        </div>
        <div>
          <p>hei@umbi.no</p>
          <p className="opacity-50 text-sm mt-2">© {new Date().getFullYear()} Umbi AS</p>
        </div>
      </div>
    </footer>
  );
}
