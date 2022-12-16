<script>

// Importo il file "store.js"
import { store } from '../store.js';

export default {
    name: "SingleCharacter",
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <!-- Qui importerò in "SingleCharacter" -->
    <h1>I'm SingleCharacter</h1>
</template>

<style lang="scss" scoped>

</style>