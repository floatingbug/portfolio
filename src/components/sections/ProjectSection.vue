<script setup>
import {
  ArrowRight, ExternalLink, FileDown, FileText, Github, Users, Workflow,
} from 'lucide-vue-next'
import { screenshots } from '../../data/case-study.js'

const stack = ['Vue 3', 'PrimeVue', 'Pinia', 'Node.js', 'Express 5', 'MongoDB', 'JWT']

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
            <RouterLink class="button button-primary" to="/case-study/einfach-rechnung">
              Case Study lesen <ArrowRight :size="16" />
            </RouterLink>
            <a
              class="button button-secondary"
              href="https://einfach-rechnung-eight.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live-Demo <ExternalLink :size="15" />
            </a>
            <a
              class="button-text"
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
            <img
              class="preview-image"
              :src="screenshots.dashboard.src"
              :alt="screenshots.dashboard.alt"
              :width="screenshots.dashboard.width"
              :height="screenshots.dashboard.height"
              loading="lazy"
              decoding="async"
            />
          </div>
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
