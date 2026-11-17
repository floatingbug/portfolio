<script setup>
import { Code2, Database, Server } from 'lucide-vue-next'

const techGroups = [
  { title: 'Frontend', items: ['Vue 3', 'PrimeVue', 'Vue Router', 'Pinia', 'Vite'] },
  { title: 'Backend', items: ['Node.js', 'Express 5', 'JWT'] },
  { title: 'Daten & Tools', items: ['MongoDB', 'Git', 'VPS'] },
]
</script>

<template>
  <section class="approach-section section-wrap" id="approach">
    <div class="section-heading">
      <div>
        <div class="eyebrow"><span class="section-index">02</span> TECHNISCHE UMSETZUNG</div>
        <h2>Das Zusammenspiel<br /><span class="text-muted">macht den Unterschied.</span></h2>
      </div>
      <p class="heading-aside">
        Eine Anwendung besteht aus mehr als einer Oberfläche. Ich verbinde die Teile
        zu einem funktionierenden Ablauf.
      </p>
    </div>

    <div class="architecture-card">
      <div class="architecture-node">
        <span class="architecture-icon"><Code2 :size="20" /></span>
        <span class="architecture-type">CLIENT</span>
        <strong>Frontend</strong>
        <small>Vue 3 · PrimeVue</small>
      </div>
      <div class="architecture-connector"><span>HTTP / API</span><i></i></div>
      <div class="architecture-node">
        <span class="architecture-icon"><Server :size="20" /></span>
        <span class="architecture-type">SERVER</span>
        <strong>Backend</strong>
        <small>Node.js · Express</small>
      </div>
      <div class="architecture-connector"><span>DATA ACCESS</span><i></i></div>
      <div class="architecture-node">
        <span class="architecture-icon"><Database :size="20" /></span>
        <span class="architecture-type">STORAGE</span>
        <strong>Datenbank</strong>
        <small>MongoDB</small>
      </div>
    </div>

    <div class="tech-groups">
      <div v-for="group in techGroups" :key="group.title" class="tech-group">
        <h3>{{ group.title }}</h3>
        <div class="tech-group-items">
          <span v-for="item in group.items" :key="item">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
