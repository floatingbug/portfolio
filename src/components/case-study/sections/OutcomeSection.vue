<script setup>
import CaseStudySection from '../CaseStudySection.vue'
</script>

<template>
  <CaseStudySection id="qualitaet" index="07" title="Qualitätssicherung">
    <p>
      Vitest deckt die Stellen ab, an denen Fehler teuer sind: Berechnung der Belegsummen
      (inklusive Rabatten und Steueraufteilung), Zahlungsvalidierung, Ableitung des Zahlungsstatus
      und die Regeln für überfällige Rechnungen. Die Tests laufen ohne Browser, weil die Logik
      bewusst aus den Komponenten herausgezogen ist.
    </p>
  </CaseStudySection>

  <CaseStudySection id="learnings" index="08" title="Herausforderungen und Learnings">
    <ul class="case-study-learnings">
      <li>
        <strong>Geldbeträge sind ein Rundungsproblem.</strong> Steuer pro Position, Rabatt pro
        Position, Summe über alles: Sobald man in Cent rechnet und zwischendurch rundet, weicht das
        Ergebnis von der Erwartung ab. Die Lösung war eine einzige Berechnungsfunktion mit klaren
        Rundungspunkten und Tests, die genau diese Grenzfälle festhalten.
      </li>
      <li>
        <strong>Status ist kein Textfeld.</strong> „Offen“, „teilbezahlt“ und „überfällig“ sind
        keine gepflegten Werte, sondern ableitbar. Sie zu berechnen statt zu speichern hat mehrere
        Inkonsistenzen beseitigt — und macht Teilzahlungen erst korrekt.
      </li>
      <li>
        <strong>Komponenten-Bibliothek heißt Konventionen lernen.</strong> PrimeVue-Theming läuft
        über Presets und Design-Tokens, nicht über überschriebene CSS-Klassen. Wer mit älteren
        Anleitungen arbeitet, kämpft gegen das Framework statt damit.
      </li>
      <li>
        <strong>Demo-Daten sind ein eigener Arbeitsauftrag.</strong> Ein realistischer Datensatz
        (Kunden, Belege, Teilzahlungen, überfällige Posten) ist die halbe Präsentation — und deckt
        Datenfehler auf, die mit drei Testzeilen nie auffallen.
      </li>
    </ul>
  </CaseStudySection>

  <CaseStudySection id="naechste-schritte" index="09" title="Nächste Schritte">
    <ul>
      <li>API-Tests für die Service-Schicht ergänzen.</li>
      <li>
        Angebot → Rechnung als Ein-Klick-Übernahme im Frontend sichtbar machen (die API kann es
        bereits).
      </li>
      <li>
        Mahnwesen: die vorhandene <code>canSendReminder</code>-Regel in einen geführten Ablauf
        bringen.
      </li>
      <li>
        Demo-Datensatz als Seed-Skript ausliefern, damit das Projekt lokal in einer Minute
        vorführbar ist.
      </li>
    </ul>
  </CaseStudySection>

  <CaseStudySection id="fazit" index="10" title="Fazit">
    <p>
      einfachRechnung ist kein Rechnungsgenerator, sondern ein kleines Beleg-System: Stammdaten,
      Belege, Zahlungen und die Ableitung des Zustands daraus. Der Aufwand lag weniger in der
      Oberfläche als in den Details, die man erst beim Benutzen bemerkt — Rundung, Teilzahlungen,
      Snapshots, Nummernkreise.
    </p>
    <p>
      Genau diese Details sind der Grund, warum das Projekt als Portfolio-Beispiel taugt: Es zeigt
      nicht, dass ich ein Formular bauen kann, sondern wie ich fachliche Regeln in Code übersetze,
      der auch nach der zehnten Rechnung noch stimmt.
    </p>

    <div class="case-study-end">
      <RouterLink class="button button-primary" to="/">Zurück zum Portfolio</RouterLink>
      <a
        class="button button-secondary"
        href="https://einfach-rechnung-eight.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        Live-Demo öffnen
      </a>
    </div>
  </CaseStudySection>
</template>
