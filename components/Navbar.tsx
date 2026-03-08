'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const DETECTION_Y = 90;

    const checkTheme = () => {
      const el = document.elementFromPoint(window.innerWidth / 2, DETECTION_Y);
      const themed = el?.closest('[data-nav-theme]');
      const theme = themed?.getAttribute('data-nav-theme') ?? 'dark';
      setIsDark(theme === 'dark');
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(checkTheme);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    checkTheme();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[var(--navbar-px-md)] h-[var(--navbar-height)] backdrop-blur-[14px] border-b transition-colors duration-300 ease-in-out ${isDark
          ? 'bg-white/[0.01] border-white/30'
          : 'bg-umbi-bg/80 border-umbi-dark/10'
        }`}
    >
      {/* Logo — two images crossfade */}
      <Link href="/" className="relative w-24 md:w-[103px] h-7 md:h-[29px] cursor-pointer">
        <Image
          src="/Umbi logo beige.png"
          alt="Umbi"
          fill
          className={`object-contain transition-opacity duration-300 ease-in-out ${isDark ? 'opacity-100' : 'opacity-0'}`}
          priority
        />
        <Image
          src="/Umbi logo brun.png"
          alt="Umbi"
          fill
          className={`object-contain transition-opacity duration-300 ease-in-out ${isDark ? 'opacity-0' : 'opacity-100'}`}
        />
      </Link>

      <div className="hidden md:flex items-center gap-[60px]">
        <Link
          href="/#slik-fungerer-det"
          className={`font-serif text-body transition-colors duration-300 ease-in-out hover:opacity-70 cursor-pointer ${isDark ? 'text-umbi-beige' : 'text-umbi-dark'}`}
        >
          Slik fungerer det
        </Link>
        <Link
          href="/reise"
          className={`font-serif text-body transition-colors duration-300 ease-in-out hover:opacity-70 cursor-pointer ${isDark ? 'text-umbi-beige' : 'text-umbi-dark'}`}
        >
          Vår reise
        </Link>
        <Link
          href="/design"
          className={`px-[21px] py-[13px] rounded-ui font-serif text-ui border-[0.5px] transition-all duration-300 ease-in-out hover:opacity-90 cursor-pointer ${isDark
              ? 'bg-umbi-beige border-white/80 text-umbi-dark'
              : 'bg-umbi-dark border-umbi-dark text-umbi-beige'
            }`}
        >
          Design din Umbi Uno
        </Link>
      </div>

      <div className="md:hidden">
        <Link
          href="/design"
          className={`px-4 py-2 rounded-ui font-serif text-caption transition-colors duration-300 ease-in-out cursor-pointer ${isDark ? 'bg-umbi-beige text-umbi-dark' : 'bg-umbi-dark text-umbi-beige'
            }`}
        >
          Design
        </Link>
      </div>
    </nav>
  );
}
