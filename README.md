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

### analogi
katakanlah saya ingin memiliki counter dimulai dari 0

**file: App.vue**
```
<template>
 <!-- <h1>{{ $store.state.counter }}</h1> --> <!-- bisa langsung seperti ini jika tidak dimasukan ke computed properti -->
<h1>{{ counter }} </h1>
  <button @click="addCounter">Add</button>
</template>

<script>
export default {
    computed: {
      counter() {
        return this.$store.state.counter
      }
  },
    methods: {
      addCounter(){
        this.$store.state.counter++
    }
  }
}
</script>
```
2. import di main.js
**file: main.js**

```
import App from './App.vue' // ini untuk merender element html
import {createStore} from 'vuex'; //  ini vuex yang akan kita gunakan

// lalu konfigurasi seperti ini
const store = createStore({
  // state ini digunakan untuk menyimpan keseluruhan data yang bisa diakses diseluruh komponen aplikasi
  state() {
    return {
      counter: 0
    }
  }
})

// untuk menghubungkannya gunakan use pada createApp
const app = createApp(App);
app.use(store); // state kita
app.mount('#app'); // ini mengambil id dari html kita yang akan dirender
```
3. 
4. 
