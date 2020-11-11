import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { fontAwesomeIcon } from "@/plugins/font-awesome";

import './styles/main.scss';

const app = createApp(App)

app.use(store)
   .use(router)
   .mount('#app')

app.component('fa', fontAwesomeIcon);