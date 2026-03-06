'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'motion/react';

type Color = 'Svart' | 'Brun' | 'Sølv';
type Pod   = 'Rosa' | 'Blågrå';

const colorImages: Record<Color, string> = {
  Svart: '/svart.png',
  Brun:  '/brun.png',
  Sølv:  '/svart.png',
};

const colorStyles: Record<Color, React.CSSProperties> = {
  Brun:  { backgroundColor: 'var(--color-umbi-brown)' },
  Svart: { backgroundColor: 'var(--color-umbi-black)' },
  Sølv:  { background: 'linear-gradient(144.9deg, #9fa6ae 7%, #d6d5d1 34%, #bdb2af 68%, #dcc6bf 94%)' },
};

const pods: { name: Pod; label: string; desc: string; src: string }[] = [
  { name: 'Rosa',   label: 'Rosa østersopp',   desc: 'Mild og nøtteaktig, perfekt til pasta og risotto.',  src: '/rosa sopp.png'   },
  { name: 'Blågrå', label: 'Blågrå østersopp', desc: 'Kraftig umami-smak, ideell til kjøttretter og wok.', src: '/blågrå sopp.png' },
];

const accessories = [
  { name: 'Veggfeste', price: 350, note: 'Flis eller trevegg'    },
  { name: 'Takfeste',  price: 400, note: 'Minimalistisk oppheng' },
];

