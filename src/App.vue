<template>
  <base-container title="Vuex">
    <h1>{{ counter }}</h1>
    <!-- <Test /> -->
    <ChangeCounter />
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter
  },
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  methods: {
    addOne() {
      // return this.$store.commit('increase', { value: 10 }); // paramenter payload ini nilai yang diinputkan bebas bisa number, object, atau lainnya
      return this.$store.commit({
        type: 'increase',
        value: 10
      });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>