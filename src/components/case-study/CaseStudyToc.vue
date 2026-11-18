<script setup>
import { caseStudyToc } from '../../data/case-study.js'
</script>

<template>
  <nav class="case-study-toc" aria-label="Inhalt der Case Study">
    <span class="case-study-toc-title">Inhalt</span>
    <ol>
      <li v-for="entry in caseStudyToc" :key="entry.id">
        <a :href="`#${entry.id}`">
          <span>{{ entry.index }}</span>
          {{ entry.title }}
        </a>
      </li>
    </ol>
  </nav>
</template>
