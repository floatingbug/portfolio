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
├── components/
│   ├── SiteHeader.vue
│   ├── SiteFooter.vue
│   └── sections/
│       ├── HeroSection.vue
│       ├── ProjectSection.vue
│       ├── ApproachSection.vue
│       ├── AboutSection.vue
│       └── ContactSection.vue
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
        └── contact.css
```

## CSS-Aufteilung

- `tokens.css`: Farben, Schriftarten, Abstände und wiederverwendbare Designwerte.
- `base.css`: globale Grundregeln, Typografie und Fokuszustände.
- `layout.css`: Seitenbreite, Header, Navigation, Footer und allgemeines Abschnittslayout.
- `components.css`: wiederverwendbare Buttons, Projektkarten, Vorschau und Architektur-Elemente.
- `sections/*.css`: Styles, die nur zu einer bestimmten Portfolio-Section gehören.
- `main.css`: zentrale Datei, die alle Styles in definierter Reihenfolge importiert.

## Vor dem Veröffentlichen

1. In `src/components/sections/ContactSection.vue` `DEINE-EMAIL@example.com` durch deine Kontaktadresse ersetzen.
2. In `ProjectSection.vue` die schematische Projektvorschau durch einen echten Screenshot ersetzen, sobald du einen aufgenommen hast.
3. Inhalte und Technologien darauf prüfen, dass sie den tatsächlichen Funktionen des Projekts entsprechen.
