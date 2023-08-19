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
    },
    mutations: {
        // parameter state sudah ditentukan oleh vuex
        increment(state) {
            state.counter = state.counter + 1 // ini hanya diubah sekali jika ingin mengubah state keseluruhan data
        },
        // nilai yang dimasukan kedalam payload bebas, bisa number, string, object dll
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    }
})

const app = createApp(App);
app.use(store)

app.mount('#app');
