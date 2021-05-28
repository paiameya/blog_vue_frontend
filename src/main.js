import { createApp } from 'vue'
import App from './App.vue'
//import gAuthPlugin from 'vue3-google-oauth2'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons
import Tooltip from 'primevue/tooltip' //tooltip
const app = createApp(App).use(store).use(router)
//let gauthClientId = process.env.VUE_APP_CLIENT_ID
// app.use(gAuthPlugin, {
//   clientId: gauthClientId,
//   scope: 'email',
//   prompt: 'consent',
//   fetch_basic_profile: false,
// })
app.use(PrimeVue)
app.directive('tooltip', Tooltip)
app.mount('#app')
