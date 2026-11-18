<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowUpRight, Code2, Menu, X } from 'lucide-vue-next'

const route = useRoute()
const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}

const goHome = () => {
  closeMenu()

  if (route.path === '/') {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }
}

const onKeydown = (event) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

watch(() => route.fullPath, closeMenu)

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" aria-label="Zur Startseite" @click="goHome">
      <span class="brand-mark"><Code2 :size="19" :stroke-width="2.2" /></span>
      <span>tom<span class="brand-muted">.dev</span></span>
    </RouterLink>

    <button
      class="mobile-menu-toggle"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="primary-navigation"
      :aria-label="menuOpen ? 'Navigation schließen' : 'Navigation öffnen'"
      @click="menuOpen = !menuOpen"
    >
      <X v-if="menuOpen" :size="21" />
      <Menu v-else :size="21" />
    </button>

    <nav
      id="primary-navigation"
      class="main-nav"
      :class="{ 'nav-open': menuOpen }"
      aria-label="Hauptnavigation"
    >
      <RouterLink :to="{ path: '/', hash: '#project' }" @click="closeMenu">Projekt</RouterLink>
      <RouterLink :to="{ path: '/', hash: '#approach' }" @click="closeMenu">
        Arbeitsweise
      </RouterLink>
      <RouterLink :to="{ path: '/', hash: '#about' }" @click="closeMenu">Über mich</RouterLink>
      <RouterLink
        class="nav-contact"
        :to="{ path: '/', hash: '#contact' }"
        @click="closeMenu"
      >
        Kontakt <ArrowUpRight :size="15" />
      </RouterLink>
    </nav>
  </header>
</template>
