'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference text-white">
      <Link href="/" className="relative w-24 h-8">
        <Image 
          src="/input_file_4.png" 
          alt="Umbi Logo" 
          fill 
          className="object-contain"
          priority
        />
      </Link>
      
      <div className="hidden md:flex items-center space-x-12 text-[10px] font-bold uppercase tracking-[0.2em]">
        <Link href="/#slik-fungerer-det" className="hover:opacity-70 transition-opacity">
          Slik fungerer det
        </Link>
        <Link href="/reise" className="hover:opacity-70 transition-opacity">
          Vår reise
        </Link>
        <Link href="/design" className="bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
          Design din Umbi
        </Link>
      </div>

      {/* Mobile Menu Button (Simplified for now) */}
      <div className="md:hidden">
        <Link href="/design" className="bg-white text-black px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
          Design
        </Link>
      </div>
    </nav>
  );
}
