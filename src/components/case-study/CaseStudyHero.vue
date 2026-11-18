<script setup>
import { ArrowDown, ExternalLink, Github } from 'lucide-vue-next'
import { caseStudyMeta, screenshots } from '../../data/case-study.js'
</script>

<template>
  <section class="case-study-hero section-wrap">
    <div class="eyebrow"><span class="status-dot"></span> CASE STUDY / FULLSTACK WEB APP</div>

    <h1>
      einfachRechnung<br />
      <span class="text-muted">Angebote und Rechnungen für kleine Betriebe.</span>
    </h1>

    <p class="case-study-hero-lead">
      Eine Web-Anwendung, die den kompletten Beleg-Workflow eines kleinen Betriebs abbildet:
      Kunden anlegen, Angebote schreiben, Rechnungen erstellen, Zahlungen erfassen und den
      Überblick behalten.
    </p>

    <div class="case-study-hero-actions">
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
      <a class="case-study-hero-jump" href="#ausgangslage">
        Zur Case Study <ArrowDown :size="14" />
      </a>
    </div>

    <dl class="case-study-meta">
      <div v-for="item in caseStudyMeta" :key="item.label" class="case-study-meta-item">
        <dt>{{ item.label }}</dt>
        <dd>{{ item.value }}</dd>
      </div>
    </dl>

    <div class="case-study-shot">
      <div class="browser-controls"><i></i><i></i><i></i></div>
      <div class="browser-address">einfach-rechnung-eight.vercel.app</div>
      <img
        :src="screenshots.dashboard.src"
        :alt="screenshots.dashboard.alt"
        :width="screenshots.dashboard.width"
        :height="screenshots.dashboard.height"
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />
    </div>
  </section>
</template>
