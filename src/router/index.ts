import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import MinecraftView from '../views/Minecraft.vue'
import RedirectView from '../views/Redirect.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/minecraft',
      name: 'minecraft',
      component: MinecraftView
    },

    {
      path: '/discord',
      component: RedirectView,
      beforeEnter() {location.href = 'https://discord.gg/5uXZumm5k3'}
    },
    {
      path: '/timetable',
      component: RedirectView,
      beforeEnter() {location.href = 'https://timetable.swansea.cymru'}
    },
    {
      path: '/uni',
      component: RedirectView,
      beforeEnter() {location.href = 'https://www.swansea.ac.uk'}
    },
    {
      path: '/slc',
      component: RedirectView,
      beforeEnter() {location.href = 'https://logon.slc.co.uk/welcome/secured/login'}
    },
    {
      path: '/canvas',
      component: RedirectView,
      beforeEnter() {location.href = 'https://canvas.swansea.ac.uk'}
    },
    {
      path: '/outlook',
      component: RedirectView,
      beforeEnter() {location.href = 'https://outlook.office365.com'}
    },
  ]
})

export default router
