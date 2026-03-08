# Umbi Brand Guidelines

Dette er den autoritative kilden for alle design- og stilbeslutninger i Umbi-prosjektet.
Når du endrer sider eller komponenter, sjekk alltid at endringene er i tråd med disse guidelinene.

---

## Farger

Alle farger er definert i `app/brand.css` som CSS-variabler og Tailwind-tokens.

| Token              | Hex       | Bruk                                              |
|--------------------|-----------|---------------------------------------------------|
| `umbi-dark`        | `#1F1914` | Primær tekstfarge, mørke bakgrunner, CTA-knapper  |
| `umbi-beige`       | `#FFEFE0` | Sekundær tekst på mørk bakgrunn, lyse knapper     |
| `umbi-bg`          | `#FFF5EC` | Standard sidebakgrunn                             |
| `umbi-black`       | `#1a1a1a` | Produktfarge: Svart variant                       |
| `umbi-brown`       | `#5D4037` | Produktfarge: Brun variant                        |

**Regler:**
- Bruk aldri hardkodede hex-farger — alltid `text-umbi-dark`, `bg-umbi-bg` osv.
- Glasspaneler bruker `bg-umbi-bg/70` eller `bg-[rgba(255,242,224,0.8)]` med `backdrop-blur`
- Overlay-dimming: `bg-black/20` (lett) eller `bg-white/20` (transparent hvit)
- Deaktiverte/subtile elementer: `text-umbi-dark/40`, `text-umbi-dark/30`, `opacity-40`
- Seksjoner veksler mellom `bg-umbi-bg`, `bg-umbi-dark`, og `bg-white`

---

## Typografi

### Fonter

| Token        | Verdi                                | Bruk                              |
|--------------|--------------------------------------|-----------------------------------|
| `font-serif` | `Georgia, serif`                     | Overskrifter, brødtekst, knapper |
| `font-sans`  | `ui-sans-serif, system-ui, sans-serif` | Labels, UI-metadata, badges    |

**Regler:**
- `font-serif` er standardfonten for alt innhold og knapper
- `font-sans` brukes KUN til: uppercase labels, tracking-[0.3em+] tekst, tekniske metadata, badges
- Aldri bruk andre fonter enn disse to

### Fontstørrelser

Bruk alltid de semantiske Tailwind-tokens fra `brand.css`. Ikke bruk generiske `text-xl`, `text-2xl` osv. der et semantisk navn finnes.

| Token              | Størrelse                        | Bruk                                   |
|--------------------|----------------------------------|----------------------------------------|
| `text-display`     | `clamp(3rem, 7vw, 5rem)`        | Mega-overskrifter, hero-titler         |
| `text-headline`    | `clamp(2rem, 4vw, 3.75rem)`     | Store h2-er                            |
| `text-section-title` | `1.875rem` (30px)             | Seksjonsoverskrifter (text-3xl)        |
| `text-panel-title` | `1.3125rem` (21px)              | Overskrift i floating panel            |
| `text-body-lg`     | `1.25rem` (20px)                | Stor brødtekst                         |
| `text-body`        | `1.125rem` (18px)               | Standard brødtekst, nav-lenker         |
| `text-ui`          | `1rem` (16px)                   | Knapper, lenker, footer-tekst          |
| `text-ui-sm`       | `0.9375rem` (15px)              | Sekundære knapper                      |
| `text-caption`     | `0.875rem` (14px)               | Bildebeskrivelser, hjelpetekst         |
| `text-label`       | `0.625rem` (10px)               | Uppercase labels med bred tracking     |
| `text-micro`       | `0.5625rem` (9px)               | Badges, svært subtil metadata          |

**Regler:**
- Labels (`text-label`, `text-micro`) skal alltid kombineres med `uppercase` og `tracking-[0.3em]` eller mer
- Overskrifter (`h1`–`h6`) bruker `font-serif font-normal` (definert globalt)
- Italic brukes sparsomt — kun for sitater og dekorative elementer: `font-serif italic`

---

## Border Radius

| Token              | Størrelse   | Bruk                                          |
|--------------------|-------------|-----------------------------------------------|
| `rounded-ui`       | `5px`       | Knapper, input-felt                           |
| `rounded-card`     | `1rem`      | Kort, floating panels (= `rounded-2xl`)       |
| `rounded-panel`    | `1.5625rem` | Glasspaneler (25px)                           |
| `rounded-feature`  | `2.0625rem` | Featured seksjoner (33px)                     |
| `rounded-large`    | `2.5rem`    | Store bilder og innholdskort (40px)           |
| `rounded-full`     | 50%         | Runde knapper, color swatches, pill-badges    |
| `rounded-3xl`      | `1.5rem`    | Bildekort med rotasjonseffekt                 |

**Regler:**
- Bruk aldri generiske `rounded-lg`, `rounded-xl` o.l. der et semantisk token finnes
- Pill-knapper (CTA med `uppercase tracking`) bruker `rounded-full`
- Standard knapper bruker `rounded-ui` (5px)

