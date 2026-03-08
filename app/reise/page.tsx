'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';

const team = [
  { name: 'Eivind Brurok Bogen', role: 'Produktdesigner' },
  { name: 'Erlend Torgersen', role: 'Produktdesigner' },
  { name: 'Elise Sultani', role: 'Strategi' },
  { name: 'Marte Strandli', role: 'Strategi' },
];

export default function ReisePage() {
  return (
    <main className="flex-grow bg-umbi-bg">
      <Navbar />

      <section data-nav-theme="light" className="pt-32 md:pt-48 pb-24 md:pb-40 px-[var(--section-px)] md:px-[var(--section-px-md)]">
        <div className="content-container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-label font-bold uppercase tracking-[0.4em] text-umbi-dark/30 mb-6 block">Vår historie</span>
            <h1 className="font-serif text-display text-umbi-dark mb-20 md:mb-32 tracking-tight">Vår reise</h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
            <div className="space-y-10 font-serif text-body text-umbi-dark/80 leading-relaxed">
              <p className="font-serif italic text-headline text-umbi-dark leading-tight">
                &quot;Drømmen om å dyrke matsopp hjemme startet som en prosjektoppgave i industriell design ved NTNU i Trondheim.&quot;
              </p>
              <div className="w-12 h-px bg-umbi-dark/20" />
              <p>
                Vi fant fort ut at markedet manglet noe. Eksisterende løsninger var enten store og upraktiske, eller enkle vekstkasser beregnet for kjelleren. Felles for dem alle var at du måtte spraye soppen for hånd tre ganger daglig.
              </p>
              <p>
                Vi fant ut at ved å kombinere produktdesign, teknologi og norskprodusert soppsubtrat fra Hella sopperi, skapte vi et produkt som fortjener en plass på kjøkkenet til matentusiaster.
              </p>
              <div className="pt-10 border-t border-umbi-dark/10">
                <p className="font-serif text-ui opacity-60">
                  Umbi Uno er fortsatt under utvikling og testing for å kunne love bort et produkt som garanterer høykvalitetssopp. Har du innspill, tanker eller meninger om produktet vårt vil vi gjerne høre fra deg!
                </p>
              </div>
            </div>

            <div className="space-y-16">
              <div className="aspect-video relative rounded-large overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/umbi-team-work/1200/800"
                  alt="Umbi teamet i arbeid"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="bg-white p-10 md:p-16 rounded-large shadow-sm">
                <h2 className="text-label font-sans uppercase tracking-[0.3em] font-bold mb-12 opacity-30">Folka bak Umbi</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  {team.map((member) => (
                    <div key={member.name} className="group cursor-pointer">
                      <h3 className="font-serif text-panel-title mb-2 group-hover:text-umbi-dark/70 transition-colors">{member.name}</h3>
                      <p className="font-sans text-label text-umbi-dark/40 uppercase tracking-[0.3em] font-bold">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
