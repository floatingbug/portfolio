<script setup>
import CaseStudySection from '../CaseStudySection.vue'
</script>

<template>
  <CaseStudySection id="beitrag" index="03" title="Mein Beitrag">
    <p>Ich habe das Projekt von der Idee bis zum lauffähigen Stand allein umgesetzt:</p>
    <ul>
      <li>Datenmodell und Beziehungen (Konto → Kunden → Angebote/Rechnungen → Zahlungen)</li>
      <li>REST-API inklusive Auth-Flow, PDF- und XML-Export</li>
      <li>Komplette Oberfläche mit Vue 3 und PrimeVue</li>
      <li>Berechnungslogik für Positionen, Rabatte, Steuern und Teilzahlungen</li>
      <li>Testabdeckung der kritischen Rechen- und Regel-Logik</li>
    </ul>
  </CaseStudySection>

  <CaseStudySection id="technik" index="04" title="Technischer Überblick">
    <div class="case-study-cards">
      <article class="case-study-card">
        <h3>Frontend</h3>
        <p>
          Vue 3 mit Composition API und <code>&lt;script setup&gt;</code>, Vite als Build-Tool,
          PrimeVue für Komponenten und Theming (Presets statt CSS-Overrides), Pinia für State,
          Chart.js für die Umsatzgrafik.
        </p>
      </article>
      <article class="case-study-card">
        <h3>Backend</h3>
        <p>
          Node.js mit Express 5 und dem offiziellen MongoDB-Treiber. Die API ist nach dem Muster
          Route → Service → Model aufgebaut: Routen enthalten nur Request/Response-Handling,
          Fachlogik liegt in Services.
        </p>
      </article>
      <article class="case-study-card">
        <h3>Authentifizierung</h3>
        <p>
          Der Access-Token liegt ausschließlich im Speicher (Pinia) und wird nie in
          <code>localStorage</code> geschrieben. Der Refresh-Token ist ein
          <code>httpOnly</code>-Cookie und damit für JavaScript unsichtbar; in Produktion
          zusätzlich <code>secure</code> und <code>sameSite=none</code>, begrenzt auf den Pfad
          <code>/auth/refresh</code>. Beim Öffnen der App prüft ein Router-Guard, ob eine Session
          wiederhergestellt werden kann.
        </p>
      </article>
      <article class="case-study-card">
        <h3>Struktur</h3>
        <p>
          Das Frontend ist nach Features geschnitten (<code>invoice</code>, <code>offer</code>,
          <code>customers</code>, <code>settings</code>, <code>dashboard</code>,
          <code>auth</code>). Jedes Feature hat die gleichen Schichten:
          <code>api</code> → <code>services</code> → <code>store</code> → <code>ui</code>.
          Wiederverwendbarer, fachlich neutraler Code liegt in <code>shared</code>.
        </p>
      </article>
    </div>
  </CaseStudySection>
</template>
