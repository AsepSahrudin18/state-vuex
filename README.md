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

kalau mau pakai di component functionnya harus sertakan ini juga:

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

# mutations
mutasi adalah metode yang didefinisikan dengan jelas, yang memiliki logika yang jelas untuk update state

**Mutations sangat baik digunakan untuk mengubah data, mengapa?**

***karena dapat meminimalisir duplikasi code***

contohnya seperti ini, sebelum dan sesudah menggunakan mutation silahkan lihat.

### Sebelum menggunakan mutations

case:
ingin mengubah data awal, ketika tidak menggunakan mutation maka harus mengubah setiap state yang tersambung.

App.vue

```
........code lainnya sama

 methods: {
    addOne() {
      return this.$store.state.counter = this.$store.state.counter + 11  // nah keadaan ini yang harus diubah di file ChangeCounter.vue juga, bayangkan ketika punya 10 komponent maka harus mengubah method ini di keseluruhan?
    }
  }
```
components/ChangeCounter.vue
```
<template>
    <button @click="addOne">Add 2</button>
</template>

<script>
export default {
    methods: {
        addOne() {
            return this.$store.state.counter++
        }
    }
}
</script>
```

### Sesudah menggunakan mutations

main.js
```
mutations: {
      // parameter state sudah ditentukan oleh vuex
      increment(state) {
      state.counter = state.counter + 1 // ini hanya diubah sekali jika ingin mengubah state keseluruhan data
    }
}

lalu saya ingin mengubah di component ChangeCounter.vue

export default {
    methods: {
        addOne() {
            return this.$store.commit('increment') // hanya ini yang diubah
        }
    }
}
</script>

dan dibuah sama di App.vue

 methods: {
    addOne() {
      return this.$store.commit('increment');
    }
  }
```