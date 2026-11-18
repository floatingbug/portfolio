# tom.dev – modulares Portfolio

Vue 3 + Vite Portfolio, strukturiert in eigenständige Komponenten und ein kleines CSS-System.

## Starten

```bash
npm install
npm run dev
```

Produktions-Build prüfen:

```bash
npm run build
npm run preview
```

## Projektstruktur

```text
src/
├── App.vue
├── main.js
├── router/
│   └── index.js
├── views/
│   ├── PortfolioView.vue
│   └── CaseStudyView.vue
├── components/
│   ├── SiteHeader.vue
│   ├── SiteFooter.vue
│   ├── case-study/
│   │   ├── CaseStudyHero.vue
│   │   ├── CaseStudyToc.vue
│   │   ├── CaseStudySection.vue
│   │   ├── CaseStudyFigure.vue
│   │   ├── CaseStudyCallout.vue
│   │   └── sections/
│   └── sections/
│       ├── HeroSection.vue
│       ├── ProjectSection.vue
│       ├── ApproachSection.vue
│       ├── AboutSection.vue
│       └── ContactSection.vue
├── data/
│   └── case-study.js
└── styles/
    ├── main.css
    ├── tokens.css
    ├── base.css
    ├── layout.css
    ├── components.css
    └── sections/
        ├── hero.css
        ├── project.css
        ├── approach.css
        ├── about.css
        ├── contact.css
        └── case-study.css
```

## Case Study

Die Case Study zu einfachRechnung liegt unter `/case-study/einfach-rechnung/`. Der Inhalt ist als Vue-View mit eigenen Komponenten umgesetzt; die Screenshots kommen aus `projects/einfach_rechnung/screenshots/` und werden über Vite eingebunden.

Das Markdown unter `projects/einfach_rechnung/docs/case-study/case-study.md` dient als Archivfassung. Inhaltliche Änderungen gehören in `src/components/case-study/sections/`.

## Weitere Projekte

`projects/einfach_rechnung/` enthält die Archivfassung der Case Study und die Screenshots der vorgestellten Anwendung. Es ist kein eigenständig startbares Projekt.

## Routing

Die Seite nutzt `vue-router` mit History-Modus. Für den Produktivbetrieb ist ein SPA-Fallback nötig; `vercel.json` und `public/_redirects` decken Vercel und Netlify ab.

## CSS-Aufteilung

- `tokens.css`: Farben, Schriftarten, Abstände und wiederverwendbare Designwerte.
- `base.css`: globale Grundregeln, Typografie und Fokuszustände.
- `layout.css`: Seitenbreite, Header, Navigation, Footer und allgemeines Abschnittslayout.
- `components.css`: wiederverwendbare Buttons, Projektkarten, Vorschau und Architektur-Elemente.
- `sections/*.css`: Styles, die nur zu einer bestimmten Portfolio-Section gehören.
- `main.css`: zentrale Datei, die alle Styles in definierter Reihenfolge importiert.

## Vor dem Veröffentlichen

1. Inhalte und Technologien darauf prüfen, dass sie den tatsächlichen Funktionen des Projekts entsprechen.
