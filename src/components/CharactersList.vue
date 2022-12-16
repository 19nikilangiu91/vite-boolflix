<script>
// Importo "SingleCharacter".
import SingleCharacter from './SingleCharacter.vue'

// Importo il file "store.js"
import { store } from '../store.js';

export default {
    name: "CharactersList",
    components: {
        SingleCharacter,
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <!-- Qui vado a riportare il "Template Statico" che poi importerò in "SingleCharacter" -->
    <h1>I'm CharactersList</h1>
</template>

<style lang="scss" scoped>

</style>