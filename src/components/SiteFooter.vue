<script setup>
import { useRoute, useRouter } from 'vue-router'
import { Code2 } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const backToTop = () => {
  if (route.path !== '/') {
    router.push('/')
    return
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
}
</script>

<template>
  <footer class="site-footer section-wrap">
    <RouterLink class="brand footer-brand" to="/" @click.prevent="backToTop">
      <span class="brand-mark"><Code2 :size="17" /></span>
      <span>tom<span class="brand-muted">.dev</span></span>
    </RouterLink>
    <span>Eigenprojekte · Fullstack Web Development</span>
    <button class="back-top" type="button" @click="backToTop">Zurück nach oben ↑</button>
  </footer>
</template>
