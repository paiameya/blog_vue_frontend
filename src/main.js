import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons
import Tooltip from 'primevue/tooltip' //tooltip
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThLarge,faTh,faPaperPlane,faExternalLinkAlt,faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faThLarge,faTh,faPaperPlane,faExternalLinkAlt,faCheckCircle);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router)


app.use(PrimeVue)
app.directive('tooltip', Tooltip)
app.mount('#app')
