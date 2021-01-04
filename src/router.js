import { createRouter, createWebHistory } from 'vue-router'

import Form01 from './components/Form01.vue'
import FormZip from './components/FormZip.vue'
import FormEnd from './components/FormEnd.vue'

const routes = [
  { path: '/form_01', component: Form01 },
  { path: '/form_zip', component: FormZip },
  { path: '/form_end', component: FormEnd }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