---

## Skygger

| Klasse / Verdi                                         | Bruk                              |
|--------------------------------------------------------|-----------------------------------|
| `shadow-sm`                                            | Bilder i steg-seksjoner           |
| `shadow-2xl`                                           | Bildekort med rotasjon            |
| `shadow-xl`                                            | CTA pill-knapper                  |
| `shadow-[0px_4px_22.8px_0px_rgba(0,0,0,0.25)]`       | Feature-seksjon container         |
| `shadow-2xl` (på floating panel)                       | Konfigurator-panel                |
| `shadow-[0px_8px_40px_0px_rgba(0,0,0,0.15)]`          | Svevende glasspanel over bilde    |

**Navbar/Glass-blur:**
- Navbar: `backdrop-blur-[14px]`
- Floating panel: `backdrop-blur-xl`
- Glasspaneler: `backdrop-blur-[14px]`
- Svevende glasspanel over bilde: `backdrop-blur-[20px]`

**Ingen overlay på bilder** — bilder vises alltid uten `bg-black/*` eller gradient-overlay.

---

## Animasjoner

Prosjektet bruker `motion/react` (Framer Motion). **Ikke bruk** CSS-animasjoner eller andre biblioteker.

### Standard motion-mønstre

**Svevende animasjon (float) — glasspaneler og kort som skal føles levende:**
```tsx
animate={{ y: [0, -10, 0] }}
transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity }}
```

**Fade inn (hero-elementer):**
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1.2, ease: 'easeOut' }}
```

**Fade + slide opp (sekundære hero-elementer):**
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.4 }}  // delay øker med 0.2 per element
```

