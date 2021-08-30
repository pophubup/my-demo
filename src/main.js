import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";
import store from "./store/Index";
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';
import DataView from "primevue/dataview";
import Rating from "primevue/rating";
import Dropdown from "primevue/dropdown";
<<<<<<< HEAD
import Dialog from 'primevue/dialog';
import Card from 'primevue/card';
import ScrollPanel from 'primevue/scrollpanel';
import ProgressSpinner from 'primevue/progressspinner';
<<<<<<< HEAD
=======
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';

>>>>>>> cy/feature/Contact

=======
import Divider from 'primevue/divider';
import Carousel from 'primevue/carousel';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
>>>>>>> ec39280a6337f7a6a6701afde6e80e3a52bf7415
const app = createApp(App);
app.use(PrimeVue);
app.component('Button', Button);
app.component('FileUpload', FileUpload);
app.component('DataView', DataView);
app.component('Rating', Rating);
app.component('Dropdown', Dropdown);
app.component('Toast', Toast);
<<<<<<< HEAD
app.component('Dialog', Dialog);
app.component('Card', Card);
app.component('ScrollPanel', ScrollPanel);
app.component('ProgressSpinner', ProgressSpinner);
<<<<<<< HEAD
=======
app.component('InputText', InputText);
app.component('Textarea',Textarea);
>>>>>>> cy/feature/Contact
=======
app.component('Divider', Divider)
app.component('Carousel', Carousel)
app.component('InputText', InputText)
app.component('Textarea',Textarea)
>>>>>>> ec39280a6337f7a6a6701afde6e80e3a52bf7415
app.use(ToastService);
app.use(router);
app.use(store);
app.mount('#app')