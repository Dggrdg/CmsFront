import { createApp } from 'vue'
import App from './App.vue'
// 引入 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
//引入全域css
import './css/global.css';
import router from "./router";

createApp(App).use(router).mount('#app')
