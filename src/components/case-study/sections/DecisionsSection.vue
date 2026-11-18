<script setup>
import CaseStudySection from '../CaseStudySection.vue'

const decisions = [
  {
    title: 'Feature-Ordner statt technischer Schichten',
    text: 'Ein Ordner pro Fachbereich, darin api, services, store, ui. Änderungen an Rechnungen bleiben damit in einem Verzeichnis, und die Import-Richtung ist eindeutig: UI kennt den Store, der Store kennt Services, Services kennen die API.',
  },
  {
    title: 'Zwei Tokens, zwei Risiken',
    text: 'Der Access-Token lebt nur im Speicher und verschwindet beim Neuladen. Der Refresh-Token ist httpOnly, secure und sameSite-geschützt. Ein XSS-Angriff kann damit keinen dauerhaften Zugang erbeuten.',
  },
  {
    title: 'Snapshots statt Referenzen auf Belegen',
    text: 'Kunde und Absender werden beim Erstellen eines Belegs kopiert. Das kostet Redundanz und spart ein Problem, das man sonst nie wieder loswird: nachträglich veränderte Rechnungen.',
  },
  {
    title: 'Berechnungen einmal, nicht zweimal',
    text: 'Summen, Steuern und Zahlungsstatus werden serverseitig berechnet; das Frontend rechnet nur für die Live-Vorschau mit derselben reinen Funktion. Zwei Implementierungen wären zwei Wahrheiten.',
  },
  {
    title: 'Regeln als Funktionen',
    text: 'Was „überfällig“ heißt oder wann eine Zahlung gültig ist, steht in domainRules als pure Funktion — testbar ohne Browser, wiederverwendbar in Liste und Detailansicht.',
  },
  {
    title: 'Ein Ort für Formate',
    text: 'Währung, Datum und die PrimeVue-Locale sind zentral konfiguriert (shared/helpers, shared/config/primevue). Komponenten formatieren nicht selbst — sonst zeigt jede Tabelle irgendwann ein anderes Datumsformat.',
  },
]
</script>

<template>
  <CaseStudySection id="entscheidungen" index="06" title="Architektur- und Designentscheidungen">
    <div class="case-study-decisions">
      <article v-for="decision in decisions" :key="decision.title" class="case-study-decision">
        <h3>{{ decision.title }}</h3>
        <p>{{ decision.text }}</p>
      </article>
    </div>
  </CaseStudySection>
</template>
