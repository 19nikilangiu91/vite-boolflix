<script>
// Importo "SingleCharacter".
import SingleCharacter from './SingleCharacter.vue'

// Importo il file "store.js"
import { store } from '../store.js';

export default {
    name: "CharacterList",
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
    <div class="container">
        <div v-for="movie in store.characterList">
            <SingleCharacter :info="movie" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'src/style/partials/variables' as*;

.container {
    display: flex;
    flex-wrap: wrap;
}
</style>