**Bildebytte (AnimatePresence):**
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.6, ease: 'easeInOut' }}
```

**Badge-animasjon (liste-elementer):**
```tsx
initial={{ x: -16, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
exit={{ x: -16, opacity: 0 }}
transition={{ duration: 0.25 }}
```

**layoutId-animasjon (color ring):**
```tsx
transition={{ duration: 0.2 }}
```

### Tailwind hover-transisjoner

- Standard: `transition-colors duration-300 ease-in-out`
- Opacity-endringer: `transition-opacity` (ingen duration nødvendig — bruker Tailwind default 150ms)
- Transform-effekter: `transition-transform` (f.eks. `hover:translate-x-2`)
- Kombinert: `transition-all` for hover med flere endringer (grayscale + opacity)

**Regler:**
- Navbar-fargebytte: alltid `transition-colors duration-300 ease-in-out`
- Hover på lenker: `hover:opacity-70` eller `hover:opacity-60`
- Hover på knapper: `hover:opacity-90` eller `hover:bg-white/30`
- Ingen bounce, spring eller komplekse keyframe-animasjoner — bevegelse skal være subtil og naturlig

---

## Spacing og Layout

### Seksjonspadding-klasser

Bruk de predefinerte utility-klassene, ikke hardkodede padding-verdier:

| Klasse               | Mobil        | Desktop       | Bruk                         |
|----------------------|--------------|---------------|------------------------------|
| `.section-padding-sm` | `py-12 px-6` | `py-20 px-[150px]` | Kompakte seksjoner           |
| `.section-padding`    | `py-24 px-6` | `py-40 px-[150px]` | Standard seksjoner           |
| `.section-padding-xl` | `py-24 px-6` | `py-48 px-[150px]` | Store/luftige seksjoner      |

### Innholdsbredder

| Klasse                   | Maks-bredde | Bruk                          |
|--------------------------|-------------|-------------------------------|
| `.content-container`     | `72rem`     | Standard innhold (max-w-6xl)  |
| `.content-container-wide`| `80rem`     | Bred innhold (max-w-7xl)      |

### Navbar og hero

- Navbar-høyde: `81px` (`h-[var(--navbar-height)]`)
- Navbar side-padding desktop: `150px` (`px-[var(--navbar-px-md)]`) — samme som footer, single source of truth
- Hero top-offset for floating elementer: `var(--hero-top-offset)` = navbarhøyde + 1.5rem
- **Absoluttposisjonerte elementer** skal bruke `left-6 md:left-[var(--navbar-px-md)]` og `right-6 md:right-[var(--navbar-px-md)]` — ikke hardkodede `left-10` o.l.

### Footer

- Topp-padding: `var(--footer-pt)` (3.75rem)
- Bunn-padding: `var(--footer-pb)` (6.25rem)
- Side-padding desktop: `var(--footer-px-md)` (9.375rem)

---

## Knapper

### Primær (mørk bakgrunn)
```tsx
className="h-[44px] px-[21px] bg-umbi-beige border-[0.5px] border-white/80 rounded-ui font-serif text-ui text-umbi-dark hover:opacity-90 transition-opacity"
```

### Primær (lys bakgrunn)
```tsx
className="px-[21px] py-[13px] rounded-ui font-serif text-ui bg-umbi-dark text-umbi-beige border-[0.5px] border-umbi-dark hover:opacity-90 transition-opacity"
```

### Sekundær (ghost/transparent)
```tsx
className="h-[44px] px-[21px] bg-white/20 backdrop-blur-sm border-[0.5px] border-white rounded-ui font-serif text-ui text-umbi-beige hover:bg-white/30 transition-colors"
```

### CTA Pill (stor, uppercase)
```tsx
className="inline-flex items-center gap-4 bg-umbi-dark text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-label hover:translate-x-2 transition-transform shadow-xl"
```

### Panel-knapp (venteliste o.l.)
```tsx
className="w-full py-3.5 bg-umbi-dark text-umbi-beige rounded-card font-serif text-ui-sm hover:opacity-90 transition-opacity"
```

**Regler:**
- Kanttykkelse er alltid `border-[0.5px]` — aldri `border` (1px) på knapper
- Knapper bruker `font-serif` som standard — kun pill-CTA bruker `font-bold`
- Ikke bruk `font-sans` på knapper

---

## Glasspaneler

Glasspaneler følger dette mønsteret:
```tsx
className="backdrop-blur-[14px] bg-[rgba(255,242,224,0.8)] border-[0.5px] border-white rounded-panel px-12 py-[49px]"
```

Floating panels (f.eks. konfigurator):
```tsx
className="backdrop-blur-xl bg-umbi-bg/70 rounded-card border border-white/20 shadow-2xl"
```

---

## Navbar

- Navbar er alltid fast (`fixed top-0`) og skifter stil basert på `data-nav-theme`-attributtet på seksjonen under
- Seksjoner med `data-nav-theme="dark"`: navbar viser lys logo + lyse lenker
- Seksjoner med `data-nav-theme="light"`: navbar viser mørk logo + mørke lenker
- **Alle seksjoner MÅ ha `data-nav-theme="dark"` eller `data-nav-theme="light"`**

---

## Bilder og media

- Bruk alltid Next.js `<Image>` med `fill` og `object-cover` for bakgrunnsbilder
- Bilder i kort bruker `rounded-card overflow-hidden`
- Store bildekort med rotasjonseffekt: `rounded-3xl overflow-hidden shadow-2xl transform -rotate-2` (veksler med `rotate-2 mt-12`)
- Video bruker `autoPlay muted loop playsInline` alltid

---

## Editorial overskrifter

For impact-seksjoner med bilde i bakgrunn — stor kursiv serif skaper dramatikk uten overlay:
```tsx
<h2 className="font-serif italic text-display text-umbi-beige leading-[0.88]">
  Overskrift
</h2>
```
- Bruk `leading-[0.88]` for tett linjeavstand på store display-titler
- Kombiner gjerne med en subtil label over: `text-label uppercase tracking-[0.3em] text-umbi-beige/60`
- Tekst direkte på bilde — ingen overlay nødvendig

---

## Dekorative elementer

**Separator-linje:**
```tsx
<div className="w-16 h-px bg-umbi-dark/20 mx-auto" />
// eller
<hr className="border-umbi-dark/20" />
```

**Steg-nummerering:**
```tsx
<span className="text-label font-bold uppercase tracking-[0.3em] text-umbi-dark/30 mb-2 block">01</span>
```

**Tidslinje-dot:**
```tsx
<div className="w-2.5 h-2.5 rounded-full bg-umbi-dark border-4 border-umbi-bg" />
```

**Bakgrunns-blob (dekorativ):**
```tsx
<div className="absolute -right-24 -top-24 w-96 h-96 bg-umbi-beige rounded-full blur-3xl opacity-50" />
```

---

## Sjekkliste ved endringer

Nar du gjor endringer pa en side, sjekk alltid:

- [ ] Bruker seksjonen riktig `data-nav-theme`-attributt?
- [ ] Er alle farger Tailwind-tokens (ikke hardkodede hex)?
- [ ] Er fontstorrelser semantiske tokens (`text-body`, `text-label` osv.)?
- [ ] Er border-radius-verdier semantiske tokens (`rounded-ui`, `rounded-card` osv.)?
- [ ] Bruker knapper riktig hoyde, padding og kantykkelse (`border-[0.5px]`)?
- [ ] Er hover-effekter konsistente (`hover:opacity-70/90`, `transition-colors duration-300 ease-in-out`)?
- [ ] Har interaktive elementer (f.eks inputs) tydelige `:focus-visible` states for tastaturnavigasjon?
- [ ] Er animasjoner med motion/react, ikke CSS-keyframes?
- [ ] Bruker seksjonen `.section-padding*` og `.content-container*` i stedet for hardkodet padding?
- [ ] Er nye tekstelementer `font-serif` (innhold) eller `font-sans` (labels/metadata)?
- [ ] Er labels kombinert med `font-sans`, `uppercase` og `tracking-[0.3em]` eller mer?
- [ ] Ser layouten bra ut på smale skjermer (mobil, <768px)? Unngå horisontal scroll!
- [ ] Er knapper stablet hensiktsmessig på mobil (`flex-col sm:flex-row`)?
