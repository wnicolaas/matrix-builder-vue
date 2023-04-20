import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'
import router from './router'

import './assets/main.css'

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            designs: null
        }
    }
});

const app = createApp(App)

app.use(router)
app.use(store);

app.config.unwrapInjectedRef = true
app.mount('#app')
