# state-vuex

### sebelum menggunakan vuex
ada dua cara:
- mengirimkan data menggunakan props (mengalirkan data dari parent ke child)
- menggunakan emit dengan mengubah status data dari anak ke component indux

state: -> menyimpan data secara global

#### State
adalah library untuk mengelola global state.

**state** dapat diasumsikan sebagai data yang akan digunakan

State:
- local state: hanya mempengaruhi component itu sendiri
- global state: bisa berlaku secara global bahkan bisa mengalirkan data keseluruh aplikasi


# memulai vuex
### installasi
1. npm install --save vuex

### memulai dengan cara sederhana

main.js

```
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
```

App.vue

```
<template>
  <base-container title="Vuex">
    <h1>{{ counter }}</h1>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  methods: {
    addOne() {
      return this.$store.state.counter++
    }
  }
};
</script>
```

kalau mau pakaid di component functionnya harus sertakan ini juga:

```
<script>
export default {
   computed: {
    counter() {
      return this.$store.state.counter
    }
  },
}
</script>
```