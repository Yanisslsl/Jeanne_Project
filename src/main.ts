import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import MainPage from './views/MainPage.vue'
import './assets/css/tailwind.css'
import VueAgile from 'vue-agile'
import VueCarousel from 'vue-carousel'
import './assets/fonts/Quicksand/Quicksand.css'
import './assets/fonts/Quicksand/Quicksand.css'
import 'flowbite';



const app = createApp(MainPage)


app.use(router).use(VueAgile).use(VueCarousel).mount('#app')
