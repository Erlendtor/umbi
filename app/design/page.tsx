'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info } from 'lucide-react';

export default function DesignPage() {
  const [color, setColor] = useState<'Svart' | 'Brun'>('Svart');
  const [accessories, setAccessories] = useState<string[]>([]);
  
  const toggleAccessory = (acc: string) => {
    setAccessories(prev => 
      prev.includes(acc) ? prev.filter(a => a !== acc) : [...prev, acc]
    );
  };

  const basePrice = 2300;
  const accPrices: Record<string, number> = {
    'Veggfeste': 350,
    'Takfeste': 400
  };

  const totalPrice = basePrice + accessories.reduce((sum, acc) => sum + (accPrices[acc] || 0), 0);

  return (
    <main className="flex-grow bg-umbi-bg">
      <Navbar />
      
      <section className="pt-32 md:pt-48 pb-24 md:pb-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            
            {/* Preview Column */}
            <div className="lg:sticky lg:top-40 space-y-8">
              <div className="aspect-[4/5] bg-umbi-beige rounded-[48px] overflow-hidden relative shadow-2xl group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={color}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src="/input_file_2.png" 
                      alt={`Umbi Uno i ${color}`} 
                      fill 
                      className={`object-cover transition-all duration-700 ${color === 'Brun' ? 'sepia-[0.3] saturate-[1.2]' : 'grayscale-[0.2]'}`}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Accessory Indicators */}
                <div className="absolute top-8 left-8 flex flex-col space-y-3">
                  {accessories.map(acc => (
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      key={acc}
                      className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-sm flex items-center space-x-2"
                    >
                      <Check size={10} />
                      <span>{acc}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mb-2">Valgt modell</p>
                    <h2 className="text-3xl font-serif">Umbi Uno {color}</h2>
                  </div>
                  <div className="bg-umbi-beige text-umbi-dark px-6 py-3 rounded-2xl font-serif text-xl shadow-lg">
                    {totalPrice} kr
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 bg-umbi-dark/5 rounded-3xl text-sm text-umbi-dark/60 leading-relaxed">
                <Info size={20} className="shrink-0 opacity-40" />
                <p>Hver Umbi Uno håndlages i Trondheim med fokus på bærekraft og lang levetid.</p>
              </div>
            </div>
            
            {/* Configurator Column */}
            <div className="space-y-16 py-8">
              <header>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-umbi-dark/30 mb-4 block">Konfigurator</span>
                <h1 className="text-5xl md:text-7xl mb-6">Design din Umbi Uno</h1>
                <p className="text-lg text-umbi-dark/60 leading-relaxed max-w-lg">
                  Skreddersy din Umbi slik at den passer perfekt inn i ditt kjøkkenmiljø. Velg mellom våre signaturfarger og praktisk tilleggsutstyr.
                </p>
              </header>
              
              {/* Color Selection */}
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Velg farge</h3>
                  <span className="text-sm font-serif italic text-umbi-dark/40">{color}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {(['Svart', 'Brun'] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`relative group p-8 rounded-[32px] border-2 transition-all duration-500 text-left overflow-hidden ${
                        color === c ? 'border-umbi-dark bg-white shadow-xl' : 'border-umbi-dark/5 hover:border-umbi-dark/20 bg-transparent'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-2xl mb-6 shadow-inner transition-transform duration-500 group-hover:scale-110 ${c === 'Svart' ? 'bg-zinc-900' : 'bg-[#5D4037]'}`} />
                      <span className="text-sm font-bold uppercase tracking-[0.2em] block mb-1">{c}</span>
                      <span className="text-[10px] text-umbi-dark/40 uppercase tracking-widest">Inkludert</span>
                      
                      {color === c && (
                        <motion.div layoutId="activeColor" className="absolute top-4 right-4 text-umbi-dark">
                          <Check size={20} />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Accessories */}
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Tilbehør</h3>
                  <span className="text-sm font-serif italic text-umbi-dark/40">{accessories.length} valgt</span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Veggfeste', price: 350, desc: 'For montering på flis eller trevegg.' },
                    { name: 'Takfeste', price: 400, desc: 'Minimalistisk oppheng fra taket.' }
                  ].map((acc) => (
                    <button
                      key={acc.name}
                      onClick={() => toggleAccessory(acc.name)}
                      className={`w-full p-8 rounded-[32px] border-2 transition-all duration-500 text-left flex items-center justify-between group ${
                        accessories.includes(acc.name) ? 'border-umbi-dark bg-white shadow-xl' : 'border-umbi-dark/5 hover:border-umbi-dark/20 bg-transparent'
                      }`}
                    >
                      <div className="flex items-center space-x-6">
                        <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-colors duration-500 ${accessories.includes(acc.name) ? 'bg-umbi-dark border-umbi-dark' : 'border-umbi-dark/10 group-hover:border-umbi-dark/30'}`}>
                          {accessories.includes(acc.name) && <Check size={16} className="text-white" />}
                        </div>
                        <div>
                          <span className="font-bold uppercase tracking-[0.2em] text-sm block mb-1">{acc.name}</span>
                          <span className="text-[10px] text-umbi-dark/40 uppercase tracking-widest">{acc.desc}</span>
                        </div>
                      </div>
                      <span className="font-serif text-lg">+{acc.price} kr</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Summary & CTA */}
              <div className="pt-12 border-t border-umbi-dark/10 space-y-8">
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-serif">Totalpris</span>
                  <div className="text-right">
                    <span className="text-4xl font-serif">{totalPrice} kr</span>
                    <p className="text-[10px] text-umbi-dark/40 uppercase tracking-widest mt-2">Inkl. MVA og frakt i Norge</p>
                  </div>
                </div>
                
                <button className="w-full py-6 bg-umbi-dark text-white rounded-full font-bold uppercase tracking-[0.3em] text-[11px] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl">
                  Sett meg på en uforpliktende venteliste
                </button>
                
                <p className="text-center text-[9px] text-umbi-dark/30 uppercase tracking-[0.2em] leading-relaxed">
                  Ved å sette deg på venteliste får du prioritet når neste produksjonsserie er klar. Ingen betaling kreves før din Umbi er klar for utsendelse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
