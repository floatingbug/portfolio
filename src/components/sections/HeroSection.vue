<script setup>
import { ArrowDownRight, ArrowUpRight, Code2, Layers3, Server, Check } from 'lucide-vue-next'
</script>

<template>
  <section class="hero section-wrap">
    <div class="hero-copy">
      <div class="eyebrow"><span class="status-dot"></span> FULLSTACK WEB DEVELOPMENT</div>
      <h1>Ich entwickle Webanwendungen.<br /><span class="text-muted">Von der Idee bis zum Produkt.</span></h1>
      <p class="hero-intro">
        Ich setze eigene Ideen in funktionierende Webanwendungen um – vom Frontend
        über die Backend-Logik bis zur Datenhaltung und zum Deployment.
      </p>
      <div class="hero-actions">
        <a class="button button-primary" href="#project">
          Projekt entdecken <ArrowDownRight :size="17" />
        </a>
        <a class="button button-secondary" href="#contact">
          Kontakt aufnehmen <ArrowUpRight :size="16" />
        </a>
      </div>
      <div class="hero-proof">
        <span class="proof-line"></span>
        <span>Eigenständig entwickelt</span>
        <span class="proof-separator">/</span>
        <span>Live veröffentlicht</span>
      </div>
    </div>

    <div class="hero-visual" aria-label="Technische Projektvorschau">
      <div class="visual-grid"></div>
      <div class="visual-orbit orbit-one"></div>
      <div class="visual-orbit orbit-two"></div>
      <div class="visual-center">
        <span class="visual-icon"><Code2 :size="35" /></span>
        <span class="visual-label">BUILD / SHIP / IMPROVE</span>
      </div>
      <div class="floating-card card-top">
        <span class="mini-icon"><Layers3 :size="16" /></span>
        <span><strong>Frontend</strong><small>Vue · PrimeVue</small></span>
        <Check class="mini-check" :size="15" />
      </div>
      <div class="floating-card card-bottom">
        <span class="mini-icon"><Server :size="16" /></span>
        <span><strong>Backend</strong><small>Node · Express</small></span>
        <Check class="mini-check" :size="15" />
      </div>
      <span class="visual-coordinate coordinate-a">50° / 07°</span>
      <span class="visual-coordinate coordinate-b">FULLSTACK_001</span>
    </div>
  </section>
</template>
