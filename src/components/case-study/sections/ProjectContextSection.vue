<script setup>
import CaseStudySection from '../CaseStudySection.vue'
import CaseStudyCallout from '../CaseStudyCallout.vue'
</script>

<template>
  <CaseStudySection id="ausgangslage" index="01" title="Ausgangslage">
    <p>
      Kleine Handwerksbetriebe, Freelancer und Dienstleister schreiben ihre Angebote und
      Rechnungen häufig in Word oder Excel. Das funktioniert, solange nichts schiefgeht — und
      geht schief, sobald Nummernkreise, Zahlungsstatus und Steuersätze selbst gepflegt werden
      müssen:
    </p>
    <ul>
      <li>Rechnungsnummern werden doppelt vergeben oder springen.</li>
      <li>Ob eine Rechnung offen, teilbezahlt oder überfällig ist, steht nirgends verlässlich.</li>
      <li>Ein Angebot wird angenommen — und dann von Hand in eine Rechnung übertragen.</li>
      <li>Ändert der Betrieb später seine Anschrift, sehen alte Belege rückwirkend falsch aus.</li>
    </ul>
    <p>Genau diese vier Punkte sind der Ausgangspunkt für einfachRechnung.</p>
  </CaseStudySection>

  <CaseStudySection id="ziel" index="02" title="Ziel und Zielgruppe">
    <p>
      <strong>Ziel:</strong> Ein Werkzeug, in dem ein Ein-Personen-Betrieb oder ein kleines Team
      Belege erstellt, ohne Buchhaltungswissen mitbringen zu müssen — und in dem der
      Zahlungsstatus nicht gepflegt, sondern berechnet wird.
    </p>
    <p>
      <strong>Zielgruppe:</strong> Handwerksbetriebe, Beratungen und Freelancer im DACH-Raum. Ein
      Benutzerkonto entspricht einem Betrieb (Mandant); Kunden und Belege gehören immer genau
      einem Konto.
    </p>

    <CaseStudyCallout label="Nicht im Scope">
      <p>
        Doppelte Buchführung, DATEV-Export, mehrere Benutzer pro Konto. Für Mahnungen existieren
        die Regeln (<code>canSendReminder</code>), eine Automatik dahinter nicht.
      </p>
    </CaseStudyCallout>
  </CaseStudySection>
</template>
