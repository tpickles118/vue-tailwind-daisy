// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// import Home from 'about.vue'
import About from './About.vue'
import Portfolio from './Portfolio.vue'
import Resume from './Resume.vue'

const routes = [
  //   { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/portfolio', component: Portfolio, name: 'Portfolio' },
  { path: '/resume', component: Resume, name: 'Resume' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
