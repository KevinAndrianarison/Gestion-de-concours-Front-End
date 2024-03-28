import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Routes from './Routes'
 

const router = createRouter({
    history: createWebHistory(),
    routes: Routes,
  })

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
