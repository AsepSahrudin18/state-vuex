<template>
    <button @click="addOne">Add 2</button>
</template>

<script>
export default {
    methods: {
        addOne() {
            return this.$store.commit('increment')
        }
    }
}
</script>