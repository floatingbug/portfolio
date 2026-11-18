import { createRouter, createWebHistory } from 'vue-router'

const PortfolioView = () => import('../views/PortfolioView.vue')
const CaseStudyView = () => import('../views/CaseStudyView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: PortfolioView,
      meta: {
        title: 'Tom — Fullstack Web Development',
        description:
          'Portfolio von Tom – Fullstack-Webentwicklung mit Vue, Node.js, Express und MongoDB.',
      },
    },
    {
      path: '/case-study/einfach-rechnung',
      name: 'case-study-einfach-rechnung',
      component: CaseStudyView,
      meta: {
        title: 'einfachRechnung — Case Study | Tom',
        description:
          'Case Study zu einfachRechnung: Angebote und Rechnungen für kleine Betriebe – von Datenmodell und API bis zur Oberfläche.',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior = reduceMotion ? 'auto' : 'smooth'

    if (to.hash) {
      return { el: to.hash, top: 90, behavior }
    }

    return { top: 0 }
  },
})

const setMeta = (key, attribute, value) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', value)
}

router.afterEach((to) => {
  const { title, description } = to.meta

  if (title) {
    document.title = title
  }

  if (description) {
    setMeta('description', 'name', description)
    setMeta('og:title', 'property', title)
    setMeta('og:description', 'property', description)
    setMeta('og:url', 'property', window.location.href)
  }
})

export default router
