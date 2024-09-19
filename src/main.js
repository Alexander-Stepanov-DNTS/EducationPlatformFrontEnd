import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router.js";
import store from "@/store/index.js";
import vuetify from './plugins/vuetify';

const app = createApp(App)

app
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#app');

store.dispatch('checkAuth');