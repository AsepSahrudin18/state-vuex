import { createApp } from 'vue';

import App from './App.vue';
import { createStore } from 'vuex';

const store = createStore({

    state() {
        // ini melakukan return data object
        return {
            // contohnya saya punya objec counter: 0
            counter: 0
        }
    }
})

const app = createApp(App);
app.use(store)

app.mount('#app');
