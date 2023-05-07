import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AboutView',
      component: AboutView
    },

    {
      path: '/skills',
      name: 'SkillsView',
      component: SkillsView
    },

    {
      path: '/projects',
      name: 'ProjectsView',
      component: ProjectsView
    },

    {
      path: '/contact',
      name: 'ContactView',
      component: ContactView
    }
  ]
})

export default router
