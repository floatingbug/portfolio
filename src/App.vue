<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main">Zum Inhalt springen</a>
    <SiteHeader />
    <RouterView />
    <SiteFooter />
  </div>
</template>
