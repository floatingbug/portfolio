<script setup>
import { ref } from 'vue'
import { ArrowUpRight, Code2, Menu, X } from 'lucide-vue-next'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Zur Startseite" @click="closeMenu">
      <span class="brand-mark"><Code2 :size="19" :stroke-width="2.2" /></span>
      <span>tom<span class="brand-muted">.dev</span></span>
    </a>

    <button
      class="mobile-menu-toggle"
      type="button"
      :aria-expanded="menuOpen"
      aria-label="Navigation öffnen"
      @click="menuOpen = !menuOpen"
    >
      <X v-if="menuOpen" :size="21" />
      <Menu v-else :size="21" />
    </button>

    <nav class="main-nav" :class="{ 'nav-open': menuOpen }" aria-label="Hauptnavigation">
      <a href="#project" @click="closeMenu">Projekt</a>
      <a href="#approach" @click="closeMenu">Arbeitsweise</a>
      <a href="#about" @click="closeMenu">Über mich</a>
      <a class="nav-contact" href="#contact" @click="closeMenu">
        Kontakt <ArrowUpRight :size="15" />
      </a>
    </nav>
  </header>
</template>
