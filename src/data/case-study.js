const modules = import.meta.glob('../../projects/einfach_rechnung/screenshots/*.png', {
  eager: true,
  import: 'default',
})

const source = (name) => modules[`../../projects/einfach_rechnung/screenshots/${name}.png`]

const screenshot = (name, { alt, caption, width, height }) => ({
  src: source(name),
  alt,
  caption,
  width,
  height,
})

export const screenshots = {
  login: screenshot('01-login', {
    alt: 'Anmeldebildschirm von einfachRechnung',
    caption: 'Anmeldung mit Name oder E-Mail. Das Layout ist für alle Auth-Seiten identisch aufgebaut.',
    width: 1440,
    height: 900,
  }),
  dashboard: screenshot('02-dashboard', {
    alt: 'Dashboard mit Kennzahlen, Umsatzverlauf und Zahlungsstatus',
    caption: 'Kennzahlen, Umsatzverlauf und Zahlungsstatus auf einen Blick — alles serverseitig berechnet.',
    width: 1440,
    height: 1160,
  }),
  kundenliste: screenshot('03-kundenliste', {
    alt: 'Kundenliste mit Filterleiste und Pagination',
    caption: 'Sortierbare Tabelle mit Filterleiste, Pagination und Direktsprung in den Datensatz.',
    width: 1440,
    height: 900,
  }),
  kundendetails: screenshot('04-kundendetails', {
    alt: 'Kundendetails mit Stammdaten, Angeboten und Rechnungen',
    caption: 'Ein Datensatz, alle Beziehungen: Stammdaten, Angebote und Rechnungen eines Kunden.',
    width: 1440,
    height: 1370,
  }),
  kundeAnlegen: screenshot('05-kunde-anlegen', {
    alt: 'Formular zum Anlegen eines Kunden',
    caption: 'Das Formular passt sich dem Kundentyp an: Firma oder Privatperson.',
    width: 1440,
    height: 1180,
  }),
  rechnungsliste: screenshot('06-rechnungsliste', {
    alt: 'Rechnungsliste mit Status und Zahlungsstatus',
    caption: 'Status und Zahlungsstatus sind getrennte Informationen und werden getrennt dargestellt.',
    width: 1760,
    height: 900,
  }),
  rechnungErstellen: screenshot('07-rechnung-erstellen', {
    alt: 'Formular zum Erstellen einer Rechnung mit Positionen und Summen',
    caption: 'Positionen, Rabatte und Summen werden beim Tippen live berechnet.',
    width: 1440,
    height: 1140,
  }),
  rechnungsdetails: screenshot('08-rechnung-details', {
    alt: 'Rechnungsdetails mit Aktionen für Zahlung, PDF und Versand',
    caption: 'Belegansicht mit allen Aktionen: Zahlung erfassen, PDF, XRechnung, Versand, Storno.',
    width: 1440,
    height: 1150,
  }),
  angebotsliste: screenshot('09-angebotsliste', {
    alt: 'Angebotsliste mit Gültigkeitsdatum und Status',
    caption: 'Angebote mit Gültigkeitsdatum und Status — vom Entwurf bis zum angenommenen Angebot.',
    width: 1440,
    height: 900,
  }),
  angebotsdetails: screenshot('10-angebot-details', {
    alt: 'Angebotsdetails mit Preisübersicht und Steueraufteilung',
    caption: 'Preisübersicht mit Steueraufteilung — Grundlage für das PDF, das der Kunde erhält.',
    width: 1440,
    height: 1460,
  }),
  firmendaten: screenshot('11-firmendaten', {
    alt: 'Formular für Firmendaten und Bankverbindung',
    caption: 'Absenderdaten und Bankverbindung — die Quelle für jeden Beleg-Snapshot.',
    width: 1440,
    height: 1290,
  }),
  rechnungseinstellungen: screenshot('12-rechnungseinstellungen', {
    alt: 'Einstellungen für Nummernformat, Zahlungsziel und Währung',
    caption: 'Nummernformat mit Live-Vorschau, Zahlungsziel, Währung und Sprache.',
    width: 1440,
    height: 1080,
  }),
  registrierung: screenshot('13-registrierung', {
    alt: 'Registrierungsformular mit E-Mail-Bestätigung',
    caption: 'Registrierung mit vorgeschaltetem E-Mail-Verfahren.',
    width: 1440,
    height: 900,
  }),
  mobile: screenshot('14-responsive-mobile', {
    alt: 'Mobile Ansicht des Dashboards',
    caption: 'Unter 1024 px wechselt die Navigation in ein Overlay, Karten stapeln sich vertikal.',
    width: 390,
    height: 1500,
  }),
}

export const caseStudyMeta = [
  {
    label: 'Rolle',
    value: 'Fullstack-Entwicklung: Datenmodell, API, UI, Auth',
  },
  {
    label: 'Umfang',
    value: 'Prototyp / Portfolio-Projekt, produktionsnah aufgebaut',
  },
  {
    label: 'Stack',
    value: 'Vue 3 (Composition API), Vite, PrimeVue, Pinia, Chart.js · Node.js, Express 5, MongoDB, pdfkit',
  },
  {
    label: 'Besonderheiten',
    value: 'JWT-Auth mit httpOnly-Refresh-Cookie, PDF- und XRechnung-Export, Dashboard-Aggregationen, Feature-basierte Architektur',
  },
]

export const caseStudyToc = [
  { id: 'ausgangslage', index: '01', title: 'Ausgangslage' },
  { id: 'ziel', index: '02', title: 'Ziel und Zielgruppe' },
  { id: 'beitrag', index: '03', title: 'Mein Beitrag' },
  { id: 'technik', index: '04', title: 'Technischer Überblick' },
  { id: 'anwendung', index: '05', title: 'Die Anwendung im Detail' },
  { id: 'entscheidungen', index: '06', title: 'Architektur und Design' },
  { id: 'qualitaet', index: '07', title: 'Qualitätssicherung' },
  { id: 'learnings', index: '08', title: 'Herausforderungen' },
  { id: 'naechste-schritte', index: '09', title: 'Nächste Schritte' },
  { id: 'fazit', index: '10', title: 'Fazit' },
]
