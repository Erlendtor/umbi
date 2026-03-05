'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, Droplets, Battery, Zap, Wind } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex-grow">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-umbi-dark">
        <Image
          src="/input_file_2.png"
          alt="Umbi Uno i et moderne kjøkken"
          fill
          className="object-cover opacity-80"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl text-white mb-8 tracking-tight font-serif">
              Umbi Uno
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-umbi-beige/90 mb-12 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            Et autonomt selvdyrkesystem for høykvalitets matsopp rett fra kjøkkenbenken.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center"
          >
            <Link 
              href="/design" 
              className="w-full sm:w-64 py-4 bg-umbi-beige text-umbi-dark rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:scale-105 transition-transform text-center shadow-2xl"
            >
              Design din Umbi Uno
            </Link>
            <Link 
              href="#slik-fungerer-det" 
              className="w-full sm:w-64 py-4 border border-white/30 text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white/10 transition-colors text-center backdrop-blur-sm"
            >
              Om produktet
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Slik fungerer det */}
      <section id="slik-fungerer-det" className="py-24 md:py-40 px-6 md:px-12 bg-umbi-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 md:mb-32">
            <h2 className="text-4xl md:text-7xl mb-6">Slik fungerer det</h2>
            <div className="w-24 h-px bg-umbi-dark/20 mx-auto" />
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-umbi-dark/10 hidden lg:block" />
            
            <div className="space-y-24 md:space-y-48">
              {/* Step 1 */}
              <div className="relative flex flex-col lg:flex-row items-center lg:justify-between">
                <div className="lg:w-[42%] text-center lg:text-right mb-12 lg:mb-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-umbi-dark/30 mb-4 block">01</span>
                  <h3 className="text-3xl md:text-4xl mb-6">Sett inn en Umbi Pod</h3>
                  <p className="text-umbi-dark/60 leading-relaxed">Velg mellom rosa østersopp og blågrå østersopp.</p>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-umbi-dark border-4 border-umbi-bg z-10" />
                <div className="lg:w-[42%] w-full">
                  <div className="aspect-[4/3] bg-umbi-beige rounded-3xl overflow-hidden relative shadow-sm">
                    <Image src="https://picsum.photos/seed/umbi-pod-1/1200/900" alt="Umbi Pod" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center lg:justify-between">
                <div className="lg:w-[42%] text-center lg:text-left mb-12 lg:mb-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-umbi-dark/30 mb-4 block">02</span>
                  <h3 className="text-3xl md:text-4xl mb-6">Åpne posen</h3>
                  <p className="text-umbi-dark/60 leading-relaxed">Vent til du ser vekst inni posen, skjær så et kryss i plasten med en skarp kniv.</p>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-umbi-dark border-4 border-umbi-bg z-10" />
                <div className="lg:w-[42%] w-full">
                  <div className="aspect-[4/3] bg-umbi-beige rounded-3xl overflow-hidden relative shadow-sm">
                    <Image src="https://picsum.photos/seed/umbi-open/1200/900" alt="Åpne posen" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col lg:flex-row items-center lg:justify-between">
                <div className="lg:w-[42%] text-center lg:text-right mb-12 lg:mb-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-umbi-dark/30 mb-4 block">03</span>
                  <h3 className="text-3xl md:text-4xl mb-6">Fyll vann og trykk start</h3>
                  <p className="text-umbi-dark/60 leading-relaxed">Vanntanken holder én uke. Umbi tar seg av resten.</p>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-umbi-dark border-4 border-umbi-bg z-10" />
                <div className="lg:w-[42%] w-full">
                  <div className="aspect-[4/3] bg-umbi-beige rounded-3xl overflow-hidden relative shadow-sm">
                    <Image src="https://picsum.photos/seed/umbi-water/1200/900" alt="Fyll vann" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center lg:justify-between">
                <div className="lg:w-[42%] text-center lg:text-left mb-12 lg:mb-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-umbi-dark/30 mb-4 block">04</span>
                  <h3 className="text-3xl md:text-4xl mb-6">Høst og repeter</h3>
                  <p className="text-umbi-dark/60 leading-relaxed">Etter litt over én uke er 400g fersk sopp klar. Hver pod gir to til tre høstinger. Vent én uke mellom hver runde.</p>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-umbi-dark border-4 border-umbi-bg z-10" />
                <div className="lg:w-[42%] w-full">
                  <div className="aspect-[4/3] bg-umbi-beige rounded-3xl overflow-hidden relative shadow-sm">
                    <Image src="https://picsum.photos/seed/umbi-harvest/1200/900" alt="Høst sopp" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soppgaranti */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-6xl mx-auto relative rounded-[48px] overflow-hidden min-h-[500px] flex items-center justify-center text-center p-12">
          <Image 
            src="/input_file_0.png" 
            alt="Fersk sopp i panne" 
            fill 
            className="object-cover" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl text-white mb-8">Soppgaranti</h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">
              Ikke fornøyd med resultatet? Du får en ny Umbi Pod i posten, ingen spørsmål.
            </p>
            <div className="w-16 h-px bg-white/40 mx-auto" />
          </div>
        </div>
      </section>

      {/* Mushroom Types */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-umbi-dark/30 mb-6 block">Våre arter</span>
              <h2 className="text-4xl md:text-6xl mb-10 leading-tight">Visste du at rosa østersopp ofte kalles skogens bacon?</h2>
              <p className="text-lg text-umbi-dark/60 mb-12 leading-relaxed">
                Umbi Uno er designet spesielt for rosa og blågrå østersopp, dyrket på substrat fra <a href="#" className="underline font-bold text-umbi-dark hover:opacity-70 transition-opacity">Hella Sopperi</a>.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-8 sm:space-y-0 sm:space-x-12 mb-16">
                <div className="relative w-40 h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                   <div className="font-serif font-bold text-2xl tracking-tighter">Hella Sopperi</div>
                </div>
                <Link 
                  href="/design" 
                  className="inline-flex items-center space-x-4 bg-umbi-dark text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:translate-x-2 transition-transform shadow-xl"
                >
                  <span>Bestill Umbi Pod</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
              <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-2">
                <Image src="https://picsum.photos/seed/pink-mush/800/1066" alt="Rosa østersopp" fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute bottom-6 left-6 text-white text-[9px] font-bold uppercase tracking-[0.2em] bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">Rosa</div>
              </div>
              <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 mt-12">
                <Image src="https://picsum.photos/seed/blue-mush/800/1066" alt="Blågrå østersopp" fill className="object-cover" referrerPolicy="no-referrer" />
                <div className="absolute bottom-6 left-6 text-white text-[9px] font-bold uppercase tracking-[0.2em] bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">Blågrå</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-umbi-dark text-umbi-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 md:mb-32">
            <h2 className="text-4xl md:text-7xl mb-6">Tekniske spesifikasjoner</h2>
            <p className="text-umbi-beige/40 text-[10px] font-bold uppercase tracking-[0.4em]">Umbi Uno v1.0</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
            <div className="space-y-6 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Droplets className="opacity-50" size={24} />
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Vanntank</h3>
              <p className="text-3xl font-serif">150ml</p>
              <p className="text-sm opacity-40 leading-relaxed">Holder en uke ved normal drift.</p>
            </div>
            
            <div className="space-y-6 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Battery className="opacity-50" size={24} />
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Batteritid</h3>
              <p className="text-3xl font-serif">5 dager</p>
              <p className="text-sm opacity-40 leading-relaxed">Integrert Li-ion batteri.</p>
            </div>
            
            <div className="space-y-6 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Zap className="opacity-50" size={24} />
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Lading</h3>
              <p className="text-3xl font-serif">USB-C</p>
              <p className="text-sm opacity-40 leading-relaxed">Hurtiglading støttet.</p>
            </div>
            
            <div className="space-y-6 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Wind className="opacity-50" size={24} />
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Teknologi</h3>
              <p className="text-3xl font-serif">Supersonic</p>
              <p className="text-sm opacity-40 leading-relaxed">Presis fuktighetskontroll.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Climate */}
      <section className="py-24 md:py-48 px-6 md:px-12 bg-umbi-bg relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-umbi-beige rounded-full blur-3xl opacity-50" />
        <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-umbi-beige rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl mb-12">Kjøkkenklima</h2>
          <p className="text-2xl md:text-4xl mb-12 font-serif italic text-umbi-dark/80 leading-tight">
            &quot;Visste du at Umbi Uno regulerer luftfuktigheten i kjøkkenet ditt mens den dyrker sopp?&quot;
          </p>
          <div className="w-12 h-px bg-umbi-dark/20 mx-auto mb-12" />
          <p className="text-lg text-umbi-dark/60 max-w-2xl mx-auto leading-relaxed">
            Tørr luft fra steking og ovnsbruk er en av de største fiendene til inneklimaet. Umbi Uno balanserer dette naturlig mens myceliet jobber, slik at kjøkkenet blir et bedre sted å lage mat.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