export default function DesignPage() {
  const [color, setColor]       = useState<Color>('Svart');
  const [pod, setPod]           = useState<Pod>('Rosa');
  const [selected, setSelected] = useState<string[]>([]);
  const [email, setEmail]       = useState('');
  const [status, setStatus]     = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xvzbjply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, farge: color, pod, tillegg: selected.join(', '), totalpris: total }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const toggle = (name: string) =>
    setSelected(prev =>
      prev.includes(name) ? prev.filter(a => a !== name) : [...prev, name]
    );

  const basePrice = 2300;
  const total = basePrice + selected.reduce(
    (s, a) => s + (accessories.find(x => x.name === a)?.price ?? 0), 0
  );

  return (
    <main data-nav-theme="light" className="bg-umbi-beige min-h-screen">
      <Navbar />

      <div className="flex mt-[var(--navbar-height)] pl-6 md:pl-[var(--navbar-px-md)]">

        {/* ── Left: product image ── */}
        <div className="flex-1 py-6 pr-6 md:pr-16 sticky top-[var(--navbar-height)] h-[calc(100vh-var(--navbar-height))]">
          <div className="relative h-full rounded-large overflow-hidden shadow-[0px_4px_22.8px_0px_rgba(0,0,0,0.25)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={color}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={colorImages[color]}
                  alt={`Umbi Uno ${color}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Right: configurator panel ── */}
        <div className="min-w-[460px] w-[500px] shrink-0 flex flex-col min-h-[calc(100vh-var(--navbar-height))] py-8 pr-6 md:pr-[var(--navbar-px-md)] overflow-y-auto">

          {/* Midtdel: sentrert vertikalt i tilgjengelig plass */}
          <div className="flex-1 flex flex-col justify-center gap-5">

          {/* 1 ── Logo · Undertekst · Fargevalg */}
          <div className="flex flex-col items-center gap-4 pb-6">

            <div className="flex flex-col items-center gap-1.5">
              <div className="relative w-[180px] h-[31px]">
                <Image
                  src="/Umbi Uno logo mørk.png"
                  alt="Umbi Uno"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-serif text-caption text-umbi-dark/40 text-center">
                Design din enhet
              </p>
            </div>

            <div className="flex items-center gap-3 mt-2">
              {(['Brun', 'Svart', 'Sølv'] as Color[]).map(c => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  title={c}
                  className="relative w-8 h-8 rounded-full focus:outline-none transition-transform duration-300 hover:scale-110"
                  style={colorStyles[c]}
                >
                  {color === c && (
                    <motion.span
                      layoutId="colorRing"
                      className="absolute inset-0 rounded-full ring-[1.5px] ring-offset-[3px] ring-umbi-dark"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              ))}
            </div>

          </div>

          {/* 2 ── Umbi Pod */}
          <div className="flex flex-col gap-3 pb-6">

            <span className="text-label font-sans font-bold uppercase tracking-[0.3em] text-umbi-dark/30 text-center block">
              Velg inkludert Umbi Pod
            </span>

            <div className="flex gap-3">
              {pods.map(p => {
                const on = pod === p.name;
                return (
                  <button
                    key={p.name}
                    onClick={() => setPod(p.name)}
                    className={`flex-1 flex flex-col rounded-card overflow-hidden border-[0.5px] transition-all duration-300 ${
                      on
                        ? 'border-umbi-dark/25 shadow-sm'
                        : 'border-umbi-dark/10 hover:border-umbi-dark/20'
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-[130px] overflow-hidden">
                      <Image
                        src={p.src}
                        alt={p.label}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {on && <div className="absolute inset-0 bg-umbi-dark/5" />}
                    </div>

                    {/* Label block */}
                    <div className={`px-3 py-3 flex flex-col gap-1 transition-colors duration-300 items-start ${
                      on ? 'bg-umbi-bg' : 'bg-umbi-bg/40'
                    }`}>
                      <span className="font-serif text-caption text-umbi-dark leading-none text-left">
                        {p.label}
                      </span>
                      <span className="font-serif italic text-caption text-umbi-dark/40 leading-snug text-left">
                        {p.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* 3 ── Tillegg */}
          <div className="flex flex-col gap-3 pb-6">

            <span className="text-label font-sans font-bold uppercase tracking-[0.3em] text-umbi-dark/30 text-center block">
              Tillegg
            </span>

            <div className="flex flex-col gap-2">
              {accessories.map(acc => {
                const on = selected.includes(acc.name);
                return (
                  <button
                    key={acc.name}
                    onClick={() => toggle(acc.name)}
                    className={`flex items-center justify-between px-4 py-3 rounded-card border-[0.5px] transition-all duration-300 text-left ${
                      on
                        ? 'bg-umbi-bg border-umbi-dark/20'
                        : 'bg-transparent border-umbi-dark/10 hover:bg-umbi-bg/50 hover:border-umbi-dark/15'
                    }`}
                  >
                    <p className="font-serif text-caption text-umbi-dark leading-none">
                      {acc.name}
                    </p>
                    <div className="flex items-center gap-2.5 shrink-0 ml-3">
                      <span className={`font-serif text-caption transition-colors duration-300 ${on ? 'text-umbi-dark' : 'text-umbi-dark/40'}`}>
                        +{acc.price} kr
                      </span>
                      <div className={`w-[14px] h-[14px] rounded-[3px] border-[0.5px] flex items-center justify-center transition-all duration-300 ${
                        on ? 'bg-umbi-dark border-umbi-dark' : 'border-umbi-dark/20'
                      }`}>
                        {on && (
                          <motion.svg
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.15 }}
                            width="8" height="6"
                            viewBox="0 0 8 6"
                            fill="none"
                          >
                            <path
                              d="M1 3L3 5L7 1"
                              stroke="var(--color-umbi-beige)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          </div>{/* slutt midtdel */}

          {/* 4 ── Totalpris + CTA — festet til bunn */}
          <div className="flex flex-col gap-3">
            <div className="w-full h-px bg-umbi-dark/10" />

            <div className="flex justify-between items-baseline">
              <span className="font-serif text-caption text-umbi-dark/40">
                Totalpris
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={total}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.18 }}
                  className="font-serif text-panel-title text-umbi-dark"
                >
                  {total} kr
                </motion.span>
              </AnimatePresence>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <p className="font-serif text-caption text-umbi-dark/40 leading-relaxed">
                Meld deg på vår helt uforpliktende venteliste.
              </p>

              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="din@epost.no"
                disabled={status === 'done'}
                className="w-full h-[44px] px-4 bg-umbi-bg/60 border-[0.5px] border-umbi-dark/20 rounded-ui font-serif text-ui text-umbi-dark placeholder:text-umbi-dark/30 focus:outline-none focus:border-umbi-dark/50 transition-colors duration-300 disabled:opacity-40"
              />

              <AnimatePresence mode="wait">
                {status === 'done' ? (
                  <motion.p
                    key="done"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center font-serif text-caption text-umbi-dark/60 py-2"
                  >
                    Du er på listen — vi gir beskjed!
                  </motion.p>
                ) : (
                  <motion.button
                    key="btn"
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full h-[44px] bg-umbi-dark text-umbi-beige rounded-ui font-serif text-ui border-[0.5px] border-umbi-dark hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sender…' : 'Sett meg på venteliste'}
                  </motion.button>
                )}
              </AnimatePresence>

              {status === 'error' && (
                <p className="text-center font-sans text-micro text-red-500 uppercase tracking-[0.2em]">
                  Noe gikk galt — prøv igjen
                </p>
              )}
            </form>

          </div>

        </div>
      </div>
    </main>
  );
}
