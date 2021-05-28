import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons
import Tooltip from 'primevue/tooltip' //tooltip4
const app = createApp(App).use(store).use(router)
app.use(PrimeVue)
app.directive('tooltip', Tooltip)
app.mount('#app')
