'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Droplets, Battery, Zap, Wind } from 'lucide-react';

const imgUmbiUnoWordmark = '/Umbi Uno logo.png';

export default function HomePage() {
  return (
    <main className="flex-grow">
      <Navbar />

      {/* Hero Section */}
      <section data-nav-theme="dark" className="relative h-screen flex items-end overflow-hidden bg-umbi-dark">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/umbi nettside.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 px-6 md:px-[var(--navbar-px-md)] pb-[12%] flex flex-col gap-7 items-start w-fit">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <div className="relative w-[280px] md:w-[364px] h-[48px] md:h-[63px]">
              <Image src={imgUmbiUnoWordmark} alt="Umbi Uno" fill className="object-contain object-left" priority />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-body text-umbi-beige leading-relaxed max-w-[520px]"
          >
            En autonom enhet for dyrking av høykvalitets<br />matsopp rett fra kjøkkenbenken.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-[11px] w-full sm:w-auto mt-2"
          >
            <Link
              href="/design"
              className="h-[44px] px-[21px] bg-umbi-beige backdrop-blur-sm border-[0.5px] border-white/80 rounded-ui font-serif text-ui text-umbi-dark flex items-center justify-center hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer"
            >
              Design din Umbi Uno
            </Link>
            <Link
              href="#slik-fungerer-det"
              className="h-[44px] px-[21px] bg-white/20 backdrop-blur-sm border-[0.5px] border-white/20 rounded-ui font-serif text-ui text-umbi-beige flex items-center justify-center hover:bg-white/30 transition-colors whitespace-nowrap cursor-pointer"
            >
              Om produktet
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Slik fungerer det */}
      <section data-nav-theme="light" id="slik-fungerer-det" className="section-padding-sm bg-umbi-bg">
        <div className="content-container">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-serif text-headline text-umbi-dark mb-4">Slik fungerer det</h2>
            <div className="w-16 h-px bg-umbi-dark/20 mx-auto" />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-umbi-dark/10 hidden lg:block" />

            <div className="space-y-10 md:space-y-16">
              {/* Step 1 */}
              <div className="relative flex flex-col lg:flex-row items-center lg:justify-between gap-6">
                <div className="lg:w-[42%] text-center lg:text-right">
                  <span className="font-sans text-label font-bold uppercase tracking-[0.3em] text-umbi-dark/30 mb-2 block">01</span>
                  <h3 className="font-serif text-section-title text-umbi-dark mb-3">Sett inn en Umbi Pod</h3>
                  <p className="font-serif text-body text-umbi-dark/60 leading-relaxed">Velg mellom rosa østersopp og blågrå østersopp.</p>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-umbi-dark border-4 border-umbi-bg z-10" />
                <div className="lg:w-[42%] w-full">
                  <div className="aspect-[4/3] bg-umbi-beige rounded-card overflow-hidden relative shadow-sm">
                    <Image src="/brun.png" alt="Umbi Pod" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-6">
                <div className="lg:w-[42%] text-center lg:text-left">
                  <span className="font-sans text-label font-bold uppercase tracking-[0.3em] text-umbi-dark/30 mb-2 block">02</span>
                  <h3 className="font-serif text-section-title text-umbi-dark mb-3">Åpne posen</h3>
                  <p className="font-serif text-body text-umbi-dark/60 leading-relaxed">Vent til du ser vekst inni posen, skjær så et kryss i plasten med en skarp kniv.</p>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-umbi-dark border-4 border-umbi-bg z-10" />
                <div className="lg:w-[42%] w-full">
                  <div className="aspect-[4/3] bg-umbi-beige rounded-card overflow-hidden relative shadow-sm">
                    <Image src="/svart.png" alt="Åpne posen" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col lg:flex-row items-center lg:justify-between gap-6">
                <div className="lg:w-[42%] text-center lg:text-right">
                  <span className="font-sans text-label font-bold uppercase tracking-[0.3em] text-umbi-dark/30 mb-2 block">03</span>
                  <h3 className="font-serif text-section-title text-umbi-dark mb-3">Fyll vann og trykk start</h3>
                  <p className="font-serif text-body text-umbi-dark/60 leading-relaxed">Vanntanken holder én uke. Umbi tar seg av resten.</p>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-umbi-dark border-4 border-umbi-bg z-10" />
                <div className="lg:w-[42%] w-full">
                  <div className="aspect-[4/3] bg-umbi-beige rounded-card overflow-hidden relative shadow-sm">
                    <Image src="/brun.png" alt="Fyll vann" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center lg:justify-between gap-6">
                <div className="lg:w-[42%] text-center lg:text-left">
                  <span className="font-sans text-label font-bold uppercase tracking-[0.3em] text-umbi-dark/30 mb-2 block">04</span>
                  <h3 className="font-serif text-section-title text-umbi-dark mb-3">Høst og repeter</h3>
                  <p className="font-serif text-body text-umbi-dark/60 leading-relaxed">Etter litt over én uke er 400g fersk sopp klar. Hver pod gir to til tre høstinger.</p>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-umbi-dark border-4 border-umbi-bg z-10" />
                <div className="lg:w-[42%] w-full">
                  <div className="aspect-[4/3] bg-umbi-beige rounded-card overflow-hidden relative shadow-sm">
                    <Image src="/svart.png" alt="Høst sopp" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soppgaranti */}
      <section data-nav-theme="light" className="section-padding">
        <div className="content-container relative">

          {/* Bilderamme — forskjøvet til venstre */}
          <div className="relative rounded-feature overflow-hidden min-h-[520px] shadow-[0px_4px_22.8px_0px_rgba(0,0,0,0.25)] md:mr-[120px]">
            <Image
              src="/fersk sopp panne.png"
              alt="Fersk sopp i panne"
              fill
              className="object-cover object-left"
            />
          </div>

          {/* Svevende glasspanel — henger langt utenfor høyre kant */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity }}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-20 w-[300px] md:w-[360px] z-20"
          >
            <div className="backdrop-blur-[20px] bg-[rgba(255,242,224,0.78)] border-[0.5px] border-white/60 rounded-panel p-8 flex flex-col gap-4 shadow-[0px_8px_40px_0px_rgba(0,0,0,0.15)]">
              <span className="text-label font-sans font-bold uppercase tracking-[0.3em] text-umbi-dark/40 block">
                Vårt løfte
              </span>
              <h2 className="font-serif italic text-headline text-umbi-dark leading-[0.92]">
                Sopp&shy;garanti
              </h2>
              <div className="w-10 h-px bg-umbi-dark/20" />
              <p className="font-serif text-body text-umbi-dark leading-relaxed">
                Ikke fornøyd med resultatet? Du får en ny Umbi Pod i posten, ingen spørsmål.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Mushroom Types */}
      <section data-nav-theme="dark" className="bg-umbi-dark flex flex-col lg:flex-row lg:items-stretch lg:justify-center gap-12 lg:gap-0">

        {/* Venstre: tekst + CTA — justert med navbar */}
        <div className="flex flex-col justify-center pl-6 md:pl-[var(--navbar-px-md)] pr-8 md:pr-16 flex-1 self-stretch py-16 md:py-20">
          <div className="flex flex-col gap-12">
            {/* Logo + tittel side om side */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8 text-center md:text-left">
              <div className="relative shrink-0 w-[68px] h-[80px] md:w-[85px] md:h-[100px]">
                <Image
                  src="/hella sopperi logo beige.png"
                  alt="Hella Sopperi"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="font-serif text-umbi-beige leading-snug text-headline md:text-display max-w-sm" style={{ fontSize: 'clamp(1.875rem, 2.5vw, 2.5rem)' }}>
                Substrat fra naturen,<br />laget med kjærlighet
              </h2>
            </div>
            {/* Brødtekst + CTA */}
            <div className="flex flex-col gap-10 md:gap-12 items-center md:items-start">
              <div className="flex flex-col gap-4 max-w-[600px] text-center md:text-left">
                <p className="font-serif text-body text-umbi-beige/60 leading-relaxed">
                  Alt vårt substrat er produsert av Hella Sopperi — norskprodusert, kortreist og trygt for deg og familien din. Substratet er laget av pasteurisert halm og næringsstoffer som gir soppmyceliet ideelle vekstforhold.
                </p>
                <p className="font-serif text-body text-umbi-beige/60 leading-relaxed">
                  Hella Sopperi er et av Norges ledende soppgartneri, med fokus på bærekraft og kortreiste råvarer. Hver Umbi Pod er ferdig inokulert og klar til å vokse — direkte fra esken og inn i enheten din.
                </p>
              </div>
              <a
                href="https://www.hellasopperi.no/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[44px] px-[21px] items-center justify-center bg-umbi-beige text-umbi-dark rounded-ui font-serif text-ui border-[0.5px] border-white/80 hover:opacity-90 transition-opacity cursor-pointer"
              >
                Gå til Hella Sopperi
              </a>
            </div>
          </div>
        </div>

        {/* Høyre: sopp-kort — flush mot høyre kant */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-4 md:gap-4 lg:w-[49.5%] shrink-0 px-6 md:px-0 md:pr-[var(--navbar-px-md)] pb-16 md:py-20 self-stretch">
          {[
            {
              name: 'Rosa østersopp',
              desc: 'Skogens bacon — mild, nøtteaktig og delikat.',
              qualities: ['Mild og nøtteaktig', 'Perfekt til pasta og risotto', 'Sprø tekstur i pannen'],
              src: '/rosa sopp display.png',
              bg: 'linear-gradient(160deg, #EDD8CF 0%, #F5EAE4 100%)',
              delay: 0,
            },
            {
              name: 'Blågrå østersopp',
              desc: 'Kraftig umami med dybde og karakter.',
              qualities: ['Intens umami-smak', 'Ideell til kjøttretter og wok', 'Beholder formen ved høy varme'],
              src: '/blågrå sopp display.png',
              bg: 'linear-gradient(160deg, #CDD6D8 0%, #E4ECED 100%)',
              delay: 0.1,
            },
          ].map((mushroom) => (
            <motion.div
              key={mushroom.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: mushroom.delay }}
              className="flex flex-col rounded-card border-[0.5px] border-umbi-dark/10 overflow-hidden shadow-[0px_4px_22.8px_0px_rgba(0,0,0,0.18)] h-full"
              style={{ background: mushroom.bg }}
            >
              {/* Bilde — flush mot toppen, vokser for å presse tekst til bunn */}
              <div className="relative flex-1 overflow-hidden min-h-[200px]">
                <Image
                  src={mushroom.src}
                  alt={mushroom.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>

              {/* Tekstblokk — fast høyde, lik på begge kort */}
              <div className="px-5 py-5 flex flex-col gap-3 bg-umbi-bg shrink-0">
                <div>
                  <span className="font-serif text-body-lg text-umbi-dark leading-none block">
                    {mushroom.name}
                  </span>
                  <span className="font-serif italic text-caption text-umbi-dark/50 leading-snug block mt-1">
                    {mushroom.desc}
                  </span>
                </div>
                <div className="w-6 h-px bg-umbi-dark/15" />
                <ul className="flex flex-col gap-1.5 md:gap-2">
                  {mushroom.qualities.map((q) => (
                    <li key={q} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-umbi-dark/25 shrink-0" />
                      <span className="font-serif text-caption text-umbi-dark/60">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Technical Specs — hidden for now */}
      {/* Kitchen Climate — hidden for now */}

      <Footer />
    </main>
  );
}
