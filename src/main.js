import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './config/i18n'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App).use(router).use(i18n).mount('#app')
