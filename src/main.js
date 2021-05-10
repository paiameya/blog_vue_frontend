import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import Tag from 'primevue/tag'
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons
const app = createApp(App).use(store).use(router).mount('#app')
app.use(PrimeVue)

app.component('Tag', Tag)
