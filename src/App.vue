<template>
  <base-container title="Vuex">
    <h1>{{ counter }}</h1>
    <!-- <Test /> -->
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