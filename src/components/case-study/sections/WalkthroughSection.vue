<script setup>
import CaseStudySection from '../CaseStudySection.vue'
import CaseStudyFigure from '../CaseStudyFigure.vue'
import { screenshots } from '../../../data/case-study.js'
</script>

<template>
  <CaseStudySection id="anwendung" index="05" title="Die Anwendung im Detail">
    <p class="case-study-note">
      Die Screenshots zeigen einen Demo-Datensatz (fiktiver Handwerksbetrieb).
    </p>

    <article class="case-study-step">
      <h3>Anmeldung</h3>
      <CaseStudyFigure :image="screenshots.login" />
      <p>
        Der Einstieg ist bewusst schlicht: ein Formular, klare Fehlermeldungen, keine Ablenkung.
        Technisch ist die Seite der Ort, an dem die Sicherheitsarchitektur sichtbar wird — nach
        erfolgreichem Login hält der Client nur den kurzlebigen Access-Token im Speicher, der
        langlebige Refresh-Token bleibt als <code>httpOnly</code>-Cookie außerhalb der Reichweite
        von JavaScript.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Dashboard</h3>
      <CaseStudyFigure :image="screenshots.dashboard" />
      <p>
        Das Dashboard beantwortet die Frage, die Excel nicht beantwortet:
        <em>Wie viel Geld steht gerade draußen?</em> Die Kennzahlen werden nicht im Browser
        zusammengerechnet, sondern per MongoDB-Aggregation ermittelt: Umsatz des laufenden Monats
        im Vergleich zum Vormonat, offene Forderungen, überfällige Beträge und offene Angebote.
        Der Balken-Chart stellt fakturierten und tatsächlich bezahlten Umsatz gegenüber — die
        Lücke dazwischen ist der eigentliche Informationsgehalt.
      </p>
      <p>
        Der Zahlungsstatus ordnet jede Rechnung genau einer Kategorie zu (bezahlt, teilweise
        bezahlt, unbezahlt, überfällig). Diese Zuordnung passiert in der Pipeline über ein
        <code>$switch</code> und nicht im Frontend, damit Kennzahlen und Liste garantiert dieselbe
        Wahrheit zeigen.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Kundenliste</h3>
      <CaseStudyFigure :image="screenshots.kundenliste" />
      <p>
        Die Kundenliste ist der Ort, an dem Datenmenge entsteht. Deshalb setzt sie auf eine
        sortierbare Tabelle mit serverseitiger Pagination statt auf Karten — und auf Filter, die
        man ein- und ausblenden kann, damit die Tabelle im Alltag nicht von Formularfeldern
        verdrängt wird.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Kundendetails</h3>
      <CaseStudyFigure :image="screenshots.kundendetails" />
      <p>
        Die Detailseite ist der Beweis, dass die Daten normalisiert sind: Der Kunde existiert
        einmal, Angebote und Rechnungen verweisen darauf. Status erscheinen als Badge mit derselben
        Farb- und Label-Logik wie überall in der Anwendung, Beträge und Datumsangaben in deutschem
        Format. Wer einen Kunden ändert, sieht die Auswirkung sofort an den verknüpften Belegen.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Kunde anlegen</h3>
      <CaseStudyFigure :image="screenshots.kundeAnlegen" />
      <p>
        Der Kundentyp entscheidet über die Felder: Eine Firma hat Ansprechpartner und USt-IdNr.,
        eine Privatperson Vor- und Nachnamen. Bank- und Steuerdaten sind optional, weil sie nur für
        Belege gebraucht werden. Validierungsfehler kommen strukturiert vom Backend zurück und
        werden am jeweiligen Feld angezeigt — nicht als eine Sammelmeldung am Formularende.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Rechnungsliste</h3>
      <CaseStudyFigure :image="screenshots.rechnungsliste" />
      <p>
        Eine Rechnung hat zwei Dimensionen: den Belegstatus (Entwurf, versendet, storniert) und den
        Zahlungsstatus (unbezahlt, Teilzahlung, bezahlt). Beides in einem Feld abzubilden, wäre
        bequem — und würde bei Teilzahlungen sofort falsch. Die Liste trennt die Dimensionen
        deshalb sichtbar und zeigt zusätzlich den noch offenen Betrag.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Rechnung erstellen</h3>
      <CaseStudyFigure :image="screenshots.rechnungErstellen" />
      <p>
        Hier steckt die meiste Fachlogik: Positionen mit Menge, Einheit und Einzelpreis, Rabatte
        pro Position (prozentual oder als Festbetrag), Steuersatz pro Position, anschließend
        Zwischensumme, Netto nach Rabatt, Steueranteil und Gesamtbetrag. Die Berechnung liegt als
        reine Funktion vor und ist mit Unit-Tests abgesichert — inklusive Rundung, weil ein Cent
        Differenz am Ende des Monats auffällt.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Rechnungsdetails</h3>
      <CaseStudyFigure :image="screenshots.rechnungsdetails" />
      <p>
        Die Detailseite ist die Schaltzentrale eines Belegs. Kunde und Absender werden dabei als
        <strong>Snapshot</strong> gespeichert: Ändert der Betrieb später seine Adresse, bleiben
        bereits versendete Rechnungen unverändert — so, wie es rechtlich auch sein muss.
      </p>
      <p>
        Neben dem PDF-Download gibt es einen <strong>XRechnung-Export</strong> als CII-XML für
        öffentliche Auftraggeber sowie das Erfassen von Teilzahlungen. Eine Zahlung darf den offenen
        Betrag nicht übersteigen; diese Regel steht als validierbare Funktion im Frontend und als
        Prüfung im Backend.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Angebotsliste</h3>
      <CaseStudyFigure :image="screenshots.angebotsliste" />
      <p>
        Angebote sind keine Rechnungen mit anderem Titel: Sie haben ein Gültigkeitsdatum und einen
        eigenen Lebenszyklus (Entwurf → versendet → angenommen/abgelehnt/abgelaufen). Ein Cron-Job
        prüft die Gültigkeit und markiert abgelaufene Angebote automatisch, damit die Liste nicht
        lügt.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Angebotsdetails</h3>
      <CaseStudyFigure :image="screenshots.angebotsdetails" />
      <p>
        Die Angebotsansicht zeigt, was auch im PDF landet: Einleitungstext, Positionen,
        Schlussbemerkung und eine Preisübersicht mit Steueraufteilung. Optional lässt sich der
        Steuersatz pro Position einblenden — für Betriebe, die mit 7 % und 19 % gleichzeitig
        arbeiten, ist das der entscheidende Unterschied.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Firmendaten</h3>
      <CaseStudyFigure :image="screenshots.firmendaten" />
      <p>
        Die Firmendaten sind Stammdaten mit Folgen: Sie landen als Snapshot auf jedem neuen Beleg,
        inklusive Bankverbindung, damit die Zahlungsinformationen auf der Rechnung stimmen. Deshalb
        ist dieses Formular bewusst nüchtern und vollständig.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Rechnungseinstellungen</h3>
      <CaseStudyFigure :image="screenshots.rechnungseinstellungen" />
      <p>
        Der Nummernkreis ist die häufigste Fehlerquelle in Eigenlösungen. Hier ist er konfigurierbar
        (Präfix, Format, laufende Nummer) und zeigt eine Vorschau des nächsten Werts — man sieht vor
        dem Speichern, was als Nächstes vergeben wird.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Registrierung</h3>
      <CaseStudyFigure :image="screenshots.registrierung" />
      <p>
        Der Weg in die App führt über eine E-Mail-Bestätigung. Der Bestätigungstoken wird nicht im
        Klartext gespeichert, sondern als SHA-256-Hash mit 30 Minuten Gültigkeit. Vor der
        Bestätigung lehnt der Login den Zugang mit einem klaren Hinweis ab, statt eine halbfertige
        Session zu erzeugen.
      </p>
    </article>

    <article class="case-study-step">
      <h3>Responsive Ansicht</h3>
      <CaseStudyFigure :image="screenshots.mobile" narrow />
      <p>
        Die Anwendung ist nicht „mobile-first“, aber mobil benutzbar: Ab 1024 px klappt die
        Seitenleiste in ein Overlay, Tabellen werden scrollbar, Karten stapeln sich. Im Handwerk
        ist das kein Nice-to-have — Belege entstehen oft unterwegs.
      </p>
    </article>
  </CaseStudySection>
</template>
