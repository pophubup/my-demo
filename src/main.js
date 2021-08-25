import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
const app = createApp(App);
app.use(router);
app.use(PrimeVue);


app.mount('#app')
