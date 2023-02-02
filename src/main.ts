import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import { registerApp } from './global/index';
// import './service/axios';
import wyRequest from './service/index';

const app = createApp(App);
registerApp(app);
app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount('#app');
wyRequest.request({ url: '/get', method: 'GET' });
