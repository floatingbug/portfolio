<script setup>
import {
  Check, ExternalLink, FileDown, FileText, Github, Layers3, Users, Workflow,
} from 'lucide-vue-next'

const stack = ['Vue 3', 'PrimeVue', 'Node.js', 'Express', 'MongoDB', 'JWT']

const features = [
  {
    icon: Users,
    title: 'Kundenverwaltung',
    text: 'Bestehende Kunden auswählen oder neue Kunden direkt im Arbeitsablauf anlegen.',
  },
  {
    icon: FileText,
    title: 'Angebote & Rechnungen',
    text: 'Dokumente erstellen und bearbeiten – passend zum jeweiligen Kunden.',
  },
  {
    icon: Workflow,
    title: 'Vom Angebot zur Rechnung',
    text: 'Ein Angebot kann in eine Rechnung umgewandelt und anschließend versendet werden.',
  },
  {
    icon: FileDown,
    title: 'PDF-Export & Versand',
    text: 'Dokumente als PDF anzeigen, herunterladen und an Kunden versenden.',
  },
]
</script>

<template>
  <section class="project-section section-wrap" id="project">
    <div class="section-heading">
      <div>
        <div class="eyebrow"><span class="section-index">01</span> AUSGEWÄHLTES PROJEKT</div>
        <h2>Von echten Anforderungen<br /><span class="text-muted">zu einer echten Anwendung.</span></h2>
      </div>
      <span class="project-count">01 / 01</span>
    </div>

    <article class="project-card">
      <div class="project-topline">
        <span class="project-kicker">FULLSTACK WEB APP</span>
        <span class="live-indicator"><span class="status-dot"></span> LIVE</span>
      </div>

      <div class="project-main">
        <div class="project-description">
          <div class="project-logo"><FileText :size="24" /></div>
          <h3>einfachRechnung</h3>
          <p class="project-lead">Angebote und Rechnungen erstellen, verwalten und als PDF versenden.</p>
          <p class="project-body">
            Eine Webanwendung, die den Arbeitsablauf von der Kundenverwaltung über
            das Erstellen von Angeboten und Rechnungen bis zum PDF-Versand abbildet.
            Eigenständig entwickelt – vom Frontend bis zum Deployment.
          </p>
          <div class="project-actions">
            <a
              class="button button-primary"
              href="https://einfach-rechnung-eight.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live-Demo öffnen <ExternalLink :size="15" />
            </a>
            <a
              class="button button-secondary"
              href="https://github.com/floatingbug/einfachRechnung"
              target="_blank"
              rel="noreferrer"
            >
              <Github :size="16" /> Quellcode
            </a>
          </div>
        </div>

        <div class="app-preview">
          <div class="preview-browser">
            <div class="browser-controls"><i></i><i></i><i></i></div>
            <div class="browser-address">einfach-rechnung-eight.vercel.app</div>
            <div class="preview-placeholder">
              <div class="preview-sidebar">
                <span class="preview-brand"><FileText :size="14" /> einfachRechnung</span>
                <span class="preview-nav active"><Layers3 :size="13" /> Übersicht</span>
                <span class="preview-nav"><Users :size="13" /> Kunden</span>
                <span class="preview-nav"><FileText :size="13" /> Angebote</span>
                <span class="preview-nav"><FileDown :size="13" /> Rechnungen</span>
              </div>
              <div class="preview-content">
                <div class="preview-content-head">
                  <span><small>WORKSPACE</small><strong>Dokumente</strong></span>
                  <span class="preview-add">+ Neu erstellen</span>
                </div>
                <div class="preview-stat-row">
                  <div class="preview-stat"><small>ANGEBOTE</small><b>—</b><span>Dokumente</span></div>
                  <div class="preview-stat"><small>RECHNUNGEN</small><b>—</b><span>Dokumente</span></div>
                </div>
                <div class="preview-table">
                  <div class="preview-table-head"><span>Dokument</span><span>Status</span><span>Datum</span></div>
                  <div class="preview-table-row"><span><i class="doc-dot"></i> Angebot</span><span class="preview-pill">Entwurf</span><span>—</span></div>
                  <div class="preview-table-row"><span><i class="doc-dot doc-dot-alt"></i> Rechnung</span><span class="preview-pill">Entwurf</span><span>—</span></div>
                  <div class="preview-table-row"><span><i class="doc-dot"></i> Angebot</span><span class="preview-pill">Entwurf</span><span>—</span></div>
                </div>
              </div>
            </div>
          </div>
          <p class="preview-note"><span class="status-dot"></span> Schematische Vorschau – durch echten App-Screenshot ersetzen</p>
        </div>
      </div>

      <div class="project-feature-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-item">
          <span class="feature-icon"><component :is="feature.icon" :size="18" /></span>
          <h4>{{ feature.title }}</h4>
          <p>{{ feature.text }}</p>
        </div>
      </div>

      <div class="project-tech">
        <span class="project-tech-label">TECH STACK</span>
        <div class="tech-pills">
          <span v-for="item in stack" :key="item" class="tech-pill">{{ item }}</span>
        </div>
      </div>
    </article>
  </section>
</template>
