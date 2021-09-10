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
import Dialog from 'primevue/dialog';
import Card from 'primevue/card';
import ScrollPanel from 'primevue/scrollpanel';
import ProgressSpinner from 'primevue/progressspinner';
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';
import Divider from 'primevue/divider';
import Carousel from 'primevue/carousel';
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import ColumnGroup from 'primevue/columngroup';     
// import axios from 'axios'
// import VueAxios from 'vue-axios'
const app = createApp(App);
app.config.devtools = true
app.use(PrimeVue);
app.component('Button', Button);
app.component('FileUpload', FileUpload);
app.component('DataView', DataView);
app.component('Rating', Rating);
app.component('Dropdown', Dropdown);
app.component('Toast', Toast);
app.component('Dialog', Dialog);
app.component('Card', Card);
app.component('ScrollPanel', ScrollPanel);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Divider', Divider)
app.component('Carousel', Carousel)
app.component('InputText', InputText)
app.component('Textarea', Textarea)
app.component('TreeTable', TreeTable)
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('ColumnGroup', ColumnGroup)
// app.use(VueAxios, axios);
// app.provide('axios', app.config.globalProperties.axios) ;
console.log(process.env)
app.use(ToastService);
app.use(router);
app.use(store);
app.mount('#app')